<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "divide",
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
  <path d="M3.33333 8.00001H12.6667M8.66667 4.00001C8.66667 4.3682 8.36819 4.66668 8 4.66668C7.63181 4.66668 7.33333 4.3682 7.33333 4.00001C7.33333 3.63182 7.63181 3.33334 8 3.33334C8.36819 3.33334 8.66667 3.63182 8.66667 4.00001ZM8.66667 12C8.66667 12.3682 8.36819 12.6667 8 12.6667C7.63181 12.6667 7.33333 12.3682 7.33333 12C7.33333 11.6318 7.63181 11.3333 8 11.3333C8.36819 11.3333 8.66667 11.6318 8.66667 12Z" />
</IconBase>
