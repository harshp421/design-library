<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "displays",
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
  <path d="M2.66666 8.59255H13.3333M5.62962 13.3333H10.3704M6.8148 10.9629L6.51851 13.3333M9.18518 10.9629L9.48147 13.3333M2.66666 3.25922C2.66666 3.10205 2.72909 2.95132 2.84022 2.84019C2.95136 2.72906 3.10208 2.66663 3.25925 2.66663H12.7407C12.8979 2.66663 13.0486 2.72906 13.1598 2.84019C13.2709 2.95132 13.3333 3.10205 13.3333 3.25922V10.3703C13.3333 10.5275 13.2709 10.6782 13.1598 10.7894C13.0486 10.9005 12.8979 10.9629 12.7407 10.9629H3.25925C3.10208 10.9629 2.95136 10.9005 2.84022 10.7894C2.72909 10.6782 2.66666 10.5275 2.66666 10.3703V3.25922Z" />
</IconBase>
