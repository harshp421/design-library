<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "filter",
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
  <path d="M2.66666 2.66663H13.3333V4.11463C13.3332 4.46822 13.1927 4.8073 12.9427 5.05729L9.99999 7.99996V12.6666L5.99999 14V8.33329L3.01332 5.04796C2.79029 4.80258 2.66669 4.48289 2.66666 4.15129V2.66663Z" />
</IconBase>
