<script lang="ts" module>
    import { tv, type VariantProps } from "tailwind-variants";
   //[&>svg]:size-[var(--jumper-icon-size-sm)] removed this 
    export const sidebarMenuButtonVariants = tv({
        base: "peer/menu-button outline-hidden text-text-neutral-secondary h-full  ring-primary-400 text-p-small capitalize  hover:bg-surface-neutral-L3 hover:text-text-neutral-primary  active:bg-surface-primary-action-default active:text-text-action-on-active group-has-data-[sidebar=menu-action]/menu-item:pe-32 data-[active=true]:bg-surface-primary-action-default data-[active=true]:text-text-action-on-active data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground  group-data-[collapsible=icon]:p-8! flex w-full items-center gap-12 overflow-hidden rounded-[0.5rem] p-8  text-start  transition-[width,height,padding] focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:font-medium font-medium [&>span:last-child]:truncate [&>svg]:size-[var(--jumper-icon-size-md)] [&>svg]:ml-4 [&>svg]:active:text-text-action-on-active  [&>svg]:shrink-0",
        variants: {
            variant: {
                default:
                    " hover:bg-sidebar-accent  hover:text-sidebar-accent-foreground",
                outline:
                    "bg-background hover:bg-sidebar-accent hover:text-sidebar-accent-foreground shadow-[0_0_0_1px_var(--sidebar-border)] hover:shadow-[0_0_0_1px_var(--sidebar-accent)]",
            },
            size: {
                default: "",
                sm: "h-28 ",
                lg: "group-data-[collapsible=icon]:p-0! h-48",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    });

    export type SidebarMenuButtonVariant = VariantProps<
        typeof sidebarMenuButtonVariants
    >["variant"];
    export type SidebarMenuButtonSize = VariantProps<
        typeof sidebarMenuButtonVariants
    >["size"];
</script>

<script lang="ts">
    import * as Tooltip from "$lib/components/ui/tooltip/index.js";
    import {
        cn,
        type WithElementRef,
        type WithoutChildrenOrChild,
    } from "$lib/utils/utils.js";
    import { mergeProps } from "bits-ui";
    import type { ComponentProps, Snippet } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";
    import { useSidebar } from "./context.svelte.js";

    let {
        ref = $bindable(null),
        class: className,
        children,
        child,
        variant = "default",
        size = "default",
        isActive = false,
        tooltipContent,
        tooltipContentProps,
        ...restProps
    }: WithElementRef<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
        isActive?: boolean;
        variant?: SidebarMenuButtonVariant;
        size?: SidebarMenuButtonSize;
        tooltipContent?: Snippet | string;
        tooltipContentProps?: WithoutChildrenOrChild<
            ComponentProps<typeof Tooltip.Content>
        >;
        child?: Snippet<[{ props: Record<string, unknown> }]>;
    } = $props();

    const sidebar = useSidebar();

    const buttonProps = $derived({
        class: cn(sidebarMenuButtonVariants({ variant, size }), className),
        "data-slot": "sidebar-menu-button",
        "data-sidebar": "menu-button",
        "data-size": size,
        "data-active": isActive,
        ...restProps,
    });
</script>

{#snippet Button({ props }: { props?: Record<string, unknown> })}
    {@const mergedProps = mergeProps(buttonProps, props)}
    {#if child}
        {@render child({ props: mergedProps })}
    {:else}
        <button bind:this={ref} {...mergedProps}>
            {@render children?.()}
        </button>
    {/if}
{/snippet}

{#if !tooltipContent}
    {@render Button({})}
{:else}
    <Tooltip.Root>
        <Tooltip.Trigger>
            {#snippet child({ props })}
                {@render Button({ props })}
            {/snippet}
        </Tooltip.Trigger>
        <Tooltip.Content
            side="right"
            align="center"
            hidden={sidebar.state !== "collapsed" || sidebar.isMobile}
            {...tooltipContentProps}
        >
            {#if typeof tooltipContent === "string"}
                {tooltipContent}
            {:else if tooltipContent}
                {@render tooltipContent()}
            {/if}
        </Tooltip.Content>
    </Tooltip.Root>
{/if}
