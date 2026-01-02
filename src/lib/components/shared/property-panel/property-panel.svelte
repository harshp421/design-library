<script lang="ts">
    import { cn, type WithElementRef } from "$lib/utils/utils.js";
    import type { HTMLAttributes } from "svelte/elements";
    import { setProperty_bar, useProperty_bar } from "./context.svelte.js";
import * as Drawer from "$lib/components/ui/drawer/index.js";
    let {
        ref = $bindable(null),
        side = "right",
        variant = "inset",
        collapsible = "offcanvas",
        class: className,
        children,
        open = false,
        onOpenChange = () => {},
        ...restProps
    }: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
        side?: "left" | "right";
        variant?: "sidebar" | "floating" | "inset";
        collapsible?: "offcanvas" | "icon" | "none";
        onOpenChange?: (value: boolean) => void;
        open?: boolean;
    } = $props();

    const sidebarprovider = setProperty_bar({
        open: () => open,
        setOpen: (value: boolean) => {
            open = value;
            onOpenChange(value);
        },
    });
    const sidebar = useProperty_bar();
</script>

{#if collapsible === "none"}
    <div
        class={cn(
            "bg-sidebar text-sidebar-foreground w-(--sidebar-width) flex h-full flex-col",
            className,
        )}
        bind:this={ref}
        {...restProps}
    >
        {@render children?.()}
    </div>
{:else if sidebar.isMobile}
    <Drawer.Root
		bind:open={() => open, (v) => onOpenChange(v)}
		{...restProps}

	>
		<Drawer.Content
		 data-sidebar="sidebar"
			data-slot="sidebar"
			data-mobile="true"
			class="bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden"
			
		>
			<Drawer.Header>
				<!-- <Drawer.Title>Are you sure absolutely sure?</Drawer.Title>
				<Drawer.Description
					>This action cannot be undone.</Drawer.Description
				> -->
			</Drawer.Header>
			<div class="flex h-full w-full flex-col">
				{@render children?.()}
			</div>
			<!-- <Drawer.Footer>
				<Button>Submit</Button>
				<Drawer.Close>Cancel</Drawer.Close>
			</Drawer.Footer> -->
		</Drawer.Content>
	</Drawer.Root>
{:else}
    <div
        bind:this={ref}
        class="text-sidebar-foreground group peer hidden md:block"
        data-state={sidebar.state}
        data-collapsible={sidebar.state === "collapsed" ? collapsible : ""}
        data-variant={variant}
        data-side={side}
        data-slot="sidebar"
    >
        <!-- This is what handles the sidebar gap on desktop -->
        <div
            data-slot="sidebar-gap"
            class={cn(
                "w-(--sidebar-width) relative bg-transparent transition-[width] duration-200 ease-linear",
                "group-data-[collapsible=offcanvas]:w-0",
                "group-data-[side=right]:rotate-180",
                variant === "floating" || variant === "inset"
                    ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
                    : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)",
            )}
        ></div>
        <div
            data-slot="sidebar-container"
            class={cn(
                "w-(--sidebar-width) fixed inset-y-0 z-10 hidden h-svh transition-[left,right,width] duration-200 ease-linear md:flex",
                side === "left"
                    ? "start-0 group-data-[collapsible=offcanvas]:start-[calc(var(--sidebar-width)*-1)]"
                    : "end-0 group-data-[collapsible=offcanvas]:end-[calc(var(--sidebar-width)*-1)]",
                // Adjust the padding for floating and inset variants.
                variant === "floating" || variant === "inset"
                    ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
                    : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-e group-data-[side=right]:border-s",
                className,
            )}
            {...restProps}
        >
            <div
                data-sidebar="sidebar"
                data-slot="sidebar-inner"
                class="bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
            >
                {@render children?.()}
            </div>
        </div>
    </div>
{/if}
