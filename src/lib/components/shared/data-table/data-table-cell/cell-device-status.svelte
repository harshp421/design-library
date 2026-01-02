<script lang="ts" generics="T">
    import IconOffline from "$lib/icons/icon-offline.svelte";
import IconOnline from "$lib/icons/icon-online.svelte";
import { getCellValue, type Column } from "../data-table.svelte";

    interface CellType<T> {
        row: T;
        column: Column<T>;
    }
    let { column, row }: CellType<T> = $props();
    
</script>



    {#if getCellValue(row,column) !== null && getCellValue(row,column) !== undefined}
        {#if getCellValue(row, column) === 'online'}
           <p class="flex justify-between items-center [&>svg]:text-icon-success-default">Online  <IconOnline /> </p>
        {:else}
            <p class="flex justify-between items-center [&>svg]:text-icon-destructive-default ">Offline <IconOffline/> </p>
        {/if}
    {:else}
        N/A
    {/if}
