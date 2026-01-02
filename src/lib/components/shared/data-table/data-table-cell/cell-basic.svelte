<script lang="ts" generics="T">
    import IconLocation from "$lib/icons/icon-location.svelte";
    import { getCellValue, type Column } from "../data-table.svelte";

    interface CellType<T> {
        row: T;
        column: Column<T>;
        type: "text" | "id" | "serial-number" | "location";
    }
    let { column, row, type }: CellType<T> = $props();
</script>

{#if type == "text" || type == "id" || type == "serial-number"}
    <p>{getCellValue(row, column)}</p>
{:else if type == "location"}
    <div
        class="  cursor-pointer rounded-md flex items-center justify-center gap-[10px] p-[10px]"
    >
        <div class="relative">
            <IconLocation/>
        </div>
        <div
            class="flex flex-1 flex-col justify-center  "
        >
            <p>{getCellValue(row, column)}</p>
        </div>
    </div>
{:else}
    <p>N/A</p>
{/if}
