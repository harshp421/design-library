<script lang="ts" generics="T">
    import IconPhone from "$lib/icons/icon-phone.svelte";
    import { getCellValue, type Column } from "../data-table.svelte";

    interface CellType<T> {
        row: T;
        column: Column<T>;
       
    }
    let { column, row }: CellType<T> = $props();
</script>

{#if getCellValue(row, column) !== null && getCellValue(row, column) !== undefined}
    <span class="flex gap-10 items-center"
        ><IconPhone  />
        {#if getCellValue(row, column).split(",").length > 1}

            {getCellValue(row, column).split(",").length} Recievers
        {:else}
            {getCellValue(row, column)}
        {/if}
    </span>
{:else}
    N/A
{/if}
