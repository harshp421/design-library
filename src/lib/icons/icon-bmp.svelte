<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "bmp",
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
  <path d="M12 10.6666V5.33331H13.3333C13.687 5.33331 14.0261 5.47379 14.2761 5.72384C14.5262 5.97389 14.6667 6.31302 14.6667 6.66665C14.6667 7.02027 14.5262 7.35941 14.2761 7.60946C14.0261 7.8595 13.687 7.99998 13.3333 7.99998H12M2.66667 7.99998C3.02029 7.99998 3.35943 7.8595 3.60948 7.60946C3.85952 7.35941 4 7.02027 4 6.66665C4 6.31302 3.85952 5.97389 3.60948 5.72384C3.35943 5.47379 3.02029 5.33331 2.66667 5.33331H1.33333V10.6666H2.66667C3.02029 10.6666 3.35943 10.5262 3.60948 10.2761C3.85952 10.0261 4 9.68694 4 9.33331C4 8.97969 3.85952 8.64055 3.60948 8.3905C3.35943 8.14046 3.02029 7.99998 2.66667 7.99998ZM2.66667 7.99998H1.33333M6 10.6666V5.33331L8 9.33331L10 5.33331V10.6666" />
</IconBase>
