<script>
    import Button from "$lib/components/ui/button/button.svelte";
    import Footer from "$lib/components/layout/footer/footer.svelte";
    import HeaderPageInfo from "$lib/components/layout/header/header-page-info.svelte";
    import HeaderPageNavigation from "$lib/components/layout/header/header-page-navigation.svelte";
    import HeaderSystemNavigation from "$lib/components/layout/header/header-system-navigation.svelte";
    import HeaderToolbar from "$lib/components/layout/header/header-toolbar.svelte";
    import HeaderWrapper from "$lib/components/layout/header/header-wrapper.svelte";
    import PropertyPanelProvider from "$lib/components/shared/property-panel/property-panel-provider.svelte";
    import PropertyPanel from "$lib/components/shared/property-panel/property-panel.svelte";
    import ProperyPanelFooter from "$lib/components/shared/property-panel/propery-panel-footer.svelte";
    import ProperyPanelHeader from "$lib/components/shared/property-panel/propery-panel-header.svelte";
    import * as Sidebar from "$lib/components/layout/sidebar/index.js";
    import AppSidebar from "./_component/app-sidebar.svelte";
    let { children } = $props();
    import * as Dialog from "$lib/components/ui/dialog/index.js";
    import ThemeSwitch from "$lib/components/shared/theme-switch";
    let open = $state(false);
</script>

<div>
    <Sidebar.Provider>
        <PropertyPanelProvider>
            <Dialog.Root>
                <AppSidebar />
                <Sidebar.Inset>
                    <main>
                        <HeaderToolbar>
                            <div class="flex justify-between items-center">
                                <h6>Oizom Design Library</h6>

                                <div class="flex gap-2">
                                    <div class="md:hidden">
                                        <Sidebar.Trigger />
                                    </div>
                                    <ThemeSwitch size="sm" />
                                </div>
                            </div>
                        </HeaderToolbar>
                        <HeaderWrapper>
                            <HeaderPageInfo>
                                <p>page info</p>
                            </HeaderPageInfo>
                            <HeaderPageNavigation>
                                <p>page navigation</p>
                            </HeaderPageNavigation>
                            <HeaderSystemNavigation>
                                <p>system navigation</p>
                            </HeaderSystemNavigation>
                        </HeaderWrapper>
                        <div class="flex flex-col">
                            <div>
                                <Button onclick={() => (open = !open)}
                                    >open property panel</Button
                                >
                            </div>
                            <Dialog.Trigger>Open</Dialog.Trigger>
                        </div>
                        {@render children?.()}
                        <Footer>
                            <p>footer content</p>
                        </Footer>
                    </main>
                </Sidebar.Inset>
                <PropertyPanel {open} onOpenChange={(v) => (open = v)}>
                    <ProperyPanelHeader>
                        <h6>Property Panel</h6>
                    </ProperyPanelHeader>
                    <ProperyPanelFooter>
                        <p>footer content</p>
                    </ProperyPanelFooter>
                </PropertyPanel>

                <Dialog.Content>
                    <Dialog.Header>
                        <Dialog.Title
                            >Are you sure absolutely sure?</Dialog.Title
                        >
                        <Dialog.Description>
                            This action cannot be undone. This will permanently
                            delete your account and remove your data from our
                            servers.
                        </Dialog.Description>
                    </Dialog.Header>
                </Dialog.Content>
            </Dialog.Root>
        </PropertyPanelProvider>
    </Sidebar.Provider>
</div>
