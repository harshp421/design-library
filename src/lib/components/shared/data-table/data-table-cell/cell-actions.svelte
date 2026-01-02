<script lang="ts" generics="T extends { id: string }">
    import Button from "$lib/components/ui/button/button.svelte";
    import { getCellValue, type Column } from "../data-table.svelte";
   
    interface Action {
        component?: any; // Custom component to render instead of label+icon
        componentProps?: Record<string, any>; // Props to pass to custom componen₹
    }

    interface CellType<U> {
        row: U;
        column: Column<U>;
        actions?: Action[]; // legacy single list
    }
    let {
        row,
        column,
        actions = [],
    }: CellType<T> = $props();
</script>


 <div class="">
            {#each  actions as Components}
                {#if Components.component}
                    <Button variant="outline" size="icon-md" fullyRounded >
                       <Components.component {row} {column} {...Components.componentProps} />
                    </Button>
                {/if}
            {/each}
</div>