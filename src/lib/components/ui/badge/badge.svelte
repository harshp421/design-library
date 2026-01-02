<script lang="ts" module>
    import { type VariantProps, tv } from "tailwind-variants";
    export const badgeVariants = tv({
        base: "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex w-fit shrink-0 items-center justify-center gap-4 overflow-hidden whitespace-nowrap   px-8 py-8  font-medium transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-20 [&_[data-slot=avatar-root]]:transition-all",
        variants: {
            variant: {
                default:
                    "bg-surface-primary-l3  text-text-action-default focus-visible:ring-ring/50  border-transparent",
                primary:
                    "bg-surface-primary-l3 text-text-action-default  focus-visible:ring-primary/20 dark:focus-visible:ring-primary/40 ",
                neutral:
                    "bg-surface-neutral-l3 text-text-neutral-secondary focus-visible:ring-neutral/20 dark:focus-visible:ring-neutral/40 border-transparent",
                warning:
                    "bg-surface-warning-l3  text-text-warning  [a&]:hover:bg-warning/90 border-transparent",
                info:
                    "bg-surface-info-l3  text-text-info  [a&]:hover:bg-info/90 border-transparent",
                destructive:
                    "bg-surface-destructive-l3 text-text-destructive  [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/70 border-transparent",
                success:
                    "bg-surface-success-l3 text-text-success-default  [a&]:hover:bg-success/90 border-transparent",
            },
            size: {
                sm: "h-24   text-[0.625rem] [&_[data-slot=avatar]]:size-16 [&>svg]:size-16",
                md: "h-28 text-sm [&_[data-slot=avatar]]:size-20 [&>svg]:size-20",
                lg: "h-32 [&_[data-slot=avatar]]:size-20 [&>svg]:size-20",
            },
            rounded: {
                true: "rounded-full",
                false: "rounded-[0.375rem]",
            },
            border: {
                true: "border ",
                false: "border-0",
            },
        },
        compoundVariants: [
            // Primary variant with border states
            {
                variant: "primary",
                border: true,
                class: "bg-surface-primary-l1 border-border-primary-action-default",
            },
            {
                variant: "primary",
                border: false,
                class: "bg-surface-primary-l3",
            },
            // Neutral variant with border states
            {
                variant: "neutral",
                border: true,
                class: "bg-surface-neutral-l1 border-border-neutral-L4",
            },
            {
                variant: "neutral",
                border: false,
                class: "bg-surface-neutral-l3",
            },
            // Destructive variant with border states
            {
                variant: "destructive",
                border: true,
                class: "bg-surface-destructive-l1 border-border-destructive-default",
            },
            { variant: "destructive", border: false, class: "bg-surface-destructive-l3" },
            //warning variant with border states
            {
                variant: "warning",
                border: true,
                class: "bg-surface-warning-l1 border-border-warning-default",
            },
            { variant: "warning", border: false, class: "bg-surface-warning-l3" },
            //info variant with border states
            {
                variant: "info",
                border: true,
                class: "bg-surface-info-l1 border-border-info-default",
            },
            { variant: "info", border: false, class: "bg-surface-info-l3" },
            //success variant with border states
            {
                variant: "success",
                border: true,
                class: "bg-surface-success-l1 border-border-success-default",
            },
            { variant: "success", border: false, class: "bg-surface-success-l3" },
        ],
        defaultVariants: {
            variant: "default",
            size: "md",
            rounded: false,
            border: false,
        },
    });
    export type BadgeVariant = VariantProps<typeof badgeVariants>["variant"];
    export type BadgeSize = VariantProps<typeof badgeVariants>["size"];
    export type BadgeRounded = VariantProps<typeof badgeVariants>["rounded"];
    export type BadgeBorder = VariantProps<typeof badgeVariants>["border"];
</script>

<script lang="ts">
    import type { HTMLAnchorAttributes } from "svelte/elements";
    import { cn } from "$lib/utils/utils";
    import type { WithElementRef } from "bits-ui";

    let {
        ref = $bindable(null),
        href,
        class: className,
        variant = "default",
        size = "md",
        border = false,
        rounded = false,
        children,
        ...restProps
    }: WithElementRef<HTMLAnchorAttributes> & {
        variant?: BadgeVariant;
        size?: BadgeSize;
        rounded?: BadgeRounded;
        border?: BadgeBorder;
    } = $props();

    // Compute Avatar rounding based on rounded prop
    const avatarRoundingClass = $derived(
        rounded ? "rounded-full" : "rounded-xl",
    );
    const badgeClasses = $derived(
        cn(badgeVariants({ variant, size, rounded, border }), className),
    );
</script>

<svelte:element
    this={href ? "a" : "span"}
    bind:this={ref}
    data-slot="badge"
    data-badge-rounded={rounded}
    {href}
    class={badgeClasses}
    {...restProps}
>
    {@render children?.()}
</svelte:element>

<style>
   /* Apply avatar rounding based on data-badge-rounded attribute*/
    :global([data-badge-rounded="true"] [data-slot="avatar"]) {
        border-radius: 9999px; /* rounded-full */
    }

    :global([data-badge-rounded="false"] [data-slot="avatar"]) {
        border-radius: 4px; /* rounded-xl */
    }

  
</style>
