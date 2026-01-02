<script lang="ts" generics="T">
    import { dateUtils } from "$lib/utils/dateUtils";
    import { getCellValue, type Column } from "../data-table.svelte";

    interface CellType<T> {
        row: T;
        column: Column<T>;
        type: "ONLY-DATE" | "DATE-TIME" | "TIME" | "DURATION-PAST" | 'DURATION';
    }
    let { column, row, type }: CellType<T> = $props();

    
</script>


<p>{dateUtils.format(getCellValue(row, column), type)}</p>