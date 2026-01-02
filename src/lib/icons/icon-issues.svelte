<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "issues",
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
  <path d="M6 5.99998V5.33331C6 4.80288 6.21071 4.29417 6.58579 3.9191C6.96086 3.54403 7.46957 3.33331 8 3.33331C8.53043 3.33331 9.03914 3.54403 9.41421 3.9191C9.78929 4.29417 10 4.80288 10 5.33331V5.99998M8 13.3333C8.88406 13.3333 9.7319 12.9821 10.357 12.357C10.9821 11.7319 11.3333 10.884 11.3333 9.99998V7.99998C11.294 7.28569 11.0637 6.59504 10.6667 5.99998H5.33333C4.93627 6.59504 4.70605 7.28569 4.66667 7.99998V9.99998C4.66667 10.884 5.01786 11.7319 5.64298 12.357C6.2681 12.9821 7.11595 13.3333 8 13.3333ZM8 13.3333V9.33331M2 8.66665H4.66667M11.3333 8.66665H14M2.66667 12.6666L4.9 11.3333M13.3333 12.6666L11.1 11.3333M2.66667 4.66665L5.16667 6.26665M13.3333 4.66665L10.8333 6.26665" />
</IconBase>
