<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "login",
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
  <path d="M9.33333 5.33334V4.00001C9.33333 3.64638 9.19286 3.30724 8.94281 3.0572C8.69276 2.80715 8.35362 2.66667 8 2.66667H3.33333C2.97971 2.66667 2.64057 2.80715 2.39052 3.0572C2.14048 3.30724 2 3.64638 2 4.00001V12C2 12.3536 2.14048 12.6928 2.39052 12.9428C2.64057 13.1929 2.97971 13.3333 3.33333 13.3333H8C8.35362 13.3333 8.69276 13.1929 8.94281 12.9428C9.19286 12.6928 9.33333 12.3536 9.33333 12V10.6667M13.3333 8.00001H4.66667M4.66667 8.00001L6.66667 6.00001M4.66667 8.00001L6.66667 10" />
</IconBase>
