<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "svg",
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
  <path d="M14 5.33331H12.6667C12.313 5.33331 11.9739 5.47379 11.7239 5.72384C11.4738 5.97389 11.3333 6.31302 11.3333 6.66665V9.33331C11.3333 9.68694 11.4738 10.0261 11.7239 10.2761C11.9739 10.5262 12.313 10.6666 12.6667 10.6666H14V7.99998H13.3333M4.66667 5.33331H2.66667C2.48986 5.33331 2.32029 5.40355 2.19526 5.52858C2.07024 5.6536 2 5.82317 2 5.99998V7.33331C2 7.51012 2.07024 7.67969 2.19526 7.80472C2.32029 7.92974 2.48986 7.99998 2.66667 7.99998H4C4.17681 7.99998 4.34638 8.07022 4.4714 8.19524C4.59643 8.32027 4.66667 8.48984 4.66667 8.66665V9.99998C4.66667 10.1768 4.59643 10.3464 4.4714 10.4714C4.34638 10.5964 4.17681 10.6666 4 10.6666H2M6.66667 5.33331L7.66667 10.6666H8.33333L9.33333 5.33331" />
</IconBase>
