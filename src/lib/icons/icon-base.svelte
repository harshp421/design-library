<script lang="ts">
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    strokeWidth = 1,
    fill = "none",
    children,
    ariaLabel = "icon",
    ...restProps
  }: {
    size?: number | string;
    color?: string;
    className?: string;
    style?: string;
    strokeWidth?: number | string;
    fill?: string;
    restProps?: Record<string, any>;
    ariaLabel?: string;
    children: any;
  } = $props();
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 18 16"
  {fill}
  stroke={color}
  class={className}
  {style}
  stroke-width={strokeWidth}
  stroke-linecap="round"
  stroke-linejoin="round"
  
  {...restProps}
 aria-label={ariaLabel}
>
  	{@render children?.()}
</svg>
