<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "validate",
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
  <path d="M2.66666 4.66666H6.66666M4.66666 2.66666V6.66666M13.3333 10.6667H9.33332M13.3333 12.6667H9.33332M3.33332 12.6667L12.6667 3.33332" />
</IconBase>
