<script lang="ts">
    import Progress from "$lib/components/ui/progress/progress.svelte";

    let value = $state(50);
    let max = $state(100);
    let animated = $state(false);
    let copiedCode = $state("");

    const card = "rounded-xl border bg-gradient-to-br from-card to-muted/20";
    const buttonToggle = "px-3 py-2 text-sm rounded-lg border-2 transition-all hover:scale-105";

    function copyCode(code: string) {
        navigator.clipboard.writeText(code);
        copiedCode = code;
        setTimeout(() => (copiedCode = ""), 2000);
    }

    function getProgressCode() {
        return `<Progress value={${value}} max={${max}} />`;
    }

    $effect(() => {
        if (animated) {
            const interval = setInterval(() => {
                value = (value + 1) % (max + 1);
            }, 100);
            return () => clearInterval(interval);
        }
    });
</script>

<div class="min-h-screen bg-gradient-to-b from-background to-muted/20">
    <div class="container max-w-6xl mx-auto px-6 py-12 space-y-16">
        <section class="space-y-6">
            <div class="flex items-center gap-3">
                <div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
                <h1 class="text-3xl font-bold">Progress Playground</h1>
            </div>
            <p class="text-muted-foreground">Adjust value, max, and toggle animation.</p>

            <div class="grid lg:grid-cols-2 gap-8">
                <div class="space-y-4">
                    <div class={`${card} border-dashed p-12 flex flex-col gap-6 min-h-[200px] justify-center`}>
                        <Progress {value} {max} class="w-full" />
                        <div class="text-center text-sm text-muted-foreground">
                            {value} / {max} ({Math.round((value / max) * 100)}%)
                        </div>
                    </div>

                    <div class="rounded-lg border bg-card p-4 shadow-sm">
                        <div class="flex items-center justify-between mb-3">
                            <span class="text-sm font-semibold flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                Generated Code
                            </span>
                            <button
                                onclick={() => copyCode(getProgressCode())}
                                class="text-xs px-3 py-1.5 rounded-md border hover:bg-accent transition-all hover:scale-105 font-medium"
                            >
                                {copiedCode === getProgressCode() ? "✓ Copied!" : "Copy Code"}
                            </button>
                        </div>
                        <pre class="text-sm overflow-x-auto bg-muted/50 p-3 rounded"><code>{getProgressCode()}</code></pre>
                    </div>
                </div>

                <div class="space-y-6">
                    <div class="space-y-3">
                        <div class="text-sm font-semibold text-foreground">Value: {value}</div>
                        <input
                            type="range"
                            bind:value
                            min="0"
                            max={max}
                            class="w-full"
                            disabled={animated}
                        />
                    </div>

                    <div class="space-y-3">
                        <div class="text-sm font-semibold text-foreground">Max: {max}</div>
                        <input
                            type="range"
                            bind:value={max}
                            min="10"
                            max="200"
                            step="10"
                            class="w-full"
                        />
                    </div>

                    <div class="space-y-3">
                        <div class="text-sm font-semibold text-foreground">Animation</div>
                        <button
                            onclick={() => (animated = !animated)}
                            class={`${buttonToggle} w-full ${animated
                                ? "border-primary bg-primary/10 font-semibold shadow-sm"
                                : "border-transparent bg-muted/50 hover:bg-muted"}`}
                        >
                            <div class="text-sm">Auto-increment</div>
                            <div class="text-xs text-muted-foreground">{animated ? "Running" : "Stopped"}</div>
                        </button>
                    </div>

                    <div class="space-y-3">
                        <div class="text-sm font-semibold text-foreground">Presets</div>
                        <div class="grid grid-cols-3 gap-2">
                            <button
                                onclick={() => (value = 0)}
                                class={`${buttonToggle} border-transparent bg-muted/50 hover:bg-muted`}
                            >
                                0%
                            </button>
                            <button
                                onclick={() => (value = max / 2)}
                                class={`${buttonToggle} border-transparent bg-muted/50 hover:bg-muted`}
                            >
                                50%
                            </button>
                            <button
                                onclick={() => (value = max)}
                                class={`${buttonToggle} border-transparent bg-muted/50 hover:bg-muted`}
                            >
                                100%
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
            <div class={`${card} p-8 shadow-lg space-y-4`}>
                <Progress value={65} max={100} />
            </div>
            <div class="rounded-lg border bg-card/80 backdrop-blur-sm p-4 shadow-sm">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-semibold">Code</span>
                    <button
                        onclick={() => copyCode('<Progress value={65} max={100} />')}
                        class="text-xs px-3 py-1.5 rounded-md border hover:bg-accent transition-all hover:scale-105 font-medium"
                    >
                        {copiedCode === '<Progress value={65} max={100} />' ? "✓ Copied" : "Copy"}
                    </button>
                </div>
                <pre class="text-sm overflow-x-auto bg-muted/50 p-3 rounded"><code>&lt;Progress value={"{65}"} max={"{100}"} /&gt;</code></pre>
            </div>
        </section>

        <section class="space-y-6">
            <div class="flex items-center gap-3 mb-2">
                <div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
                <h2 class="text-3xl font-bold">Examples</h2>
            </div>
            <p class="text-muted-foreground">Different progress states and use cases.</p>
            <div class="grid md:grid-cols-2 gap-4">
                <div class={`${card} p-4 space-y-3`}>
                    <div class="text-sm font-semibold">File Upload - 25%</div>
                    <Progress value={25} max={100} />
                </div>
                <div class={`${card} p-4 space-y-3`}>
                    <div class="text-sm font-semibold">Processing - 75%</div>
                    <Progress value={75} max={100} />
                </div>
                <div class={`${card} p-4 space-y-3`}>
                    <div class="text-sm font-semibold">Completed - 100%</div>
                    <Progress value={100} max={100} />
                </div>
                <div class={`${card} p-4 space-y-3`}>
                    <div class="text-sm font-semibold">Starting - 5%</div>
                    <Progress value={5} max={100} />
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
                        onclick={() => copyCode('import Progress from "$lib/components/ui/progress/progress.svelte";')}
                        class="text-xs px-3 py-1.5 rounded-md border hover:bg-accent transition-all hover:scale-105 font-medium"
                    >
                        {copiedCode === 'import Progress from "$lib/components/ui/progress/progress.svelte";' ? "✓ Copied" : "Copy"}
                    </button>
                </div>
                <pre class="text-sm overflow-x-auto bg-muted/50 p-3 rounded"><code>import Progress from "$lib/components/ui/progress/progress.svelte";</code></pre>
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
                            <td class="p-4 font-mono text-xs font-semibold">value</td>
                            <td class="p-4 font-mono text-xs text-muted-foreground">number</td>
                            <td class="p-4 font-mono text-xs">—</td>
                            <td class="p-4 text-muted-foreground">Current progress value</td>
                        </tr>
                        <tr class="hover:bg-muted/20 transition-colors">
                            <td class="p-4 font-mono text-xs font-semibold">max</td>
                            <td class="p-4 font-mono text-xs text-muted-foreground">number</td>
                            <td class="p-4 font-mono text-xs">100</td>
                            <td class="p-4 text-muted-foreground">Maximum progress value</td>
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
