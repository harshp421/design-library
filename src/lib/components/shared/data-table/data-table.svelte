<script lang="ts" module generics>
    import CellHeader from "./data-table-cell/cell-header.svelte";
    import CellDefault from "./data-table-cell/cell-default.svelte";
    import type {
        RenderComponentConfig,
        RenderSnippetConfig,
    } from "./render-helper";

    export interface Column<T> {
        id: Extract<keyof T, string>;
        header: string;
        subheader?: string;
        accessor: keyof T | ((row: T) => any);
        cell?:
            | RenderComponentConfig<any>
            | RenderSnippetConfig<any>
            | ((
                  row: T,
                  column: Column<T>,
              ) =>
                  | RenderComponentConfig<any>
                  | RenderSnippetConfig<any>
                  | string
                  | null)
            | string
            | null;
        sortable?: boolean;
        filterable?: boolean;
        filterType?: "text" | "number" | "date" | "select";
        filterOptions?: string[];
        width?: string;
        pinned?: "left" | "right" | null;
        visible?: boolean;
    }
    export interface DataTableProps<T> {
        data: T[];
        columns: Column<T>[];
        pageSize?: number;
        enableRowSelection?: boolean;
        onRowSelect?: (selectedRows: T[]) => void;
        getRowId?: (row: T) => string | number;
        className?: string;
    }
    export function getCellValue(row: any, column: Column<any>) {
        if (typeof column.accessor === "function") {
            return column.accessor(row);
        } else {
            return row[column.accessor];
        }
    }
</script>

<script lang="ts">
    let {
        data = $bindable([]),
        columns: initialColumns = $bindable([]),
        pageSize = 10,
        enableRowSelection,
        onRowSelect,
        getRowId,
        className,
    }: DataTableProps<any> = $props();

    let currentPage = $state(1);
    let sortConfig = $state<{
        columnId: string;
        direction: "asc" | "desc";
    } | null>(null);
    let filters = $state<Record<string, any>>({});
    let searchTerm = $state("");
    let selectedRows = $state<Set<string | number>>(new Set());
    let columns = $state(initialColumns);
    let showColumnsSetting = $state(false);

    let organizedColumn = $derived.by(() => {
        const visible = columns.filter((col) => col.visible !== false);
        const pinnedLeft = visible.filter((col) => col.pinned === "left");
        const normal = visible.filter((col) => !col.pinned);
        const pinnedRight = visible.filter((col) => col.pinned === "right");
        return [...pinnedLeft, ...normal, ...pinnedRight];
    });
    function resetTable() {
        searchTerm = "";
        filters = {};
        sortConfig = null;
        currentPage = 1;
        selectedRows = new Set();
    }
</script>

<div class={`w-full rounded-xl overflow-hidden ${className}`}>
    <div class="overflow-x-auto">
        <table class="w-full">
            <thead class="bg-neutral-100 text-neutral-950">
                <tr class="">
                    {#each columns as column}
                        {#if column.visible !== false}
                            <CellHeader {column} />
                        {/if}
                    {/each}
                </tr>
            </thead>
            <tbody>
                {#each data as row}
                    <tr
                        class="border border-neutral-100  text-p-xsmall leading-[var(--text-p-xsmall--line-height)] overflow-hidden overflow-ellipsis font-normal  whitespace-nowrap text-neutral-900 transition"
                    >
                        {#each organizedColumn as column}
                            {#if column.visible !== false}
                                <CellDefault {row} {column} />
                            {/if}
                        {/each}
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>
