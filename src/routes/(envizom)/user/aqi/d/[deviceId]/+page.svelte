<script lang="ts">
    import { page } from "$app/state";
    import { fetchAppStartupData } from "$lib/api/core";
    import { unitConversion } from "$lib/utils/units";
    import { ApiEndpoints } from "$lib/wrappers/apiClient";
    import { getValue } from "$lib/wrappers/asyncStore";
    import LS from "$lib/wrappers/localStorage";
    import { onMount } from "svelte";

    const { aqi_and_units, devices, clusters, jwt } = LS;
    const [env, fetchEnv] = getValue(ApiEndpoints.GET_ValidEnv, {});
    onMount(fetchEnv);
    let currentAqi = $derived(
        ($aqi_and_units.device_aqi_ids[page.params.deviceId!] ??
            $aqi_and_units.aqi_id) in $aqi_and_units.aqis
            ? ($aqi_and_units.device_aqi_ids[page.params.deviceId!] ??
                  $aqi_and_units.aqi_id)
            : $aqi_and_units.aqi_id,
    );
    let selectedAqi = $derived(currentAqi);
    const deviceId = page.params.deviceId!;
    const device = $derived($devices.find((x) => x.deviceId === deviceId));
    const cluster = $derived($clusters.find((x) => x.clusterId === deviceId));
    const aqi = $derived(
        ($env.type === "success"
            ? $env.data.aqis.find((x) => x.aqi_id === selectedAqi)
            : undefined) ?? {
            aqi_id: selectedAqi,
            label: $aqi_and_units.aqis[selectedAqi].aqi_label,
            org_id: $aqi_and_units.aqis[selectedAqi].createdByOrgId,
            details: {
                measure_strategy:
                    $aqi_and_units.aqis[selectedAqi].measure_strategy,
            },
        },
    );
    let status: "reseting" | "submiting" | "ideal" = $state("ideal");
    async function onSubmit() {
        if (status !== "ideal") return;
        status = "submiting";
        try {
            await ApiEndpoints.PUT_EnvUserAqi.trigger({
                params: { user_id: $jwt.userId, topic: "default" },
                body: {
                    aqi_id: selectedAqi,
                    deviceId: deviceId,
                },
            });
            await fetchAppStartupData();
        } finally {
            status = "ideal";
        }
    }
    async function onReset() {
        if (status !== "ideal") return;
        status = "reseting";
        try {
            await ApiEndpoints.PUT_EnvUserAqi.trigger({
                params: { user_id: $jwt.userId, topic: "default" },
                body: {
                    aqi_id: null,
                    deviceId: deviceId,
                },
            });
            await fetchAppStartupData();
        } finally {
            status = "ideal";
        }
    }
</script>

{#if device || cluster}
    <div
        class="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
    >
        <div class="flex">
            <div class="p-4">
                <span class="font-bold italic">
                    {device?.label || cluster?.label}
                </span>
                <br />
                Currently Using: {$aqi_and_units.aqis[currentAqi].aqi_label}
                <br />
            </div>
            <div class="h-13 flex mt-3 w-full">
                {#if $env.type === "success"}
                    <select
                        bind:value={selectedAqi}
                        class="bg-transparent m-1 t"
                    >
                        {#each $env.data.aqis as a}
                            <option value={a.aqi_id}>{a.label}</option>
                        {/each}
                    </select>
                    <button
                        onclick={onSubmit}
                        class="mx-2 w-min h-10 {status !== 'ideal'
                            ? 'bg-gray-400'
                            : ''}"
                    >
                        {#if status === "submiting"}
                            Submiting
                        {:else}
                            Submit
                        {/if}
                    </button>
                    <button
                        onclick={onReset}
                        class="mx-2 w-min h-10 {status !== 'ideal'
                            ? 'bg-gray-400'
                            : ''}"
                    >
                        {#if status === "reseting"}
                            Reseting
                        {:else}
                            Reset
                        {/if}
                    </button>
                {:else}
                    <select value={selectedAqi} class="bg-transparent m-1 t">
                        <option value={selectedAqi}>{aqi.label}</option>
                    </select>
                {/if}
            </div>
        </div>
        <table class="min-w-full border-collapse">
            <thead>
                <tr
                    class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white dark:from-slate-700 dark:to-slate-800 dark:text-slate-100"
                >
                    <th
                        class="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide"
                    >
                        Index
                    </th>
                    {#if aqi.details.measure_strategy.type === "standard"}
                        {#each aqi.details.measure_strategy.sub_indexes as subIndex}
                            <th
                                class="px-6 py-3 text-left text-xs font-semibold tracking-wide"
                            >
                                {$aqi_and_units.units[subIndex.parameter_id]
                                    .parameter_label} <br />({$aqi_and_units
                                    .units[subIndex.parameter_id].unit_label})
                            </th>
                        {/each}
                    {/if}
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                {#each aqi.details.measure_strategy.zones.next as zone, i}
                    <tr
                        style="background-color: {zone.color}; color: {zone.inverted_color}"
                    >
                        <td
                            class="px-6 py-3 text-left text-xs font-semibold tracking-wide"
                        >
                            {aqi.details.measure_strategy.zones.next[i - 1]
                                ?.upper ??
                                aqi.details.measure_strategy.zones.lower}
                            - {zone.upper} ({zone.label})
                        </td>
                        {#if aqi.details.measure_strategy.type === "standard"}
                            {#each aqi.details.measure_strategy.sub_indexes as subIndex}
                                <th
                                    class="px-6 py-3 text-left text-xs font-semibold tracking-wide"
                                >
                                    {unitConversion(
                                        $aqi_and_units.units[
                                            subIndex.parameter_id
                                        ].conversion_strategy,
                                        subIndex.zones.next[i - 1]?.upper ??
                                            subIndex.zones.lower,
                                    )} - {unitConversion(
                                        $aqi_and_units.units[
                                            subIndex.parameter_id
                                        ].conversion_strategy,
                                        subIndex.zones.next[i].upper,
                                    )}
                                </th>
                            {/each}
                        {/if}
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
{:else}
    No Such Device or Cluster found
{/if}
