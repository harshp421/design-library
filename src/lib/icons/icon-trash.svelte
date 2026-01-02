<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "trash",
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
  <path d="M14 3.98666C11.78 3.76666 9.54667 3.65333 7.32 3.65333C6 3.65333 4.68 3.71999 3.36 3.85333L2 3.98666" />
  <path d="M5.66667 3.31334L5.81334 2.44C5.92001 1.80667 6 1.33334 7.12667 1.33334H8.87334C10 1.33334 10.0867 1.83334 10.1867 2.44667L10.3333 3.31334" />
  <path d="M12.5667 6.09333L12.1333 12.8067C12.06 13.8533 12 14.6667 10.14 14.6667H5.86C4 14.6667 3.94 13.8533 3.86667 12.8067L3.43333 6.09333" />
  <path d="M6.88667 11H9.10667" />
  <path d="M6.33333 8.33334H9.66666" />
</IconBase>
