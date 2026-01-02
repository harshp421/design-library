
<script lang="ts"  >
    import type { Column } from "../data-table.svelte";
    let { column }: { column: Column<any> } = $props();
</script>
<th
    class="px-12 py-8 h-44 text-left text-p-xsmall leading-[var(--text-p-xsmall--line-height)] font-medium text-text-neutral-primary whitespace-nowrap"
    style="width: {column.width || 'auto'}"
>
    {column.header} <br />
    {#if column.subheader}
        <span class="text-xs font-normal pt-2 text-neutral-800"
            >{column.subheader}</span
        >
    {/if}
</th>
