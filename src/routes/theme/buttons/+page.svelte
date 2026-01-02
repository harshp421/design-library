<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
    import ThemeSwitch from "$lib/components/shared/theme-switch/themeSwitch.svelte";

    let copiedCode = $state("");

    // Playground state
    let playgroundVariant = $state<"default" | "primary" | "secondary" | "tertiary" | "destructive" | "warning" | "info" | "orphan" | "ghost" | "outline" | "link" | "glass">("primary");
    let playgroundSize = $state<"sm" | "default" | "lg" | "icon-sm" | "icon-md" | "icon-lg">("default");
    let playgroundRounded = $state(false);
    let playgroundIcon = $state<"none" | "left" | "right" | "only">("none");
    let playgroundDisabled = $state(false);

    const variants = [
        { value: "default" as const, label: "Default", description: "Primary action button", color: "bg-primary" },
        { value: "primary" as const, label: "Primary", description: "Main call-to-action", color: "bg-blue-500" },
        { value: "secondary" as const, label: "Secondary", description: "Secondary actions", color: "bg-secondary" },
        { value: "tertiary" as const, label: "Tertiary", description: "Tertiary actions with border", color: "bg-gray-400" },
        { value: "destructive" as const, label: "Destructive", description: "Delete or dangerous actions", color: "bg-red-500" },
        { value: "warning" as const, label: "Warning", description: "Warning state actions", color: "bg-yellow-500" },
        { value: "info" as const, label: "Info", description: "Informational actions", color: "bg-cyan-500" },
        { value: "orphan" as const, label: "Orphan", description: "Minimal button without border", color: "bg-gray-300" },
        { value: "ghost" as const, label: "Ghost", description: "Subtle hover effect", color: "bg-transparent border-2" },
        { value: "outline" as const, label: "Outline", description: "Outlined button", color: "bg-transparent border-2" },
        { value: "link" as const, label: "Link", description: "Link-styled button", color: "bg-transparent" },
        { value: "glass" as const, label: "Glass", description: "Glassmorphism effect", color: "bg-white/10 backdrop-blur" },
    ];

    const sizes = [
        { value: "sm" as const, label: "Small", height: "28px" },
        { value: "default" as const, label: "Default", height: "32px" },
        { value: "lg" as const, label: "Large", height: "40px" },
    ];

    const iconSizes = [
        { value: "icon-sm" as const, label: "Icon SM", size: "28px" },
        { value: "icon-md" as const, label: "Icon MD", size: "32px" },
        { value: "icon-lg" as const, label: "Icon LG", size: "40px" },
    ];

    function copyCode(code: string) {
        navigator.clipboard.writeText(code);
        copiedCode = code;
        setTimeout(() => (copiedCode = ""), 2000);
    }

    function getButtonCode(variant: string, size?: string) {
        let code = `<Button`;
        if (variant !== "default") code += ` variant="${variant}"`;
        if (size && size !== "default") code += ` size="${size}"`;
        code += `>Button</Button>`;
        return code;
    }

    function getPlaygroundCode() {
        let code = `<Button`;
        if (playgroundVariant !== "default") code += ` variant="${playgroundVariant}"`;
        if (playgroundSize !== "default") code += ` size="${playgroundSize}"`;
        if (playgroundRounded) code += ` fullyRounded`;
        if (playgroundDisabled) code += ` disabled`;
        code += `>`;
        
        if (playgroundIcon === "left" || playgroundIcon === "only") {
            code += `\n  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>\n  </svg>`;
        }
        if (playgroundIcon !== "only") {
            code += playgroundIcon === "left" || playgroundIcon === "right" ? `\n  Button` : `Button`;
        }
        if (playgroundIcon === "right") {
            code += `\n  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>\n  </svg>`;
        }
        
        code += `\n</Button>`;
        return code;
    }
</script>

<div class="min-h-screen bg-gradient-to-b from-background to-muted/20">
 
    <div class="container max-w-7xl mx-auto px-6 py-12 space-y-16">
        <!-- Interactive Playground -->
        <section class="space-y-6">
            <div class="flex items-center gap-3">
                <div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
                <h2 class="text-3xl font-bold">Interactive Playground</h2>
            </div>
            <p class="text-muted-foreground">Experiment with different button configurations in real-time.</p>
            
            <div class="grid lg:grid-cols-2 gap-8">
                <!-- Preview Area -->
                <div class="space-y-4">
                    <div class="rounded-xl border-2 border-dashed bg-gradient-to-br from-card to-muted/30 p-16 flex items-center justify-center min-h-[300px] relative overflow-hidden">
                        <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
                        <div class="relative z-10 flex items-center justify-center">
                            {#if playgroundIcon === "only"}
                                <Button 
                                    variant={playgroundVariant} 
                                    size={playgroundSize.startsWith("icon") ? playgroundSize : "icon-md"}
                                    fullyRounded={playgroundRounded}
                                    disabled={playgroundDisabled}
                                >
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                                    </svg>
                                </Button>
                            {:else}
                                <Button 
                                    variant={playgroundVariant} 
                                    size={playgroundSize}
                                    fullyRounded={playgroundRounded}
                                    disabled={playgroundDisabled}
                                >
                                    {#if playgroundIcon === "left"}
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                                        </svg>
                                    {/if}
                                    Button
                                    {#if playgroundIcon === "right"}
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                                        </svg>
                                    {/if}
                                </Button>
                            {/if}
                        </div>
                    </div>

                    <!-- Generated Code -->
                    <div class="rounded-lg border bg-card p-4 shadow-sm">
                        <div class="flex items-center justify-between mb-3">
                            <span class="text-sm font-semibold flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                Generated Code
                            </span>
                            <button
                                onclick={() => copyCode(getPlaygroundCode())}
                                class="text-xs px-3 py-1.5 rounded-md border hover:bg-accent transition-all hover:scale-105 font-medium"
                            >
                                {copiedCode === getPlaygroundCode() ? '✓ Copied!' : 'Copy Code'}
                            </button>
                        </div>
                        <pre class="text-sm overflow-x-auto bg-muted/50 p-3 rounded"><code>{getPlaygroundCode()}</code></pre>
                    </div>
                </div>

                <!-- Controls -->
                <div class="space-y-6">
                    <!-- Variant Selection -->
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

                    <!-- Size Selection -->
                    <div class="space-y-3">
                        <div class="text-sm font-semibold text-foreground">Size</div>
                        <div class="grid grid-cols-3 gap-2">
                            {#each [...sizes, ...iconSizes] as size}
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

                    <!-- Icon Position -->
                    <div class="space-y-3">
                        <div class="text-sm font-semibold text-foreground">Icon</div>
                        <div class="grid grid-cols-4 gap-2">
                            {#each [
                                { value: "none" as const, label: "None" },
                                { value: "left" as const, label: "Left" },
                                { value: "right" as const, label: "Right" },
                                { value: "only" as const, label: "Icon Only" }
                            ] as icon}
                                <button
                                    onclick={() => playgroundIcon = icon.value}
                                    class="px-3 py-2 text-sm rounded-lg border-2 transition-all hover:scale-105 {playgroundIcon === icon.value 
                                        ? 'border-primary bg-primary/10 font-semibold shadow-sm' 
                                        : 'border-transparent bg-muted/50 hover:bg-muted'}"
                                >
                                    {icon.label}
                                </button>
                            {/each}
                        </div>
                    </div>

                    <!-- Toggles -->
                    <div class="space-y-3">
                        <div class="text-sm font-semibold text-foreground">Options</div>
                        <div class="flex gap-3">
                            <button
                                onclick={() => playgroundRounded = !playgroundRounded}
                                class="flex-1 px-4 py-3 rounded-lg border-2 transition-all hover:scale-105 {playgroundRounded 
                                    ? 'border-primary bg-primary/10 font-semibold shadow-sm' 
                                    : 'border-transparent bg-muted/50 hover:bg-muted'}"
                            >
                                <div class="text-sm">Fully Rounded</div>
                                <div class="text-xs text-muted-foreground mt-1">{playgroundRounded ? 'On' : 'Off'}</div>
                            </button>
                            <button
                                onclick={() => playgroundDisabled = !playgroundDisabled}
                                class="flex-1 px-4 py-3 rounded-lg border-2 transition-all hover:scale-105 {playgroundDisabled 
                                    ? 'border-primary bg-primary/10 font-semibold shadow-sm' 
                                    : 'border-transparent bg-muted/50 hover:bg-muted'}"
                            >
                                <div class="text-sm">Disabled</div>
                                <div class="text-xs text-muted-foreground mt-1">{playgroundDisabled ? 'On' : 'Off'}</div>
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
            <div class="rounded-xl border bg-gradient-to-br from-card to-muted/30 p-12 flex items-center justify-center shadow-lg">
                <Button>Button</Button>
            </div>
            <div class="rounded-lg border bg-card/80 backdrop-blur-sm p-4 shadow-sm">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-semibold">Code</span>
                    <button
                        onclick={() => copyCode('<Button>Button</Button>')}
                        class="text-xs px-3 py-1.5 rounded-md border hover:bg-accent transition-all hover:scale-105 font-medium"
                    >
                        {copiedCode === '<Button>Button</Button>' ? '✓ Copied' : 'Copy'}
                    </button>
                </div>
                <pre class="text-sm overflow-x-auto bg-muted/50 p-3 rounded"><code>&lt;Button&gt;Button&lt;/Button&gt;</code></pre>
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
                        onclick={() => copyCode('import Button from "$lib/components/ui/button/button.svelte";')}
                        class="text-xs px-3 py-1.5 rounded-md border hover:bg-accent transition-all hover:scale-105 font-medium"
                    >
                        {copiedCode === 'import Button from "$lib/components/ui/button/button.svelte";' ? '✓ Copied' : 'Copy'}
                    </button>
                </div>
                <pre class="text-sm overflow-x-auto bg-muted/50 p-3 rounded"><code>import Button from "$lib/components/ui/button/button.svelte";</code></pre>
            </div>
        </section>

        <!-- Variants -->
        <section class="space-y-6">
            <div>
                <div class="flex items-center gap-3 mb-2">
                    <div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
                    <h2 class="text-3xl font-bold">Variants</h2>
                </div>
                <p class="text-muted-foreground">Different visual styles of the button component.</p>
            </div>

            <div class="grid md:grid-cols-2 gap-20">
                {#each variants as variant}
                    <div class="space-y-3 group">
                        <div class="flex items-center gap-2">
                            <div class="w-3 h-3 rounded-full {variant.color} shadow-sm"></div>
                            <h3 class="text-lg font-semibold capitalize">{variant.label}</h3>
                        </div>
                        <p class="text-sm text-muted-foreground">{variant.description}</p>
                        
                        <!-- Preview -->
                        <div class="rounded-xl border bg-gradient-to-br from-card to-muted/20 p-6 transition-all group-hover:shadow-md">
                            <div class="flex flex-wrap items-center gap-3">
                                <Button variant={variant.value}>{variant.label}</Button>
                                <Button variant={variant.value} disabled>Disabled</Button>
                            </div>
                        </div>

                        <!-- Code -->
                        <div class="rounded-lg border bg-card/80 backdrop-blur-sm p-2 shadow-sm">
                            <div class="flex items-center justify-between mb-2">
                                <span class="text-xs font-medium text-muted-foreground">Code</span>
                                <button
                                    onclick={() => copyCode(getButtonCode(variant.value))}
                                    class="text-xs px-2 py-1 rounded border hover:bg-accent transition-all hover:scale-105"
                                >
                                    {copiedCode === getButtonCode(variant.value) ? '✓' : 'Copy'}
                                </button>
                            </div>
                            <pre class="text-xs overflow-x-auto p-12 bg-neutral-400  rounded"><code>{getButtonCode(variant.value)}</code></pre>
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
                <p class="text-muted-foreground">Different button sizes for various use cases.</p>
            </div>

            <div class="grid md:grid-cols-3 gap-6">
                {#each sizes as size}
                    <div class="space-y-3 group">
                        <div>
                            <h3 class="text-lg font-semibold">{size.label}</h3>
                            <p class="text-sm text-muted-foreground">Height: {size.height}</p>
                        </div>
                        
                        <!-- Preview -->
                        <div class="rounded-xl border bg-gradient-to-br from-card to-muted/20 p-8 flex items-center justify-center transition-all group-hover:shadow-md">
                            <Button size={size.value}>{size.label}</Button>
                        </div>

                        <!-- Code -->
                        <div class="rounded-lg border bg-card/80 backdrop-blur-sm p-3 shadow-sm">
                            <div class="flex items-center justify-between mb-2">
                                <span class="text-xs font-medium text-muted-foreground">Code</span>
                                <button
                                    onclick={() => copyCode(getButtonCode('default', size.value))}
                                    class="text-xs px-2 py-1 rounded border hover:bg-accent transition-all hover:scale-105"
                                >
                                    {copiedCode === getButtonCode('default', size.value) ? '✓' : 'Copy'}
                                </button>
                            </div>
                            <pre class="text-xs overflow-x-auto bg-muted/50 p-2 rounded"><code>{getButtonCode('default', size.value)}</code></pre>
                        </div>
                    </div>
                {/each}
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
                            <td class="p-4 font-mono text-xs text-muted-foreground">
                                "default" | "primary" | "secondary" | ...
                            </td>
                            <td class="p-4 font-mono text-xs">"default"</td>
                            <td class="p-4 text-muted-foreground">Visual style variant</td>
                        </tr>
                        <tr class="hover:bg-muted/20 transition-colors">
                            <td class="p-4 font-mono text-xs font-semibold">size</td>
                            <td class="p-4 font-mono text-xs text-muted-foreground">
                                "sm" | "default" | "lg" | "icon-sm" | "icon-md" | "icon-lg"
                            </td>
                            <td class="p-4 font-mono text-xs">"default"</td>
                            <td class="p-4 text-muted-foreground">Button size</td>
                        </tr>
                        <tr class="hover:bg-muted/20 transition-colors">
                            <td class="p-4 font-mono text-xs font-semibold">fullyRounded</td>
                            <td class="p-4 font-mono text-xs text-muted-foreground">boolean</td>
                            <td class="p-4 font-mono text-xs">false</td>
                            <td class="p-4 text-muted-foreground">Makes button fully rounded</td>
                        </tr>
                        <tr class="hover:bg-muted/20 transition-colors">
                            <td class="p-4 font-mono text-xs font-semibold">disabled</td>
                            <td class="p-4 font-mono text-xs text-muted-foreground">boolean</td>
                            <td class="p-4 font-mono text-xs">false</td>
                            <td class="p-4 text-muted-foreground">Disables the button</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</div>
