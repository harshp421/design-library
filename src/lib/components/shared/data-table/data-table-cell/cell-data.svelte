<script lang="ts" generics="T">
    import ColorIndicator from "$lib/components/ui/color-indicator/color-indicator.svelte";
    import { getCellValue, type Column } from "../data-table.svelte";

    interface CellType<T> {
        row: T;
        column: Column<T>;
        showColorIndicator?: boolean;
    }
    let { column, row, showColorIndicator }: CellType<T> = $props();
</script>

{#if getCellValue(row, column) !== null && getCellValue(row, column) !== undefined}
    {#if showColorIndicator}
     <span class="flex gap-12 items-center">
       <ColorIndicator className="bg-destructive-600" />  {getCellValue(row, column)}
     </span>
    {:else}
     {getCellValue(row, column)}
     {/if}
{:else}
    N/A
{/if}
