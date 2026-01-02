<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "archive",
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
  <path d="M12.6667 5.33335C13.0203 5.33335 13.3594 5.19288 13.6095 4.94283C13.8595 4.69278 14 4.35364 14 4.00002C14 3.6464 13.8595 3.30726 13.6095 3.05721C13.3594 2.80716 13.0203 2.66669 12.6667 2.66669H3.33333C2.97971 2.66669 2.64057 2.80716 2.39052 3.05721C2.14048 3.30726 2 3.6464 2 4.00002C2 4.35364 2.14048 4.69278 2.39052 4.94283C2.64057 5.19288 2.97971 5.33335 3.33333 5.33335M12.6667 5.33335H3.33333M12.6667 5.33335V12C12.6667 12.3536 12.5262 12.6928 12.2761 12.9428C12.0261 13.1929 11.687 13.3334 11.3333 13.3334H4.66667C4.31304 13.3334 3.97391 13.1929 3.72386 12.9428C3.47381 12.6928 3.33333 12.3536 3.33333 12V5.33335M6.66667 8.00002H9.33333" />
</IconBase>
