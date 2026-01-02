<script lang="ts" generics="T">
    import { IconChevronsUp } from "$lib/icons";
    import IconChevronUp from "$lib/icons/icon-chevron-up.svelte";
    import IconMinus from "$lib/icons/icon-minus.svelte";
    import { cn } from "$lib/utils/utils";

    let { priority =$bindable()}: { priority: "low" | "medium" | "high" } = $props();
  console.log(priority);
    let bgColor = $derived.by(() => {
        if (priority === "low") {
            return "bg-surface-info-action-default text-priority-low-text ";
        } else if (priority === "medium") {
            return "bg-surface-warning-action-default text-priority-medium-text ";
        } else {
            return "bg-surface-destructive-action-default text-priority-high-text ";
        }
    });
    let Icon = $derived.by(() => {
        if (priority === "low") {
            return IconMinus;
        } else if (priority === "medium") {
            return IconChevronUp;
        } else {
            return IconChevronsUp;
        }
    });
</script>

<span class={cn("inline-flex items-center justify-center  rounded-full  [&>svg]:text-icon-action-on-active p-[0.125rem] text-p-xsmall font-medium border-0", bgColor)}>
    <Icon  size={14} className="ms-1" />
</span>
