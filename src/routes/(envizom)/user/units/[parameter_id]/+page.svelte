<script lang="ts">
    import { page } from "$app/state";
    import { fetchAppStartupData } from "$lib/api/core";
    import { unitConversion, unitInversion } from "$lib/utils/units";
    import { ApiEndpoints } from "$lib/wrappers/apiClient";
    import { getValue } from "$lib/wrappers/asyncStore";
    import LS from "$lib/wrappers/localStorage";
    import { onMount } from "svelte";
    import Modal from "./Modal.svelte";
    const { aqi_and_units, jwt, devicesData } = LS;
    const periods = [
        { period_id: "1hr", label: "1 Hr" },
        { period_id: "8hr", label: "8 Hr" },
        { period_id: "24hr", label: "24 Hr" },
        { period_id: "8hrMov", label: "8 Hr Mov" },
        { period_id: "24hrMov", label: "24 Hr Mov" },
    ];
    const [env, fetchEnv] = getValue(ApiEndpoints.GET_ValidEnv, {});
    onMount(fetchEnv);
    let unit = $derived(
        $aqi_and_units.units[page.params.parameter_id!] ?? null,
    );
    let otherUnits = $derived(
        $env.type === "success"
            ? $env.data.parameters.find(
                  (x) => x.parameter_id === page.params.parameter_id,
              )
            : undefined,
    );
    let selectedUnit: string = $derived(unit?.unit_id ?? "");

    let colors: string[] = $state([]);
    let invertedColors: string[] = $state([]);
    let limits: string[] & { unit_id?: string } = $state([]);
    let thresholds: {
        label: string;
        limit: string;
        period_id: string;
        color: string;
        input?: HTMLInputElement;
    }[] & { unit_id?: string } = $state([]);
    let inputInverted: HTMLInputElement[] = $state([]);
    let inputColors: HTMLInputElement[] = $state([]);
    $effect(() => {
        inputInverted = [];
        inputColors = [];
        if (!unit) {
            colors = [];
            invertedColors = [];
            limits = [];
            thresholds = [];
            return;
        }
        colors = unit.zones.next.map((x) => x.color) ?? [];
        invertedColors = [...unit.zones.next.map((x) => x.inverted_color)];
        const conv = unitConversion.bind(null, unit.conversion_strategy);
        limits = Object.assign(
            [unit.zones.lower, ...unit.zones.next.map((x) => x.upper)].map(
                conv,
            ),
            {
                unit_id: unit.unit_id,
            },
        );
        thresholds = Object.assign(
            unit.thresholds
                .map((x) => ({ ...x, limit: conv(x.limit) }))
                .sort(
                    (x, y) =>
                        x.period_id.localeCompare(y.period_id) ||
                        (x.limit > y.limit ? 1 : -1),
                ),
            {
                unit_id: unit.unit_id,
            },
        );
    });
    let prevSelectedUnit: string = "";
    $effect(() => {
        if (!otherUnits) return;
        const conv = unitConversion.bind(
            null,
            otherUnits.details.units.find((x) => x.unit_id === selectedUnit)
                ?.conversion_strategy,
        );
        const inve = unitInversion.bind(
            null,
            otherUnits.details.units.find((x) => x.unit_id === prevSelectedUnit)
                ?.conversion_strategy,
        );
        if (limits.unit_id !== selectedUnit) {
            limits = Object.assign(limits.map(inve).map(conv), {
                unit_id: selectedUnit,
            });
        }
        if (thresholds.unit_id !== selectedUnit) {
            thresholds = Object.assign(
                thresholds.map((x) => ({
                    ...x,
                    limit: conv(inve(x.limit)),
                })),
                { unit_id: selectedUnit },
            );
        }
    });
    $effect(() => {
        prevSelectedUnit = selectedUnit;
    });
    const limitErrors = $derived(
        limits.map((x, i, limits) => {
            if (!x) return "Required!";
            const limitI = +x;
            if (isNaN(limitI)) return "Must be a Number";
            if (i === 0) return null;
            const limitI_1 = +limits[i - 1];
            if (isNaN(limitI_1)) return null;
            if (limitI_1 > limitI) return "Limits must be in ASC order";
            return null;
        }),
    );
    const thresholdErrors = $derived(
        thresholds.map((x) => {
            if (!x.period_id) return "Select one of the period!";
            if (!x.label) return "Label Required!";
            if (!x.limit) return "Limit Required!";
            if (isNaN(+x.limit)) return "Limit must be a Number";
        }),
    );
    let submiting = $state(false);
    async function onSubmit() {
        if (submiting) return;
        submiting = true;
        try {
            if (
                !otherUnits ||
                limitErrors.some((x) => x) ||
                thresholdErrors.some((x) => x) ||
                !selectedUnit ||
                limits.unit_id !== selectedUnit ||
                thresholds.unit_id !== selectedUnit
            ) {
                return;
            }
            const unit = otherUnits.details.units.find(
                (x) => x.unit_id === selectedUnit,
            );
            if (!unit) return;
            const inve = unitInversion.bind(null, unit.conversion_strategy);
            const custom_zones = {
                lower: inve(limits[0]),
                next: colors.map((x, i) => ({
                    color: x,
                    inverted_color: invertedColors[i],
                    upper: inve(limits[i + 1]),
                })),
            };
            const original_zones = otherUnits.details.zones;
            const isSame =
                original_zones.lower === custom_zones.lower &&
                original_zones.next.length === custom_zones.next.length &&
                original_zones.next.map(
                    (x, i) =>
                        x.color === custom_zones.next[i].color &&
                        x.inverted_color ===
                            custom_zones.next[i].inverted_color &&
                        x.upper === custom_zones.next[i].upper,
                );
            await ApiEndpoints.PUT_EnvUserUnits.trigger({
                params: { user_id: $jwt.userId, topic: "default" },
                body: {
                    parameter_id: page.params.parameter_id!,
                    unit: {
                        custom_zones: isSame ? null : custom_zones,
                        parameter_id: page.params.parameter_id!,
                        unit_id: unit.unit_id,
                        thresholds: thresholds.map((x) => ({
                            limit: inve(x.limit),
                            color: x.color,
                            label: x.label,
                            period_id: x.period_id,
                        })),
                    },
                },
            });
            await fetchAppStartupData();
        } finally {
            submiting = false;
        }
    }
    let showModal = $state(false);
</script>

<Modal bind:showModal>
    <div class="bg-black text-white p-10 border-gray-500 border-1">
        Choose a Color from Existing Schemas
        {#each Object.values($aqi_and_units.units) as unit}
            {#if !unit.auto_generated && unit.is_visible && Object.values($devicesData).some( (x: any) => (x.keys as string[]).includes(unit.parameter_id), ) && unit.zones.next.some((x, _, l) => x.color !== l[0].color)}
                <button
                    onclick={() => {
                        const lastZone =
                            unit.zones.next[unit.zones.next.length - 1];
                        colors = colors.map(
                            (_, i) => (unit.zones.next[i] ?? lastZone).color,
                        );
                        invertedColors = invertedColors.map(
                            (_, i) =>
                                (unit.zones.next[i] ?? lastZone).inverted_color,
                        );
                        showModal = false;
                    }}
                    class="bg-transparent p-1 m-2 text-left"
                >
                    {unit.parameter_label}
                    <div class="flex w-full h-5">
                        {#each unit.zones.next as zone}
                            <div
                                class="w-full"
                                style="background-color: {zone.color}; color: {zone.inverted_color}"
                            ></div>
                        {/each}
                    </div>
                </button>
            {/if}
        {/each}
        <div class="flex">
            <button
                class="m-2 text-black w-full"
                onclick={() => {
                    colors = ["#3db79c", "#3db79c"];
                    invertedColors = ["#ffffff", "#ffffff"];
                    limits = ["0", "1", "2"];
                    showModal = false;
                }}
            >
                Remove
            </button>
            {#if otherUnits && otherUnits.details.zones.next.some((x, _, l) => x.color !== l[0].color)}
                <button
                    class="m-2 text-black w-full"
                    onclick={() => {
                        colors = [
                            ...otherUnits.details.zones.next.map(
                                (x) => x.color,
                            ),
                        ];
                        invertedColors = [
                            ...otherUnits.details.zones.next.map(
                                (x) => x.inverted_color,
                            ),
                        ];
                        const conv = unitConversion.bind(
                            null,
                            unit.conversion_strategy,
                        );
                        limits = [
                            otherUnits.details.zones.lower,
                            ...otherUnits.details.zones.next.map(
                                (x) => x.upper,
                            ),
                        ].map(conv);
                        showModal = false;
                    }}
                >
                    Reset
                </button>
            {/if}
        </div>
    </div>
</Modal>
{#if unit}
    <div>
        <div>
            <a href="/user/units" class="underline">Back</a>
            Parameter: {unit.parameter_label}
        </div>
        <br />
        <span class="text-sm text-gray-400">{@html unit.description}</span>
    </div>
    <div class="flex">
        <div class="w-100">
            Unit:
            {#if $env.type === "success" && otherUnits}
                <select bind:value={selectedUnit} class="bg-transparent m-1 t">
                    {#each otherUnits.details.units as u}
                        <option value={u.unit_id}>{u.label}</option>
                    {/each}
                </select>
            {:else}
                <select value={selectedUnit} class="bg-transparent m-1 t">
                    <option value={unit.unit_id}>{unit.unit_label}</option>
                </select>
            {/if}
        </div>
        <div class="w-full"></div>
        <button
            class="{limitErrors.some((x) => x) || thresholdErrors.some((x) => x)
                ? 'bg-gray-500'
                : ''} w-50 h-10 text-black"
            onclick={onSubmit}
        >
            {submiting ? "Submiting..." : "Submit"}
        </button>
    </div>
    <div class="flex">
        <div class="flex flex-col m-3">
            <span>Limits:</span>
            <div class="flex">
                <button
                    class="m-2 text-black w-full"
                    onclick={() => {
                        colors.push(colors[colors.length - 1]);
                        invertedColors.push(
                            invertedColors[invertedColors.length - 1],
                        );
                        limits.push("");
                    }}
                >
                    Add
                </button>
                <button
                    class="m-2 text-black w-full"
                    onclick={() => (showModal = true)}
                >
                    Colors
                </button>
            </div>
            <div class="ml-25 h-12 w-50 -mb-12">
                <input
                    name="limit-lower"
                    type="number"
                    class="bg-transparent text-sm"
                    bind:value={limits[0]}
                />
                <div class="text-red-500 text-xs h-3">
                    {limitErrors[0]}
                </div>
            </div>
            {#each colors as _, i}
                <div class="h-30 flex">
                    <div class="flex flex-col mx-2">
                        <div class="relative">
                            <input
                                bind:this={inputInverted[i]}
                                class="invisible absolute"
                                type="color"
                                bind:value={invertedColors[i]}
                            />
                            <button
                                class="text-xl p-2 m-1 underline"
                                style="
                        color: {invertedColors[i]};
                        background-color: {colors[i]};"
                                onclick={() => inputInverted[i].click()}
                            >
                                A
                            </button>
                        </div>
                        <button
                            class="p-1 m-1 mt-1 {i > 1
                                ? 'bg-red-700'
                                : 'bg-gray-400 cursor-not-allowed'}"
                            onclick={() => {
                                if (i > 1) {
                                    colors.splice(i, 1);
                                    invertedColors.splice(i, 1);
                                    limits.splice(i + 1, 1);
                                }
                            }}
                        >
                            D
                        </button>
                    </div>
                    <div
                        class="h-full w-5 border-1 border-s-stone-50 p-0 m-0 mx-2 cursor-pointer relative"
                        style="background-color: {colors[i]};"
                    >
                        <button
                            class="bg-transparent p-0 m-0 h-full w-full"
                            onclick={() => inputColors[i].click()}
                            aria-label="zone-{i}"
                        >
                        </button>
                        <input
                            bind:this={inputColors[i]}
                            class="invisible absolute"
                            type="color"
                            bind:value={colors[i]}
                        />
                    </div>
                    <div class="flex flex-col justify-end mx-2">
                        <div
                            class="h-12 w-50 {i + 1 === limits.length - 1
                                ? '-mb-3'
                                : '-mb-6'}"
                        >
                            <input
                                name="limit-upper-{i + 1}"
                                type="number"
                                class="bg-transparent text-sm"
                                bind:value={limits[i + 1]}
                            />
                            <div class="text-red-500 text-xs h-3">
                                {limitErrors[i + 1]}
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
        <div class="w-full flex flex-col m-3">
            <span>Thresholds:</span>
            <button
                class="m-2 text-black"
                onclick={() => {
                    thresholds.push({
                        color: "#ff0000",
                        label: "",
                        limit: "",
                        period_id: "",
                    });
                }}
            >
                Add +
            </button>
            <div class="mx-3">
                {#each thresholds as th, i}
                    <div>
                        <div class="flex w-full">
                            <button
                                class="p-1 m-1 mt-1 bg-red-700 w-20"
                                onclick={() => {
                                    thresholds.splice(i, 1);
                                }}
                            >
                                D
                            </button>
                            <select
                                class="bg-transparent m-1 t"
                                bind:value={th.period_id}
                            >
                                <option value=""> (Select) </option>
                                {#each periods as pr}
                                    <option value={pr.period_id}
                                        >{pr.label}</option
                                    >
                                {/each}
                            </select>
                            <div class="relative m-1">
                                <button
                                    aria-label="th-{i}"
                                    onclick={() => th.input?.click()}
                                    class="bg-black h-full w-10 border-1 border-white m-0 p-0"
                                >
                                    <div
                                        class="w-full border-b-2 border-dashed"
                                        style="border-color: {th.color};"
                                    ></div>
                                </button>
                                <input
                                    class="invisible absolute"
                                    bind:value={th.color}
                                    bind:this={th.input}
                                    type="color"
                                />
                            </div>
                            <input
                                bind:value={th.label}
                                type="text"
                                placeholder="Label"
                                class="bg-transparent m-1"
                            />
                            <input
                                bind:value={th.limit}
                                type="number"
                                placeholder="Limit"
                                class="bg-transparent m-1 w-40"
                            />
                        </div>
                        <div class="text-red-500 text-xs h-3">
                            {thresholdErrors[i]}
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
{:else if !unit}
    No Such Parameter Found
{:else if $env.type === "idle" || $env.type === "loading"}
    Loading other units...
{:else if $env.type === "error"}
    Error Fetching Other Units
{:else if !otherUnits}
    No Such Unit Found
{:else}
    Unknown Error Occured
{/if}
