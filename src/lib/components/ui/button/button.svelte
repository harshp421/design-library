<script lang="ts" module>
    import { cn, type WithElementRef } from "$lib/utils/utils.js";
    import type {
        HTMLAnchorAttributes,
        HTMLButtonAttributes,
    } from "svelte/elements";
    import { type VariantProps, tv } from "tailwind-variants";

    export const buttonVariants = tv({
        base: "focus-visible:border-ring focus-visible:ring-primary-700/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive rounded-lg inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap  text-sm font-medium outline-none transition-all focus-visible:ring-[3px] disabled:pointer-events-none disabled:bg-surface-primary-action-disable disabled:text-alphaviceversa-black-400 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-16 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        variants: {
            variant: {
                default:
                    "bg-surface-primary-action-default text-text-action-on-active shadow-xs hover:bg-surface-primary-action-hover ",
                glass: "bg-glass-surface-default hover:bg-glass-surface-hover focus-visible:ring-glass-surface-active  focus-visible:bg-glass-surface-active border-1 border-alphapure-white-400 shadow-lg text-[rgba(0, 0, 0, 0.60)] disabled:text-[rgba(0, 0, 0, 0.25)] disabled:bg-glass-surface-disable disabled:opacity-50 ",
                destructive:
                    "bg-destructive shadow-xs hover:bg-destructive/90 disabled:bg-destructive/40 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 text-white",
                warning:
                    "bg-warning-700 shadow-xs hover:bg-warning-800 disabled:bg-warning-400 focus-visible:ring-warning-400 dark:focus-visible:ring-warning-40 dark:bg-warning-600 text-white",
                info: "bg-info-700 shadow-xs hover:bg-info-800 disabled:bg-info-400 focus-visible:ring-info-400 dark:focus-visible:ring-info-40 dark:bg-info-600 text-white",
                primary:
                    "bg-primary-700 text-white  shadow-xs hover:bg-primary-800  ",
                outline:
                    "bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 border",
                secondary:
                    "bg-surface-neutral-action-default text-neutral-900 focus-visible:ring-neutral-200  shadow-xs hover:bg-neutral-200 hover:text-neutral-950 disabled:bg-neutral-100 disabled:text-alphaviceversa-black-400  disabled:cursor-no-drop ",
                tertiary:
                    "border border-alphaviceversa-black-50 text-neutral-900  hover:bg-neutral-50 focus-visible:ring-alphaviceversa-black-50 focus-visible:border-none  hover:border-alphaviceversa-black-50 hover:text-neutral-950 disabled:bg-transparent disabled:border-alphaviceversa-black-25  disabled:text-alphaviceversa-black-400 ",
                orphan: "border-none  text-neutral-800  hover:bg-alphaviceversa-black-25 focus-visible:ring-alphaviceversa-black-50 focus-visible:border-none   hover:text-neutral-900 disabled:bg-transparent disabled:border-alphaviceversa-black-25  disabled:text-alphaviceversa-black-400 ",
                ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-32 min-w-32 px-8 py-8 has-[>svg]:px-3",
                sm: "h-28 gap-1.5  px-6 py-6 has-[>svg]:px-2.5",
                lg: "h-40 min-w-40  px-10 py-8 has-[>svg]:px-4",
                icon: "size-32",
                "icon-sm": "size-28",
                "icon-md": "size-32",
                "icon-lg": "size-40 [&_svg:not([class*='size-'])]:size-20",
            },
            fullyRounded: {
                true: "rounded-full",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
            fullyRounded: false,
        },
    });

    export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];
    export type ButtonSize = VariantProps<typeof buttonVariants>["size"];
    export type ButtonFullyRounded = VariantProps<
        typeof buttonVariants
    >["fullyRounded"];

    export type ButtonProps = WithElementRef<HTMLButtonAttributes> &
        WithElementRef<HTMLAnchorAttributes> & {
            variant?: ButtonVariant;
            size?: ButtonSize;
            fullyRounded?: ButtonFullyRounded;
        };
</script>

<script lang="ts">
    let {
        class: className,
        variant = "default",
        size = "default",
        ref = $bindable(null),
        href = undefined,
        type = "button",
        fullyRounded = false,
        disabled,
        children,
        ...restProps
    }: ButtonProps = $props();
</script>

{#if href}
    <a
        bind:this={ref}
        data-slot="button"
        class={cn(buttonVariants({ variant, size, fullyRounded }), className)}
        href={disabled ? undefined : href}
        aria-disabled={disabled}
        role={disabled ? "link" : undefined}
        tabindex={disabled ? -1 : undefined}
        {...restProps}
    >
        {@render children?.()}
    </a>
{:else}
    <button
        bind:this={ref}
        data-slot="button"
        class={cn(buttonVariants({ variant, size, fullyRounded }), className)}
        {type}
        {disabled}
        {...restProps}
    >
        {@render children?.()}
    </button>
{/if}
