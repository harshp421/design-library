<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "focus",
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
  <path d="M3.2 8C3.2 9.27304 3.70571 10.4939 4.60589 11.3941C5.50606 12.2943 6.72696 12.8 8 12.8M3.2 8C3.2 6.72696 3.70571 5.50606 4.60589 4.60589C5.50606 3.70571 6.72696 3.2 8 3.2M3.2 8H2M8 12.8C9.27304 12.8 10.4939 12.2943 11.3941 11.3941C12.2943 10.4939 12.8 9.27304 12.8 8M8 12.8V14M12.8 8C12.8 6.72696 12.2943 5.50606 11.3941 4.60589C10.4939 3.70571 9.27304 3.2 8 3.2M12.8 8H14M8 3.2V2M6.2 8C6.2 8.47739 6.38964 8.93523 6.72721 9.27279C7.06477 9.61036 7.52261 9.8 8 9.8C8.47739 9.8 8.93523 9.61036 9.27279 9.27279C9.61036 8.93523 9.8 8.47739 9.8 8C9.8 7.52261 9.61036 7.06477 9.27279 6.72721C8.93523 6.38964 8.47739 6.2 8 6.2C7.52261 6.2 7.06477 6.38964 6.72721 6.72721C6.38964 7.06477 6.2 7.52261 6.2 8Z" />
</IconBase>
