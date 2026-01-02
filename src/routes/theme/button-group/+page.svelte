<script lang="ts">
	import * as ButtonGroup from "$lib/components/ui/button-group/index.js";
	import Button from "$lib/components/ui/button/button.svelte";

	const orientations = [
		{ value: "horizontal" as const, label: "Horizontal" },
		{ value: "vertical" as const, label: "Vertical" },
	];

	let orientation = $state<typeof orientations[number]["value"]>("horizontal");
	let showSeparator = $state(true);
	let showText = $state(true);
	let copiedCode = $state("");

	const card = "rounded-xl border bg-gradient-to-br from-card to-muted/20";
	const buttonToggle = "px-3 py-2 text-sm rounded-lg border-2 transition-all hover:scale-105";

	function copyCode(code: string) {
		navigator.clipboard.writeText(code);
		copiedCode = code;
		setTimeout(() => (copiedCode = ""), 2000);
	}

	function getPlaygroundCode() {
		const sep = showSeparator
			? `\n  <ButtonGroup.Separator orientation="${orientation === "horizontal" ? "vertical" : "horizontal"}" />`
			: "";
		const text = showText ? "\n  <ButtonGroup.Text>Selected: 12</ButtonGroup.Text>" : "";
		const orient = orientation !== "horizontal" ? ` orientation=\"${orientation}\"` : "";

		return `<ButtonGroup.Root${orient}>\n  <Button size="sm" variant="outline">Left</Button>\n  <Button size="sm" variant="outline">Center</Button>\n  <Button size="sm" variant="outline">Right</Button>${sep}${text}\n</ButtonGroup.Root>`;
	}
</script>

<div class="min-h-screen bg-gradient-to-b from-background to-muted/20">
	<div class="container max-w-6xl mx-auto px-6 py-12 space-y-16">
		<section class="space-y-6">
			<div class="flex items-center gap-3">
				<div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
				<h1 class="text-3xl font-bold">Button Group Playground</h1>
			</div>
			<p class="text-muted-foreground">Toggle orientation, separators, and inline text.</p>

			<div class="grid lg:grid-cols-2 gap-8">
				<div class="space-y-4">
					<div class={`${card} border-dashed p-10 flex items-center justify-center min-h-[220px]`}>
						<ButtonGroup.Root orientation={orientation} class="gap-0">
							<Button size="sm" variant="outline">Left</Button>
							<Button size="sm" variant="outline">Center</Button>
							<Button size="sm" variant="outline">Right</Button>
							{#if showSeparator}
								<ButtonGroup.Separator orientation={orientation === "horizontal" ? "vertical" : "horizontal"} />
							{/if}
							{#if showText}
								<ButtonGroup.Text>Selected: 12</ButtonGroup.Text>
							{/if}
						</ButtonGroup.Root>
					</div>

					<div class="rounded-lg border bg-card p-4 shadow-sm">
						<div class="flex items-center justify-between mb-3">
							<span class="text-sm font-semibold flex items-center gap-2">
								<span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
								Generated Code
							</span>
							<button
								onclick={() => copyCode(getPlaygroundCode())}
								class="text-xs px-3 py-1.5 rounded-md border hover:bg-accent transition-all hover:scale-105 font-medium"
							>
								{copiedCode === getPlaygroundCode() ? "✓ Copied!" : "Copy Code"}
							</button>
						</div>
						<pre class="text-sm overflow-x-auto bg-muted/50 p-3 rounded"><code>{getPlaygroundCode()}</code></pre>
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
						<div class="text-sm font-semibold text-foreground">Add-ons</div>
						<div class="grid grid-cols-2 gap-2">
							<button
								onclick={() => (showSeparator = !showSeparator)}
								class={`${buttonToggle} ${showSeparator
									? "border-primary bg-primary/10 font-semibold shadow-sm"
									: "border-transparent bg-muted/50 hover:bg-muted"}`}
							>
								<div class="text-sm">Separator</div>
								<div class="text-xs text-muted-foreground">{showSeparator ? "Shown" : "Hidden"}</div>
							</button>
							<button
								onclick={() => (showText = !showText)}
								class={`${buttonToggle} ${showText
									? "border-primary bg-primary/10 font-semibold shadow-sm"
									: "border-transparent bg-muted/50 hover:bg-muted"}`}
							>
								<div class="text-sm">Text block</div>
								<div class="text-xs text-muted-foreground">{showText ? "Shown" : "Hidden"}</div>
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
			<div class={`${card} p-8 flex items-center justify-center shadow-lg`}>
				<ButtonGroup.Root>
					<Button size="sm" variant="outline">Left</Button>
					<Button size="sm" variant="outline">Center</Button>
					<Button size="sm" variant="outline">Right</Button>
				</ButtonGroup.Root>
			</div>
			<div class="rounded-lg border bg-card/80 backdrop-blur-sm p-4 shadow-sm">
				<div class="flex items-center justify-between mb-2">
					<span class="text-sm font-semibold">Code</span>
					<button
						onclick={() => copyCode('<ButtonGroup.Root>\n  <Button size="sm" variant="outline">Left</Button>\n  <Button size="sm" variant="outline">Center</Button>\n  <Button size="sm" variant="outline">Right</Button>\n</ButtonGroup.Root>')}
						class="text-xs px-3 py-1.5 rounded-md border hover:bg-accent transition-all hover:scale-105 font-medium"
					>
						{copiedCode === '<ButtonGroup.Root>\n  <Button size="sm" variant="outline">Left</Button>\n  <Button size="sm" variant="outline">Center</Button>\n  <Button size="sm" variant="outline">Right</Button>\n</ButtonGroup.Root>' ? "✓ Copied" : "Copy"}
					</button>
				</div>
				<pre class="text-sm overflow-x-auto bg-muted/50 p-3 rounded"><code>&lt;ButtonGroup.Root&gt;
  &lt;Button size="sm" variant="outline"&gt;Left&lt;/Button&gt;
  &lt;Button size="sm" variant="outline"&gt;Center&lt;/Button&gt;
  &lt;Button size="sm" variant="outline"&gt;Right&lt;/Button&gt;
&lt;/ButtonGroup.Root&gt;</code></pre>
			</div>
		</section>

		<section class="space-y-6">
			<div class="flex items-center gap-3 mb-2">
				<div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
				<h2 class="text-3xl font-bold">Orientation</h2>
			</div>
			<p class="text-muted-foreground">Horizontal and vertical stacking with shared rounding.</p>
			<div class="grid md:grid-cols-2 gap-4">
				<div class={`${card} p-6 space-y-4`}>
					<div class="text-sm font-semibold">Horizontal</div>
					<ButtonGroup.Root>
						<Button size="sm">List</Button>
						<Button size="sm" variant="secondary">Table</Button>
						<Button size="sm" variant="outline">Kanban</Button>
					</ButtonGroup.Root>
				</div>
				<div class={`${card} p-6 space-y-4`}>
					<div class="text-sm font-semibold">Vertical</div>
					<ButtonGroup.Root orientation="vertical">
						<Button size="sm">Profile</Button>
						<Button size="sm" variant="secondary">Settings</Button>
						<Button size="sm" variant="outline">Billing</Button>
					</ButtonGroup.Root>
				</div>
			</div>
		</section>

		<section class="space-y-6">
			<div class="flex items-center gap-3 mb-2">
				<div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
				<h2 class="text-3xl font-bold">Compositions</h2>
			</div>
			<p class="text-muted-foreground">Combine with text blocks and separators for segmented controls.</p>
			<div class="grid md:grid-cols-2 gap-4">
				<div class={`${card} p-6 space-y-3`}>
					<div class="text-sm font-semibold">With separator + text</div>
					<ButtonGroup.Root>
						<Button size="sm" variant="outline">Day</Button>
						<Button size="sm" variant="outline">Week</Button>
						<Button size="sm" variant="outline">Month</Button>
						<ButtonGroup.Separator orientation="vertical" />
						<ButtonGroup.Text>Range: 12</ButtonGroup.Text>
					</ButtonGroup.Root>
				</div>
				<div class={`${card} p-6 space-y-3`}>
					<div class="text-sm font-semibold">Icon buttons</div>
					<ButtonGroup.Root>
						<Button size="icon" variant="ghost">
							<svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
						</Button>
						<Button size="icon" variant="ghost">
							<svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
						</Button>
					</ButtonGroup.Root>
				</div>
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
							<th class="text-left p-4 font-semibold">Component</th>
							<th class="text-left p-4 font-semibold">Prop</th>
							<th class="text-left p-4 font-semibold">Type</th>
							<th class="text-left p-4 font-semibold">Default</th>
							<th class="text-left p-4 font-semibold">Description</th>
						</tr>
					</thead>
					<tbody class="divide-y">
						<tr class="hover:bg-muted/20 transition-colors">
							<td class="p-4 font-mono text-xs font-semibold">ButtonGroup.Root</td>
							<td class="p-4 font-mono text-xs font-semibold">orientation</td>
							<td class="p-4 font-mono text-xs text-muted-foreground">"horizontal" | "vertical"</td>
							<td class="p-4 font-mono text-xs">"horizontal"</td>
							<td class="p-4 text-muted-foreground">Stack direction and rounding behaviour</td>
						</tr>
						<tr class="hover:bg-muted/20 transition-colors">
							<td class="p-4 font-mono text-xs font-semibold">ButtonGroup.Text</td>
							<td class="p-4 font-mono text-xs font-semibold">child</td>
							<td class="p-4 font-mono text-xs text-muted-foreground">Snippet</td>
							<td class="p-4 font-mono text-xs">—</td>
							<td class="p-4 text-muted-foreground">Optional render prop to control wrapper</td>
						</tr>
						<tr class="hover:bg-muted/20 transition-colors">
							<td class="p-4 font-mono text-xs font-semibold">ButtonGroup.Separator</td>
							<td class="p-4 font-mono text-xs font-semibold">orientation</td>
							<td class="p-4 font-mono text-xs text-muted-foreground">"horizontal" | "vertical"</td>
							<td class="p-4 font-mono text-xs">"vertical"</td>
							<td class="p-4 text-muted-foreground">Divider direction matching layout</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
	</div>
</div>
