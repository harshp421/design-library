<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "add circle",
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
  <path d="M8.00001 1.33333C4.32668 1.33333 1.33334 4.32666 1.33334 7.99999C1.33334 11.6733 4.32668 14.6667 8.00001 14.6667C11.6733 14.6667 14.6667 11.6733 14.6667 7.99999C14.6667 4.32666 11.6733 1.33333 8.00001 1.33333ZM10.6667 8.49999H8.50001V10.6667C8.50001 10.94 8.27334 11.1667 8.00001 11.1667C7.72668 11.1667 7.50001 10.94 7.50001 10.6667V8.49999H5.33334C5.06001 8.49999 4.83334 8.27333 4.83334 7.99999C4.83334 7.72666 5.06001 7.49999 5.33334 7.49999H7.50001V5.33333C7.50001 5.05999 7.72668 4.83333 8.00001 4.83333C8.27334 4.83333 8.50001 5.05999 8.50001 5.33333V7.49999H10.6667C10.94 7.49999 11.1667 7.72666 11.1667 7.99999C11.1667 8.27333 10.94 8.49999 10.6667 8.49999Z" fill="white"/>
</IconBase>
