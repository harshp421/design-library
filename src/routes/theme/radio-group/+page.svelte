<script lang="ts">
    import RadioGroup from "$lib/components/ui/radio-group/radio-group.svelte";
    import RadioGroupItem from "$lib/components/ui/radio-group/radio-group-item.svelte";

    const orientations = [
        { value: "vertical", label: "Vertical" },
        { value: "horizontal", label: "Horizontal" },
    ];

    const options = [
        { value: "default", label: "Default" },
        { value: "comfortable", label: "Comfortable" },
        { value: "compact", label: "Compact" },
    ];

    let value = $state("default");
    let orientation = $state<"vertical" | "horizontal">("vertical");
    let copiedCode = $state("");

    const card = "rounded-xl border bg-gradient-to-br from-card to-muted/20";
    const buttonToggle = "px-3 py-2 text-sm rounded-lg border-2 transition-all hover:scale-105";

    function copyCode(code: string) {
        navigator.clipboard.writeText(code);
        copiedCode = code;
        setTimeout(() => (copiedCode = ""), 2000);
    }

    function getRadioCode() {
        const items = options.map((opt) => `  <RadioGroupItem value="${opt.value}" label="${opt.label}" />`).join("\n");
        return `<RadioGroup bind:value>\n${items}\n</RadioGroup>`;
    }
</script>

<div class="min-h-screen bg-gradient-to-b from-background to-muted/20">
    <div class="container max-w-6xl mx-auto px-6 py-12 space-y-16">
        <section class="space-y-6">
            <div class="flex items-center gap-3">
                <div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
                <h1 class="text-3xl font-bold">Radio Group Playground</h1>
            </div>
            <p class="text-muted-foreground">Select from a set of mutually exclusive options.</p>

            <div class="grid lg:grid-cols-2 gap-8">
                <div class="space-y-4">
                    <div class={`${card} border-dashed p-12 flex items-center justify-center min-h-[200px]`}>
                        <RadioGroup bind:value class={orientation === "horizontal" ? "flex gap-6" : ""}>
                            {#each options as option}
                                <RadioGroupItem value={option.value} label={option.label} />
                            {/each}
                        </RadioGroup>
                    </div>

                    <div class="rounded-lg border bg-card p-4 shadow-sm">
                        <div class="flex items-center justify-between mb-3">
                            <span class="text-sm font-semibold flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                Generated Code
                            </span>
                            <button
                                onclick={() => copyCode(getRadioCode())}
                                class="text-xs px-3 py-1.5 rounded-md border hover:bg-accent transition-all hover:scale-105 font-medium"
                            >
                                {copiedCode === getRadioCode() ? "✓ Copied!" : "Copy Code"}
                            </button>
                        </div>
                        <pre class="text-sm overflow-x-auto bg-muted/50 p-3 rounded"><code>{getRadioCode()}</code></pre>
                    </div>
                </div>

                <div class="space-y-6">
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
                        <div class="text-sm font-semibold text-foreground">Current Value</div>
                        <div class="rounded-lg border bg-muted/50 p-4">
                            <div class="font-mono text-sm">
                                value: <span class="text-primary font-semibold">"{value}"</span>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-3">
                        <div class="text-sm font-semibold text-foreground">Quick Select</div>
                        <div class="grid gap-2">
                            {#each options as option}
                                <button
                                    onclick={() => (value = option.value)}
                                    class={`${buttonToggle} ${value === option.value
                                        ? "border-primary bg-primary/10 font-semibold shadow-sm"
                                        : "border-transparent bg-muted/50 hover:bg-muted"}`}
                                >
                                    {option.label}
                                </button>
                            {/each}
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
                <RadioGroup>
                    <RadioGroupItem value="option1" label="Option 1" />
                    <RadioGroupItem value="option2" label="Option 2" />
                    <RadioGroupItem value="option3" label="Option 3" />
                </RadioGroup>
            </div>
            <div class="rounded-lg border bg-card/80 backdrop-blur-sm p-4 shadow-sm">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-semibold">Code</span>
                    <button
                        onclick={() => copyCode('<RadioGroup>\n  <RadioGroupItem value="option1" label="Option 1" />\n  <RadioGroupItem value="option2" label="Option 2" />\n  <RadioGroupItem value="option3" label="Option 3" />\n</RadioGroup>')}
                        class="text-xs px-3 py-1.5 rounded-md border hover:bg-accent transition-all hover:scale-105 font-medium"
                    >
                        {copiedCode === '<RadioGroup>\n  <RadioGroupItem value="option1" label="Option 1" />\n  <RadioGroupItem value="option2" label="Option 2" />\n  <RadioGroupItem value="option3" label="Option 3" />\n</RadioGroup>' ? "✓ Copied" : "Copy"}
                    </button>
                </div>
                <pre class="text-sm overflow-x-auto bg-muted/50 p-3 rounded"><code>&lt;RadioGroup&gt;
  &lt;RadioGroupItem value="option1" label="Option 1" /&gt;
  &lt;RadioGroupItem value="option2" label="Option 2" /&gt;
  &lt;RadioGroupItem value="option3" label="Option 3" /&gt;
&lt;/RadioGroup&gt;</code></pre>
            </div>
        </section>

        <section class="space-y-6">
            <div class="flex items-center gap-3 mb-2">
                <div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
                <h2 class="text-3xl font-bold">Examples</h2>
            </div>
            <p class="text-muted-foreground">Common radio group patterns.</p>

            <div class="grid md:grid-cols-2 gap-6">
                <div class="space-y-3 group">
                    <div>
                        <h3 class="text-lg font-semibold">Notification Preferences</h3>
                        <p class="text-sm text-muted-foreground">Choose how you want to receive updates</p>
                    </div>
                    <div class={`${card} p-6 transition-all group-hover:shadow-md`}>
                        <RadioGroup value="email">
                            <RadioGroupItem value="email" label="Email only" />
                            <RadioGroupItem value="sms" label="SMS only" />
                            <RadioGroupItem value="both" label="Both email and SMS" />
                            <RadioGroupItem value="none" label="No notifications" />
                        </RadioGroup>
                    </div>
                </div>

                <div class="space-y-3 group">
                    <div>
                        <h3 class="text-lg font-semibold">Payment Method</h3>
                        <p class="text-sm text-muted-foreground">Select your preferred payment option</p>
                    </div>
                    <div class={`${card} p-6 transition-all group-hover:shadow-md`}>
                        <RadioGroup value="card">
                            <RadioGroupItem value="card" label="Credit/Debit Card" />
                            <RadioGroupItem value="paypal" label="PayPal" />
                            <RadioGroupItem value="bank" label="Bank Transfer" />
                        </RadioGroup>
                    </div>
                </div>

                <div class="space-y-3 group">
                    <div>
                        <h3 class="text-lg font-semibold">Theme Selection</h3>
                        <p class="text-sm text-muted-foreground">Horizontal layout example</p>
                    </div>
                    <div class={`${card} p-6 transition-all group-hover:shadow-md`}>
                        <RadioGroup value="light" class="flex gap-6">
                            <RadioGroupItem value="light" label="Light" />
                            <RadioGroupItem value="dark" label="Dark" />
                            <RadioGroupItem value="system" label="System" />
                        </RadioGroup>
                    </div>
                </div>

                <div class="space-y-3 group">
                    <div>
                        <h3 class="text-lg font-semibold">Size Options</h3>
                        <p class="text-sm text-muted-foreground">Product size selection</p>
                    </div>
                    <div class={`${card} p-6 transition-all group-hover:shadow-md`}>
                        <RadioGroup value="m" class="flex gap-4">
                            <RadioGroupItem value="s" label="S" />
                            <RadioGroupItem value="m" label="M" />
                            <RadioGroupItem value="l" label="L" />
                            <RadioGroupItem value="xl" label="XL" />
                        </RadioGroup>
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
                        onclick={() => copyCode('import RadioGroup from "$lib/components/ui/radio-group/radio-group.svelte";\nimport RadioGroupItem from "$lib/components/ui/radio-group/radio-group-item.svelte";')}
                        class="text-xs px-3 py-1.5 rounded-md border hover:bg-accent transition-all hover:scale-105 font-medium"
                    >
                        {copiedCode === 'import RadioGroup from "$lib/components/ui/radio-group/radio-group.svelte";\nimport RadioGroupItem from "$lib/components/ui/radio-group/radio-group-item.svelte";' ? "✓ Copied" : "Copy"}
                    </button>
                </div>
                <pre class="text-sm overflow-x-auto bg-muted/50 p-3 rounded"><code>import RadioGroup from "$lib/components/ui/radio-group/radio-group.svelte";
import RadioGroupItem from "$lib/components/ui/radio-group/radio-group-item.svelte";</code></pre>
            </div>
        </section>

        <section class="space-y-4">
            <div class="flex items-center gap-3">
                <div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
                <h2 class="text-3xl font-bold">Props</h2>
            </div>

            <div class="space-y-4">
                <div>
                    <h3 class="text-lg font-semibold mb-3">RadioGroup</h3>
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
                                    <td class="p-4 text-muted-foreground">Controlled value (bindable)</td>
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
                    <h3 class="text-lg font-semibold mb-3">RadioGroupItem</h3>
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
                                    <td class="p-4 text-muted-foreground">Value for this radio option</td>
                                </tr>
                                <tr class="hover:bg-muted/20 transition-colors">
                                    <td class="p-4 font-mono text-xs font-semibold">label</td>
                                    <td class="p-4 font-mono text-xs text-muted-foreground">string</td>
                                    <td class="p-4 font-mono text-xs">—</td>
                                    <td class="p-4 text-muted-foreground">Label text for the option</td>
                                </tr>
                                <tr class="hover:bg-muted/20 transition-colors">
                                    <td class="p-4 font-mono text-xs font-semibold">disabled</td>
                                    <td class="p-4 font-mono text-xs text-muted-foreground">boolean</td>
                                    <td class="p-4 font-mono text-xs">false</td>
                                    <td class="p-4 text-muted-foreground">Disables this option</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>
