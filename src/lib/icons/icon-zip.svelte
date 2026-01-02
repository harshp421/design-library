<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "zip",
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
  <path d="M10.6667 10.6666V5.33331H12C12.3536 5.33331 12.6928 5.47379 12.9428 5.72384C13.1928 5.97389 13.3333 6.31302 13.3333 6.66665C13.3333 7.02027 13.1928 7.35941 12.9428 7.60946C12.6928 7.8595 12.3536 7.99998 12 7.99998H10.6667M7.99999 5.33331V10.6666M2.66666 5.33331H5.33332L2.66666 10.6666H5.33332" />
</IconBase>
