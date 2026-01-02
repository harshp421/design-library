<script lang="ts" generics="T">
    import { getCellValue, type Column } from "../data-table.svelte";

    interface CellType<T> {
        row: T;
        column: Column<T>;
    }
    let { column, row }: CellType<T> = $props();
    let deviceType = getCellValue(row, column)?.toLowerCase();
</script>

{#if deviceType !== null && deviceType !== undefined}
    {#if deviceType === "dustroid" || deviceType === "polludrone" || deviceType === "odusense"}
        <p class="flex items-center justify-between">
            {deviceType}
            <img src={`/device-images/polludrone.png`} alt={deviceType} class="size-5" />
        </p>
    {:else}
        <p class="flex items-center">
            {deviceType}
            <img src={`/device-images/${deviceType}.png`} alt={deviceType} class="size-5"/>
        </p>
    {/if}
{:else}
    N/A
{/if}
