<script lang="ts">
    import RangeSelector from "$lib/components/ui/range-selector/range-selector.svelte";

    const orientations = [
        { value: "horizontal" as const, label: "Horizontal" },
        { value: "vertical" as const, label: "Vertical" },
    ];

    let value = $state([50]);
    let min = $state(0);
    let max = $state(100);
    let step = $state(1);
    let orientation = $state<"horizontal" | "vertical">("horizontal");
    let isRange = $state(false);
    let rangeValue = $state([25, 75]);
    let copiedCode = $state("");

    const card = "rounded-xl border bg-gradient-to-br from-card to-muted/20";
    const buttonToggle = "px-3 py-2 text-sm rounded-lg border-2 transition-all hover:scale-105";

    function copyCode(code: string) {
        navigator.clipboard.writeText(code);
        copiedCode = code;
        setTimeout(() => (copiedCode = ""), 2000);
    }

    function getRangeSelectorCode() {
        const currentValue = isRange ? rangeValue : value;
        const minAttr = min !== 0 ? ` min={${min}}` : "";
        const maxAttr = max !== 100 ? ` max={${max}}` : "";
        const stepAttr = step !== 1 ? ` step={${step}}` : "";
        const orientationAttr = orientation !== "horizontal" ? ` orientation="${orientation}"` : "";
        return `<RangeSelector bind:value={${JSON.stringify(currentValue)}}${minAttr}${maxAttr}${stepAttr}${orientationAttr} />`;
    }
</script>

<div class="min-h-screen bg-gradient-to-b from-background to-muted/20">
    <div class="container max-w-6xl mx-auto px-6 py-12 space-y-16">
        <section class="space-y-6">
            <div class="flex items-center gap-3">
                <div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
                <h1 class="text-3xl font-bold">Range Selector (Slider) Playground</h1>
            </div>
            <p class="text-muted-foreground">Adjust value, min/max bounds, step, and orientation.</p>

            <div class="grid lg:grid-cols-2 gap-8">
                <div class="space-y-4">
                    <div class={`${card} border-dashed p-12 flex items-center justify-center ${orientation === "vertical" ? "min-h-[400px]" : "min-h-[200px]"}`}>
                        {#if isRange}
                            <RangeSelector bind:value={rangeValue} {min} {max} {step} {orientation} class={orientation === "vertical" ? "h-64" : "w-full max-w-md"} />
                        {:else}
                            <RangeSelector bind:value {min} {max} {step} {orientation} class={orientation === "vertical" ? "h-64" : "w-full max-w-md"} />
                        {/if}
                    </div>

                    <div class="rounded-lg border bg-card p-4 shadow-sm">
                        <div class="flex items-center justify-between mb-3">
                            <span class="text-sm font-semibold flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                Generated Code
                            </span>
                            <button
                                onclick={() => copyCode(getRangeSelectorCode())}
                                class="text-xs px-3 py-1.5 rounded-md border hover:bg-accent transition-all hover:scale-105 font-medium"
                            >
                                {copiedCode === getRangeSelectorCode() ? "✓ Copied!" : "Copy Code"}
                            </button>
                        </div>
                        <pre class="text-sm overflow-x-auto bg-muted/50 p-3 rounded"><code>{getRangeSelectorCode()}</code></pre>
                    </div>
                </div>

                <div class="space-y-6">
                    <div class="space-y-3">
                        <div class="text-sm font-semibold text-foreground">Current Value</div>
                        <div class="rounded-lg border bg-muted/50 p-4">
                            <div class="font-mono text-sm">
                                {#if isRange}
                                    [{rangeValue[0]}, {rangeValue[1]}]
                                {:else}
                                    {value[0]}
                                {/if}
                            </div>
                        </div>
                    </div>

                    <div class="space-y-3">
                        <div class="text-sm font-semibold text-foreground">Mode</div>
                        <div class="grid grid-cols-2 gap-2">
                            <button
                                onclick={() => (isRange = false)}
                                class={`${buttonToggle} ${!isRange
                                    ? "border-primary bg-primary/10 font-semibold shadow-sm"
                                    : "border-transparent bg-muted/50 hover:bg-muted"}`}
                            >
                                Single Value
                            </button>
                            <button
                                onclick={() => (isRange = true)}
                                class={`${buttonToggle} ${isRange
                                    ? "border-primary bg-primary/10 font-semibold shadow-sm"
                                    : "border-transparent bg-muted/50 hover:bg-muted"}`}
                            >
                                Range
                            </button>
                        </div>
                    </div>

                    <div class="space-y-3">
                        <div class="text-sm font-semibold text-foreground">Orientation</div>
                        <div class="grid grid-cols-2 gap-2">
                            {#each orientations as option}
                                <button
                                    onclick={() => (orientation = option.value)}
                                    class={`${buttonToggle} ${orientation === option.value
                                        ? "border-primary bg-primary/10 font-semibold shadow-sm"
                                        : "border-transparent bg-muted/50 hover:bg-muted"}`}
                                >
                                    {option.label}
                                </button>
                            {/each}
                        </div>
                    </div>

                    <div class="space-y-3">
                        <div class="text-sm font-semibold text-foreground">Min Value: {min}</div>
                        <input
                            type="range"
                            bind:value={min}
                            min="0"
                            max="50"
                            class="w-full accent-primary"
                        />
                    </div>

                    <div class="space-y-3">
                        <div class="text-sm font-semibold text-foreground">Max Value: {max}</div>
                        <input
                            type="range"
                            bind:value={max}
                            min="50"
                            max="200"
                            class="w-full accent-primary"
                        />
                    </div>

                    <div class="space-y-3">
                        <div class="text-sm font-semibold text-foreground">Step: {step}</div>
                        <input
                            type="range"
                            bind:value={step}
                            min="1"
                            max="10"
                            class="w-full accent-primary"
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
            <div class={`${card} p-8 shadow-lg flex items-center justify-center`}>
                <RangeSelector value={[30]} class="w-full max-w-md" />
            </div>
            <div class="rounded-lg border bg-card/80 backdrop-blur-sm p-4 shadow-sm">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-semibold">Code</span>
                    <button
                        onclick={() => copyCode('<RangeSelector value={[30]} class="w-full max-w-md" />')}
                        class="text-xs px-3 py-1.5 rounded-md border hover:bg-accent transition-all hover:scale-105 font-medium"
                    >
                        {copiedCode === '<RangeSelector value={[30]} class="w-full max-w-md" />' ? "✓ Copied" : "Copy"}
                    </button>
                </div>
                <pre class="text-sm overflow-x-auto bg-muted/50 p-3 rounded"><code>&lt;RangeSelector value=&#123;[30]&#125; class="w-full max-w-md" /&gt;</code></pre>
            </div>
        </section>

        <section class="space-y-6">
            <div class="flex items-center gap-3 mb-2">
                <div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
                <h2 class="text-3xl font-bold">Examples</h2>
            </div>
            <p class="text-muted-foreground">Common slider use cases.</p>

            <div class="grid md:grid-cols-2 gap-6">
                <div class="space-y-3 group">
                    <div>
                        <h3 class="text-lg font-semibold">Volume Control</h3>
                        <p class="text-sm text-muted-foreground">Adjust audio level from 0 to 100</p>
                    </div>
                    <div class={`${card} p-6 transition-all group-hover:shadow-md`}>
                        <div class="space-y-3">
                            <div class="flex items-center justify-between text-sm">
                                <span class="text-muted-foreground">Volume</span>
                                <span class="font-mono font-semibold">70%</span>
                            </div>
                            <RangeSelector value={[70]} class="w-full" />
                        </div>
                    </div>
                </div>

                <div class="space-y-3 group">
                    <div>
                        <h3 class="text-lg font-semibold">Brightness</h3>
                        <p class="text-sm text-muted-foreground">Screen brightness adjustment</p>
                    </div>
                    <div class={`${card} p-6 transition-all group-hover:shadow-md`}>
                        <div class="space-y-3">
                            <div class="flex items-center justify-between text-sm">
                                <span class="text-muted-foreground">Brightness</span>
                                <span class="font-mono font-semibold">85%</span>
                            </div>
                            <RangeSelector value={[85]} class="w-full" />
                        </div>
                    </div>
                </div>

                <div class="space-y-3 group">
                    <div>
                        <h3 class="text-lg font-semibold">Price Range</h3>
                        <p class="text-sm text-muted-foreground">Filter products by price</p>
                    </div>
                    <div class={`${card} p-6 transition-all group-hover:shadow-md`}>
                        <div class="space-y-3">
                            <div class="flex items-center justify-between text-sm">
                                <span class="text-muted-foreground">Price Range</span>
                                <span class="font-mono font-semibold">$20 - $80</span>
                            </div>
                            <RangeSelector value={[20, 80]} min={0} max={100} class="w-full" />
                        </div>
                    </div>
                </div>

                <div class="space-y-3 group">
                    <div>
                        <h3 class="text-lg font-semibold">Temperature</h3>
                        <p class="text-sm text-muted-foreground">Thermostat control with step of 0.5</p>
                    </div>
                    <div class={`${card} p-6 transition-all group-hover:shadow-md`}>
                        <div class="space-y-3">
                            <div class="flex items-center justify-between text-sm">
                                <span class="text-muted-foreground">Temperature</span>
                                <span class="font-mono font-semibold">22.5°C</span>
                            </div>
                            <RangeSelector value={[22.5]} min={15} max={30} step={0.5} class="w-full" />
                        </div>
                    </div>
                </div>

                <div class="space-y-3 group">
                    <div>
                        <h3 class="text-lg font-semibold">Vertical Slider</h3>
                        <p class="text-sm text-muted-foreground">Height adjustment control</p>
                    </div>
                    <div class={`${card} p-6 flex flex-col items-center transition-all group-hover:shadow-md min-h-[300px]`}>
                        <div class="text-sm mb-4">
                            <span class="text-muted-foreground">Height: </span>
                            <span class="font-mono font-semibold">60cm</span>
                        </div>
                        <RangeSelector value={[60]} orientation="vertical" class="h-48" />
                    </div>
                </div>

                <div class="space-y-3 group">
                    <div>
                        <h3 class="text-lg font-semibold">Age Range</h3>
                        <p class="text-sm text-muted-foreground">Filter by age with step of 5</p>
                    </div>
                    <div class={`${card} p-6 transition-all group-hover:shadow-md`}>
                        <div class="space-y-3">
                            <div class="flex items-center justify-between text-sm">
                                <span class="text-muted-foreground">Age Range</span>
                                <span class="font-mono font-semibold">25 - 45</span>
                            </div>
                            <RangeSelector value={[25, 45]} min={18} max={65} step={5} class="w-full" />
                        </div>
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
                        onclick={() => copyCode('import RangeSelector from "$lib/components/ui/range-selector/range-selector.svelte";')}
                        class="text-xs px-3 py-1.5 rounded-md border hover:bg-accent transition-all hover:scale-105 font-medium"
                    >
                        {copiedCode === 'import RangeSelector from "$lib/components/ui/range-selector/range-selector.svelte";' ? "✓ Copied" : "Copy"}
                    </button>
                </div>
                <pre class="text-sm overflow-x-auto bg-muted/50 p-3 rounded"><code>import RangeSelector from "$lib/components/ui/range-selector/range-selector.svelte";</code></pre>
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
                            <td class="p-4 font-mono text-xs text-muted-foreground">number[]</td>
                            <td class="p-4 font-mono text-xs">[0]</td>
                            <td class="p-4 text-muted-foreground">Controlled value array (single or range)</td>
                        </tr>
                        <tr class="hover:bg-muted/20 transition-colors">
                            <td class="p-4 font-mono text-xs font-semibold">min</td>
                            <td class="p-4 font-mono text-xs text-muted-foreground">number</td>
                            <td class="p-4 font-mono text-xs">0</td>
                            <td class="p-4 text-muted-foreground">Minimum value</td>
                        </tr>
                        <tr class="hover:bg-muted/20 transition-colors">
                            <td class="p-4 font-mono text-xs font-semibold">max</td>
                            <td class="p-4 font-mono text-xs text-muted-foreground">number</td>
                            <td class="p-4 font-mono text-xs">100</td>
                            <td class="p-4 text-muted-foreground">Maximum value</td>
                        </tr>
                        <tr class="hover:bg-muted/20 transition-colors">
                            <td class="p-4 font-mono text-xs font-semibold">step</td>
                            <td class="p-4 font-mono text-xs text-muted-foreground">number</td>
                            <td class="p-4 font-mono text-xs">1</td>
                            <td class="p-4 text-muted-foreground">Step increment</td>
                        </tr>
                        <tr class="hover:bg-muted/20 transition-colors">
                            <td class="p-4 font-mono text-xs font-semibold">orientation</td>
                            <td class="p-4 font-mono text-xs text-muted-foreground">"horizontal" | "vertical"</td>
                            <td class="p-4 font-mono text-xs">"horizontal"</td>
                            <td class="p-4 text-muted-foreground">Slider orientation</td>
                        </tr>
                        <tr class="hover:bg-muted/20 transition-colors">
                            <td class="p-4 font-mono text-xs font-semibold">disabled</td>
                            <td class="p-4 font-mono text-xs text-muted-foreground">boolean</td>
                            <td class="p-4 font-mono text-xs">false</td>
                            <td class="p-4 text-muted-foreground">Disables interaction</td>
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
