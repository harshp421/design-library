<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/state";
    import favicon from "$lib/assets/favicon.svg";
    import { onMount } from "svelte";
    import "../app.css";
    import LS from "$lib/wrappers/localStorage";
    import "$lib/wrappers/console";
    let showChild = $state(false);
    let initStorage = $state(false);
    onMount(() => {
        const accessToken = page.url.searchParams.get("accessToken");
        try {
            LS.initializeStorage(!!accessToken);
            if (accessToken) LS.accessToken.set(accessToken);
        } catch (e) {
            console.error("Failed to initialize storage", e);
            if (typeof LS.clear === "function") LS.clear();
        } finally {
            initStorage = true;
        }
    });
    // $effect(function checkRedirects() {
    //     if (!initStorage) return;
    //     if (page.route.id === "/(auth)/login" || page.route.id === "/(auth)/forgot-password") {
    //         LS.clear();
    //         showChild = true;
    //     } else {
    //         if (LS.accessToken.exists()) {
    //             showChild = true;
    //         } else {
    //             showChild = false;
    //             goto("/login");
    //         }
    //     }
    // });

    $effect(function checkRedirects() {
        if (!initStorage) return;
        const authRoutes = [
            "/(auth)/login",
            "/(auth)/register",
            "/(auth)/forgot-password",
            "/(auth)/reset-password",
        ];
        if (authRoutes.includes(page.route.id ?? "")) {
            LS.clear();
            showChild = true;
        } else {
            if (LS.accessToken.exists()) {
                showChild = true;
            } else {
                showChild = false;
                goto("/login");
            }
        }
    });
    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<!-- Full viewport layout -->
<div class="h-screen flex flex-col">
    <main class="flex-1">
        {#if showChild && initStorage}
            {@render children?.()}
        {/if}
    </main>
</div>
