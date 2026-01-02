<script lang="ts">
    import IconBase from "./icon-base.svelte";
	const {
		size = 20,
		color = 'currentColor',
		className = '',
		style = '',
		ariaLabel = 'folder',
		...restProps
	}: {
		size?: number | string;
		color?: string;
		className?: string;
		style?: string;
		ariaLabel?: string;
		restProps?: Record<string, any>;
	} = $props();
</script>

<IconBase {size} {color} {className} {style}  {...restProps}>
	<path d="M11.3 4.70081L4.70035 11.3005M4.70035 4.70081L11.3 11.3005"/>
</IconBase>
