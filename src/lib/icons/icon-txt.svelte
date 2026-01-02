<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "txt",
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
  <path d="M2 5.33331H4.66667M3.33333 5.33331V10.6666M11.3333 5.33331H14M12.6667 5.33331V10.6666M6.66667 5.33331L9.33333 10.6666M6.66667 10.6666L9.33333 5.33331" />
</IconBase>
