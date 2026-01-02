<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "file description",
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
  <path d="M9.33333 2V4.66667C9.33333 4.84348 9.40357 5.01305 9.52859 5.13807C9.65361 5.2631 9.82318 5.33333 10 5.33333H12.6667M9.33333 2H4.66666C4.31304 2 3.9739 2.14048 3.72385 2.39052C3.4738 2.64057 3.33333 2.97971 3.33333 3.33333V12.6667C3.33333 13.0203 3.4738 13.3594 3.72385 13.6095C3.9739 13.8595 4.31304 14 4.66666 14H11.3333C11.687 14 12.0261 13.8595 12.2761 13.6095C12.5262 13.3594 12.6667 13.0203 12.6667 12.6667V5.33333M9.33333 2L12.6667 5.33333M5.99999 11.3333H10M5.99999 8.66667H10" />
</IconBase>
