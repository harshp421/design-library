<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "complains",
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
  <path d="M5.66659 12.6666H5.33325C2.66659 12.6666 1.33325 11.9999 1.33325 8.66659V5.33325C1.33325 2.66659 2.66659 1.33325 5.33325 1.33325H10.6666C13.3333 1.33325 14.6666 2.66659 14.6666 5.33325V8.66659C14.6666 11.3333 13.3333 12.6666 10.6666 12.6666H10.3333C10.1266 12.6666 9.92659 12.7666 9.79992 12.9333L8.79992 14.2666C8.35992 14.8533 7.63992 14.8533 7.19992 14.2666L6.19992 12.9333C6.09325 12.7866 5.84659 12.6666 5.66659 12.6666Z" />
  <path d="M10.6644 7.33333H10.6704" />
  <path d="M7.99691 7.33333H8.0029" />
  <path d="M5.32967 7.33333H5.33566" />
</IconBase>
