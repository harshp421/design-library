<script lang="ts">
	import { cn, type WithElementRef } from "$lib/utils/utils.js";
	import type { Snippet } from "svelte";
	import type { HTMLButtonAttributes } from "svelte/elements";

	let {
		ref = $bindable(null),
		class: className,
		children,
		child,
		...restProps
	}: WithElementRef<HTMLButtonAttributes> & {
		child?: Snippet<[{ props: Record<string, unknown> }]>;
	} = $props();

	const mergedProps = $derived({
		class: cn(
			"text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground outline-hidden absolute end-12 top-14 flex aspect-square w-20 items-center justify-center rounded-md p-0 transition-transform focus-visible:ring-8 [&>svg]:size-16 [&>svg]:shrink-0",
			// Increases the hit area of the button on mobile.
			"after:absolute after:-inset-8 md:after:hidden",
			"group-data-[collapsible=icon]:hidden",
			className
		),
		"data-slot": "sidebar-group-action",
		"data-sidebar": "group-action",
		...restProps,
	});
</script>

{#if child}
	{@render child({ props: mergedProps })}
{:else}
	<button bind:this={ref} {...mergedProps}>
		{@render children?.()}
	</button>
{/if}
