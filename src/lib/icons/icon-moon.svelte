<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "moon",
    fill = "none",
    ...restProps
  }: {
    size?: number | string;
    color?: string;
    className?: string;
    style?: string;
    ariaLabel?: string;
    fill?: string;
    restProps?: Record<string, any>;
  } = $props();
</script>

<IconBase {size} {color} {fill} {className} {style} ariaLabel={ariaLabel} {...restProps}>
  <path d="M12.5909 9.83708C12.5139 9.71102 12.2972 9.51491 11.7578 9.60829C11.4593 9.65966 11.1559 9.683 10.8525 9.66899C9.73046 9.6223 8.71436 9.1227 8.00646 8.3523C7.38043 7.67527 6.99518 6.7928 6.99036 5.8403C6.99036 5.30801 7.0963 4.79441 7.31301 4.30882C7.5249 3.83723 7.37561 3.58977 7.26967 3.48705C7.15891 3.37966 6.89886 3.23024 6.38841 3.43569C4.41881 4.23878 3.20045 6.15313 3.34492 8.20288C3.48939 10.1312 4.88593 11.7794 6.73513 12.4004C7.17817 12.5499 7.64529 12.6386 8.12685 12.6572C8.2039 12.6619 8.28095 12.6666 8.358 12.6666C9.97124 12.6666 11.4834 11.9289 12.4368 10.6729C12.7595 10.2386 12.6728 9.96315 12.5909 9.83708Z" />
</IconBase>
