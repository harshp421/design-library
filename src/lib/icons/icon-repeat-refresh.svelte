<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "repeat refresh",
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
  <path d="M13.3333 7.33334C13.1703 6.16015 12.6261 5.07311 11.7844 4.23967C10.9428 3.40623 9.85051 2.87262 8.67579 2.72104C7.50106 2.56947 6.30909 2.80833 5.28347 3.40084C4.25786 3.99335 3.4555 4.90663 3.00001 6.00001M2.66667 3.33334V6.00001H5.33334M2.66667 8.66667C2.82971 9.83985 3.37396 10.9269 4.21558 11.7603C5.0572 12.5938 6.1495 13.1274 7.32422 13.279C8.49895 13.4305 9.69092 13.1917 10.7165 12.5992C11.7422 12.0067 12.5445 11.0934 13 10M13.3333 12.6667V10H10.6667" />
</IconBase>
