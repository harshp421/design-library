<script lang="ts">
    import authorisation from "$lib/api/authorisation";
    import favicon from "$lib/assets/favicon.svg";
    import LS from "$lib/wrappers/localStorage";
    import * as Sidebar from "$lib/components/layout/sidebar/index.js";
    import { onMount } from "svelte";
    import {
        fetchAppStartupData,
        hasAppStartupData,
        getDeviceData,
    } from "$lib/api/core";
    import { get } from "svelte/store";
    import NavSidebar from "./_component/(sidebar)/nav-sidebar.svelte";
    import HeaderPageNavigation from "$lib/components/layout/header/header-page-navigation.svelte";
    import ThemeSwitch from "$lib/components/shared/theme-switch";

    let { children } = $props();
    const handleLogout = () => {
        authorisation.logOut();
    };
    let isSidebarOpen = $state(true);
    const toggleSidebar = () => {
        isSidebarOpen = !isSidebarOpen;
    };

    let hasCoreData = $state(hasAppStartupData());
    let error: unknown = $state(null);
    let loading = $state(false);
    onMount(async () => {
        hasCoreData = hasAppStartupData();
        error = null;
        loading = true;
        try {
            const currentDeviceIds =
                get(LS.devices.raw)
                    ?.map((x) => x.deviceId)
                    .sort((x, y) => x.localeCompare(y))
                    .join(",") ?? "";
            const jobs: Promise<any>[] = [];
            const startUpCall = fetchAppStartupData();
            jobs.push(startUpCall);
            if (currentDeviceIds) {
                jobs.push(getDeviceData(currentDeviceIds.split(",")));
            }
            const deviceDataCall = startUpCall.then(() => {
                const newDeviceIds =
                    get(LS.devices.raw)
                        ?.map((x) => x.deviceId)
                        .sort((x, y) => x.localeCompare(y))
                        .join(",") ?? "";
                if (newDeviceIds !== currentDeviceIds) {
                    return getDeviceData(newDeviceIds.split(","));
                }
            });
            jobs.push(deviceDataCall);
            await Promise.all(jobs);
            hasCoreData = hasAppStartupData();
            error = null;
        } catch (err) {
            hasCoreData = hasAppStartupData();
            error = err;
        } finally {
            loading = false;
        }
    });
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<Sidebar.Provider>
    <NavSidebar />
    <Sidebar.Inset>
        <!-- Content -->
        <main class="flex-1 overflow-hidden p-4">
            <div class="block md:hidden">
                <HeaderPageNavigation>
                    <div class="flex justify-between items-center">
                        <h6>Oizom</h6>
                        <div class="flex gap-2 justify-center items-center">
                            <div class="md:hidden">
                                <Sidebar.Trigger />
                            </div>
                            <ThemeSwitch size="sm" />
                        </div>
                    </div>
                </HeaderPageNavigation>
            </div>
            <div class="hidden md:block">
                <HeaderPageNavigation>
                    <div class="flex justify-end">
                        <ThemeSwitch size="sm" />
                    </div>
                </HeaderPageNavigation>
            </div>
            {#if hasCoreData}
                {#if loading}
                    Loading...
                {/if}
                <div class="overflow-y-scroll h-full w-full">
                    {@render children?.()}
                </div>
            {:else if error}
                {error}
            {:else}
                loading...
            {/if}
        </main>
    </Sidebar.Inset>
</Sidebar.Provider>
