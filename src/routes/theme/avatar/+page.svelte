<script lang="ts">
    import * as Avatar from "$lib/components/ui/avatar/index.js";

    const sizes = [
        { value: "sm" as const, label: "Small", className: "size-10" },
        { value: "md" as const, label: "Medium", className: "size-12" },
        { value: "lg" as const, label: "Large", className: "size-16" },
    ];

    const shapes = [
        { value: "rounded" as const, label: "Rounded", className: "rounded-4" },
        { value: "pill" as const, label: "Pill", className: "rounded-full" },
        { value: "square" as const, label: "Square", className: "rounded-md" },
    ];

    let imageUrl = $state("https://github.com/shadcn.png");
    let initials = $state("HP");
    let altText = $state("User avatar");
    let size = $state<typeof sizes[number]["value"]>("md");
    let shape = $state<typeof shapes[number]["value"]>("rounded");
    let showRing = $state(false);
    let fallbackOnly = $state(false);
    let copiedCode = $state("");

    const highlightCard = "rounded-xl border bg-gradient-to-br from-card to-muted/30";
    const buttonBase = "px-3 py-2 text-sm rounded-lg border-2 transition-all hover:scale-105";

    function getSizeClass(value: typeof size) {
        return sizes.find((item) => item.value === value)?.className ?? "";
    }

    function getShapeClass(value: typeof shape) {
        return shapes.find((item) => item.value === value)?.className ?? "";
    }

    function copyCode(code: string) {
        navigator.clipboard.writeText(code);
        copiedCode = code;
        setTimeout(() => (copiedCode = ""), 2000);
    }

    function getAvatarCode() {
        const sizeClass = getSizeClass(size);
        const shapeClass = getShapeClass(shape);
        const ringClass = showRing ? " ring-2 ring-primary/70 ring-offset-2 ring-offset-background" : "";
        const body = fallbackOnly
            ? `  <Avatar.Fallback>${initials}</Avatar.Fallback>`
            : `  <Avatar.Image src="${imageUrl}" alt="${altText}" />\n  <Avatar.Fallback>${initials}</Avatar.Fallback>`;

        return `<Avatar.Root class="${sizeClass} ${shapeClass}${ringClass}">\n${body}\n</Avatar.Root>`;
    }
</script>

<div class="min-h-screen bg-gradient-to-b from-background to-muted/20">
    <div class="container max-w-6xl mx-auto px-6 py-12 space-y-16">
        <!-- Playground -->
        <section class="space-y-6">
            <div class="flex items-center gap-3">
                <div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
                <h1 class="text-3xl font-bold">Avatar Playground</h1>
            </div>
            <p class="text-muted-foreground">Try image vs fallback, sizes, shapes, and ring styles.</p>

            <div class="grid lg:grid-cols-2 gap-8">
                <div class="space-y-4">
                    <div class={`${highlightCard} border-dashed p-10 flex items-center justify-center min-h-[220px]`}>
                        <Avatar.Root
                            class={`${getSizeClass(size)} ${getShapeClass(shape)} ${
                                showRing ? "ring-2 ring-primary/70 ring-offset-2 ring-offset-background" : ""
                            }`}
                        >
                            {#if !fallbackOnly}
                                <Avatar.Image src={imageUrl} alt={altText} />
                            {/if}
                            <Avatar.Fallback>{initials}</Avatar.Fallback>
                        </Avatar.Root>
                    </div>

                    <div class="rounded-lg border bg-card p-4 shadow-sm">
                        <div class="flex items-center justify-between mb-3">
                            <span class="text-sm font-semibold flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                Generated Code
                            </span>
                            <button
                                onclick={() => copyCode(getAvatarCode())}
                                class="text-xs px-3 py-1.5 rounded-md border hover:bg-accent transition-all hover:scale-105 font-medium"
                            >
                                {copiedCode === getAvatarCode() ? "✓ Copied!" : "Copy Code"}
                            </button>
                        </div>
                        <pre class="text-sm overflow-x-auto bg-muted/50 p-3 rounded"><code>{getAvatarCode()}</code></pre>
                    </div>
                </div>

                <div class="space-y-6">
                    <div class="space-y-3">
                        <div class="text-sm font-semibold text-foreground">Size</div>
                        <div class="grid grid-cols-3 gap-2">
                            {#each sizes as option}
                                <button
                                    onclick={() => (size = option.value)}
                                    class={`${buttonBase} ${size === option.value
                                        ? "border-primary bg-primary/10 font-semibold shadow-sm"
                                        : "border-transparent bg-muted/50 hover:bg-muted"}`}
                                >
                                    {option.label}
                                </button>
                            {/each}
                        </div>
                    </div>

                    <div class="space-y-3">
                        <div class="text-sm font-semibold text-foreground">Shape</div>
                        <div class="grid grid-cols-3 gap-2">
                            {#each shapes as option}
                                <button
                                    onclick={() => (shape = option.value)}
                                    class={`${buttonBase} ${shape === option.value
                                        ? "border-primary bg-primary/10 font-semibold shadow-sm"
                                        : "border-transparent bg-muted/50 hover:bg-muted"}`}
                                >
                                    {option.label}
                                </button>
                            {/each}
                        </div>
                    </div>

                    <div class="space-y-3">
                        <div class="text-sm font-semibold text-foreground">Toggles</div>
                        <div class="grid grid-cols-2 gap-2">
                            <button
                                onclick={() => (showRing = !showRing)}
                                class={`${buttonBase} ${showRing
                                    ? "border-primary bg-primary/10 font-semibold shadow-sm"
                                    : "border-transparent bg-muted/50 hover:bg-muted"}`}
                            >
                                <div class="text-sm">Ring</div>
                                <div class="text-xs text-muted-foreground">{showRing ? "On" : "Off"}</div>
                            </button>
                            <button
                                onclick={() => (fallbackOnly = !fallbackOnly)}
                                class={`${buttonBase} ${fallbackOnly
                                    ? "border-primary bg-primary/10 font-semibold shadow-sm"
                                    : "border-transparent bg-muted/50 hover:bg-muted"}`}
                            >
                                <div class="text-sm">Fallback only</div>
                                <div class="text-xs text-muted-foreground">{fallbackOnly ? "On" : "Off"}</div>
                            </button>
                        </div>
                    </div>

                    <div class="space-y-3">
                        <div class="text-sm font-semibold text-foreground">Content</div>
                        <div class="space-y-2">
                            <label class="block text-xs text-muted-foreground" for="avatar-image-url">Image URL</label>
                            <input
                                id="avatar-image-url"
                                class="w-full rounded-md border px-3 py-2 text-sm bg-background"
                                bind:value={imageUrl}
                                placeholder="https://..."
                            />
                            <label class="block text-xs text-muted-foreground" for="avatar-initials">Initials / Fallback</label>
                            <input
                                id="avatar-initials"
                                class="w-full rounded-md border px-3 py-2 text-sm bg-background"
                                bind:value={initials}
                                maxlength="4"
                            />
                            <label class="block text-xs text-muted-foreground" for="avatar-alt">Alt text</label>
                            <input
                                id="avatar-alt"
                                class="w-full rounded-md border px-3 py-2 text-sm bg-background"
                                bind:value={altText}
                            />
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
            <div class={`${highlightCard} p-10 flex items-center justify-center shadow-lg`}>
                <Avatar.Root class="size-12 rounded-full">
                    <Avatar.Image src="https://github.com/shadcn.png" alt="User" />
                    <Avatar.Fallback>HP</Avatar.Fallback>
                </Avatar.Root>
            </div>
            <div class="rounded-lg border bg-card/80 backdrop-blur-sm p-4 shadow-sm">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-semibold">Code</span>
                    <button
                        onclick={() => copyCode('<Avatar.Root class="size-12 rounded-full">\n  <Avatar.Image src="https://github.com/shadcn.png" alt="User" />\n  <Avatar.Fallback>HP</Avatar.Fallback>\n</Avatar.Root>')}
                        class="text-xs px-3 py-1.5 rounded-md border hover:bg-accent transition-all hover:scale-105 font-medium"
                    >
                        {copiedCode === '<Avatar.Root class="size-12 rounded-full">\n  <Avatar.Image src="https://github.com/shadcn.png" alt="User" />\n  <Avatar.Fallback>HP</Avatar.Fallback>\n</Avatar.Root>' ? "✓ Copied" : "Copy"}
                    </button>
                </div>
                <pre class="text-sm overflow-x-auto bg-muted/50 p-3 rounded"><code>&lt;Avatar.Root class="size-12 rounded-full"&gt;
  &lt;Avatar.Image src="https://github.com/shadcn.png" alt="User" /&gt;
  &lt;Avatar.Fallback&gt;HP&lt;/Avatar.Fallback&gt;
&lt;/Avatar.Root&gt;</code></pre>
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
                        onclick={() => copyCode('import * as Avatar from "$lib/components/ui/avatar/index.js";')}
                        class="text-xs px-3 py-1.5 rounded-md border hover:bg-accent transition-all hover:scale-105 font-medium"
                    >
                        {copiedCode === 'import * as Avatar from "$lib/components/ui/avatar/index.js";' ? "✓ Copied" : "Copy"}
                    </button>
                </div>
                <pre class="text-sm overflow-x-auto bg-muted/50 p-3 rounded"><code>import * as Avatar from "$lib/components/ui/avatar/index.js";</code></pre>
            </div>
        </section>

        <!-- States & examples -->
        <section class="space-y-6">
            <div class="flex items-center gap-3 mb-2">
                <div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
                <h2 class="text-3xl font-bold">States</h2>
            </div>
            <p class="text-muted-foreground">Common compositions for image, fallback, ring, and groups.</p>
            <div class="grid md:grid-cols-2 gap-4">
                <div class="rounded-xl border bg-card p-4 space-y-3">
                    <div class="text-sm font-semibold">Image + fallback</div>
                    <Avatar.Root class="size-12 rounded-full">
                        <Avatar.Image src="https://github.com/shadcn.png" alt="User" />
                        <Avatar.Fallback>HP</Avatar.Fallback>
                    </Avatar.Root>
                </div>
                <div class="rounded-xl border bg-card p-4 space-y-3">
                    <div class="text-sm font-semibold">Fallback only</div>
                    <Avatar.Root class="size-12 rounded-full bg-muted text-foreground">
                        <Avatar.Fallback>AB</Avatar.Fallback>
                    </Avatar.Root>
                </div>
                <div class="rounded-xl border bg-card p-4 space-y-3">
                    <div class="text-sm font-semibold">Ringed</div>
                    <Avatar.Root class="size-12 rounded-full ring-2 ring-primary/70 ring-offset-2 ring-offset-background">
                        <Avatar.Image src="https://github.com/ry.png" alt="User" />
                        <Avatar.Fallback>RY</Avatar.Fallback>
                    </Avatar.Root>
                </div>
                <div class="rounded-xl border bg-card p-4 space-y-3">
                    <div class="text-sm font-semibold">Group</div>
                    <div class="flex -space-x-3">
                        <Avatar.Root class="size-10 rounded-full ring-2 ring-background">
                            <Avatar.Image src="https://github.com/sindresorhus.png" alt="S" />
                            <Avatar.Fallback>S</Avatar.Fallback>
                        </Avatar.Root>
                        <Avatar.Root class="size-10 rounded-full ring-2 ring-background">
                            <Avatar.Image src="https://github.com/ry.png" alt="R" />
                            <Avatar.Fallback>R</Avatar.Fallback>
                        </Avatar.Root>
                        <Avatar.Root class="size-10 rounded-full ring-2 ring-background bg-muted text-foreground">
                            <Avatar.Fallback>+3</Avatar.Fallback>
                        </Avatar.Root>
                    </div>
                </div>
            </div>
        </section>

        <!-- Sizes -->
        <section class="space-y-6">
            <div class="flex items-center gap-3 mb-2">
                <div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
                <h2 class="text-3xl font-bold">Sizes</h2>
            </div>
            <p class="text-muted-foreground">Swap utility classes to control dimensions.</p>

            <div class="grid md:grid-cols-3 gap-6">
                {#each sizes as option}
                    <div class="space-y-3 group">
                        <div>
                            <h3 class="text-lg font-semibold">{option.label}</h3>
                            <p class="text-sm text-muted-foreground">Class: {option.className}</p>
                        </div>
                        <div class={`${highlightCard} p-8 flex items-center justify-center transition-all group-hover:shadow-md`}>
                            <Avatar.Root class={`${option.className} ${getShapeClass(shape)}`}>
                                <Avatar.Image src="https://github.com/shadcn.png" alt="User" />
                                <Avatar.Fallback>HP</Avatar.Fallback>
                            </Avatar.Root>
                        </div>
                        <div class="rounded-lg border bg-card/80 backdrop-blur-sm p-3 shadow-sm">
                            <div class="flex items-center justify-between mb-2">
                                <span class="text-xs font-medium text-muted-foreground">Code</span>
                                <button
                                    onclick={() => copyCode(`<Avatar.Root class="${option.className} ${getShapeClass(shape)}">\n  <Avatar.Image src=\"https://github.com/shadcn.png\" alt=\"User\" />\n  <Avatar.Fallback>HP</Avatar.Fallback>\n</Avatar.Root>`)}
                                    class="text-xs px-2 py-1 rounded border hover:bg-accent transition-all hover:scale-105"
                                >
                                    {copiedCode === `<Avatar.Root class="${option.className} ${getShapeClass(shape)}">\n  <Avatar.Image src=\"https://github.com/shadcn.png\" alt=\"User\" />\n  <Avatar.Fallback>HP</Avatar.Fallback>\n</Avatar.Root>` ? "✓" : "Copy"}
                                </button>
                            </div>
                            <pre class="text-xs overflow-x-auto bg-muted/50 p-2 rounded"><code>&lt;Avatar.Root class="{option.className} {getShapeClass(shape)}"&gt;
  &lt;Avatar.Image src="https://github.com/shadcn.png" alt="User" /&gt;
  &lt;Avatar.Fallback&gt;HP&lt;/Avatar.Fallback&gt;
&lt;/Avatar.Root&gt;</code></pre>
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
                            <th class="text-left p-4 font-semibold">Component</th>
                            <th class="text-left p-4 font-semibold">Prop</th>
                            <th class="text-left p-4 font-semibold">Type</th>
                            <th class="text-left p-4 font-semibold">Default</th>
                            <th class="text-left p-4 font-semibold">Description</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y">
                        <tr class="hover:bg-muted/20 transition-colors">
                            <td class="p-4 font-mono text-xs font-semibold">Avatar.Root</td>
                            <td class="p-4 font-mono text-xs font-semibold">class</td>
                            <td class="p-4 font-mono text-xs text-muted-foreground">string</td>
                            <td class="p-4 font-mono text-xs">—</td>
                            <td class="p-4 text-muted-foreground">Utility classes (size, rounding, ring)</td>
                        </tr>
                        <tr class="hover:bg-muted/20 transition-colors">
                            <td class="p-4 font-mono text-xs font-semibold">Avatar.Root</td>
                            <td class="p-4 font-mono text-xs font-semibold">loadingStatus</td>
                            <td class="p-4 font-mono text-xs text-muted-foreground">"loading" | "loaded" | "error"</td>
                            <td class="p-4 font-mono text-xs">"loading"</td>
                            <td class="p-4 text-muted-foreground">Track image status for fallbacks</td>
                        </tr>
                        <tr class="hover:bg-muted/20 transition-colors">
                            <td class="p-4 font-mono text-xs font-semibold">Avatar.Image</td>
                            <td class="p-4 font-mono text-xs font-semibold">src, alt</td>
                            <td class="p-4 font-mono text-xs text-muted-foreground">string</td>
                            <td class="p-4 font-mono text-xs">—</td>
                            <td class="p-4 text-muted-foreground">Image source and accessible alt text</td>
                        </tr>
                        <tr class="hover:bg-muted/20 transition-colors">
                            <td class="p-4 font-mono text-xs font-semibold">Avatar.Fallback</td>
                            <td class="p-4 font-mono text-xs font-semibold">children</td>
                            <td class="p-4 font-mono text-xs text-muted-foreground">string | element</td>
                            <td class="p-4 font-mono text-xs">—</td>
                            <td class="p-4 text-muted-foreground">Displayed when image is loading or fails</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</div>
