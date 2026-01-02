<script lang="ts">
    const { children } = $props();
</script>

<div class="min-h-72 py-0 px-12 gap-2.5 bg-surface-warning-l1">
    {@render children?.()}
</div>
