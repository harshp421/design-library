<script lang="ts">
    import * as Sidebar from "$lib/components/layout/sidebar/index.js";
    import { page } from "$app/stores";
    import { NAV_PRIMARY, NAV_SECONDARY } from "$lib/constants/app";
    import NavSecondary from "./nav-secondary.svelte";
    import NavUser from "./nav-user.svelte";
    const activePath = $derived($page.url.pathname);
    let user = {
        name: "harsh parmar",
        email: "hardh@oizom.com",
        avatar: "https://github.com/shadcn.png",
    };
</script>

<Sidebar.Root collapsible="icon" variant="inset">
    <Sidebar.MainHeader>
        <Sidebar.MenuButton>
            <a href="/overview" class="flex items-center gap-16">
                <span class="sr-only">Go to home</span>
                <!-- Oizom Logo SVG -->
                <img src="/logo.svg" alt="Oizom Logo" />
                <p class="truncate">Oizom Design Library</p>
            </a>
        </Sidebar.MenuButton>
    </Sidebar.MainHeader>
    <Sidebar.Separator />
    <Sidebar.Header>
        <Sidebar.MenuButton>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                aria-hidden="true"
            >
                <path
                    d="M6.03517 8.46589C6.40892 7.18745 7.84251 5.87332 9.23718 5.53071L17.9322 3.39472C19.3268 3.05211 20.1544 3.81076 19.7807 5.0892L17.4505 13.0596C17.0768 14.3381 15.6432 15.6522 14.2485 15.9948L5.55352 18.1308C4.15886 18.4734 3.33125 17.7148 3.705 16.4363L6.03517 8.46589Z"
                    fill="#9E77ED"
                />
                <path
                    d="M2.54933 5.27058C2.92308 3.99214 4.35667 2.67801 5.75134 2.3354L14.4463 0.199412C15.841 -0.143198 16.6686 0.615447 16.2949 1.89389L13.9647 9.86431C13.5909 11.1428 12.1573 12.4569 10.7627 12.7995L2.06769 14.9355C0.673018 15.2781 -0.154595 14.5194 0.219161 13.241L2.54933 5.27058Z"
                    fill="#6941C6"
                />
            </svg>
            <span>Oizom</span>
        </Sidebar.MenuButton>
    </Sidebar.Header>
    <Sidebar.Separator />
    <Sidebar.Content>
        <Sidebar.Group>
            <Sidebar.GroupContent>
                <Sidebar.Menu>
                    {#each NAV_PRIMARY as item (item.url)}
                        <Sidebar.MenuItem>
                            <Sidebar.MenuButton
                                tooltipContent={item.title}
                                isActive={activePath === item.url}
                            >
                                {#snippet child({ props })}
                                    <a href={item.url} {...props}>
                                        <item.icon />
                                        <span class="truncate"
                                            >{item.title}</span
                                        >
                                    </a>
                                {/snippet}
                            </Sidebar.MenuButton>
                        </Sidebar.MenuItem>
                    {/each}
                </Sidebar.Menu>
            </Sidebar.GroupContent>
        </Sidebar.Group>
        <NavSecondary items={NAV_SECONDARY} class="mt-auto" />
    </Sidebar.Content>
    <Sidebar.Separator />
    <Sidebar.Footer>
        <NavUser {user} />
    </Sidebar.Footer>
</Sidebar.Root>
