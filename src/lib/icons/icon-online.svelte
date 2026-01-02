<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "online",
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
  <path d="M8 8V8.00667M9.88534 6.11467C10.3853 6.61474 10.6661 7.2929 10.6661 8C10.6661 8.70711 10.3853 9.38526 9.88534 9.88533M11.7713 4.22867C12.2666 4.72392 12.6595 5.31187 12.9275 5.95896C13.1956 6.60605 13.3335 7.29959 13.3335 8C13.3335 8.70041 13.1956 9.39396 12.9275 10.041C12.6595 10.6881 12.2666 11.2761 11.7713 11.7713M6.112 9.88533C5.61208 9.38526 5.33124 8.70711 5.33124 8C5.33124 7.2929 5.61208 6.61474 6.112 6.11467M4.22467 11.7713C3.72939 11.2761 3.33652 10.6881 3.06848 10.041C2.80044 9.39396 2.66248 8.70041 2.66248 8C2.66248 7.29959 2.80044 6.60605 3.06848 5.95896C3.33652 5.31187 3.72939 4.72392 4.22467 4.22867" />
</IconBase>
