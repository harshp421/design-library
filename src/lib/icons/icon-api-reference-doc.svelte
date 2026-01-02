<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "api reference doc",
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
  <path d="M8 12.6666C7.08788 12.14 6.05322 11.8628 5 11.8628C3.94678 11.8628 2.91212 12.14 2 12.6666V3.99995C2.91212 3.47334 3.94678 3.19611 5 3.19611C6.05322 3.19611 7.08788 3.47334 8 3.99995M8 12.6666C8.91212 12.14 9.94678 11.8628 11 11.8628C12.0532 11.8628 13.0879 12.14 14 12.6666V3.99995C13.0879 3.47334 12.0532 3.19611 11 3.19611C9.94678 3.19611 8.91212 3.47334 8 3.99995M8 12.6666V3.99995" />
</IconBase>
