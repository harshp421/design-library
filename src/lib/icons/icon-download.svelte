<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "download",
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
  <path d="M2.66666 11.3334V12.6667C2.66666 13.0203 2.80713 13.3594 3.05718 13.6095C3.30723 13.8595 3.64637 14 3.99999 14H12C12.3536 14 12.6928 13.8595 12.9428 13.6095C13.1928 13.3594 13.3333 13.0203 13.3333 12.6667V11.3334M4.66666 7.33335L7.99999 10.6667M7.99999 10.6667L11.3333 7.33335M7.99999 10.6667V2.66669" />
</IconBase>
