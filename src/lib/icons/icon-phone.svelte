<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "phone",
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
  <path d="M3.33333 2.66667H6L7.33333 6L5.66667 7C6.38064 8.44769 7.55231 9.61937 9 10.3333L10 8.66667L13.3333 10V12.6667C13.3333 13.0203 13.1929 13.3594 12.9428 13.6095C12.6928 13.8595 12.3536 14 12 14C9.39951 13.842 6.94677 12.7377 5.10455 10.8955C3.26234 9.05324 2.15803 6.6005 2 4.00001C2 3.64638 2.14048 3.30724 2.39052 3.0572C2.64057 2.80715 2.97971 2.66667 3.33333 2.66667Z" />
</IconBase>
