<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "folders",
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
  <path d="M11.3333 11.3334V12.6667C11.3333 13.0203 11.1929 13.3594 10.9428 13.6095C10.6928 13.8595 10.3536 14 10 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V6.66669C2 6.31307 2.14048 5.97393 2.39052 5.72388C2.64057 5.47383 2.97971 5.33335 3.33333 5.33335H4.66667M6 2.66669H8L9.33333 4.00002H12.6667C13.0203 4.00002 13.3594 4.1405 13.6095 4.39054C13.8595 4.64059 14 4.97973 14 5.33335V10C14 10.3536 13.8595 10.6928 13.6095 10.9428C13.3594 11.1929 13.0203 11.3334 12.6667 11.3334H6C5.64638 11.3334 5.30724 11.1929 5.05719 10.9428C4.80714 10.6928 4.66667 10.3536 4.66667 10V4.00002C4.66667 3.6464 4.80714 3.30726 5.05719 3.05721C5.30724 2.80716 5.64638 2.66669 6 2.66669Z" />
</IconBase>
