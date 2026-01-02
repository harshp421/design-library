<script lang="ts">
    import { unitConversion } from "$lib/utils/units";
    import LS from "$lib/wrappers/localStorage";
    import { derived } from "svelte/store";

    const { aqi_and_units, devices, clusters: cluster } = LS;
    const aqis = derived(
        [aqi_and_units, devices, cluster],
        ([aqi_and_units, devices, cluster]) => {
            const { [aqi_and_units.aqi_id]: defAqi, ...aqis } =
                Object.fromEntries(
                    Object.keys(aqi_and_units.aqis).map((aqi_id) => [
                        aqi_id,
                        {
                            aqi: aqi_and_units.aqis[aqi_id],
                            devices:
                                aqi_and_units.aqi_id === aqi_id
                                    ? devices.filter(
                                          (x) =>
                                              !aqi_and_units.device_aqi_ids[
                                                  x.deviceId
                                              ],
                                      )
                                    : devices.filter(
                                          (x) =>
                                              aqi_and_units.device_aqi_ids[
                                                  x.deviceId
                                              ],
                                      ),
                            cluster:
                                aqi_and_units.aqi_id === aqi_id
                                    ? cluster.filter(
                                          (x) =>
                                              !aqi_and_units.device_aqi_ids[
                                                  x.clusterId
                                              ],
                                      )
                                    : cluster.filter(
                                          (x) =>
                                              aqi_and_units.device_aqi_ids[
                                                  x.clusterId
                                              ],
                                      ),
                        },
                    ]),
                );
            return [
                defAqi,
                ...Object.values(aqis).sort((x, y) =>
                    x.aqi.aqi_id.localeCompare(y.aqi.aqi_id),
                ),
            ];
        },
    );
</script>

<div class="mb-3">
    <a class="font-bold italic underline" href="/user/aqi/d">
        DEFAULT: {$aqis[0].aqi.aqi_label}
    </a>
</div>
{#each $aqis as aqi, i}
    <div
        class="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm mb-3"
    >
        <div class="p-4">
            {aqi.aqi.aqi_label}
            <br />
            Will be applied to folloing:
            <br />
            {#if aqi.devices.length}
                <div>
                    Devices: {#each aqi.devices as d}
                        <a
                            href="/user/aqi/d/{d.deviceId}"
                            class="underline mx-2"
                        >
                            {d.label}
                        </a>
                    {/each}
                </div>
            {/if}
            {#if aqi.cluster.length}
                <div>
                    Cluster: {#each aqi.cluster as c}
                        <a
                            href="/user/aqi/d/{c.clusterId}"
                            class="underline mx-2"
                        >
                            {c.label}
                        </a>
                    {/each}
                </div>
            {/if}
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
                    {#if aqi.aqi.measure_strategy.type === "standard"}
                        {#each aqi.aqi.measure_strategy.sub_indexes as subIndex}
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
                {#each aqi.aqi.measure_strategy.zones.next as zone, i}
                    <tr
                        style="background-color: {zone.color}; color: {zone.inverted_color}"
                    >
                        <td
                            class="px-6 py-3 text-left text-xs font-semibold tracking-wide"
                        >
                            {aqi.aqi.measure_strategy.zones.next[i - 1]
                                ?.upper ?? aqi.aqi.measure_strategy.zones.lower}
                            - {zone.upper} ({zone.label})
                        </td>
                        {#if aqi.aqi.measure_strategy.type === "standard"}
                            {#each aqi.aqi.measure_strategy.sub_indexes as subIndex}
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
{/each}
