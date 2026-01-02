<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "search off",
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
  <path d="M3.35935 3.37464C2.92642 3.80844 2.58318 4.32326 2.34922 4.88972C2.11526 5.45617 1.99516 6.06316 1.99578 6.67602C1.99703 7.91376 2.48992 9.10031 3.36601 9.97464C4.24211 10.849 5.42965 11.3395 6.66739 11.3382C7.90513 11.337 9.09168 10.8441 9.96601 9.96798M11.022 8.34531C11.3473 7.50299 11.4212 6.5844 11.2348 5.7009C11.0485 4.8174 10.6098 4.00695 9.97197 3.3678C9.33417 2.72865 8.52464 2.28827 7.64153 2.10003C6.75843 1.91179 5.83968 1.9838 4.99668 2.30731M2.00001 1.99998L14 14" />
</IconBase>
