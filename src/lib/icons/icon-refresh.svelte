<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "refresh",
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
  <path d="M13.2887 8.69399C13.1628 9.65396 12.7779 10.5616 12.1754 11.3194C11.5729 12.0773 10.7755 12.6569 9.86863 12.996C8.96177 13.3351 7.97971 13.421 7.02776 13.2444C6.07581 13.0678 5.1899 12.6354 4.46502 11.9935C3.74015 11.3517 3.20367 10.5246 2.9131 9.60109C2.62254 8.67753 2.58887 7.69229 2.81569 6.75105C3.04252 5.8098 3.52128 4.94805 4.20064 4.25823C4.88 3.5684 5.73432 3.07651 6.67199 2.83532C9.27132 2.16866 11.962 3.50666 12.9553 5.99999M13.3333 2.66665V5.99998H9.99999" />
</IconBase>
