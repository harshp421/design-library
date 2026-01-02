<script lang="ts">
    import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  onMount(() => {
    window.logStatus(import.meta.env.IS_DEV_MODE);
    goto("/theme");
  });

</script>

<h1 class="text-3xl">Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
  documentation
</p>
