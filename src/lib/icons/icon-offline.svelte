<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "offline",
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
  <path d="M2 2L14 14M9.88533 6.11467C10.3855 6.61465 10.6665 7.29281 10.6667 8M11.7713 4.22867C12.5379 4.99486 13.0528 5.97641 13.2476 7.04259C13.4423 8.10877 13.3076 9.20897 12.8613 10.1967M6.112 9.88533C5.61208 9.38526 5.33124 8.7071 5.33124 8C5.33124 7.2929 5.61208 6.61474 6.112 6.11467M4.22467 11.7713C3.72939 11.2761 3.33652 10.6881 3.06847 10.041C2.80043 9.39395 2.66247 8.70041 2.66247 8C2.66247 7.29959 2.80043 6.60605 3.06847 5.95896C3.33652 5.31187 3.72939 4.72392 4.22467 4.22867" />
</IconBase>
