<script lang="ts" generics="T">
    import ColorIndicator from "$lib/components/ui/color-indicator/color-indicator.svelte";
    import { getCellValue, type Column } from "../data-table.svelte";

    interface CellType<T> {
        row: T;
        column: Column<T>;
    }

    let { column, row }: CellType<T> = $props();

    type ComplainStatus = "active" | "ongoing" | "resolved";

    const cellValue = $derived(
        getCellValue(row, column) as ComplainStatus | null | undefined,
    );
</script>

{#if cellValue !== null && cellValue !== undefined}
    {#if cellValue === "active"}
        <p class="flex justify-between items-center gap-2">
            <ColorIndicator color="bg-surface-complain-active" />
            <span>Active</span>
        </p>
    {:else if cellValue === "ongoing"}
        <p class="flex justify-between items-center gap-2">
            <ColorIndicator color="bg-surface-complain-on-going" />
            <span>Ongoing</span>
        </p>
    {:else if cellValue === "resolved"}
        <p class="flex justify-between items-center gap-2">
            <ColorIndicator color="bg-surface-complain-resolved" />
            <span>Resolved</span>
        </p>
    {/if}
{:else}
    <span class="text-muted-foreground">N/A</span>
{/if}
