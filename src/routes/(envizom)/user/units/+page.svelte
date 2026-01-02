<script lang="ts">
    import { unitConversion } from "$lib/utils/units";
    import LS from "$lib/wrappers/localStorage";

    const { aqi_and_units, devicesData } = LS;
</script>

<div
    class="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
>
    <table class="min-w-full border-collapse">
        <thead>
            <tr
                class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white dark:from-slate-700 dark:to-slate-800 dark:text-slate-100"
            >
                <th
                    class="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide"
                >
                </th>
                <th
                    class="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide"
                >
                    Parameter
                </th>
                <th
                    class="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide"
                >
                    Unit
                </th>
                <th
                    class="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide"
                >
                    Limits
                </th>
            </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
            {#each Object.values($aqi_and_units.units) as unit}
                {#if !unit.auto_generated && unit.is_visible && Object.values($devicesData).some( (x: any) => (x.keys as string[]).includes(unit.parameter_id), )}
                    <tr
                        class="odd:bg-white even:bg-gray-50 hover:bg-gray-100 dark:odd:bg-slate-900 dark:even:bg-slate-800 dark:hover:bg-slate-700"
                    >
                        <td
                            class="px-6 py-4 text-sm text-gray-800 dark:text-slate-100 w-10"
                        >
                            <a href="/user/units/{unit.parameter_id}">
                                <button>Edit</button>
                            </a>
                        </td>
                        <td
                            class="px-6 py-4 text-sm text-gray-700 dark:text-slate-200 w-10"
                        >
                            {unit.parameter_label}
                        </td>
                        <td
                            class="px-6 py-4 text-sm text-gray-700 dark:text-slate-200 w-10"
                        >
                            {unit.unit_label}
                        </td>
                        <td
                            class="px-6 py-4 text-sm text-gray-700 dark:text-slate-200"
                        >
                            {#if unit.zones.next.some((x, _, l) => x.color !== l[0].color)}
                                <div class="h-5 w-full flex">
                                    {#each unit.zones.next as zone}
                                        <div
                                            class="w-full"
                                            style="background-color: {zone.color}; color: {zone.inverted_color}"
                                        ></div>
                                    {/each}
                                </div>
                                <div class="h-5 w-full flex">
                                    {#each unit.zones.next as zone, i}
                                        <div class="w-full flex">
                                            {#if i === 0}
                                                <div class="text-left w-full">
                                                    {unitConversion(
                                                        unit.conversion_strategy,
                                                        unit.zones.lower,
                                                    )}
                                                </div>
                                            {/if}
                                            <div class="text-right w-full">
                                                {unitConversion(
                                                    unit.conversion_strategy,
                                                    zone.upper,
                                                )}
                                            </div>
                                        </div>
                                    {/each}
                                </div>
                            {/if}
                        </td>
                    </tr>
                {/if}
            {/each}
        </tbody>
    </table>
</div>
