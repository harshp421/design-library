<script lang="ts">
    import favicon from "$lib/assets/favicon.svg";
    import { goto } from "$app/navigation";
    import { page } from "$app/state";
    import authorisation from "$lib/api/authorisation";
    import APP_CONSTS from "$lib/constants/app";
    import { createAsyncStore } from "$lib/wrappers/asyncStore";
    import { onMount } from "svelte";
    import Input from "$lib/components/ui/input/input.svelte";
    import Button from "$lib/components/ui/button/button.svelte";
    let email = $state("");
    let password = $state("");
    const shareToken = $derived(page.url.searchParams.get("integration"));

    const { execute, isLoading } = createAsyncStore(authorisation.login, {
        showToastOnError: true,
        showToastOnSuccess: true,
    });

    async function handleTokenLogin(token: string) {
        await execute({ share_token: token });
        goto(APP_CONSTS.ROUTES.THEME);
    }

    const handleLogin = async () => {
        await execute({ email, password });
        goto(APP_CONSTS.ROUTES.THEME);
    };

    onMount(() => {
        if (shareToken) handleTokenLogin(shareToken);
    });
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<div class="flex h-screen bg-white">
    <!-- Left Side - Branding -->
    <div
        class="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 flex-col items-center justify-center p-12"
    >
        <div class="text-white text-center">
            <h2 class="text-5xl font-bold mb-4">Welcome Back</h2>
            <p class="text-xl text-blue-100 mb-8">
                Manage your projects efficiently
            </p>
            <div class="space-y-4">
                <div class="flex items-center text-lg">
                    <span class="mr-3 text-2xl">✓</span>
                    <span>Secure & Fast</span>
                </div>
                <div class="flex items-center text-lg">
                    <span class="mr-3 text-2xl">✓</span>
                    <span>Easy to Use</span>
                </div>
                <div class="flex items-center text-lg">
                    <span class="mr-3 text-2xl">✓</span>
                    <span>Always Available</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Right Side - Login Form -->
    <div class="w-full lg:w-1/2 flex flex-col items-center justify-center p-6">
        {#if shareToken}
            <div class="text-center">
                {#if $isLoading}
                    <div class="flex flex-col items-center">
                        <div
                            class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"
                        ></div>
                        <p class="text-lg text-gray-600">Logging you in...</p>
                    </div>
                {:else}
                    <p class="text-lg text-red-600">Error, failed to login!</p>
                {/if}
            </div>
        {:else}
            <div class="w-full max-w-md">
                <div class="mb-8">
                    <h1 class="text-4xl font-bold text-gray-900 mb-2">Login</h1>
                    <p class="text-gray-600">
                        Sign in to your account to continue
                    </p>
                </div>

                <form onsubmit={handleLogin} class="space-y-5">
                    <Input
                        type="email"
                        placeholder="Email Address"
                        bind:value={email}
                        required
                    />

                    <Input
                        type="password"
                        placeholder="Password"
                        bind:value={password}
                        required
                    />

                    <Button disabled={$isLoading || !email || !password} variant="primary" type="submit" class="w-full">
                        {#if $isLoading}
                            <div
                                class="animate-spin rounded-full h-5 w-5 border-b-2 border-white"
                            ></div>
                        {:else}
                            Login
                        {/if}
                    </Button>
                </form>

                <div class="mt-6 text-center">
                    <a
                        href="/forgot-password"
                        class="text-sm text-blue-600 hover:text-blue-700 font-medium"
                    >
                        Forgot your password?
                    </a>
                </div>

                <div
                    class="mt-6 pt-6 border-t border-gray-200 text-center text-sm text-gray-600"
                >
                    Don't have an account?
                    <a
                        href="/auth/register"
                        class="text-blue-600 hover:text-blue-700 font-medium"
                    >
                        Sign up
                    </a>
                </div>
            </div>
        {/if}
    </div>
</div>
