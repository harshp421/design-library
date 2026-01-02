<script lang="ts" generics="T">
import Priority from "$lib/components/ui/priority/priority.svelte";
import { getCellValue, type Column } from "../data-table.svelte";

    interface CellType<T> {
        row: T;
        column: Column<T>;
    }
    let { column, row }: CellType<T> = $props();
    
</script>

    {#if getCellValue(row,column) !== null && getCellValue(row,column) !== undefined}
        {#if getCellValue(row, column) === 'high'}
           <p class="flex justify-between items-center [&>svg]:text-icon-action-on-active">High  <Priority priority="high" /> </p>
        {:else if getCellValue(row, column) === 'medium'}
            <p class="flex justify-between items-center [&>svg]:text-icon-action-on-active ">Medium <Priority priority="medium" /> </p>
        {:else if getCellValue(row, column) === 'low'}
            <p class="flex justify-between items-center [&>svg]:text-icon-action-on-active ">Low <Priority priority="low" /> </p>
        {/if}
    {:else}
        N/A
    {/if}
