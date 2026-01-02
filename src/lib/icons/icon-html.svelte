<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "html",
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
  <path d="M8.66666 10.6666V5.33331L10 8.66665L11.3333 5.33331V10.6666M0.666664 10.6666V5.33331M3.33333 5.33331V10.6666M0.666664 7.99998H3.33333M4.66666 5.33331H7.33333M6 5.33331V10.6666M13.3333 5.33331V10.6666H15.3333" />
</IconBase>
