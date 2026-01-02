<script lang="ts">
    import { onMount } from "svelte";
    import { cn } from "$lib/utils/utils.js";
    import { IconMoon, IconSun } from "$lib/icons";

    let {
        class: className,
        size = "md",
        ...restProps
    }: {
        class?: string;
        size?: "sm" | "md" | "lg";
        [key: string]: any;
    } = $props();

    let isDark = $state(false);

    const sizeConfig = {
        sm: {
            container: "w-48 h-28",
            icon: "size-20",
        },
        md: {
            container: "w-56 h-32",
            icon: "size-24",
        },
        lg: {
            container: "w-60 h-40",
            icon: "size-24",
        },
    };

    const config = sizeConfig[size];

    function toggleTheme() {
        isDark = !isDark;
        applyTheme();
    }

    function applyTheme() {
        const root = document.documentElement;
        if (isDark) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }

        // Persist to localStorage
        try {
            localStorage.setItem("envizom:dark", isDark ? "1" : "0");
        } catch (e) {
            // Ignore if localStorage is not available
        }
    }

    onMount(() => {
        // Load saved preference
        try {
            const savedDark = localStorage.getItem("envizom:dark");
            isDark = savedDark === "1";
        } catch (e) {
            // Fallback to system preference
            isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        }
        applyTheme();
    });
</script>

<button
    type="button"
    onclick={toggleTheme}
    aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    class={cn(
        "relative inline-flex items-center rounded-full bg-surface-neutral-l3 border border-alphaviceversa-black-100 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-700/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
        config.container,
        className,
    )}
    {...restProps}
>
    <!-- Sun icon (light mode) -->
    <div
        class={cn(
            "absolute left-1 top-1/2 z-30 -translate-y-1/2 transition-all duration-300 flex items-center justify-center ",
            config.icon,
            isDark
                ? "text-icon-neutral-secondary"
                : "text-icon-action-on-active",
        )}
    >
        <IconSun fill={"currentColor"} />
    </div>

    <!-- Moon icon (dark mode) -->
    <div
        class={cn(
            "absolute right-1 z-30 top-1/2 -translate-y-1/2 transition-all duration-300 flex items-center justify-center ",
            config.icon,
            isDark
                ? "text-icon-action-on-active"
                : "text-icon-neutral-secondary",
        )}
    >
        <IconMoon fill={"currentColor"}/>
    </div>

    <!-- Toggle indicator (background pill) -->
    <div
        class={cn(
            "absolute top-1/2 -translate-y-1/2 rounded-full bg-surface-primary-action-default shadow-md transition-all duration-300",
            size === "sm" && "size-20",
            size === "md" && "size-24",
            size === "lg" && "size-24",
            isDark
                ? size === "sm"
                    ? "left-[calc(100%-1.4rem)]"
                    : size === "md"
                      ? "left-[calc(100%-1.7rem)]"
                      : "left-[calc(100%-1.7rem)]"
                : "left-1",
        )}
    ></div>
</button>
