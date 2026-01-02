<script lang="ts">
    import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
    let copiedCode = $state("");
    const card = "rounded-xl border bg-gradient-to-br from-card to-muted/20";
    function copyCode(code: string) {
        navigator.clipboard.writeText(code);
        copiedCode = code;
        setTimeout(() => (copiedCode = ""), 2000);
    }
</script>

<div class="min-h-screen bg-gradient-to-b from-background to-muted/20">
    <div class="container max-w-6xl mx-auto px-6 py-12 space-y-16">
        <section class="space-y-6">
            <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
                <h1 class="text-3xl font-bold">Skeleton</h1>
            </div>
            <p class="text-muted-foreground">Loading placeholders for content with consistent shape and spacing.</p>
        </section>

        <section class="space-y-4">
            <div class="flex items-center gap-3">
                <div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
                <h2 class="text-3xl font-bold">Quick Start</h2>
            </div>
            <div class={`${card} p-8 shadow-lg space-y-2`}>
                <Skeleton class="h-32 w-[250px]" />
                <Skeleton class="h-32 w-[200px]" />
            </div>
            <div class="rounded-lg border bg-card/80 backdrop-blur-sm p-4 shadow-sm">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-semibold">Code</span>
                    <button
                        onclick={() => copyCode('<Skeleton class="h-32 w-[250px]" />\n<Skeleton class="h-32 w-[200px]" />')}
                        class="text-xs px-3 py-1.5 rounded-md border hover:bg-accent transition-all hover:scale-105 font-medium"
                    >
                        {copiedCode === '<Skeleton class="h-32 w-[250px]" />\n<Skeleton class="h-32 w-[200px]" />' ? "✓ Copied" : "Copy"}
                    </button>
                </div>
                <pre class="text-sm overflow-x-auto bg-muted/50 p-3 rounded"><code>&lt;Skeleton class="h-32 w-[250px]" /&gt;
&lt;Skeleton class="h-32 w-[200px]" /&gt;</code></pre>
            </div>
        </section>

        <section class="space-y-6">
            <div class="flex items-center gap-3 mb-2">
                <div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
                <h2 class="text-3xl font-bold">Examples</h2>
            </div>
            <p class="text-muted-foreground">Common skeleton patterns for different content types.</p>

            <div class="grid gap-8">
                <!-- Card skeleton -->
                <div class={`${card} p-6 space-y-4`}>
                    <div class="text-sm font-semibold mb-4">Card Skeleton</div>
                    <div class="flex items-center space-x-4">
                        <Skeleton class="h-32 w-32 rounded-full" />
                        <div class="space-y-2">
                            <Skeleton class="h-16 w-[250px]" />
                            <Skeleton class="h-16 w-[200px]" />
                        </div>
                    </div>
                </div>

                <!-- Article skeleton -->
                <div class={`${card} p-6 space-y-4`}>
                    <div class="text-sm font-semibold mb-4">Article Skeleton</div>
                    <div class="space-y-3">
                        <Skeleton class="h-24 w-3/4" />
                        <Skeleton class="h-24 w-full" />
                        <Skeleton class="h-24 w-full" />
                        <Skeleton class="h-24 w-2/3" />
                    </div>
                </div>

                <!-- Profile skeleton -->
                <div class={`${card} p-6 space-y-4`}>
                    <div class="text-sm font-semibold mb-4">Profile Skeleton</div>
                    <div class="flex flex-col items-center space-y-3">
                        <Skeleton class="h-32 w-32 rounded-full" />
                        <Skeleton class="h-16 w-[180px]" />
                        <Skeleton class="h-3 w-[140px]" />
                    </div>
                </div>

                <!-- Table row skeleton -->
                <div class={`${card} p-6 space-y-4`}>
                    <div class="text-sm font-semibold mb-4">Table Row Skeleton</div>
                    <div class="space-y-3">
                        {#each Array(3) as _}
                            <div class="flex items-center justify-center gap-3">
                                <Skeleton class="h-14 w-[140px]" />
                                <Skeleton class="h-14 w-[100px]" />
                                <Skeleton class="h-14 w-[60px]" />
                            </div>
                        {/each}
                    </div>
                </div>

                <!-- Form skeleton -->
                <div class={`${card} p-6 space-y-4`}>
                    <div class="text-sm font-semibold mb-4">Form Skeleton</div>
                    <div class="space-y-4">
                        <div class="space-y-2">
                            <Skeleton class="h-3 w-[100px]" />
                            <Skeleton class="h-10 w-full" />
                        </div>
                        <div class="space-y-2">
                            <Skeleton class="h-3 w-[120px]" />
                            <Skeleton class="h-10 w-full" />
                        </div>
                        <Skeleton class="h-10 w-[120px]" />
                    </div>
                </div>

                <!-- Media grid skeleton -->
                <div class={`${card} p-6 space-y-4`}>
                    <div class="text-sm font-semibold mb-4">Media Grid Skeleton</div>
                    <div class="grid grid-cols-3 gap-4">
                        {#each Array(6) as _}
                            <div class="space-y-2">
                                <Skeleton class="h-32 w-full" />
                                <Skeleton class="h-3 w-3/4" />
                            </div>
                        {/each}
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
                        onclick={() => copyCode('import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";')}
                        class="text-xs px-3 py-1.5 rounded-md border hover:bg-accent transition-all hover:scale-105 font-medium"
                    >
                        {copiedCode === 'import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";' ? "✓ Copied" : "Copy"}
                    </button>
                </div>
                <pre class="text-sm overflow-x-auto bg-muted/50 p-3 rounded"><code>import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";</code></pre>
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
                            <td class="p-4 font-mono text-xs font-semibold">class</td>
                            <td class="p-4 font-mono text-xs text-muted-foreground">string</td>
                            <td class="p-4 font-mono text-xs">—</td>
                            <td class="p-4 text-muted-foreground">Utility classes for sizing and shape (width, height, border-radius)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</div>
