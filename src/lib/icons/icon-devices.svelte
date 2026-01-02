<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "devices",
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
  <path d="M3.33334 11.7334V4.26675C3.33334 3.38309 4.04969 2.66675 4.93334 2.66675H11.0667C11.9503 2.66675 12.6667 3.38309 12.6667 4.26675V11.7334C12.6667 12.6171 11.9503 13.3334 11.0667 13.3334H4.93334C4.04969 13.3334 3.33334 12.6171 3.33334 11.7334Z" />
  <path d="M7.40469 13.2833V2.7168" />
  <path d="M8.39999 13.2833V2.7168" />
</IconBase>
