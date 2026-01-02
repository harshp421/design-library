<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "charge off",
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
  <path d="M10.7487 10.728L10.6307 10.846C10.2737 11.2173 9.84626 11.5136 9.37337 11.7177C8.90048 11.9218 8.39164 12.0295 7.87661 12.0346C7.36159 12.0396 6.85073 11.9419 6.37393 11.7471C5.89713 11.5524 5.46396 11.2645 5.09976 10.9003C4.73557 10.5361 4.44767 10.1029 4.25291 9.6261C4.05814 9.1493 3.96043 8.63844 3.96548 8.12342C3.97053 7.6084 4.07825 7.09955 4.28233 6.62666C4.4864 6.15377 4.78275 5.72633 5.15401 5.36935L5.26001 5.26335M2.66667 13.3333L5 11M10 2.66667L7.66667 5.00001M13.3333 6.00001L11 8.33334M2 2.00001L14 14" />
</IconBase>
