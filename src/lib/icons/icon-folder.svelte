<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "folder",
    ...restProps
  }: {
    size?: number | string;
    color?: string;
    className?: string;
    style?: string;
    ariaLabel?: string;
    restProps?: Record<string, any>;
  } = $props();
</script>

<IconBase {size} {color} {className} {style} ariaLabel={ariaLabel} {...restProps}>
  <path d="M3.33333 2.66669H6L8 4.66669H12.6667C13.0203 4.66669 13.3594 4.80716 13.6095 5.05721C13.8595 5.30726 14 5.6464 14 6.00002V11.3334C14 11.687 13.8595 12.0261 13.6095 12.2762C13.3594 12.5262 13.0203 12.6667 12.6667 12.6667H3.33333C2.97971 12.6667 2.64057 12.5262 2.39052 12.2762C2.14048 12.0261 2 11.687 2 11.3334V4.00002C2 3.6464 2.14048 3.30726 2.39052 3.05721C2.64057 2.80716 2.97971 2.66669 3.33333 2.66669Z" />
</IconBase>
