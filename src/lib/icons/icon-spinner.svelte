<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "spinner",
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
  <path d="M8 3.16669V4.16669M11.4177 4.58234L10.7106 5.28944M12.8333 8.00001H11.8333M11.4177 11.4177L10.7106 10.7106M8 11.8334V12.8334M5.28943 10.7106L4.58232 11.4177M4.16666 8H3.16666M5.28943 5.28944L4.58232 4.58234" />
</IconBase>
