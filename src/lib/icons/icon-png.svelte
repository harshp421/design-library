<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "png",
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
  <path d="M14 5.33331H12.6667C12.313 5.33331 11.9739 5.47379 11.7239 5.72384C11.4738 5.97389 11.3333 6.31302 11.3333 6.66665V9.33331C11.3333 9.68694 11.4738 10.0261 11.7239 10.2761C11.9739 10.5262 12.313 10.6666 12.6667 10.6666H14V7.99998H13.3333M2 10.6666V5.33331H3.33333C3.68696 5.33331 4.02609 5.47379 4.27614 5.72384C4.52619 5.97389 4.66667 6.31302 4.66667 6.66665C4.66667 7.02027 4.52619 7.35941 4.27614 7.60946C4.02609 7.8595 3.68696 7.99998 3.33333 7.99998H2M6.66667 10.6666V5.33331L9.33333 10.6666V5.33331" />
</IconBase>
