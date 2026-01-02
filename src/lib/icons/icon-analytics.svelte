<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "analytics",
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
  <path d="M6 7.99996V5.33329M10 7.99996V6.66663M8 7.99996V7.33329M2 2.66663H14M2.66667 2.66663V9.33329C2.66667 9.68691 2.80714 10.0261 3.05719 10.2761C3.30724 10.5262 3.64638 10.6666 4 10.6666H12C12.3536 10.6666 12.6928 10.5262 12.9428 10.2761C13.1929 10.0261 13.3333 9.68691 13.3333 9.33329V2.66663M8 10.6666V13.3333M6 13.3333H10" />
</IconBase>
