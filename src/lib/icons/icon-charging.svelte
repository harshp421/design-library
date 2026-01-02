<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "charging",
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
  <path d="M2.66666 13.3333L4.99999 11M9.99999 2.66667L7.66666 5.00001M13.3333 6.00001L11 8.33334M6.52334 4.00001L12 9.47667L10.6307 10.846C10.2737 11.2173 9.84625 11.5136 9.37336 11.7177C8.90047 11.9218 8.39163 12.0295 7.8766 12.0345C7.36158 12.0396 6.85072 11.9419 6.37392 11.7471C5.89712 11.5523 5.46395 11.2644 5.09975 10.9003C4.73556 10.5361 4.44766 10.1029 4.2529 9.62609C4.05813 9.14929 3.96042 8.63843 3.96547 8.1234C3.97052 7.60838 4.07824 7.09954 4.28231 6.62665C4.48639 6.15376 4.78274 5.72632 5.154 5.36934L6.52334 4.00001Z" />
</IconBase>
