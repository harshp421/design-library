<script lang="ts">
	import Checkbox from "$lib/components/ui/checkbox/checkbox.svelte";
	import Button from "$lib/components/ui/button/button.svelte";

	const sizes = [
		{ value: "sm" as const, label: "Small", className: "size-16" },
		{ value: "md" as const, label: "Medium", className: "size-24" },
		{ value: "lg" as const, label: "Large", className: "size-32" },
	];

	let size = $state<typeof sizes[number]["value"]>("md");
	let checked = $state(false);
	let indeterminate = $state(false);
	let disabled = $state(false);
	let invalid = $state(false);
	let label = $state("Enable notifications");
	let copiedCode = $state("");

	const card = "rounded-xl border bg-gradient-to-br from-card to-muted/20";
	const buttonToggle = "px-3 py-2 text-sm rounded-lg border-2 transition-all hover:scale-105";

	$effect(() => {
		if (indeterminate && checked) checked = false;
	});

	function getSizeClass(value: typeof size) {
		return sizes.find((item) => item.value === value)?.className ?? "";
	}

	function copyCode(code: string) {
		navigator.clipboard.writeText(code);
		copiedCode = code;
		setTimeout(() => (copiedCode = ""), 2000);
	}

	function getCheckboxCode() {
		const cls = getSizeClass(size);
		const stateChecked = checked ? " checked" : "";
		const stateInd = indeterminate ? " indeterminate" : "";
		const stateDisabled = disabled ? " disabled" : "";
		const ariaInvalid = invalid ? " aria-invalid=\"true\"" : "";
		return `<label class="flex items-center gap-2 text-sm">
  <Checkbox class="${cls}"${stateChecked}${stateInd}${stateDisabled}${ariaInvalid} />
  <span>${label}</span>
</label>`;
	}
</script>

<div class="min-h-screen bg-gradient-to-b from-background to-muted/20">
	<div class="container max-w-6xl mx-auto px-6 py-12 space-y-16">
		<section class="space-y-6">
			<div class="flex items-center gap-3">
				<div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
				<h1 class="text-3xl font-bold">Checkbox Playground</h1>
			</div>
			<p class="text-muted-foreground">Switch between checked, indeterminate, disabled, invalid, and adjust size.</p>

			<div class="grid lg:grid-cols-2 gap-8">
				<div class="space-y-4">
					<div class={`${card} border-dashed p-10 flex items-center justify-center min-h-[200px]`}>
						<label class="flex items-center gap-3 text-base">
							<Checkbox
								class={getSizeClass(size)}
								bind:checked
								bind:indeterminate
								disabled={disabled}
								aria-invalid={invalid}
							/>
							<span class={invalid ? "text-destructive" : "text-foreground"}>{label}</span>
						</label>
					</div>

					<div class="rounded-lg border bg-card p-4 shadow-sm">
						<div class="flex items-center justify-between mb-3">
							<span class="text-sm font-semibold flex items-center gap-2">
								<span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
								Generated Code
							</span>
							<button
								onclick={() => copyCode(getCheckboxCode())}
								class="text-xs px-3 py-1.5 rounded-md border hover:bg-accent transition-all hover:scale-105 font-medium"
							>
								{copiedCode === getCheckboxCode() ? "✓ Copied!" : "Copy Code"}
							</button>
						</div>
						<pre class="text-sm overflow-x-auto bg-muted/50 p-3 rounded"><code>{getCheckboxCode()}</code></pre>
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
								onclick={() => (indeterminate = !indeterminate)}
								class={`${buttonToggle} ${indeterminate
									? "border-primary bg-primary/10 font-semibold shadow-sm"
									: "border-transparent bg-muted/50 hover:bg-muted"}`}
							>
								<div class="text-sm">Indeterminate</div>
								<div class="text-xs text-muted-foreground">{indeterminate ? "On" : "Off"}</div>
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
							<button
								onclick={() => (invalid = !invalid)}
								class={`${buttonToggle} ${invalid
									? "border-primary bg-primary/10 font-semibold shadow-sm"
									: "border-transparent bg-muted/50 hover:bg-muted"}`}
							>
								<div class="text-sm">Invalid</div>
								<div class="text-xs text-muted-foreground">{invalid ? "True" : "False"}</div>
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
			<div class={`${card} p-8 flex items-center justify-center shadow-lg`}>
				<label class="flex items-center gap-3 text-base">
					<Checkbox class="size-24" />
					<span>Subscribe to updates</span>
				</label>
			</div>
			<div class="rounded-lg border bg-card/80 backdrop-blur-sm p-4 shadow-sm">
				<div class="flex items-center justify-between mb-2">
					<span class="text-sm font-semibold">Code</span>
					<button
						onclick={() => copyCode('<label class="flex items-center gap-3 text-base">\n  <Checkbox class="size-24" />\n  <span>Subscribe to updates</span>\n</label>')}
						class="text-xs px-3 py-1.5 rounded-md border hover:bg-accent transition-all hover:scale-105 font-medium"
					>
						{copiedCode === '<label class="flex items-center gap-3 text-base">\n  <Checkbox class="size-24" />\n  <span>Subscribe to updates</span>\n</label>' ? "✓ Copied" : "Copy"}
					</button>
				</div>
				<pre class="text-sm overflow-x-auto bg-muted/50 p-3 rounded"><code>&lt;label class="flex items-center gap-3 text-base"&gt;
  &lt;Checkbox class="size-24" /&gt;
  &lt;span&gt;Subscribe to updates&lt;/span&gt;
&lt;/label&gt;</code></pre>
			</div>
		</section>

		<section class="space-y-6">
			<div class="flex items-center gap-3 mb-2">
				<div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
				<h2 class="text-3xl font-bold">States</h2>
			</div>
			<p class="text-muted-foreground">Checked, indeterminate, disabled, and invalid examples.</p>
			<div class="grid md:grid-cols-4 gap-4">
				<div class={`${card} p-4 space-y-3`}>
					<div class="text-sm font-semibold">Checked</div>
					<Checkbox class="size-24" checked />
				</div>
				<div class={`${card} p-4 space-y-3`}>
					<div class="text-sm font-semibold">Indeterminate</div>
					<Checkbox class="size-24" indeterminate />
				</div>
				<div class={`${card} p-4 space-y-3`}>
					<div class="text-sm font-semibold">Disabled</div>
					<Checkbox class="size-24" disabled />
				</div>
				<div class={`${card} p-4 space-y-3`}>
					<div class="text-sm font-semibold">Invalid</div>
					<Checkbox class="size-24" aria-invalid="true" />
				</div>
			</div>
		</section>

		<section class="space-y-6">
			<div class="flex items-center gap-3 mb-2">
				<div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
				<h2 class="text-3xl font-bold">Sizes</h2>
			</div>
			<p class="text-muted-foreground">Control the dimension via utility classes.</p>

			<div class="grid md:grid-cols-3 gap-6">
				{#each sizes as option}
					<div class="space-y-3 group">
						<div>
							<h3 class="text-lg font-semibold">{option.label}</h3>
							<p class="text-sm text-muted-foreground">Class: {option.className}</p>
						</div>
						<div class={`${card} p-8 flex items-center justify-center transition-all group-hover:shadow-md`}>
							<Checkbox class={`${option.className}`} />
						</div>
						<div class="rounded-lg border bg-card/80 backdrop-blur-sm p-3 shadow-sm">
							<div class="flex items-center justify-between mb-2">
								<span class="text-xs font-medium text-muted-foreground">Code</span>
								<button
									onclick={() => copyCode(`<Checkbox class="${option.className}" />`)}
									class="text-xs px-2 py-1 rounded border hover:bg-accent transition-all hover:scale-105"
								>
									{copiedCode === `<Checkbox class="${option.className}" />` ? "✓" : "Copy"}
								</button>
							</div>
							<pre class="text-xs overflow-x-auto bg-muted/50 p-2 rounded"><code>&lt;Checkbox class="{option.className}" /&gt;</code></pre>
						</div>
					</div>
				{/each}
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
						onclick={() => copyCode('import Checkbox from "$lib/components/ui/checkbox/checkbox.svelte";')}
						class="text-xs px-3 py-1.5 rounded-md border hover:bg-accent transition-all hover:scale-105 font-medium"
					>
						{copiedCode === 'import Checkbox from "$lib/components/ui/checkbox/checkbox.svelte";' ? "✓ Copied" : "Copy"}
					</button>
				</div>
				<pre class="text-sm overflow-x-auto bg-muted/50 p-3 rounded"><code>import Checkbox from "$lib/components/ui/checkbox/checkbox.svelte";</code></pre>
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
							<td class="p-4 font-mono text-xs font-semibold">indeterminate</td>
							<td class="p-4 font-mono text-xs text-muted-foreground">boolean</td>
							<td class="p-4 font-mono text-xs">false</td>
							<td class="p-4 text-muted-foreground">Shows dash indicator</td>
						</tr>
						<tr class="hover:bg-muted/20 transition-colors">
							<td class="p-4 font-mono text-xs font-semibold">disabled</td>
							<td class="p-4 font-mono text-xs text-muted-foreground">boolean</td>
							<td class="p-4 font-mono text-xs">false</td>
							<td class="p-4 text-muted-foreground">Disables interaction</td>
						</tr>
						<tr class="hover:bg-muted/20 transition-colors">
							<td class="p-4 font-mono text-xs font-semibold">aria-invalid</td>
							<td class="p-4 font-mono text-xs text-muted-foreground">boolean</td>
							<td class="p-4 font-mono text-xs">false</td>
							<td class="p-4 text-muted-foreground">Marks control as invalid for a11y</td>
						</tr>
						<tr class="hover:bg-muted/20 transition-colors">
							<td class="p-4 font-mono text-xs font-semibold">class</td>
							<td class="p-4 font-mono text-xs text-muted-foreground">string</td>
							<td class="p-4 font-mono text-xs">—</td>
							<td class="p-4 text-muted-foreground">Utility classes for sizing or ring</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
	</div>
</div>
