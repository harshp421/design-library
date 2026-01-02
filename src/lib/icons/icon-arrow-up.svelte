<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "arrow up",
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
  <path d="M8 3.33334V12.6667M8 3.33334L12 7.33334M8 3.33334L4 7.33334" />
</IconBase>
