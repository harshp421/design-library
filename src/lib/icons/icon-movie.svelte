<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "movie",
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
  <path d="M5.33334 2.66669V13.3334M10.6667 2.66669V13.3334M2.66667 5.33335H5.33334M2.66667 10.6667H5.33334M2.66667 8.00002H13.3333M10.6667 5.33335H13.3333M10.6667 10.6667H13.3333M2.66667 4.00002C2.66667 3.6464 2.80715 3.30726 3.0572 3.05721C3.30724 2.80716 3.64638 2.66669 4.00001 2.66669H12C12.3536 2.66669 12.6928 2.80716 12.9428 3.05721C13.1929 3.30726 13.3333 3.6464 13.3333 4.00002V12C13.3333 12.3536 13.1929 12.6928 12.9428 12.9428C12.6928 13.1929 12.3536 13.3334 12 13.3334H4.00001C3.64638 13.3334 3.30724 13.1929 3.0572 12.9428C2.80715 12.6928 2.66667 12.3536 2.66667 12V4.00002Z" />
</IconBase>
