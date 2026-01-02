<script lang="ts">
	import { Collapsible as CollapsiblePrimitive } from "bits-ui";

	let { ref = $bindable(null), ...restProps }: CollapsiblePrimitive.ContentProps = $props();
</script>

<CollapsiblePrimitive.Content 
	bind:ref 
	data-slot="collapsible-content" 
	class="overflow-hidden transition-all duration-200 data-[state=closed]:max-h-0 data-[state=open]:max-h-screen"
	{...restProps} 
/>

<style>
	:global([data-slot="collapsible-content"]) {
		overflow: hidden;
	}
</style>
