<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "calendar edit",
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
  <path d="M5.77777 2.44446V4.11112" />
  <path d="M10.2222 2.44446V4.11112" />
  <path d="M3.27777 6.38336H12.7222" />
  <path d="M12.0056 10.0945L10.0389 12.0611C9.96113 12.1389 9.88889 12.2834 9.87223 12.3889L9.76667 13.1389C9.72778 13.4111 9.91668 13.6 10.1889 13.5611L10.9389 13.4556C11.0445 13.4389 11.1945 13.3667 11.2667 13.2889L13.2333 11.3223C13.5722 10.9834 13.7333 10.5889 13.2333 10.0889C12.7389 9.59447 12.3444 9.75557 12.0056 10.0945Z" />
  <path d="M11.7222 10.3778C11.8889 10.9778 12.3556 11.4445 12.9556 11.6111" />
  <path d="M8 13.5555H5.77778C3.83333 13.5555 3 12.4444 3 10.7778V6.05555C3 4.38888 3.83333 3.27777 5.77778 3.27777H10.2222C12.1667 3.27777 13 4.38888 13 6.05555V7.99999" />
  <path d="M7.99747 8.94446H8.00246" />
  <path d="M5.94129 8.94446H5.94628" />
  <path d="M5.94129 10.6111H5.94628" />
</IconBase>
