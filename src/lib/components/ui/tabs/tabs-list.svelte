<script lang="ts">
    import { Tabs as TabsPrimitive } from "bits-ui";
    import { cn } from "$lib/utils/utils.js";

    // Define types for size and variant
    type Size = "fit-content" | "full-width";
    type Variant = "secondary" | "primary" | "contained";

    let {
        ref = $bindable(null),
        // Add new props with default values
        size = $bindable<Size>("full-width"),
        variant = $bindable<Variant>("secondary"),
        class: className,
        ...restProps
    }: TabsPrimitive.ListProps & {
        size?: Size;
        variant?: Variant;
    } = $props();

    // Adjust List classes based on variant
    const listVariantClasses = $derived.by(() => {
        switch (variant) {
            case "secondary":
                return ""; // More rounded, subtle background
            case "primary":
                return ""; // Only a bottom line
            case "contained":
                return "border rounded-8 border-alphaviceversa-black-50";
        }
    });
</script>

<TabsPrimitive.List
    bind:ref
    data-slot="tabs-list"
    class={cn(
        "inline-flex w-full items-center justify-center",
        listVariantClasses , 
		variant === "contained" ? "rounded-md bg-surface-tab-list-background p-1" : "",
		size === "fit-content" ? "w-fit" : "w-full", 
        className
    )}
    {...restProps}
/>