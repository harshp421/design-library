<script lang="ts">
    const { children } = $props();
</script>

<div class="min-h-64 p-12 gap-2.5 border-b border-b-border-neutral-L1 sticky top-0 bg-surface-default/95 backdrop-blur-sm z-10 border-border-default">
    {@render children?.()}
</div>
