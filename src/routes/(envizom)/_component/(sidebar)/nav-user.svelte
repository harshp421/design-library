<script lang="ts">
    import * as Avatar from "$lib/components/ui/avatar/index.js";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
    import * as Sidebar from "$lib/components/layout/sidebar/index.js";
    import IconDots from "$lib/icons/icon-dots.svelte";
    import authorisation from "$lib/api/authorisation";
    
    let { user }: { user: { name: string; email: string; avatar: string } } =
        $props();
    const sidebar = Sidebar.useSidebar();
</script>


<Sidebar.Menu>
    <Sidebar.MenuItem>
        <DropdownMenu.Root >
            <DropdownMenu.Trigger>
                {#snippet child({ props })}
                    <Sidebar.MenuButton
                        {...props}
                        size="lg"
                        class="bg-surface-neutral-action-default hover:bg-surface-primary-L3 text-text-neutral-primary h-[var(--jumper-nav-tab-height)] "
                    >
                        <Avatar.Root class="h-[var( --jumper-nav-user-profile)] w-[var( --jumper-nav-user-profile)] rounded-lg  ">
                            <Avatar.Image src={user.avatar} alt={user.name} />
                            <Avatar.Fallback class="rounded-lg"
                                >CN</Avatar.Fallback
                            >
                        </Avatar.Root>
                        <div
                            class="grid flex-1 text-start text-sm leading-tight"
                        >
                            <span class="truncate text-p-small font-medium space-x-0.5">{user.name}</span
                            >
                          
                        </div>
                       <div class="flex justify-center items-cente text-icon-neutral-tertiary">
                          <IconDots/>
                       </div>
                         
                    </Sidebar.MenuButton>
                {/snippet}
            </DropdownMenu.Trigger>
            <DropdownMenu.Content
                class="w-(--bits-dropdown-menu-anchor-width) min-w-3xs rounded-lg"
                side={sidebar.isMobile ? "bottom" : "right"}
                align="end"
                sideOffset={4}
            >
                <DropdownMenu.Label class="p-0 font-normal">
                    <div
                        class="flex items-center gap-2 px-1 py-1.5 text-start text-sm"
                    >
                        <Avatar.Root class="size-8 rounded-lg">
                            <Avatar.Image src={user.avatar} alt={user.name} />
                            <Avatar.Fallback class="rounded-lg"
                                >CN</Avatar.Fallback
                            >
                        </Avatar.Root>
                        <div
                            class="grid flex-1 text-start text-sm leading-tight"
                        >
                            <span class="truncate font-medium">{user.name}</span
                            >
                            <span
                                class="text-muted-foreground truncate text-xs"
                            >
                                {user.email}
                            </span>
                        </div>
                    </div>
                </DropdownMenu.Label>
                <DropdownMenu.Separator />
                <DropdownMenu.Group>
                    <DropdownMenu.Item>Account</DropdownMenu.Item>
                    <DropdownMenu.Item>Billing</DropdownMenu.Item>
                    <DropdownMenu.Item>Notifications</DropdownMenu.Item>
                </DropdownMenu.Group>
                <DropdownMenu.Separator />
                <DropdownMenu.Item onclick={() => authorisation.logOut()}>Log out</DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    </Sidebar.MenuItem>
</Sidebar.Menu>
