<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "calendar",
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
  <path d="M10.6667 2V4.66667M5.33332 2V4.66667M2.66666 7.33333H13.3333M2.66666 4.66667C2.66666 4.31304 2.80713 3.97391 3.05718 3.72386C3.30723 3.47381 3.64637 3.33333 3.99999 3.33333H12C12.3536 3.33333 12.6928 3.47381 12.9428 3.72386C13.1928 3.97391 13.3333 4.31304 13.3333 4.66667V12.6667C13.3333 13.0203 13.1928 13.3594 12.9428 13.6095C12.6928 13.8595 12.3536 14 12 14H3.99999C3.64637 14 3.30723 13.8595 3.05718 13.6095C2.80713 13.3594 2.66666 13.0203 2.66666 12.6667V4.66667Z" />
</IconBase>
