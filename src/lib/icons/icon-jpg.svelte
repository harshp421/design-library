<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "jpg",
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
  <path d="M14 5.33331H12.6667C12.313 5.33331 11.9739 5.47379 11.7239 5.72384C11.4738 5.97389 11.3333 6.31302 11.3333 6.66665V9.33331C11.3333 9.68694 11.4738 10.0261 11.7239 10.2761C11.9739 10.5262 12.313 10.6666 12.6667 10.6666H14V7.99998H13.3333M6.66667 10.6666V5.33331H8C8.35362 5.33331 8.69276 5.47379 8.94281 5.72384C9.19286 5.97389 9.33333 6.31302 9.33333 6.66665C9.33333 7.02027 9.19286 7.35941 8.94281 7.60946C8.69276 7.8595 8.35362 7.99998 8 7.99998H6.66667M2 5.33331H4.66667V9.33331C4.66667 9.68694 4.52619 10.0261 4.27614 10.2761C4.02609 10.5262 3.68696 10.6666 3.33333 10.6666H2.33333C2.24493 10.6666 2.16014 10.6315 2.09763 10.569C2.03512 10.5065 2 10.4217 2 10.3333V9.99998" />
</IconBase>
