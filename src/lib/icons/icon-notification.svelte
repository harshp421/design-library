<script lang="ts">
  import IconBase from "./icon-base.svelte";
  const {
    size = 24,
    color = "currentColor",
    className = "",
    style = "",
    ariaLabel = "notification",
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
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00001 11.8984C11.7595 11.8984 13.4987 11.4161 13.6667 9.48032C13.6667 7.54584 12.4541 7.67024 12.4541 5.29672C12.4541 3.44274 10.6968 1.33331 8.00001 1.33331C5.30319 1.33331 3.54591 3.44274 3.54591 5.29672C3.54591 7.67024 2.33334 7.54584 2.33334 9.48032C2.50198 11.4234 4.24119 11.8984 8.00001 11.8984Z" />
  <path d="M9.59253 13.9048C8.68311 14.9146 7.26444 14.9266 6.34631 13.9048" />
</IconBase>
