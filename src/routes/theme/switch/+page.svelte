<script lang="ts">
    import Switch from "$lib/components/ui/switch/switch.svelte";

    const sizes = [
        { value: "sm" as const, label: "Small" },
        { value: "md" as const, label: "Medium" },
        { value: "lg" as const, label: "Large" },
    ];

    let checked = $state(false);
    let size = $state<typeof sizes[number]["value"]>("md");
    let disabled = $state(false);
    let label = $state("Enable notifications");
    let copiedCode = $state("");

    const card = "rounded-xl border bg-gradient-to-br from-card to-muted/20";
    const buttonToggle = "px-3 py-2 text-sm rounded-lg border-2 transition-all hover:scale-105";

    function copyCode(code: string) {
        navigator.clipboard.writeText(code);
        copiedCode = code;
        setTimeout(() => (copiedCode = ""), 2000);
    }

    function getSwitchCode() {
        const sizeAttr = size !== "md" ? ` size="${size}"` : "";
        const disabledAttr = disabled ? " disabled" : "";
        const checkedAttr = checked ? " checked" : "";
        return `<label class="flex items-center gap-3 text-base">
  <Switch${sizeAttr}${disabledAttr}${checkedAttr} />
  <span>${label}</span>
</label>`;
    }
</script>

<div class="min-h-screen bg-gradient-to-b from-background to-muted/20">
    <div class="container max-w-6xl mx-auto px-6 py-12 space-y-16">
        <section class="space-y-6">
            <div class="flex items-center gap-3">
                <div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
                <h1 class="text-3xl font-bold">Switch Playground</h1>
            </div>
            <p class="text-muted-foreground">Toggle between checked/unchecked, adjust size and disabled state.</p>

            <div class="grid lg:grid-cols-2 gap-8">
                <div class="space-y-4">
                    <div class={`${card} border-dashed p-12 flex items-center justify-center min-h-[200px]`}>
                        <label class="flex items-center gap-3 text-base cursor-pointer">
                            <Switch bind:checked {size} {disabled} />
                            <span class={disabled ? "text-muted-foreground" : ""}>{label}</span>
                        </label>
                    </div>

                    <div class="rounded-lg border bg-card p-4 shadow-sm">
                        <div class="flex items-center justify-between mb-3">
                            <span class="text-sm font-semibold flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                Generated Code
                            </span>
                            <button
                                onclick={() => copyCode(getSwitchCode())}
                                class="text-xs px-3 py-1.5 rounded-md border hover:bg-accent transition-all hover:scale-105 font-medium"
                            >
                                {copiedCode === getSwitchCode() ? "✓ Copied!" : "Copy Code"}
                            </button>
                        </div>
                        <pre class="text-sm overflow-x-auto bg-muted/50 p-3 rounded"><code>{getSwitchCode()}</code></pre>
                    </div>
                </div>

                <div class="space-y-6">
                    <div class="space-y-3">
                        <div class="text-sm font-semibold text-foreground">Size</div>
                        <div class="grid grid-cols-3 gap-2">
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
                        <div class="text-sm font-semibold text-foreground">States</div>
                        <div class="grid grid-cols-2 gap-2">
                            <button
                                onclick={() => (checked = !checked)}
                                class={`${buttonToggle} ${checked
                                    ? "border-primary bg-primary/10 font-semibold shadow-sm"
                                    : "border-transparent bg-muted/50 hover:bg-muted"}`}
                            >
                                <div class="text-sm">Checked</div>
                                <div class="text-xs text-muted-foreground">{checked ? "On" : "Off"}</div>
                            </button>
                            <button
                                onclick={() => (disabled = !disabled)}
                                class={`${buttonToggle} ${disabled
                                    ? "border-primary bg-primary/10 font-semibold shadow-sm"
                                    : "border-transparent bg-muted/50 hover:bg-muted"}`}
                            >
                                <div class="text-sm">Disabled</div>
                                <div class="text-xs text-muted-foreground">{disabled ? "Yes" : "No"}</div>
                            </button>
                        </div>
                    </div>

                    <div class="space-y-3">
                        <div class="text-sm font-semibold text-foreground">Label</div>
                        <input
                            class="w-full rounded-md border px-3 py-2 text-sm bg-background"
                            bind:value={label}
                            maxlength="40"
                        />
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
                <label class="flex items-center gap-3 text-base cursor-pointer">
                    <Switch />
                    <span>Enable feature</span>
                </label>
            </div>
            <div class="rounded-lg border bg-card/80 backdrop-blur-sm p-4 shadow-sm">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-semibold">Code</span>
                    <button
                        onclick={() => copyCode('<label class="flex items-center gap-3 text-base cursor-pointer">\n  <Switch />\n  <span>Enable feature</span>\n</label>')}
                        class="text-xs px-3 py-1.5 rounded-md border hover:bg-accent transition-all hover:scale-105 font-medium"
                    >
                        {copiedCode === '<label class="flex items-center gap-3 text-base cursor-pointer">\n  <Switch />\n  <span>Enable feature</span>\n</label>' ? "✓ Copied" : "Copy"}
                    </button>
                </div>
                <pre class="text-sm overflow-x-auto bg-muted/50 p-3 rounded"><code>&lt;label class="flex items-center gap-3 text-base cursor-pointer"&gt;
  &lt;Switch /&gt;
  &lt;span&gt;Enable feature&lt;/span&gt;
&lt;/label&gt;</code></pre>
            </div>
        </section>

        <section class="space-y-6">
            <div class="flex items-center gap-3 mb-2">
                <div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
                <h2 class="text-3xl font-bold">Sizes</h2>
            </div>
            <p class="text-muted-foreground">Small, medium, and large switches.</p>

            <div class="grid md:grid-cols-3 gap-6">
                {#each sizes as option}
                    <div class="space-y-3 group">
                        <div>
                            <h3 class="text-lg font-semibold">{option.label}</h3>
                        </div>
                        <div class={`${card} p-8 flex items-center justify-center transition-all group-hover:shadow-md`}>
                            <Switch size={option.value} />
                        </div>
                        <div class="rounded-lg border bg-card/80 backdrop-blur-sm p-3 shadow-sm">
                            <div class="flex items-center justify-between mb-2">
                                <span class="text-xs font-medium text-muted-foreground">Code</span>
                                <button
                                    onclick={() => copyCode(`<Switch size="${option.value}" />`)}
                                    class="text-xs px-2 py-1 rounded border hover:bg-accent transition-all hover:scale-105"
                                >
                                    {copiedCode === `<Switch size="${option.value}" />` ? "✓" : "Copy"}
                                </button>
                            </div>
                            <pre class="text-xs overflow-x-auto bg-muted/50 p-2 rounded"><code>&lt;Switch size="{option.value}" /&gt;</code></pre>
                        </div>
                    </div>
                {/each}
            </div>
        </section>

        <section class="space-y-6">
            <div class="flex items-center gap-3 mb-2">
                <div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
                <h2 class="text-3xl font-bold">Examples</h2>
            </div>
            <p class="text-muted-foreground">Common use cases for switches.</p>
            <div class="grid md:grid-cols-2 gap-4">
                <div class={`${card} p-4 space-y-3`}>
                    <label class="flex items-center justify-between cursor-pointer">
                        <span class="text-sm font-medium">Enable notifications</span>
                        <Switch size="sm" />
                    </label>
                </div>
                <div class={`${card} p-4 space-y-3`}>
                    <label class="flex items-center justify-between cursor-pointer">
                        <span class="text-sm font-medium">Dark mode</span>
                        <Switch size="sm" checked />
                    </label>
                </div>
                <div class={`${card} p-4 space-y-3`}>
                    <label class="flex items-center justify-between cursor-pointer">
                        <span class="text-sm font-medium">Auto-save</span>
                        <Switch size="sm" />
                    </label>
                </div>
                <div class={`${card} p-4 space-y-3`}>
                    <label class="flex items-center justify-between cursor-pointer opacity-50">
                        <span class="text-sm font-medium">Premium feature</span>
                        <Switch size="sm" disabled />
                    </label>
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
                        onclick={() => copyCode('import Switch from "$lib/components/ui/switch/switch.svelte";')}
                        class="text-xs px-3 py-1.5 rounded-md border hover:bg-accent transition-all hover:scale-105 font-medium"
                    >
                        {copiedCode === 'import Switch from "$lib/components/ui/switch/switch.svelte";' ? "✓ Copied" : "Copy"}
                    </button>
                </div>
                <pre class="text-sm overflow-x-auto bg-muted/50 p-3 rounded"><code>import Switch from "$lib/components/ui/switch/switch.svelte";</code></pre>
            </div>
        </section>

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
                            <td class="p-4 font-mono text-xs font-semibold">checked</td>
                            <td class="p-4 font-mono text-xs text-muted-foreground">boolean</td>
                            <td class="p-4 font-mono text-xs">false</td>
                            <td class="p-4 text-muted-foreground">Controlled checked state</td>
                        </tr>
                        <tr class="hover:bg-muted/20 transition-colors">
                            <td class="p-4 font-mono text-xs font-semibold">size</td>
                            <td class="p-4 font-mono text-xs text-muted-foreground">"sm" | "md" | "lg"</td>
                            <td class="p-4 font-mono text-xs">"md"</td>
                            <td class="p-4 text-muted-foreground">Switch size</td>
                        </tr>
                        <tr class="hover:bg-muted/20 transition-colors">
                            <td class="p-4 font-mono text-xs font-semibold">disabled</td>
                            <td class="p-4 font-mono text-xs text-muted-foreground">boolean</td>
                            <td class="p-4 font-mono text-xs">false</td>
                            <td class="p-4 text-muted-foreground">Disables interaction</td>
                        </tr>
                        <tr class="hover:bg-muted/20 transition-colors">
                            <td class="p-4 font-mono text-xs font-semibold">showIcon</td>
                            <td class="p-4 font-mono text-xs text-muted-foreground">boolean</td>
                            <td class="p-4 font-mono text-xs">false</td>
                            <td class="p-4 text-muted-foreground">Show icon inside toggle</td>
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
        </section>
    </div>
</div>
