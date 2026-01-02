<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "help",
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
  <path d="M11.3333 12.2866H8.66668L5.7 14.2599C5.26 14.5533 4.66668 14.24 4.66668 13.7066V12.2866C2.66668 12.2866 1.33334 10.9533 1.33334 8.95331V4.95327C1.33334 2.95327 2.66668 1.61993 4.66668 1.61993H11.3333C13.3333 1.61993 14.6667 2.95327 14.6667 4.95327V8.95331C14.6667 10.9533 13.3333 12.2866 11.3333 12.2866Z" />
  <path d="M8.00005 7.57324V7.43327C8.00005 6.97993 8.28007 6.73992 8.56007 6.54659C8.8334 6.35992 9.1067 6.11993 9.1067 5.67993C9.1067 5.0666 8.61338 4.57324 8.00005 4.57324C7.38672 4.57324 6.8934 5.0666 6.8934 5.67993" />
  <path d="M7.99699 9.16665H8.00299" />
</IconBase>
