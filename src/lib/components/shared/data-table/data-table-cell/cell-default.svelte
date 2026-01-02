<script lang="ts" generics="T">
    import type { Column } from "../data-table.svelte";
    import { getCellValue } from "../data-table.svelte";
    import { RenderComponentConfig, RenderSnippetConfig } from "../render-helper";

    let { row, column }: { row: T; column: Column<T> } = $props();

    // Evaluate the cell content
    let cellContent = $derived(column.cell);
    if (typeof column.cell === "function") {
        cellContent = column.cell(row, column);
    }
</script>

<td class="p-10 h-32 border border-neutral-100 hover:bg-neutral-100 active:border-primary-700 active:text-neutral-950 active:bg-neutral-100 disabled:border-neutral-100 disabled:text-alphaviceversa-black-400">
    {#if cellContent instanceof RenderComponentConfig}
        <!-- Render Svelte component -->
        <svelte:component this={cellContent.component} {...cellContent.props} row={row} column={column} />
    {:else if cellContent instanceof RenderSnippetConfig}
        <!-- Render raw HTML snippet -->
        {@html cellContent.snippet(cellContent.params)}
    {:else if typeof cellContent === "string"}
        <!-- Render static string -->
        {@html cellContent}
    {:else}
        <!-- Render default cell value -->
        {getCellValue(row, column)}
    {/if}
</td>