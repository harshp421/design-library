<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn, type WithElementRef } from "$lib/utils/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLElement>> = $props();
</script>

<div
	bind:this={ref}
	data-slot="sidebar-main-header"
	data-sidebar="main-header"
	class={cn("flex flex-col gap-16 p-8", className)}
	{...restProps}
>
	{@render children?.()}
</div>
