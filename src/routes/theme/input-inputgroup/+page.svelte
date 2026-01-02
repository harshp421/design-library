<script lang="ts">
    import Input from "$lib/components/ui/input/input.svelte";
    import * as InputGroup from "$lib/components/ui/input-group/index.js";
    import Button from "$lib/components/ui/button/button.svelte";

    const inputTypes = [
        { value: "text" as const, label: "Text" },
        { value: "email" as const, label: "Email" },
        { value: "password" as const, label: "Password" },
        { value: "number" as const, label: "Number" },
        { value: "search" as const, label: "Search" },
        { value: "tel" as const, label: "Tel" },
        { value: "url" as const, label: "URL" },
    ];

    const addonAlignments = [
        { value: "inline-start" as const, label: "Inline Start" },
        { value: "inline-end" as const, label: "Inline End" },
        { value: "block-start" as const, label: "Block Start" },
        { value: "block-end" as const, label: "Block End" },
    ];

    // Input playground
    let inputValue = $state("");
    let inputType = $state<(typeof inputTypes)[number]["value"]>("text");

    let inputPlaceholder = $state("Enter text...");
    let inputDisabled = $state(false);
    let inputInvalid = $state(false);

    // InputGroup playground
    let groupValue = $state("");
    let showAddon = $state(true);
    let showButton = $state(true);
    let addonAlign =
        $state<(typeof addonAlignments)[number]["value"]>("inline-start");

    let copiedCode = $state("");

    const card = "rounded-xl border bg-gradient-to-br from-card to-muted/20";
    const buttonToggle =
        "px-3 py-2 text-sm rounded-lg border-2 transition-all hover:scale-105";

    // function getSizeClass(value: typeof inputSize) {
    //     return sizes.find((item) => item.value === value)?.className ?? "";
    // }

    function copyCode(code: string) {
        navigator.clipboard.writeText(code);
        copiedCode = code;
        setTimeout(() => (copiedCode = ""), 2000);
    }

    function getInputCode() {
        const typeAttr = inputType !== "text" ? ` type="${inputType}"` : "";
        const placeholder = inputPlaceholder
            ? ` placeholder="${inputPlaceholder}"`
            : "";
        const disabled = inputDisabled ? " disabled" : "";
        const invalid = inputInvalid ? ' aria-invalid="true"' : "";
        return `<Input${typeAttr}${placeholder}${disabled}${invalid} />`;
    }

    function getInputGroupCode() {
        const addon = showAddon
            ? `\n  <InputGroup.Addon align="${addonAlign}">\n    <InputGroup.Text>@</InputGroup.Text>\n  </InputGroup.Addon>`
            : "";
        const button = showButton
            ? `\n  <InputGroup.Addon align="inline-end">\n    <InputGroup.Button size="xs">Search</InputGroup.Button>\n  </InputGroup.Addon>`
            : "";
        return `<InputGroup.Root>\n  <InputGroup.Input placeholder="Username" />${addon}${button}\n</InputGroup.Root>`;
    }
</script>

<div class="min-h-screen bg-gradient-to-b from-background to-muted/20">
    <div class="container max-w-7xl mx-auto px-6 py-12 space-y-24">
        <!-- Input Section -->
        <div class="space-y-16">
            <section class="space-y-6">
                <div class="flex items-center gap-3">
                    <div
                        class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"
                    ></div>
                    <h1 class="text-4xl font-bold">Input Playground</h1>
                </div>
                <p class="text-muted-foreground text-lg">
                    Try types, sizes, disabled, and invalid states.
                </p>

                <div class="grid lg:grid-cols-2 gap-8">
                    <div class="space-y-4">
                        <div
                            class={`${card} border-dashed p-12 flex items-center justify-center min-h-[200px]`}
                        >
                            <Input
                                type={inputType}
                                bind:value={inputValue}
                                placeholder={inputPlaceholder}
                                disabled={inputDisabled}
                                aria-invalid={inputInvalid}
                            />
                        </div>

                        <div class="rounded-lg border bg-card p-4 shadow-sm">
                            <div class="flex items-center justify-between mb-3">
                                <span
                                    class="text-sm font-semibold flex items-center gap-2"
                                >
                                    <span
                                        class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
                                    ></span>
                                    Generated Code
                                </span>
                                <button
                                    onclick={() => copyCode(getInputCode())}
                                    class="text-xs px-3 py-1.5 rounded-md border hover:bg-accent transition-all hover:scale-105 font-medium"
                                >
                                    {copiedCode === getInputCode()
                                        ? "✓ Copied!"
                                        : "Copy Code"}
                                </button>
                            </div>
                            <pre
                                class="text-sm overflow-x-auto bg-muted/50 p-3 rounded"><code
                                    >{getInputCode()}</code
                                ></pre>
                        </div>
                    </div>

                    <div class="space-y-6">
                        <div class="space-y-3">
                            <div class="text-sm font-semibold text-foreground">
                                Type
                            </div>
                            <div class="grid grid-cols-3 gap-2">
                                {#each inputTypes as option}
                                    <button
                                        onclick={() =>
                                            (inputType = option.value)}
                                        class={`${buttonToggle} ${
                                            inputType === option.value
                                                ? "border-primary bg-primary/10 font-semibold shadow-sm"
                                                : "border-transparent bg-muted/50 hover:bg-muted"
                                        }`}
                                    >
                                        {option.label}
                                    </button>
                                {/each}
                            </div>
                        </div>

                        <div class="space-y-3">
                            <!-- <div class="text-sm font-semibold text-foreground">Size</div> -->
                            <!-- <div class="grid grid-cols-3 gap-2">
                                {#each sizes as option}
                                    <button
                                        onclick={() => (inputSize = option.value)}
                                        class={`${buttonToggle} ${inputSize === option.value
                                            ? "border-primary bg-primary/10 font-semibold shadow-sm"
                                            : "border-transparent bg-muted/50 hover:bg-muted"}`}
                                    >
                                        {option.label}
                                    </button>
                                {/each}
                            </div> -->
                        </div>

                        <div class="space-y-3">
                            <div class="text-sm font-semibold text-foreground">
                                States
                            </div>
                            <div class="grid grid-cols-2 gap-2">
                                <button
                                    onclick={() =>
                                        (inputDisabled = !inputDisabled)}
                                    class={`${buttonToggle} ${
                                        inputDisabled
                                            ? "border-primary bg-primary/10 font-semibold shadow-sm"
                                            : "border-transparent bg-muted/50 hover:bg-muted"
                                    }`}
                                >
                                    <div class="text-sm">Disabled</div>
                                    <div class="text-xs text-muted-foreground">
                                        {inputDisabled ? "Yes" : "No"}
                                    </div>
                                </button>
                                <button
                                    onclick={() =>
                                        (inputInvalid = !inputInvalid)}
                                    class={`${buttonToggle} ${
                                        inputInvalid
                                            ? "border-primary bg-primary/10 font-semibold shadow-sm"
                                            : "border-transparent bg-muted/50 hover:bg-muted"
                                    }`}
                                >
                                    <div class="text-sm">Invalid</div>
                                    <div class="text-xs text-muted-foreground">
                                        {inputInvalid ? "True" : "False"}
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div class="space-y-3">
                            <div class="text-sm font-semibold text-foreground">
                                Placeholder
                            </div>
                            <input
                                class="w-full rounded-md border px-3 py-2 text-sm bg-background"
                                bind:value={inputPlaceholder}
                                maxlength="40"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section class="space-y-6">
                <div class="flex items-center gap-3 mb-2">
                    <div
                        class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"
                    ></div>
                    <h2 class="text-3xl font-bold">Input Types</h2>
                </div>
                <p class="text-muted-foreground">
                    All HTML5 input types supported.
                </p>
                <div class="grid md:grid-cols-2 gap-4">
                    {#each inputTypes.slice(0, 6) as type}
                        <div class={`${card} p-4 space-y-3`}>
                            <div class="text-sm font-semibold capitalize">
                                {type.label}
                            </div>
                            <Input
                                type={type.value}
                                placeholder={`Enter ${type.label.toLowerCase()}...`}
                            />
                        </div>
                    {/each}
                </div>
            </section>

            <section class="space-y-6">
                <div class="flex items-center gap-3 mb-2">
                    <div
                        class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"
                    ></div>
                    <h2 class="text-3xl font-bold">Input Sizes</h2>
                </div>
                <p class="text-muted-foreground">
                    Control height and font size via utility classes.
                </p>

                <div class="grid md:grid-cols-3 gap-6">
                    <!-- {#each sizes as option}
                        <div class="space-y-3 group">
                            <div>
                                <h3 class="text-lg font-semibold">{option.label}</h3>
                                <p class="text-sm text-muted-foreground">Class: {option.className}</p>
                            </div>
                            <div class={`${card} p-8 transition-all group-hover:shadow-md`}>
                                <Input class={option.className} placeholder="Sample input" />
                            </div>
                            <div class="rounded-lg border bg-card/80 backdrop-blur-sm p-3 shadow-sm">
                                <div class="flex items-center justify-between mb-2">
                                    <span class="text-xs font-medium text-muted-foreground">Code</span>
                                    <button
                                        onclick={() => copyCode(`<Input class="${option.className}" placeholder="Sample input" />`)}
                                        class="text-xs px-2 py-1 rounded border hover:bg-accent transition-all hover:scale-105"
                                    >
                                        {copiedCode === `<Input class="${option.className}" placeholder="Sample input" />` ? "✓" : "Copy"}
                                    </button>
                                </div>
                                <pre class="text-xs overflow-x-auto bg-muted/50 p-2 rounded"><code>&lt;Input class="{option.className}" placeholder="Sample input" /&gt;</code></pre>
                            </div>
                        </div>
                    {/each} -->
                </div>
            </section>

            <section class="space-y-4">
                <div class="flex items-center gap-3">
                    <div
                        class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"
                    ></div>
                    <h2 class="text-3xl font-bold">Input Installation</h2>
                </div>
                <div
                    class="rounded-lg border bg-card/80 backdrop-blur-sm p-4 shadow-sm"
                >
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-sm font-semibold">Import</span>
                        <button
                            onclick={() =>
                                copyCode(
                                    'import Input from "$lib/components/ui/input/input.svelte";',
                                )}
                            class="text-xs px-3 py-1.5 rounded-md border hover:bg-accent transition-all hover:scale-105 font-medium"
                        >
                            {copiedCode ===
                            'import Input from "$lib/components/ui/input/input.svelte";'
                                ? "✓ Copied"
                                : "Copy"}
                        </button>
                    </div>
                    <pre
                        class="text-sm overflow-x-auto bg-muted/50 p-3 rounded"><code
                            >import Input from "$lib/components/ui/input/input.svelte";</code
                        ></pre>
                </div>
            </section>
        </div>

        <div class="border-t pt-12"></div>

        <!-- InputGroup Section -->
        <div class="space-y-16">
            <section class="space-y-6">
                <div class="flex items-center gap-3">
                    <div
                        class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"
                    ></div>
                    <h1 class="text-4xl font-bold">Input Group Playground</h1>
                </div>
                <p class="text-muted-foreground text-lg">
                    Combine inputs with addons, buttons, and text.
                </p>

                <div class="grid lg:grid-cols-2 gap-8">
                    <div class="space-y-4">
                        <div
                            class={`${card} border-dashed p-12 flex items-center justify-center min-h-[200px]`}
                        >
                            <InputGroup.Root class="max-w-md">
                                <InputGroup.Input
                                    bind:value={groupValue}
                                    placeholder="Username"
                                />
                                {#if showAddon}
                                    <InputGroup.Addon align={addonAlign}>
                                        <InputGroup.Text>@</InputGroup.Text>
                                    </InputGroup.Addon>
                                {/if}
                                {#if showButton}
                                    <InputGroup.Addon align="inline-end">
                                        <InputGroup.Button size="xs"
                                            >Search</InputGroup.Button
                                        >
                                    </InputGroup.Addon>
                                {/if}
                            </InputGroup.Root>
                        </div>

                        <div class="rounded-lg border bg-card p-4 shadow-sm">
                            <div class="flex items-center justify-between mb-3">
                                <span
                                    class="text-sm font-semibold flex items-center gap-2"
                                >
                                    <span
                                        class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
                                    ></span>
                                    Generated Code
                                </span>
                                <button
                                    onclick={() =>
                                        copyCode(getInputGroupCode())}
                                    class="text-xs px-3 py-1.5 rounded-md border hover:bg-accent transition-all hover:scale-105 font-medium"
                                >
                                    {copiedCode === getInputGroupCode()
                                        ? "✓ Copied!"
                                        : "Copy Code"}
                                </button>
                            </div>
                            <pre
                                class="text-sm overflow-x-auto bg-muted/50 p-3 rounded"><code
                                    >{getInputGroupCode()}</code
                                ></pre>
                        </div>
                    </div>

                    <div class="space-y-6">
                        <div class="space-y-3">
                            <div class="text-sm font-semibold text-foreground">
                                Addon Alignment
                            </div>
                            <div class="grid grid-cols-2 gap-2">
                                {#each addonAlignments as option}
                                    <button
                                        onclick={() =>
                                            (addonAlign = option.value)}
                                        class={`${buttonToggle} ${
                                            addonAlign === option.value
                                                ? "border-primary bg-primary/10 font-semibold shadow-sm"
                                                : "border-transparent bg-muted/50 hover:bg-muted"
                                        }`}
                                    >
                                        {option.label}
                                    </button>
                                {/each}
                            </div>
                        </div>

                        <div class="space-y-3">
                            <div class="text-sm font-semibold text-foreground">
                                Add-ons
                            </div>
                            <div class="grid grid-cols-2 gap-2">
                                <button
                                    onclick={() => (showAddon = !showAddon)}
                                    class={`${buttonToggle} ${
                                        showAddon
                                            ? "border-primary bg-primary/10 font-semibold shadow-sm"
                                            : "border-transparent bg-muted/50 hover:bg-muted"
                                    }`}
                                >
                                    <div class="text-sm">Text Addon</div>
                                    <div class="text-xs text-muted-foreground">
                                        {showAddon ? "Shown" : "Hidden"}
                                    </div>
                                </button>
                                <button
                                    onclick={() => (showButton = !showButton)}
                                    class={`${buttonToggle} ${
                                        showButton
                                            ? "border-primary bg-primary/10 font-semibold shadow-sm"
                                            : "border-transparent bg-muted/50 hover:bg-muted"
                                    }`}
                                >
                                    <div class="text-sm">Button</div>
                                    <div class="text-xs text-muted-foreground">
                                        {showButton ? "Shown" : "Hidden"}
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="space-y-6">
                <div class="flex items-center gap-3 mb-2">
                    <div
                        class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"
                    ></div>
                    <h2 class="text-3xl font-bold">InputGroup Compositions</h2>
                </div>
                <p class="text-muted-foreground">
                    Examples combining inputs with addons in various alignments.
                </p>
                <div class="grid md:grid-cols-2 gap-4">
                    <div class={`${card} p-4 space-y-3`}>
                        <div class="text-sm font-semibold">
                            Username (inline-start)
                        </div>
                        <InputGroup.Root>
                            <InputGroup.Addon align="inline-start">
                                <InputGroup.Text>@</InputGroup.Text>
                            </InputGroup.Addon>
                            <InputGroup.Input placeholder="username" />
                        </InputGroup.Root>
                    </div>

                    <div class={`${card} p-4 space-y-3`}>
                        <div class="text-sm font-semibold">
                            Domain (inline-end)
                        </div>
                        <InputGroup.Root>
                            <InputGroup.Input placeholder="yoursite" />
                            <InputGroup.Addon align="inline-end">
                                <InputGroup.Text>.com</InputGroup.Text>
                            </InputGroup.Addon>
                        </InputGroup.Root>
                    </div>

                    <div class={`${card} p-4 space-y-3`}>
                        <div class="text-sm font-semibold">
                            Search with button
                        </div>
                        <InputGroup.Root>
                            <InputGroup.Input placeholder="Search..." />
                            <InputGroup.Addon align="inline-end">
                                <InputGroup.Button size="xs">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="size-3.5"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        ><circle cx="11" cy="11" r="8" /><path
                                            d="m21 21-4.35-4.35"
                                        /></svg
                                    >
                                </InputGroup.Button>
                            </InputGroup.Addon>
                        </InputGroup.Root>
                    </div>

                    <div class={`${card} p-4 space-y-3`}>
                        <div class="text-sm font-semibold">
                            Block start label
                        </div>
                        <InputGroup.Root>
                            <InputGroup.Addon align="block-start">
                                <InputGroup.Text>Email address</InputGroup.Text>
                            </InputGroup.Addon>
                            <InputGroup.Input
                                type="email"
                                placeholder="you@example.com"
                            />
                        </InputGroup.Root>
                    </div>
                </div>
            </section>

            <section class="space-y-4">
                <div class="flex items-center gap-3">
                    <div
                        class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"
                    ></div>
                    <h2 class="text-3xl font-bold">InputGroup Installation</h2>
                </div>
                <div
                    class="rounded-lg border bg-card/80 backdrop-blur-sm p-4 shadow-sm"
                >
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-sm font-semibold">Import</span>
                        <button
                            onclick={() =>
                                copyCode(
                                    'import * as InputGroup from "$lib/components/ui/input-group/index.js";',
                                )}
                            class="text-xs px-3 py-1.5 rounded-md border hover:bg-accent transition-all hover:scale-105 font-medium"
                        >
                            {copiedCode ===
                            'import * as InputGroup from "$lib/components/ui/input-group/index.js";'
                                ? "✓ Copied"
                                : "Copy"}
                        </button>
                    </div>
                    <pre
                        class="text-sm overflow-x-auto bg-muted/50 p-3 rounded"><code
                            >import * as InputGroup from "$lib/components/ui/input-group/index.js";</code
                        ></pre>
                </div>
            </section>

            <section class="space-y-4">
                <div class="flex items-center gap-3">
                    <div
                        class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"
                    ></div>
                    <h2 class="text-3xl font-bold">Props</h2>
                </div>
                <div
                    class="rounded-xl border overflow-hidden shadow-lg bg-card"
                >
                    <table class="w-full text-sm">
                        <thead class="bg-gradient-to-r from-muted to-muted/50">
                            <tr>
                                <th class="text-left p-4 font-semibold"
                                    >Component</th
                                >
                                <th class="text-left p-4 font-semibold">Prop</th
                                >
                                <th class="text-left p-4 font-semibold">Type</th
                                >
                                <th class="text-left p-4 font-semibold"
                                    >Default</th
                                >
                                <th class="text-left p-4 font-semibold"
                                    >Description</th
                                >
                            </tr>
                        </thead>
                        <tbody class="divide-y">
                            <tr class="hover:bg-muted/20 transition-colors">
                                <td class="p-4 font-mono text-xs font-semibold"
                                    >Input</td
                                >
                                <td class="p-4 font-mono text-xs font-semibold"
                                    >type</td
                                >
                                <td
                                    class="p-4 font-mono text-xs text-muted-foreground"
                                    >string</td
                                >
                                <td class="p-4 font-mono text-xs">"text"</td>
                                <td class="p-4 text-muted-foreground"
                                    >HTML input type</td
                                >
                            </tr>
                            <tr class="hover:bg-muted/20 transition-colors">
                                <td class="p-4 font-mono text-xs font-semibold"
                                    >Input</td
                                >
                                <td class="p-4 font-mono text-xs font-semibold"
                                    >disabled</td
                                >
                                <td
                                    class="p-4 font-mono text-xs text-muted-foreground"
                                    >boolean</td
                                >
                                <td class="p-4 font-mono text-xs">false</td>
                                <td class="p-4 text-muted-foreground"
                                    >Disables input</td
                                >
                            </tr>
                            <tr class="hover:bg-muted/20 transition-colors">
                                <td class="p-4 font-mono text-xs font-semibold"
                                    >Input</td
                                >
                                <td class="p-4 font-mono text-xs font-semibold"
                                    >aria-invalid</td
                                >
                                <td
                                    class="p-4 font-mono text-xs text-muted-foreground"
                                    >boolean</td
                                >
                                <td class="p-4 font-mono text-xs">false</td>
                                <td class="p-4 text-muted-foreground"
                                    >Marks as invalid</td
                                >
                            </tr>
                            <tr class="hover:bg-muted/20 transition-colors">
                                <td class="p-4 font-mono text-xs font-semibold"
                                    >InputGroup.Addon</td
                                >
                                <td class="p-4 font-mono text-xs font-semibold"
                                    >align</td
                                >
                                <td
                                    class="p-4 font-mono text-xs text-muted-foreground"
                                    >"inline-start" | "inline-end" |
                                    "block-start" | "block-end"</td
                                >
                                <td class="p-4 font-mono text-xs"
                                    >"inline-start"</td
                                >
                                <td class="p-4 text-muted-foreground"
                                    >Addon position</td
                                >
                            </tr>
                            <tr class="hover:bg-muted/20 transition-colors">
                                <td class="p-4 font-mono text-xs font-semibold"
                                    >InputGroup.Button</td
                                >
                                <td class="p-4 font-mono text-xs font-semibold"
                                    >size</td
                                >
                                <td
                                    class="p-4 font-mono text-xs text-muted-foreground"
                                    >"xs" | "sm" | "icon-xs" | "icon-sm"</td
                                >
                                <td class="p-4 font-mono text-xs">"xs"</td>
                                <td class="p-4 text-muted-foreground"
                                    >Button size</td
                                >
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    </div>
</div>
