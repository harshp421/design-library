<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "color indicator icon",
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
  <rect x="3" y="3" width="14" height="14" rx="4" fill="#6ECC58"/>
  <rect x="3.5" y="3.5" width="13" height="13" rx="3.5" stroke-opacity="0.15"/>
</IconBase>
