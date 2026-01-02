<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "flag2",
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
  <path d="M3.33333 9.33332C3.95642 8.72256 4.79415 8.38046 5.66666 8.38046C6.53917 8.38046 7.3769 8.72256 8 9.33332C8.62309 9.94408 9.46082 10.2862 10.3333 10.2862C11.2058 10.2862 12.0436 9.94408 12.6667 9.33332V3.33332C12.0436 3.94408 11.2058 4.28618 10.3333 4.28618C9.46082 4.28618 8.62309 3.94408 8 3.33332C7.3769 2.72256 6.53917 2.38046 5.66666 2.38046C4.79415 2.38046 3.95642 2.72256 3.33333 3.33332V9.33332ZM3.33333 9.33332V14" />
</IconBase>
