<script lang="ts" generics="T ">
    import IconIndicator from "$lib/components/ui/icon-indicator/icon-indicator.svelte";
    import type { Column } from "../data-table.svelte";

    type CellType<T> = {
        
        row: T;
        column: Column<T>;
        icon?: any;
        iconType?: "alert" | "config" | "complain" | "brand-icon";
        title: string;
        description?: string;
        subtext?: string;
        subtext2?: string;
    }

    let {
        column,
        row,
        icon,
        iconType,
        title,
        description,
        subtext,
        subtext2,
    }: CellType<T> = $props();
</script>

<div class="flex flex-nowrap gap-12 p-12">
    <div class="flex items-center justify-center rounded-full">
        {#if icon && iconType}
            <IconIndicator type={iconType}>
                <svelte:component this={icon} class="ms-2" />
            </IconIndicator>
        {/if}
    </div>
    <div>
        <div class="text-p-small font-medium text-text-neutral-primary">
            {title}
        </div>
        <div class="flex items-center gap-4">
            {#if description}
                <div
                    class="text-p-xsmall font-normal text-text-neutral-secondary"
                >
                    {description}
                </div>
            {:else}
                <div
                    class="text-p-xsmall font-normal text-text-neutral-secondary"
                >
                    {subtext}
                </div>
                -
                <div
                    class=" text-p-xsmall font-normal text-text-neutral-secondary"
                >
                    {subtext2}
                </div>
            {/if}
        </div>
    </div>
</div>
