<script lang="ts">
    import Tabs from "$lib/components/ui/tabs/tabs.svelte";
    import TabsList from "$lib/components/ui/tabs/tabs-list.svelte";
    import TabsTrigger from "$lib/components/ui/tabs/tabs-trigger.svelte";
    import TabsContent from "$lib/components/ui/tabs/tabs-content.svelte";

    const sizes = [
        { value: "fit-content" as const, label: "Fit Content" },
        { value: "full-width" as const, label: "Full Width" },
    ];

    const variants = [
        { value: "secondary" as const, label: "Secondary" },
        { value: "primary" as const, label: "Primary" },
        { value: "contained" as const, label: "Contained" },
    ];

    let size = $state<typeof sizes[number]["value"]>("fit-content");
    let variant = $state<typeof variants[number]["value"]>("secondary");
    let currentTab = $state("overview");
    let copiedCode = $state("");

    const card = "rounded-xl border bg-gradient-to-br from-card to-muted/20";
    const buttonToggle = "px-3 py-2 text-sm rounded-lg border-2 transition-all hover:scale-105";

    function copyCode(code: string) {
        navigator.clipboard.writeText(code);
        copiedCode = code;
        setTimeout(() => (copiedCode = ""), 2000);
    }

    function getTabsCode() {
        const sizeAttr = size !== "fit-content" ? ` size="${size}"` : "";
        const variantAttr = variant !== "secondary" ? ` variant="${variant}"` : "";
        return `<Tabs value="overview">
  <TabsList${sizeAttr}${variantAttr}>
    <TabsTrigger${sizeAttr}${variantAttr} value="overview">Overview</TabsTrigger>
    <TabsTrigger${sizeAttr}${variantAttr} value="analytics">Analytics</TabsTrigger>
    <TabsTrigger${sizeAttr}${variantAttr} value="settings">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Overview content</TabsContent>
  <TabsContent value="analytics">Analytics content</TabsContent>
  <TabsContent value="settings">Settings content</TabsContent>
</Tabs>`;
    }
</script>

<div class="min-h-screen bg-gradient-to-b from-background to-muted/20">
    <div class="container max-w-6xl mx-auto px-6 py-12 space-y-16">
        <section class="space-y-6">
            <div class="flex items-center gap-3">
                <div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
                <h1 class="text-3xl font-bold">Tabs Playground</h1>
            </div>
            <p class="text-muted-foreground">Switch between size and variant configurations.</p>

            <div class="grid lg:grid-cols-2 gap-8">
                <div class="space-y-4">
                    <div class={`${card} border-dashed p-12 min-h-[300px]`}>
                        <Tabs bind:value={currentTab}>
                            <TabsList {size} {variant}>
                                <TabsTrigger {size} {variant} value="overview">Overview</TabsTrigger>
                                <TabsTrigger {size} {variant} value="analytics">Analytics</TabsTrigger>
                                <TabsTrigger {size} {variant} value="settings">Settings</TabsTrigger>
                            </TabsList>
                            <TabsContent value="overview">
                                <div class="py-6 space-y-3">
                                    <h3 class="text-lg font-semibold">Overview</h3>
                                    <p class="text-sm text-muted-foreground">This is the overview tab content. You can put any content here.</p>
                                </div>
                            </TabsContent>
                            <TabsContent value="analytics">
                                <div class="py-6 space-y-3">
                                    <h3 class="text-lg font-semibold">Analytics</h3>
                                    <p class="text-sm text-muted-foreground">View your analytics and performance metrics here.</p>
                                </div>
                            </TabsContent>
                            <TabsContent value="settings">
                                <div class="py-6 space-y-3">
                                    <h3 class="text-lg font-semibold">Settings</h3>
                                    <p class="text-sm text-muted-foreground">Configure your application settings and preferences.</p>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>

                    <div class="rounded-lg border bg-card p-4 shadow-sm">
                        <div class="flex items-center justify-between mb-3">
                            <span class="text-sm font-semibold flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                Generated Code
                            </span>
                            <button
                                onclick={() => copyCode(getTabsCode())}
                                class="text-xs px-3 py-1.5 rounded-md border hover:bg-accent transition-all hover:scale-105 font-medium"
                            >
                                {copiedCode === getTabsCode() ? "✓ Copied!" : "Copy Code"}
                            </button>
                        </div>
                        <pre class="text-sm overflow-x-auto bg-muted/50 p-3 rounded"><code>{getTabsCode()}</code></pre>
                    </div>
                </div>

                <div class="space-y-6">
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
                        <div class="text-sm font-semibold text-foreground">Current Tab</div>
                        <div class="rounded-lg border bg-muted/50 p-4">
                            <div class="font-mono text-sm">
                                value: <span class="text-primary font-semibold">"{currentTab}"</span>
                            </div>
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
                <Tabs value="tab1">
                    <TabsList>
                        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                    </TabsList>
                    <TabsContent value="tab1">Content for Tab 1</TabsContent>
                    <TabsContent value="tab2">Content for Tab 2</TabsContent>
                    <TabsContent value="tab3">Content for Tab 3</TabsContent>
                </Tabs>
            </div>
            <div class="rounded-lg border bg-card/80 backdrop-blur-sm p-4 shadow-sm">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-semibold">Code</span>
                    <button
                        onclick={() => copyCode('<Tabs value="tab1">\n  <TabsList>\n    <TabsTrigger value="tab1">Tab 1</TabsTrigger>\n    <TabsTrigger value="tab2">Tab 2</TabsTrigger>\n    <TabsTrigger value="tab3">Tab 3</TabsTrigger>\n  </TabsList>\n  <TabsContent value="tab1">Content for Tab 1</TabsContent>\n  <TabsContent value="tab2">Content for Tab 2</TabsContent>\n  <TabsContent value="tab3">Content for Tab 3</TabsContent>\n</Tabs>')}
                        class="text-xs px-3 py-1.5 rounded-md border hover:bg-accent transition-all hover:scale-105 font-medium"
                    >
                        {copiedCode === '<Tabs value="tab1">\n  <TabsList>\n    <TabsTrigger value="tab1">Tab 1</TabsTrigger>\n    <TabsTrigger value="tab2">Tab 2</TabsTrigger>\n    <TabsTrigger value="tab3">Tab 3</TabsTrigger>\n  </TabsList>\n  <TabsContent value="tab1">Content for Tab 1</TabsContent>\n  <TabsContent value="tab2">Content for Tab 2</TabsContent>\n  <TabsContent value="tab3">Content for Tab 3</TabsContent>\n</Tabs>' ? "✓ Copied" : "Copy"}
                    </button>
                </div>
                <pre class="text-sm overflow-x-auto bg-muted/50 p-3 rounded"><code>&lt;Tabs value="tab1"&gt;
  &lt;TabsList&gt;
    &lt;TabsTrigger value="tab1"&gt;Tab 1&lt;/TabsTrigger&gt;
    &lt;TabsTrigger value="tab2"&gt;Tab 2&lt;/TabsTrigger&gt;
    &lt;TabsTrigger value="tab3"&gt;Tab 3&lt;/TabsTrigger&gt;
  &lt;/TabsList&gt;
  &lt;TabsContent value="tab1"&gt;Content for Tab 1&lt;/TabsContent&gt;
  &lt;TabsContent value="tab2"&gt;Content for Tab 2&lt;/TabsContent&gt;
  &lt;TabsContent value="tab3"&gt;Content for Tab 3&lt;/TabsContent&gt;
&lt;/Tabs&gt;</code></pre>
            </div>
        </section>

        <section class="space-y-6">
            <div class="flex items-center gap-3 mb-2">
                <div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
                <h2 class="text-3xl font-bold">Variants</h2>
            </div>
            <p class="text-muted-foreground">Different visual styles for tabs.</p>

            <div class="grid gap-6">
                {#each variants as variantOption}
                    <div class="space-y-3 group">
                        <div>
                            <h3 class="text-lg font-semibold capitalize">{variantOption.label}</h3>
                        </div>
                        <div class={`${card} p-8 transition-all group-hover:shadow-md`}>
                            <Tabs value="first">
                                <TabsList variant={variantOption.value}>
                                    <TabsTrigger variant={variantOption.value} value="first">First</TabsTrigger>
                                    <TabsTrigger variant={variantOption.value} value="second">Second</TabsTrigger>
                                    <TabsTrigger variant={variantOption.value} value="third">Third</TabsTrigger>
                                </TabsList>
                                <TabsContent value="first">Content for first tab</TabsContent>
                                <TabsContent value="second">Content for second tab</TabsContent>
                                <TabsContent value="third">Content for third tab</TabsContent>
                            </Tabs>
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
            <p class="text-muted-foreground">Common tab configurations.</p>

            <div class="grid md:grid-cols-2 gap-6">
                <div class="space-y-3 group">
                    <div>
                        <h3 class="text-lg font-semibold">Dashboard Navigation</h3>
                        <p class="text-sm text-muted-foreground">Primary variant with full width</p>
                    </div>
                    <div class={`${card} p-6 transition-all group-hover:shadow-md`}>
                        <Tabs value="home">
                            <TabsList size="full-width" variant="primary">
                                <TabsTrigger size="full-width" variant="primary" value="home">Home</TabsTrigger>
                                <TabsTrigger size="full-width" variant="primary" value="dashboard">Dashboard</TabsTrigger>
                                <TabsTrigger size="full-width" variant="primary" value="reports">Reports</TabsTrigger>
                            </TabsList>
                            <TabsContent value="home">
                                <div class="py-4 text-sm text-muted-foreground">Home content...</div>
                            </TabsContent>
                            <TabsContent value="dashboard">
                                <div class="py-4 text-sm text-muted-foreground">Dashboard content...</div>
                            </TabsContent>
                            <TabsContent value="reports">
                                <div class="py-4 text-sm text-muted-foreground">Reports content...</div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>

                <div class="space-y-3 group">
                    <div>
                        <h3 class="text-lg font-semibold">Profile Sections</h3>
                        <p class="text-sm text-muted-foreground">Contained variant</p>
                    </div>
                    <div class={`${card} p-6 transition-all group-hover:shadow-md`}>
                        <Tabs value="profile">
                            <TabsList variant="contained">
                                <TabsTrigger variant="contained" value="profile">Profile</TabsTrigger>
                                <TabsTrigger variant="contained" value="security">Security</TabsTrigger>
                                <TabsTrigger variant="contained" value="notifications">Notifications</TabsTrigger>
                            </TabsList>
                            <TabsContent value="profile">
                                <div class="py-4 text-sm text-muted-foreground">Profile settings...</div>
                            </TabsContent>
                            <TabsContent value="security">
                                <div class="py-4 text-sm text-muted-foreground">Security settings...</div>
                            </TabsContent>
                            <TabsContent value="notifications">
                                <div class="py-4 text-sm text-muted-foreground">Notification preferences...</div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>

                <div class="space-y-3 group">
                    <div>
                        <h3 class="text-lg font-semibold">Product Details</h3>
                        <p class="text-sm text-muted-foreground">Secondary with icons</p>
                    </div>
                    <div class={`${card} p-6 transition-all group-hover:shadow-md`}>
                        <Tabs value="description">
                            <TabsList>
                                <TabsTrigger value="description">Description</TabsTrigger>
                                <TabsTrigger value="specs">Specifications</TabsTrigger>
                                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                            </TabsList>
                            <TabsContent value="description">
                                <div class="py-4 text-sm text-muted-foreground">Product description details...</div>
                            </TabsContent>
                            <TabsContent value="specs">
                                <div class="py-4 text-sm text-muted-foreground">Technical specifications...</div>
                            </TabsContent>
                            <TabsContent value="reviews">
                                <div class="py-4 text-sm text-muted-foreground">Customer reviews...</div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>

                <div class="space-y-3 group">
                    <div>
                        <h3 class="text-lg font-semibold">Two Tab Layout</h3>
                        <p class="text-sm text-muted-foreground">Simple toggle between views</p>
                    </div>
                    <div class={`${card} p-6 transition-all group-hover:shadow-md`}>
                        <Tabs value="grid">
                            <TabsList>
                                <TabsTrigger value="grid">Grid View</TabsTrigger>
                                <TabsTrigger value="list">List View</TabsTrigger>
                            </TabsList>
                            <TabsContent value="grid">
                                <div class="py-4 text-sm text-muted-foreground">Grid layout...</div>
                            </TabsContent>
                            <TabsContent value="list">
                                <div class="py-4 text-sm text-muted-foreground">List layout...</div>
                            </TabsContent>
                        </Tabs>
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
                        onclick={() => copyCode('import Tabs from "$lib/components/ui/tabs/tabs.svelte";\nimport TabsList from "$lib/components/ui/tabs/tabs-list.svelte";\nimport TabsTrigger from "$lib/components/ui/tabs/tabs-trigger.svelte";\nimport TabsContent from "$lib/components/ui/tabs/tabs-content.svelte";')}
                        class="text-xs px-3 py-1.5 rounded-md border hover:bg-accent transition-all hover:scale-105 font-medium"
                    >
                        {copiedCode === 'import Tabs from "$lib/components/ui/tabs/tabs.svelte";\nimport TabsList from "$lib/components/ui/tabs/tabs-list.svelte";\nimport TabsTrigger from "$lib/components/ui/tabs/tabs-trigger.svelte";\nimport TabsContent from "$lib/components/ui/tabs/tabs-content.svelte";' ? "✓ Copied" : "Copy"}
                    </button>
                </div>
                <pre class="text-sm overflow-x-auto bg-muted/50 p-3 rounded"><code>import Tabs from "$lib/components/ui/tabs/tabs.svelte";
import TabsList from "$lib/components/ui/tabs/tabs-list.svelte";
import TabsTrigger from "$lib/components/ui/tabs/tabs-trigger.svelte";
import TabsContent from "$lib/components/ui/tabs/tabs-content.svelte";</code></pre>
            </div>
        </section>

        <section class="space-y-4">
            <div class="flex items-center gap-3">
                <div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
                <h2 class="text-3xl font-bold">Props</h2>
            </div>

            <div class="space-y-6">
                <div>
                    <h3 class="text-lg font-semibold mb-3">Tabs (Root)</h3>
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
                                    <td class="p-4 font-mono text-xs font-semibold">value</td>
                                    <td class="p-4 font-mono text-xs text-muted-foreground">string</td>
                                    <td class="p-4 font-mono text-xs">—</td>
                                    <td class="p-4 text-muted-foreground">Active tab value (bindable)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>
                    <h3 class="text-lg font-semibold mb-3">TabsList</h3>
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
                                    <td class="p-4 font-mono text-xs font-semibold">size</td>
                                    <td class="p-4 font-mono text-xs text-muted-foreground">"fit-content" | "full-width"</td>
                                    <td class="p-4 font-mono text-xs">"fit-content"</td>
                                    <td class="p-4 text-muted-foreground">List width behavior</td>
                                </tr>
                                <tr class="hover:bg-muted/20 transition-colors">
                                    <td class="p-4 font-mono text-xs font-semibold">variant</td>
                                    <td class="p-4 font-mono text-xs text-muted-foreground">"secondary" | "primary" | "contained"</td>
                                    <td class="p-4 font-mono text-xs">"secondary"</td>
                                    <td class="p-4 text-muted-foreground">Visual style variant</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>
                    <h3 class="text-lg font-semibold mb-3">TabsTrigger</h3>
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
                                    <td class="p-4 font-mono text-xs font-semibold">value</td>
                                    <td class="p-4 font-mono text-xs text-muted-foreground">string</td>
                                    <td class="p-4 font-mono text-xs">required</td>
                                    <td class="p-4 text-muted-foreground">Tab identifier</td>
                                </tr>
                                <tr class="hover:bg-muted/20 transition-colors">
                                    <td class="p-4 font-mono text-xs font-semibold">size</td>
                                    <td class="p-4 font-mono text-xs text-muted-foreground">"fit-content" | "full-width"</td>
                                    <td class="p-4 font-mono text-xs">"fit-content"</td>
                                    <td class="p-4 text-muted-foreground">Button width (should match list)</td>
                                </tr>
                                <tr class="hover:bg-muted/20 transition-colors">
                                    <td class="p-4 font-mono text-xs font-semibold">variant</td>
                                    <td class="p-4 font-mono text-xs text-muted-foreground">"secondary" | "primary" | "contained"</td>
                                    <td class="p-4 font-mono text-xs">"secondary"</td>
                                    <td class="p-4 text-muted-foreground">Visual style (should match list)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>
                    <h3 class="text-lg font-semibold mb-3">TabsContent</h3>
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
                                    <td class="p-4 font-mono text-xs font-semibold">value</td>
                                    <td class="p-4 font-mono text-xs text-muted-foreground">string</td>
                                    <td class="p-4 font-mono text-xs">required</td>
                                    <td class="p-4 text-muted-foreground">Tab identifier (matches trigger)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>
