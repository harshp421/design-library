<script lang="ts">
    import { cn } from "$lib/utils/utils";
    let { className, children ,type}: { className?: string; children?: any,type?: 'alert' | 'config' | 'complain' | 'brand-icon' } = $props();
</script>

<div class={cn("inline-flex items-center p-8 h-[2.5rem] gap-10  transition-colors rounded-full [&>svg]:size-24 ms-4  ",
 type === 'alert' ? 'bg-surface-destructive-action-default text-white ' :
 type === 'config' ? 'bg-surface-neutral-l4' :
 type === 'complain' ? 'bg-surface-info-action-default text-white' : 
className)}>
    {@render children?.()}
</div>
