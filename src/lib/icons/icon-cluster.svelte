<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "cluster",
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
  <path d="M8 6.21334C8.79333 6.21334 9.44 5.56668 9.44 4.77334C9.44 3.98001 8.79333 3.33334 8 3.33334C7.20667 3.33334 6.56 3.98001 6.56 4.77334C6.56 5.56668 7.20667 6.21334 8 6.21334Z" stroke-opacity="0.56"/>
  <path d="M4.52667 12.6667C5.32 12.6667 5.96667 12.02 5.96667 11.2267C5.96667 10.4333 5.32 9.78668 4.52667 9.78668C3.73333 9.78668 3.08667 10.4333 3.08667 11.2267C3.08667 12.02 3.72667 12.6667 4.52667 12.6667Z" stroke-opacity="0.56"/>
  <path d="M11.4733 12.6667C12.2667 12.6667 12.9133 12.02 12.9133 11.2267C12.9133 10.4333 12.2667 9.78668 11.4733 9.78668C10.68 9.78668 10.0333 10.4333 10.0333 11.2267C10.0333 12.02 10.68 12.6667 11.4733 12.6667Z" stroke-opacity="0.56"/>
</IconBase>
