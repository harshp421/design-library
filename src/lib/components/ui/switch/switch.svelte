<script lang="ts">
	import { Switch as SwitchPrimitive } from "bits-ui";
	import { cn, type WithoutChildrenOrChild } from "$lib/utils/utils.js";
	

	let {
		ref = $bindable(null),
		class: className,
		checked = $bindable(false),
		size = $bindable("md"),
		disabled = $bindable(false),
		showIcon = $bindable(false),
		...restProps
	}: WithoutChildrenOrChild<
		SwitchPrimitive.RootProps & {
			size?: "lg" | "sm" | "md";
			showIcon?: boolean;
		}
	> = $props();

	const sizeConfig = {
		sm: {
			container: "w-12 h-8",
			circle: "w-4 h-4",
			offset: "translate-x-6 bg-surface-primary-action-default",
			iconSize: 12,
		},
		md: {
			container: "w-20 h-12",
			circle: "w-8 h-8",
			offset: "translate-x-8 bg-surface-primary-action-default",
			iconSize: 14,
		},
		lg: {
			container: "w-24 h-16",
			circle: "w-10 h-10",
			offset: "translate-x-10 bg-surface-primary-action-default",
			iconSize: 16,
		},
	};

	const config = sizeConfig[size];

	function handleChange() {
		if (disabled) return;
		checked = !checked;
	}
</script>

<button
	onclick={handleChange}
	bind:this={ref}
	data-slot="switch"
	class={cn(
		"relative inline-flex bg-transparent border  items-center rounded-full transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-700/50 focus-visible:ring-offset-2  focus-visible:ring-offset-transparent  disabled:cursor-not-allowed disabled:opacity-50",
		config.container,
		className
	)}
	{...restProps}
>

	<div
		class={cn(
			"absolute left-1 top-1/2 m-auto bg-surface-primary-action-default -translate-y-1/2 rounded-full shadow-md transition-transform duration-300 flex items-center justify-center",
			config.circle,
			checked && config.offset
		)}
	>
		
	</div>
</button>
