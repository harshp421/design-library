<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "upload",
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
  <path d="M2.66667 11.3333V12.6667C2.66667 13.0203 2.80715 13.3594 3.0572 13.6095C3.30724 13.8595 3.64638 14 4.00001 14H12C12.3536 14 12.6928 13.8595 12.9428 13.6095C13.1929 13.3594 13.3333 13.0203 13.3333 12.6667V11.3333M4.66667 5.99999L8.00001 2.66666M8.00001 2.66666L11.3333 5.99999M8.00001 2.66666V10.6667" />
</IconBase>
