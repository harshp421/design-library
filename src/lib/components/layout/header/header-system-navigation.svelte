<script lang="ts">
    const { children } = $props();
</script>

<div
    class="min-h-64 p-12 gap-2.5 border-b border-b-border-neutral-L1 bg-primary-600"
>
    {@render children?.()}
</div>
