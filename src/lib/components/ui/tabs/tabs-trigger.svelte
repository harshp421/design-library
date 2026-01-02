<script lang="ts">
    import { Tabs as TabsPrimitive } from "bits-ui";
    import { cn } from "$lib/utils/utils.js";

    // Define types for size and variant (must match TabsList)
    type Size = "sm" | "md" | "lg";
    type Variant = "secondary" | "primary" | "contained";

    let {
        ref = $bindable(null),
        size = $bindable<Size>("md"),
        variant = $bindable<Variant>("secondary"),
        class: className,
        ...restProps
    }: TabsPrimitive.TriggerProps & {
        size?: Size;
        variant?: Variant;
    } = $props();
   
    const variantClasses = $derived.by(() => {
        switch (variant) {
            case "secondary":
                return {
                    base: "transition-colors",
                    active: "data-[state=active]:border-b-2  data-[state=active]:border-b-border-tab-primary-active dark:data-[state=active]:text-primary-foreground dark:data-[state=active]:border-white shadow-none",
                };
            case "primary":
                return {
                    base: "  dark:border-transparent",
                    active: " border-b-2 data-[state=active]:border-border-tab-primary-active dark:data-[state=active]:border-white shadow-none",
                };
            case "contained":
                return {
                    base: "border-r",
                    active: "data-[state=active]:bg-surface-tab-contained-active dark:data-[state=active]:bg-input/30 data-[state=active]:text-foreground dark:data-[state=active]:text-foreground ",
                };
        }
    });
</script>

<TabsPrimitive.Trigger
    bind:ref
    data-slot="tabs-trigger"
    class={cn(
        "inline-flex flex-1 gap-4 h-44 text-text-tab-text-default dark:text-white  hover:bg-surface-tab-primary-hover items-center justify-center whitespace-nowrap font-medium transition-all focus-visible:outline-none data-[state=active]:text-icon-tab-active  focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variantClasses.base,
        variantClasses.active,
        className
    )}
    {...restProps}
/>