<script lang="ts">
    import Badge from "$lib/components/ui/badge/badge.svelte";
    import * as Avatar from "$lib/components/ui/avatar/index.js";

    let copiedCode = $state("");

    const variants = [
        { value: "default" as const, label: "Default", description: "Neutral badge for labeling" },
        { value: "primary" as const, label: "Primary", description: "Highlight primary context" },
        { value: "neutral" as const, label: "Neutral", description: "Subtle neutral tag" },
        { value: "warning" as const, label: "Warning", description: "Caution or pending states" },
        { value: "info" as const, label: "Info", description: "Informational context" },
        { value: "destructive" as const, label: "Destructive", description: "Errors or destructive states" },
        { value: "success" as const, label: "Success", description: "Success or positive states" },
    ];

    const sizes = [
        { value: "sm" as const, label: "Small", height: "24px" },
        { value: "md" as const, label: "Medium", height: "28px" },
        { value: "lg" as const, label: "Large", height: "32px" },
    ];

    let playgroundVariant = $state<typeof variants[number]["value"]>("primary");
    let playgroundSize = $state<typeof sizes[number]["value"]>("md");
    let playgroundRounded = $state(false);
    let playgroundBorder = $state(false);
    let playgroundAvatar = $state(false);
    let playgroundIcon = $state(false);

    function copyCode(code: string) {
        navigator.clipboard.writeText(code);
        copiedCode = code;
        setTimeout(() => (copiedCode = ""), 2000);
    }

    function getBadgeCode() {
        let code = `<Badge`;
        if (playgroundVariant !== "default") code += ` variant="${playgroundVariant}"`;
        if (playgroundSize !== "md") code += ` size="${playgroundSize}"`;
        if (playgroundRounded) code += ` rounded`;
        if (playgroundBorder) code += ` border`;
        code += `>`;
        if (playgroundAvatar) {
            code += `\n  <Avatar.Root>\n    <Avatar.Image src="https://github.com/shadcn.png" alt="User" />\n    <Avatar.Fallback>CN</Avatar.Fallback>\n  </Avatar.Root>`;
        }
        if (playgroundIcon) {
            code += `\n  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M8 4V8L11 11M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>\n  </svg>`;
        }
        code += playgroundIcon || playgroundAvatar ? `\n  Label\n</Badge>` : `Label</Badge>`;
        return code;
    }

</script>

<div class="min-h-screen bg-gradient-to-b from-background to-muted/20">
    <div class="container max-w-7xl mx-auto px-6 py-12 space-y-16">
        <!-- Playground -->
        <section class="space-y-6">
            <div class="flex items-center gap-3">
                <div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
                <h2 class="text-3xl font-bold">Badge Playground</h2>
            </div>
            <p class="text-muted-foreground">Try variants, sizes, rounding, border, and optional avatar/icon.</p>

            <div class="grid lg:grid-cols-2 gap-8">
                <!-- Preview Area -->
                <div class="space-y-4">
                    <div class="rounded-xl border-2 border-dashed bg-gradient-to-br from-card to-muted/30 p-12 flex items-center justify-center min-h-[200px]">
                        <Badge
                            variant={playgroundVariant}
                            size={playgroundSize}
                            rounded={playgroundRounded}
                            border={playgroundBorder}
                        >
                            {#if playgroundAvatar}
                                <Avatar.Root>
                                    <Avatar.Image src="https://github.com/shadcn.png" alt="User" />
                                    <Avatar.Fallback>CN</Avatar.Fallback>
                                </Avatar.Root>
                            {/if}
                            {#if playgroundIcon}
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8 4V8L11 11M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            {/if}
                            Label
                        </Badge>
                    </div>

                    <div class="rounded-lg border bg-card p-4 shadow-sm">
                        <div class="flex items-center justify-between mb-3">
                            <span class="text-sm font-semibold flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                Generated Code
                            </span>
                            <button
                                onclick={() => copyCode(getBadgeCode())}
                                class="text-xs px-3 py-1.5 rounded-md border hover:bg-accent transition-all hover:scale-105 font-medium"
                            >
                                {copiedCode === getBadgeCode() ? '✓ Copied!' : 'Copy Code'}
                            </button>
                        </div>
                        <pre class="text-sm overflow-x-auto bg-muted/50 p-3 rounded"><code>{getBadgeCode()}</code></pre>
                    </div>
                </div>

                <!-- Controls -->
                <div class="space-y-6">
                    <div class="space-y-3">
                        <div class="text-sm font-semibold text-foreground">Variant</div>
                        <div class="grid grid-cols-3 gap-2">
                            {#each variants as variant}
                                <button
                                    onclick={() => playgroundVariant = variant.value}
                                    class="px-3 py-2 text-sm rounded-lg border-2 transition-all hover:scale-105 {playgroundVariant === variant.value 
                                        ? 'border-primary bg-primary/10 font-semibold shadow-sm' 
                                        : 'border-transparent bg-muted/50 hover:bg-muted'}"
                                >
                                    {variant.label}
                                </button>
                            {/each}
                        </div>
                    </div>

                    <div class="space-y-3">
                        <div class="text-sm font-semibold text-foreground">Size</div>
                        <div class="grid grid-cols-3 gap-2">
                            {#each sizes as size}
                                <button
                                    onclick={() => playgroundSize = size.value}
                                    class="px-3 py-2 text-xs rounded-lg border-2 transition-all hover:scale-105 {playgroundSize === size.value 
                                        ? 'border-primary bg-primary/10 font-semibold shadow-sm' 
                                        : 'border-transparent bg-muted/50 hover:bg-muted'}"
                                >
                                    {size.label}
                                </button>
                            {/each}
                        </div>
                    </div>

                    <div class="space-y-3">
                        <div class="text-sm font-semibold text-foreground">Toggles</div>
                        <div class="grid grid-cols-2 gap-2">
                            <button
                                onclick={() => playgroundRounded = !playgroundRounded}
                                class="px-3 py-3 rounded-lg border-2 transition-all hover:scale-105 {playgroundRounded 
                                    ? 'border-primary bg-primary/10 font-semibold shadow-sm' 
                                    : 'border-transparent bg-muted/50 hover:bg-muted'}"
                            >
                                <div class="text-sm">Rounded</div>
                                <div class="text-xs text-muted-foreground">{playgroundRounded ? 'On' : 'Off'}</div>
                            </button>
                            <button
                                onclick={() => playgroundBorder = !playgroundBorder}
                                class="px-3 py-3 rounded-lg border-2 transition-all hover:scale-105 {playgroundBorder 
                                    ? 'border-primary bg-primary/10 font-semibold shadow-sm' 
                                    : 'border-transparent bg-muted/50 hover:bg-muted'}"
                            >
                                <div class="text-sm">Border</div>
                                <div class="text-xs text-muted-foreground">{playgroundBorder ? 'On' : 'Off'}</div>
                            </button>
                        </div>
                    </div>

                    <div class="space-y-3">
                        <div class="text-sm font-semibold text-foreground">Add-ons</div>
                        <div class="grid grid-cols-2 gap-2">
                            <button
                                onclick={() => playgroundAvatar = !playgroundAvatar}
                                class="px-3 py-3 rounded-lg border-2 transition-all hover:scale-105 {playgroundAvatar 
                                    ? 'border-primary bg-primary/10 font-semibold shadow-sm' 
                                    : 'border-transparent bg-muted/50 hover:bg-muted'}"
                            >
                                <div class="text-sm">Avatar</div>
                                <div class="text-xs text-muted-foreground">{playgroundAvatar ? 'Shown' : 'Hidden'}</div>
                            </button>
                            <button
                                onclick={() => playgroundIcon = !playgroundIcon}
                                class="px-3 py-3 rounded-lg border-2 transition-all hover:scale-105 {playgroundIcon 
                                    ? 'border-primary bg-primary/10 font-semibold shadow-sm' 
                                    : 'border-transparent bg-muted/50 hover:bg-muted'}"
                            >
                                <div class="text-sm">Icon</div>
                                <div class="text-xs text-muted-foreground">{playgroundIcon ? 'Shown' : 'Hidden'}</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Quick Start -->
        <section class="space-y-4">
            <div class="flex items-center gap-3">
                <div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
                <h2 class="text-3xl font-bold">Quick Start</h2>
            </div>
            <div class="rounded-xl border bg-gradient-to-br from-card to-muted/30 p-10 flex items-center justify-center shadow-lg">
                <Badge>Badge</Badge>
            </div>
            <div class="rounded-lg border bg-card/80 backdrop-blur-sm p-4 shadow-sm">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-semibold">Code</span>
                    <button
                        onclick={() => copyCode('<Badge>Badge</Badge>')}
                        class="text-xs px-3 py-1.5 rounded-md border hover:bg-accent transition-all hover:scale-105 font-medium"
                    >
                        {copiedCode === '<Badge>Badge</Badge>' ? '✓ Copied' : 'Copy'}
                    </button>
                </div>
                <pre class="text-sm overflow-x-auto bg-muted/50 p-3 rounded"><code>&lt;Badge&gt;Badge&lt;/Badge&gt;</code></pre>
            </div>
        </section>

        <!-- Installation -->
        <section class="space-y-4">
            <div class="flex items-center gap-3">
                <div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
                <h2 class="text-3xl font-bold">Installation</h2>
            </div>
            <div class="rounded-lg border bg-card/80 backdrop-blur-sm p-4 shadow-sm">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-semibold">Import</span>
                    <button
                        onclick={() => copyCode('import Badge from "$lib/components/ui/badge/badge.svelte";')}
                        class="text-xs px-3 py-1.5 rounded-md border hover:bg-accent transition-all hover:scale-105 font-medium"
                    >
                        {copiedCode === 'import Badge from "$lib/components/ui/badge/badge.svelte";' ? '✓ Copied' : 'Copy'}
                    </button>
                </div>
                <pre class="text-sm overflow-x-auto bg-muted/50 p-3 rounded"><code>import Badge from "$lib/components/ui/badge/badge.svelte";</code></pre>
            </div>
        </section>

        <!-- Variants -->
        <section class="space-y-6">
            <div>
                <div class="flex items-center gap-3 mb-2">
                    <div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
                    <h2 class="text-3xl font-bold">Variants</h2>
                </div>
                <p class="text-muted-foreground">All visual styles with enabled + border examples.</p>
            </div>

            <div class="grid md:grid-cols-2 gap-8">
                {#each variants as variant}
                    <div class="space-y-3 group">
                        <div>
                            <h3 class="text-lg font-semibold capitalize">{variant.label}</h3>
                            <p class="text-sm text-muted-foreground">{variant.description}</p>
                        </div>

                        <div class="rounded-xl border bg-gradient-to-br from-card to-muted/20 p-6 transition-all group-hover:shadow-md">
                            <div class="flex flex-wrap gap-3 items-center">
                                <Badge variant={variant.value}>Label</Badge>
                                <Badge variant={variant.value} border={true}>Bordered</Badge>
                            </div>
                        </div>

                        <div class="rounded-lg border bg-card/80 backdrop-blur-sm p-3 shadow-sm">
                            <div class="flex items-center justify-between mb-2">
                                <span class="text-xs font-medium text-muted-foreground">Code</span>
                                <button
                                    onclick={() => copyCode(`<Badge variant="${variant.value}">Label</Badge>`)}
                                    class="text-xs px-2 py-1 rounded border hover:bg-accent transition-all hover:scale-105"
                                >
                                    {copiedCode === `<Badge variant="${variant.value}">Label</Badge>` ? '✓' : 'Copy'}
                                </button>
                            </div>
                            <pre class="text-xs overflow-x-auto bg-muted/50 p-2 rounded"><code>&lt;Badge variant=&quot;{variant.value}&quot;&gt;Label&lt;/Badge&gt;</code></pre>
                        </div>
                    </div>
                {/each}
            </div>
        </section>

        <!-- Sizes -->
        <section class="space-y-6">
            <div>
                <div class="flex items-center gap-3 mb-2">
                    <div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
                    <h2 class="text-3xl font-bold">Sizes</h2>
                </div>
                <p class="text-muted-foreground">sm · md · lg across primary variant.</p>
            </div>

            <div class="grid md:grid-cols-3 gap-6">
                {#each sizes as size}
                    <div class="space-y-3 group">
                        <div>
                            <h3 class="text-lg font-semibold">{size.label}</h3>
                            <p class="text-sm text-muted-foreground">Height: {size.height}</p>
                        </div>
                        <div class="rounded-xl border bg-gradient-to-br from-card to-muted/20 p-8 flex items-center justify-center transition-all group-hover:shadow-md">
                            <Badge size={size.value} variant="primary">Badge</Badge>
                        </div>
                        <div class="rounded-lg border bg-card/80 backdrop-blur-sm p-3 shadow-sm">
                            <div class="flex items-center justify-between mb-2">
                                <span class="text-xs font-medium text-muted-foreground">Code</span>
                                <button
                                    onclick={() => copyCode(`<Badge variant="primary" size="${size.value}">Badge</Badge>`)}
                                    class="text-xs px-2 py-1 rounded border hover:bg-accent transition-all hover:scale-105"
                                >
                                    {copiedCode === `<Badge variant="primary" size="${size.value}">Badge</Badge>` ? '✓' : 'Copy'}
                                </button>
                            </div>
                            <pre class="text-xs overflow-x-auto bg-muted/50 p-2 rounded"><code>&lt;Badge variant=&quot;primary&quot; size=&quot;{size.value}&quot;&gt;Badge&lt;/Badge&gt;</code></pre>
                        </div>
                    </div>
                {/each}
            </div>
        </section>

        <!-- Combinations -->
        <section class="space-y-6">
            <div class="flex items-center gap-3 mb-2">
                <div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
                <h2 class="text-3xl font-bold">Compositions</h2>
            </div>
            <p class="text-muted-foreground">Avatar, icon, border, and rounded mixes.</p>

            <div class="grid md:grid-cols-2 gap-4">
                <div class="rounded-xl border bg-card p-4 space-y-3">
                    <div class="text-sm font-semibold">Avatar + Rounded</div>
                    <Badge variant="primary" rounded={true} size="lg" border={true}>
                        <Avatar.Root>
                            <Avatar.Image src="https://github.com/shadcn.png" alt="User" />
                            <Avatar.Fallback>CN</Avatar.Fallback>
                        </Avatar.Root>
                        John Doe
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.3 4.70081L4.70034 11.3005M4.70034 4.70081L11.3 11.3005" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </Badge>
                </div>

                <div class="rounded-xl border bg-card p-4 space-y-3">
                    <div class="text-sm font-semibold">Icon + Count</div>
                    <Badge variant="success" rounded={false} size="md" border={true}>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8 4V8L11 11M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        Completed
                        <span class="ml-1 font-bold">42</span>
                    </Badge>
                </div>

                <div class="rounded-xl border bg-card p-4 space-y-3">
                    <div class="text-sm font-semibold">Warning pill</div>
                    <Badge variant="warning" rounded={true} size="md">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8 4V8L11 11M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        Warning
                    </Badge>
                </div>

                <div class="rounded-xl border bg-card p-4 space-y-3">
                    <div class="text-sm font-semibold">Info compact</div>
                    <Badge variant="info" rounded={false} size="sm">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8 4V8L11 11M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        Info
                    </Badge>
                </div>
            </div>
        </section>

        <!-- Props -->
        <section class="space-y-4">
            <div class="flex items-center gap-3">
                <div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
                <h2 class="text-3xl font-bold">Props</h2>
            </div>
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
                            <td class="p-4 font-mono text-xs text-muted-foreground">"default" | "primary" | "neutral" | "warning" | "info" | "destructive" | "success"</td>
                            <td class="p-4 font-mono text-xs">"default"</td>
                            <td class="p-4 text-muted-foreground">Visual style variant</td>
                        </tr>
                        <tr class="hover:bg-muted/20 transition-colors">
                            <td class="p-4 font-mono text-xs font-semibold">size</td>
                            <td class="p-4 font-mono text-xs text-muted-foreground">"sm" | "md" | "lg"</td>
                            <td class="p-4 font-mono text-xs">"md"</td>
                            <td class="p-4 text-muted-foreground">Badge size</td>
                        </tr>
                        <tr class="hover:bg-muted/20 transition-colors">
                            <td class="p-4 font-mono text-xs font-semibold">rounded</td>
                            <td class="p-4 font-mono text-xs text-muted-foreground">boolean</td>
                            <td class="p-4 font-mono text-xs">false</td>
                            <td class="p-4 text-muted-foreground">Fully rounded pill</td>
                        </tr>
                        <tr class="hover:bg-muted/20 transition-colors">
                            <td class="p-4 font-mono text-xs font-semibold">border</td>
                            <td class="p-4 font-mono text-xs text-muted-foreground">boolean</td>
                            <td class="p-4 font-mono text-xs">false</td>
                            <td class="p-4 text-muted-foreground">Adds border style</td>
                        </tr>
                        <tr class="hover:bg-muted/20 transition-colors">
                            <td class="p-4 font-mono text-xs font-semibold">href</td>
                            <td class="p-4 font-mono text-xs text-muted-foreground">string</td>
                            <td class="p-4 font-mono text-xs">—</td>
                            <td class="p-4 text-muted-foreground">Renders as anchor when provided</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</div>
