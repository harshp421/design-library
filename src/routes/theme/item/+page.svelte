<script lang="ts">
    import Item from "$lib/components/ui/item/item.svelte";
    import ItemHeader from "$lib/components/ui/item/item-header.svelte";
    import ItemContent from "$lib/components/ui/item/item-content.svelte";
    import ItemTitle from "$lib/components/ui/item/item-title.svelte";
    import ItemDescription from "$lib/components/ui/item/item-description.svelte";
    import ItemMedia from "$lib/components/ui/item/item-media.svelte";
    import ItemActions from "$lib/components/ui/item/item-actions.svelte";
    import ItemFooter from "$lib/components/ui/item/item-footer.svelte";
    import ItemGroup from "$lib/components/ui/item/item-group.svelte";
    import Button from "$lib/components/ui/button/button.svelte";
    import Badge from "$lib/components/ui/badge/badge.svelte";
    import IconUsersPlus from "$lib/icons/icon-users-plus.svelte";
    import IconMail from "$lib/icons/icon-mail.svelte";
    import IconPhone from "$lib/icons/icon-phone.svelte";
    import IconFlag from "$lib/icons/icon-flag.svelte";
    import IconCalendar from "$lib/icons/icon-calendar.svelte";
    import IconCheck from "$lib/icons/icon-check.svelte";
   

    const variants = [
        { value: "default" as const, label: "Default" },
        { value: "outline" as const, label: "Outline" },
        { value: "muted" as const, label: "Muted" },
    ];

    const sizes = [
        { value: "default" as const, label: "Default" },
        { value: "sm" as const, label: "Small" },
    ];

    const mediaVariants = [
        { value: "default" as const, label: "Default" },
        { value: "icon" as const, label: "Icon" },
        { value: "image" as const, label: "Image" },
    ];

    let variant = $state<typeof variants[number]["value"]>("default");
    let size = $state<typeof sizes[number]["value"]>("default");
    let mediaVariant = $state<typeof mediaVariants[number]["value"]>("icon");
    let showMedia = $state(true);
    let showActions = $state(true);
    let showFooter = $state(false);
    let copiedCode = $state("");

    const card = "rounded-xl border bg-gradient-to-br from-card to-muted/20";
    const buttonToggle = "px-3 py-2 text-sm rounded-lg border-2 transition-all hover:scale-105";

    function copyCode(code: string) {
        navigator.clipboard.writeText(code);
        copiedCode = code;
        setTimeout(() => (copiedCode = ""), 2000);
    }

    function getItemCode() {
        const variantAttr = variant !== "default" ? ` variant="${variant}"` : "";
        const sizeAttr = size !== "default" ? ` size="${size}"` : "";
        const mediaCode = showMedia
            ? `\n  <ItemMedia variant="${mediaVariant}">\n    <UserIcon class="size-4" />\n  </ItemMedia>`
            : "";
        const actionsCode = showActions
            ? `\n  <ItemActions>\n    <Button size="sm" variant="ghost">Edit</Button>\n  </ItemActions>`
            : "";
        const footerCode = showFooter
            ? `\n  <ItemFooter>\n    <span class="text-xs text-muted-foreground">Footer content</span>\n  </ItemFooter>`
            : "";

        return `<Item${variantAttr}${sizeAttr}>${mediaCode}
  <ItemContent>
    <ItemHeader>
      <ItemTitle>Item Title</ItemTitle>
    </ItemHeader>
    <ItemDescription>
      Item description goes here
    </ItemDescription>
  </ItemContent>${actionsCode}${footerCode}
</Item>`;
    }
</script>

<div class="min-h-screen bg-gradient-to-b from-background to-muted/20">
    <div class="container max-w-6xl mx-auto px-6 py-12 space-y-16">
        <section class="space-y-6">
            <div class="flex items-center gap-3">
                <div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
                <h1 class="text-3xl font-bold">Item Playground</h1>
            </div>
            <p class="text-muted-foreground">Compose flexible item layouts with media, content, actions, and footer sections.</p>

            <div class="grid lg:grid-cols-2 gap-8">
                <div class="space-y-4">
                    <div class={`${card} border-dashed p-12 flex items-center justify-center min-h-[250px]`}>
                        <div class="w-full max-w-md">
                            <Item {variant} {size}>
                                {#if showMedia}
                                    <ItemMedia variant={mediaVariant}>
                                        {#if mediaVariant === "image"}
                                            <img src="https://i.pravatar.cc/150?img=3" alt="Avatar" />
                                        {:else}
                                            <IconUsersPlus />
                                        {/if}
                                    </ItemMedia>
                                {/if}
                                <ItemContent>
                                    <ItemHeader>
                                        <ItemTitle>Item Title</ItemTitle>
                                    </ItemHeader>
                                    <ItemDescription>
                                        Item description goes here with additional details
                                    </ItemDescription>
                                </ItemContent>
                                {#if showActions}
                                    <ItemActions>
                                        <Button size="sm" variant="ghost">Edit</Button>
                                    </ItemActions>
                                {/if}
                                {#if showFooter}
                                    <ItemFooter>
                                        <span class="text-xs text-muted-foreground">Footer content</span>
                                    </ItemFooter>
                                {/if}
                            </Item>
                        </div>
                    </div>

                    <div class="rounded-lg border bg-card p-4 shadow-sm">
                        <div class="flex items-center justify-between mb-3">
                            <span class="text-sm font-semibold flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                Generated Code
                            </span>
                            <button
                                onclick={() => copyCode(getItemCode())}
                                class="text-xs px-3 py-1.5 rounded-md border hover:bg-accent transition-all hover:scale-105 font-medium"
                            >
                                {copiedCode === getItemCode() ? "✓ Copied!" : "Copy Code"}
                            </button>
                        </div>
                        <pre class="text-sm overflow-x-auto bg-muted/50 p-3 rounded max-h-64"><code>{getItemCode()}</code></pre>
                    </div>
                </div>

                <div class="space-y-6">
                    <div class="space-y-3">
                        <div class="text-sm font-semibold text-foreground">Variant</div>
                        <div class="grid grid-cols-3 gap-2">
                            {#each variants as option}
                                <button
                                    onclick={() => (variant = option.value)}
                                    class={`${buttonToggle} ${variant === option.value
                                        ? "border-primary bg-primary/10 font-semibold shadow-sm"
                                        : "border-transparent bg-muted/50 hover:bg-muted"}`}
                                >
                                    {option.label}
                                </button>
                            {/each}
                        </div>
                    </div>

                    <div class="space-y-3">
                        <div class="text-sm font-semibold text-foreground">Size</div>
                        <div class="grid grid-cols-2 gap-2">
                            {#each sizes as option}
                                <button
                                    onclick={() => (size = option.value)}
                                    class={`${buttonToggle} ${size === option.value
                                        ? "border-primary bg-primary/10 font-semibold shadow-sm"
                                        : "border-transparent bg-muted/50 hover:bg-muted"}`}
                                >
                                    {option.label}
                                </button>
                            {/each}
                        </div>
                    </div>

                    <div class="space-y-3">
                        <div class="text-sm font-semibold text-foreground">Media Variant</div>
                        <div class="grid grid-cols-3 gap-2">
                            {#each mediaVariants as option}
                                <button
                                    onclick={() => (mediaVariant = option.value)}
                                    class={`${buttonToggle} ${mediaVariant === option.value
                                        ? "border-primary bg-primary/10 font-semibold shadow-sm"
                                        : "border-transparent bg-muted/50 hover:bg-muted"}`}
                                >
                                    {option.label}
                                </button>
                            {/each}
                        </div>
                    </div>

                    <div class="space-y-3">
                        <div class="text-sm font-semibold text-foreground">Toggle Sections</div>
                        <div class="grid grid-cols-3 gap-2">
                            <button
                                onclick={() => (showMedia = !showMedia)}
                                class={`${buttonToggle} ${showMedia
                                    ? "border-primary bg-primary/10 font-semibold shadow-sm"
                                    : "border-transparent bg-muted/50 hover:bg-muted"}`}
                            >
                                <div class="text-sm">Media</div>
                                <div class="text-xs text-muted-foreground">{showMedia ? "On" : "Off"}</div>
                            </button>
                            <button
                                onclick={() => (showActions = !showActions)}
                                class={`${buttonToggle} ${showActions
                                    ? "border-primary bg-primary/10 font-semibold shadow-sm"
                                    : "border-transparent bg-muted/50 hover:bg-muted"}`}
                            >
                                <div class="text-sm">Actions</div>
                                <div class="text-xs text-muted-foreground">{showActions ? "On" : "Off"}</div>
                            </button>
                            <button
                                onclick={() => (showFooter = !showFooter)}
                                class={`${buttonToggle} ${showFooter
                                    ? "border-primary bg-primary/10 font-semibold shadow-sm"
                                    : "border-transparent bg-muted/50 hover:bg-muted"}`}
                            >
                                <div class="text-sm">Footer</div>
                                <div class="text-xs text-muted-foreground">{showFooter ? "On" : "Off"}</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="space-y-4">
            <div class="flex items-center gap-3">
                <div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
                <h2 class="text-3xl font-bold">Quick Start</h2>
            </div>
            <div class={`${card} p-8 shadow-lg`}>
                <Item variant="outline">
                    <ItemMedia variant="icon">
                        <IconUsersPlus />
                    </ItemMedia>
                    <ItemContent>
                        <ItemHeader>
                            <ItemTitle>User Name</ItemTitle>
                        </ItemHeader>
                        <ItemDescription>user@example.com</ItemDescription>
                    </ItemContent>
                </Item>
            </div>
            <div class="rounded-lg border bg-card/80 backdrop-blur-sm p-4 shadow-sm">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-semibold">Code</span>
                    <button
                        onclick={() => copyCode('<Item variant="outline">\n  <ItemMedia variant="icon">\n    <UserIcon class="size-4" />\n  </ItemMedia>\n  <ItemContent>\n    <ItemHeader>\n      <ItemTitle>User Name</ItemTitle>\n    </ItemHeader>\n    <ItemDescription>user@example.com</ItemDescription>\n  </ItemContent>\n</Item>')}
                        class="text-xs px-3 py-1.5 rounded-md border hover:bg-accent transition-all hover:scale-105 font-medium"
                    >
                        {copiedCode === '<Item variant="outline">\n  <ItemMedia variant="icon">\n    <UserIcon class="size-4" />\n  </ItemMedia>\n  <ItemContent>\n    <ItemHeader>\n      <ItemTitle>User Name</ItemTitle>\n    </ItemHeader>\n    <ItemDescription>user@example.com</ItemDescription>\n  </ItemContent>\n</Item>' ? "✓ Copied" : "Copy"}
                    </button>
                </div>
                <pre class="text-sm overflow-x-auto bg-muted/50 p-3 rounded"><code>&lt;Item variant="outline"&gt;
  &lt;ItemMedia variant="icon"&gt;
    &lt;UserIcon class="size-4" /&gt;
  &lt;/ItemMedia&gt;
  &lt;ItemContent&gt;
    &lt;ItemHeader&gt;
      &lt;ItemTitle&gt;User Name&lt;/ItemTitle&gt;
    &lt;/ItemHeader&gt;
    &lt;ItemDescription&gt;user@example.com&lt;/ItemDescription&gt;
  &lt;/ItemContent&gt;
&lt;/Item&gt;</code></pre>
            </div>
        </section>

        <section class="space-y-6">
            <div class="flex items-center gap-3 mb-2">
                <div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
                <h2 class="text-3xl font-bold">Examples</h2>
            </div>
            <p class="text-muted-foreground">Different item compositions and layouts.</p>

            <div class="grid gap-6">
                <div class="space-y-3 group">
                    <div>
                        <h3 class="text-lg font-semibold">User Profile with Avatar</h3>
                        <p class="text-sm text-muted-foreground">Item with image media and actions</p>
                    </div>
                    <div class={`${card} p-6 transition-all group-hover:shadow-md`}>
                        <Item variant="outline">
                            <ItemMedia variant="image">
                                <img src="https://i.pravatar.cc/150?img=5" alt="User" />
                            </ItemMedia>
                            <ItemContent>
                                <ItemHeader>
                                    <ItemTitle>Sarah Johnson</ItemTitle>
                                    <Badge variant="success" size="sm">Active</Badge>
                                </ItemHeader>
                                <ItemDescription>Product Designer • San Francisco, CA</ItemDescription>
                            </ItemContent>
                            <ItemActions>
                                <Button size="sm" variant="outline">View Profile</Button>
                            </ItemActions>
                        </Item>
                    </div>
                </div>

                <div class="space-y-3 group">
                    <div>
                        <h3 class="text-lg font-semibold">Contact Information</h3>
                        <p class="text-sm text-muted-foreground">Multiple items in a group</p>
                    </div>
                    <div class={`${card} p-6 transition-all group-hover:shadow-md`}>
                        <ItemGroup>
                            <Item>
                                <ItemMedia variant="icon">
                                    <IconMail  />
                                </ItemMedia>
                                <ItemContent>
                                    <ItemTitle>Email</ItemTitle>
                                    <ItemDescription>contact@example.com</ItemDescription>
                                </ItemContent>
                            </Item>
                            <Item>
                                <ItemMedia variant="icon">
                                    <IconPhone  />
                                </ItemMedia>
                                <ItemContent>
                                    <ItemTitle>Phone</ItemTitle>
                                    <ItemDescription>+1 (555) 123-4567</ItemDescription>
                                </ItemContent>
                            </Item>
                            <Item>
                                <ItemMedia variant="icon">
                                    <IconFlag  />
                                </ItemMedia>
                                <ItemContent>
                                    <ItemTitle>Location</ItemTitle>
                                    <ItemDescription>New York, NY 10001</ItemDescription>
                                </ItemContent>
                            </Item>
                        </ItemGroup>
                    </div>
                </div>

                <div class="space-y-3 group">
                    <div>
                        <h3 class="text-lg font-semibold">Event Card with Footer</h3>
                        <p class="text-sm text-muted-foreground">Item with header, description, and footer</p>
                    </div>
                    <div class={`${card} p-6 transition-all group-hover:shadow-md`}>
                        <Item variant="muted">
                            <ItemMedia variant="icon">
                                <IconCalendar  />
                            </ItemMedia>
                            <ItemContent>
                                <ItemHeader>
                                    <ItemTitle>Team Meeting</ItemTitle>
                                    <Badge variant="primary" size="sm">Upcoming</Badge>
                                </ItemHeader>
                                <ItemDescription>
                                    Weekly sync to discuss project progress and roadmap
                                </ItemDescription>
                            </ItemContent>
                            <ItemFooter>
                                <span class="text-xs text-muted-foreground">Tomorrow at 2:00 PM</span>
                                <Button size="sm" variant="ghost">Join</Button>
                            </ItemFooter>
                        </Item>
                    </div>
                </div>

                <div class="space-y-3 group">
                    <div>
                        <h3 class="text-lg font-semibold">Task List Items</h3>
                        <p class="text-sm text-muted-foreground">Small size variant with actions</p>
                    </div>
                    <div class={`${card} p-6 transition-all group-hover:shadow-md`}>
                        <ItemGroup>
                            <Item size="sm" variant="outline">
                                <ItemContent>
                                    <ItemTitle>Review pull requests</ItemTitle>
                                    <ItemDescription>3 PRs waiting for review</ItemDescription>
                                </ItemContent>
                                <ItemActions>
                                    <Button size="sm" variant="ghost" class="size-8 p-0">
                                        <IconCheck  />
                                    </Button>
                                </ItemActions>
                            </Item>
                            <Item size="sm" variant="outline">
                                <ItemContent>
                                    <ItemTitle>Update documentation</ItemTitle>
                                    <ItemDescription>Add API reference examples</ItemDescription>
                                </ItemContent>
                                <ItemActions>
                                    <Button size="sm" variant="ghost" class="size-8 p-0">
                                        <IconCheck  />
                                    </Button>
                                </ItemActions>
                            </Item>
                            <Item size="sm" variant="outline">
                                <ItemContent>
                                    <ItemTitle>Fix bug in authentication</ItemTitle>
                                    <ItemDescription>OAuth redirect not working</ItemDescription>
                                </ItemContent>
                                <ItemActions>
                                    <Button size="icon-lg" variant="ghost" class="size-20 p-0">
                                        <IconCheck  />
                                    </Button>
                                </ItemActions>
                            </Item>
                        </ItemGroup>
                    </div>
                </div>
            </div>
        </section>

        <section class="space-y-4">
            <div class="flex items-center gap-3">
                <div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
                <h2 class="text-3xl font-bold">Installation</h2>
            </div>
            <div class="rounded-lg border bg-card/80 backdrop-blur-sm p-4 shadow-sm">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-semibold">Import</span>
                    <button
                        onclick={() => copyCode('import Item from "$lib/components/ui/item/item.svelte";\nimport ItemHeader from "$lib/components/ui/item/item-header.svelte";\nimport ItemContent from "$lib/components/ui/item/item-content.svelte";\nimport ItemTitle from "$lib/components/ui/item/item-title.svelte";\nimport ItemDescription from "$lib/components/ui/item/item-description.svelte";\nimport ItemMedia from "$lib/components/ui/item/item-media.svelte";\nimport ItemActions from "$lib/components/ui/item/item-actions.svelte";\nimport ItemFooter from "$lib/components/ui/item/item-footer.svelte";\nimport ItemGroup from "$lib/components/ui/item/item-group.svelte";')}
                        class="text-xs px-3 py-1.5 rounded-md border hover:bg-accent transition-all hover:scale-105 font-medium"
                    >
                        {copiedCode === 'import Item from "$lib/components/ui/item/item.svelte";\nimport ItemHeader from "$lib/components/ui/item/item-header.svelte";\nimport ItemContent from "$lib/components/ui/item/item-content.svelte";\nimport ItemTitle from "$lib/components/ui/item/item-title.svelte";\nimport ItemDescription from "$lib/components/ui/item/item-description.svelte";\nimport ItemMedia from "$lib/components/ui/item/item-media.svelte";\nimport ItemActions from "$lib/components/ui/item/item-actions.svelte";\nimport ItemFooter from "$lib/components/ui/item/item-footer.svelte";\nimport ItemGroup from "$lib/components/ui/item/item-group.svelte";' ? "✓ Copied" : "Copy"}
                    </button>
                </div>
                <pre class="text-sm overflow-x-auto bg-muted/50 p-3 rounded"><code>import Item from "$lib/components/ui/item/item.svelte";
import ItemHeader from "$lib/components/ui/item/item-header.svelte";
import ItemContent from "$lib/components/ui/item/item-content.svelte";
import ItemTitle from "$lib/components/ui/item/item-title.svelte";
import ItemDescription from "$lib/components/ui/item/item-description.svelte";
import ItemMedia from "$lib/components/ui/item/item-media.svelte";
import ItemActions from "$lib/components/ui/item/item-actions.svelte";
import ItemFooter from "$lib/components/ui/item/item-footer.svelte";
import ItemGroup from "$lib/components/ui/item/item-group.svelte";</code></pre>
            </div>
        </section>

        <section class="space-y-4">
            <div class="flex items-center gap-3">
                <div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
                <h2 class="text-3xl font-bold">Component Props</h2>
            </div>

            <div class="space-y-6">
                <div>
                    <h3 class="text-lg font-semibold mb-3">Item</h3>
                    <div class="rounded-xl border overflow-hidden shadow-lg bg-card">
                        <table class="w-full text-sm">
                            <thead class="bg-gradient-to-r from-muted to-muted/50">
                                <tr>
                                    <th class="text-left p-4 font-semibold">Prop</th>
                                    <th class="text-left p-4 font-semibold">Type</th>
                                    <th class="text-left p-4 font-semibold">Default</th>
                                    <th class="text-left p-4 font-semibold">Description</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y">
                                <tr class="hover:bg-muted/20 transition-colors">
                                    <td class="p-4 font-mono text-xs font-semibold">variant</td>
                                    <td class="p-4 font-mono text-xs text-muted-foreground">"default" | "outline" | "muted"</td>
                                    <td class="p-4 font-mono text-xs">"default"</td>
                                    <td class="p-4 text-muted-foreground">Visual style variant</td>
                                </tr>
                                <tr class="hover:bg-muted/20 transition-colors">
                                    <td class="p-4 font-mono text-xs font-semibold">size</td>
                                    <td class="p-4 font-mono text-xs text-muted-foreground">"default" | "sm"</td>
                                    <td class="p-4 font-mono text-xs">"default"</td>
                                    <td class="p-4 text-muted-foreground">Item padding and gap</td>
                                </tr>
                                <tr class="hover:bg-muted/20 transition-colors">
                                    <td class="p-4 font-mono text-xs font-semibold">class</td>
                                    <td class="p-4 font-mono text-xs text-muted-foreground">string</td>
                                    <td class="p-4 font-mono text-xs">—</td>
                                    <td class="p-4 text-muted-foreground">Custom CSS classes</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>
                    <h3 class="text-lg font-semibold mb-3">ItemMedia</h3>
                    <div class="rounded-xl border overflow-hidden shadow-lg bg-card">
                        <table class="w-full text-sm">
                            <thead class="bg-gradient-to-r from-muted to-muted/50">
                                <tr>
                                    <th class="text-left p-4 font-semibold">Prop</th>
                                    <th class="text-left p-4 font-semibold">Type</th>
                                    <th class="text-left p-4 font-semibold">Default</th>
                                    <th class="text-left p-4 font-semibold">Description</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y">
                                <tr class="hover:bg-muted/20 transition-colors">
                                    <td class="p-4 font-mono text-xs font-semibold">variant</td>
                                    <td class="p-4 font-mono text-xs text-muted-foreground">"default" | "icon" | "image"</td>
                                    <td class="p-4 font-mono text-xs">"default"</td>
                                    <td class="p-4 text-muted-foreground">Media container style</td>
                                </tr>
                                <tr class="hover:bg-muted/20 transition-colors">
                                    <td class="p-4 font-mono text-xs font-semibold">class</td>
                                    <td class="p-4 font-mono text-xs text-muted-foreground">string</td>
                                    <td class="p-4 font-mono text-xs">—</td>
                                    <td class="p-4 text-muted-foreground">Custom CSS classes</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>
                    <h3 class="text-lg font-semibold mb-3">Other Components</h3>
                    <div class="rounded-xl border overflow-hidden shadow-lg bg-card">
                        <table class="w-full text-sm">
                            <thead class="bg-gradient-to-r from-muted to-muted/50">
                                <tr>
                                    <th class="text-left p-4 font-semibold">Component</th>
                                    <th class="text-left p-4 font-semibold">Description</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y">
                                <tr class="hover:bg-muted/20 transition-colors">
                                    <td class="p-4 font-mono text-xs font-semibold">ItemHeader</td>
                                    <td class="p-4 text-muted-foreground">Container for title and optional badges/icons (basis-full)</td>
                                </tr>
                                <tr class="hover:bg-muted/20 transition-colors">
                                    <td class="p-4 font-mono text-xs font-semibold">ItemContent</td>
                                    <td class="p-4 text-muted-foreground">Main content area with flex-1 (can contain header + description)</td>
                                </tr>
                                <tr class="hover:bg-muted/20 transition-colors">
                                    <td class="p-4 font-mono text-xs font-semibold">ItemTitle</td>
                                    <td class="p-4 text-muted-foreground">Title text with medium font weight</td>
                                </tr>
                                <tr class="hover:bg-muted/20 transition-colors">
                                    <td class="p-4 font-mono text-xs font-semibold">ItemDescription</td>
                                    <td class="p-4 text-muted-foreground">Description text with muted color, line-clamp-2</td>
                                </tr>
                                <tr class="hover:bg-muted/20 transition-colors">
                                    <td class="p-4 font-mono text-xs font-semibold">ItemActions</td>
                                    <td class="p-4 text-muted-foreground">Container for action buttons (aligned to end)</td>
                                </tr>
                                <tr class="hover:bg-muted/20 transition-colors">
                                    <td class="p-4 font-mono text-xs font-semibold">ItemFooter</td>
                                    <td class="p-4 text-muted-foreground">Footer section spanning full width (basis-full)</td>
                                </tr>
                                <tr class="hover:bg-muted/20 transition-colors">
                                    <td class="p-4 font-mono text-xs font-semibold">ItemGroup</td>
                                    <td class="p-4 text-muted-foreground">Wrapper for multiple items in a list</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>
