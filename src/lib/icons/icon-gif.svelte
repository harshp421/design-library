<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "gif",
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
  <path d="M5.33333 5.33331H3.33333C2.97971 5.33331 2.64057 5.47379 2.39052 5.72384C2.14048 5.97389 2 6.31302 2 6.66665V9.33331C2 9.68694 2.14048 10.0261 2.39052 10.2761C2.64057 10.5262 2.97971 10.6666 3.33333 10.6666H5.33333V7.99998H4.66667M8 5.33331V10.6666M10.6667 10.6666V5.33331H14M13.3333 7.99998H10.6667" />
</IconBase>
