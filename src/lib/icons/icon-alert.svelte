<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "alert",
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
  <path d="M2.66663 13.3333V9.33325C2.66663 6.38773 5.05444 3.99992 7.99996 3.99992C10.9455 3.99992 13.3333 6.38773 13.3333 9.33325V13.3333H14V14.6666H1.99996V13.3333H2.66663ZM3.99996 9.33325H5.3333C5.3333 7.86052 6.5272 6.66658 7.99996 6.66658V5.33325C5.79082 5.33325 3.99996 7.12412 3.99996 9.33325ZM7.33329 1.33325H8.66662V3.33325H7.33329V1.33325ZM13.1854 3.20499L14.1282 4.1478L12.714 5.56202L11.7712 4.6192L13.1854 3.20499ZM1.8717 4.1478L2.81451 3.20499L4.22872 4.6192L3.28592 5.56202L1.8717 4.1478Z" fill="#687076"/>
</IconBase>
