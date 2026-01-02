<script lang="ts">
    import { cn } from "$lib/utils/utils";

    let {
        color = $bindable("bg-primary"),
        borderColor = $bindable("border-border-tab-primary-hover"),
        className
    }: {
        color?: string;
        borderColor?: string;
        className?: string;
    } = $props();
</script>

<span
    class={cn(`h-12 w-12 border ${borderColor} ${color} rounded-[0.25rem] `, className)}
>
</span>
