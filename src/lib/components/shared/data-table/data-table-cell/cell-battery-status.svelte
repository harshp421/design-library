<script lang="ts" generics="T">
    import { IconBattery100, IconBattery75 } from "$lib/icons";
    import IconBatteryCharging from "$lib/icons/icon-battery-charging.svelte";
    import IconBattery25 from "$lib/icons/icon-battery25.svelte";
    import IconBattery50 from "$lib/icons/icon-battery50.svelte";
    import { getCellValue, type Column } from "../data-table.svelte";

    interface CellType<T> {
        row: T;
        column: Column<T>;
    }

    let { column, row }: CellType<T> = $props();

    const cellValue = $derived(
        getCellValue(row, column) as number | string | null | undefined,
    );
    
    const numericValue = $derived.by(() => {
        if (cellValue === null || cellValue === undefined) return null;
        const num = typeof cellValue === 'number' ? cellValue : Number(cellValue);
        return !isNaN(num) ? num : null;
    });
    
    const isNumeric = $derived(numericValue !== null);

    const statusText = $derived(() =>
        typeof cellValue === "string" ? cellValue.trim().toLowerCase() : "",
    );
    
    function returnBatteryStatusIndicator(status: number) {
        switch (true) {
            case status < 25:
                return IconBattery25;
            case status < 50 && status >= 25:
                return IconBattery50;
            case status < 75 && status >= 50:
                return IconBattery75;
            case status >= 75:
                return IconBattery100;
        }
    }
        
    function returnBatteryStatusColor(status: number) {
        switch (true) {
            case status < 25:
                return "[&>svg]:text-surface-batter-level-25";
            case status < 50 && status >= 25:
                return "[&>svg]:text-surface-batter-level-50";
            case status < 75 && status >= 50:
                return "[&>svg]:text-surface-batter-level-75";
            case status >= 75:
                return "[&>svg]:text-surface-batter-level-100";
        }
    }

    
</script>

{#if cellValue !== null && cellValue !== undefined}
    {#if isNumeric}
        <span class="flex items-center justify-between gap-2">
            <span>{numericValue}%</span>
             <span class={returnBatteryStatusColor(numericValue!)} ><svelte:component this={returnBatteryStatusIndicator(numericValue!)} /></span>
        </span>
    {:else}
        {#if statusText() === "charging"}
            <span class="flex items-center justify-between gap-2 capitalize">
                <span>{cellValue}</span>
                 <span class="[&>svg]:text-icon-neutral-primary"><IconBatteryCharging /></span>
            </span>
        {:else}
            <span class="capitalize">{cellValue}</span>
        {/if}
    {/if}
{:else}
    <span class="text-muted-foreground">N/A</span>
{/if}
