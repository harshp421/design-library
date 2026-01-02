<script lang="ts">
	import { onMount } from "svelte";
	import Switch from "$lib/components/ui/switch/switch.svelte";
	import Button from "$lib/components/ui/button/button.svelte";
	import Badge from "$lib/components/ui/badge/badge.svelte";
	import * as Item from "$lib/components/ui/item/index.js";
    import IconCheck from "$lib/icons/icon-check.svelte";
    import IconMoon from "$lib/icons/icon-moon.svelte";
    import IconSun from "$lib/icons/icon-sun.svelte";
	

	const THEMES = [
		{ id: "violet", name: "Violet", color: "hsl(262 83% 58%)" },
		{ id: "blue", name: "Blue", color: "hsl(221 83% 53%)" },
		{ id: "pink", name: "Pink", color: "hsl(330 81% 60%)" },
		{ id: "cyan", name: "Cyan", color: "hsl(192 91% 36%)" },
		{ id: "orange", name: "Orange", color: "hsl(25 95% 53%)" },
		{ id: "default", name: "Default", color: "hsl(222 47% 11%)" },
	];

	const card = "rounded-xl border bg-gradient-to-br from-card to-muted/20";
	const buttonToggle = "px-3 py-2 text-sm rounded-lg border-2 transition-all hover:scale-105";

	let selected: string = $state(THEMES[0].id);
	let dark: boolean = $state(false);
	let copiedCode = $state("");

	function applyTheme() {
		const root = document.documentElement;
		THEMES.forEach((t) => root.classList.remove(t.id));

		if (dark) root.classList.add("dark");
		else root.classList.remove("dark");

		root.classList.add(selected);

		try {
			localStorage.setItem("envizom:theme", selected);
			localStorage.setItem("envizom:dark", dark ? "1" : "0");
		} catch (e) {}
	}

	onMount(() => {
		try {
			const s = localStorage.getItem("envizom:theme");
			const d = localStorage.getItem("envizom:dark");
			if (s && THEMES.find((t) => t.id === s)) selected = s;
			dark = d === "1";
		} catch (e) {}
		applyTheme();
	});

	$effect(() => {
		applyTheme();
	});

	function copyCode(code: string) {
		navigator.clipboard.writeText(code);
		copiedCode = code;
		setTimeout(() => (copiedCode = ""), 2000);
	}

	const themeCode = `// Apply theme
const root = document.documentElement;
root.classList.add('${selected}');
${dark ? "root.classList.add('dark');" : ""}

// Persist to localStorage
localStorage.setItem("envizom:theme", "${selected}");
localStorage.setItem("envizom:dark", "${dark ? "1" : "0"}");`;
</script>

<div class="min-h-screen bg-gradient-to-b from-background to-muted/20">
	<div class="container max-w-6xl mx-auto px-6 py-12 space-y-16">
		<section class="space-y-6">
			<div class="flex items-center gap-3">
				<div class="w-8 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
				<h1 class="text-3xl font-bold">Theme Customization</h1>
			</div>
			<p class="text-muted-foreground">
				Choose your preferred color theme and toggle dark mode. Changes are saved automatically.
			</p>

			<div class="grid lg:grid-cols-2 gap-8">
				<div class="space-y-12">
					<div class={`${card} p-8 shadow-lg space-y-6`}>
						<div>
							<div class="flex items-center gap-2 mb-4">
								<!-- <PaletteIcon class="size-5 text-primary" /> -->
								<h3 class="text-lg font-semibold">Color Theme</h3>
							</div>
							<div class="grid grid-cols-2 gap-3">
								{#each THEMES as theme}
									<button
										onclick={() => (selected = theme.id)}
										class={`${buttonToggle} ${selected === theme.id ? "border-primary-500 bg-primary-400 font-semibold shadow-sm" : "border-transparent bg-muted/50 hover:bg-muted"} flex items-center gap-3 justify-start`}
									>
										<div
											class="size-6 rounded-md border-2 border-border"
											style="background: {theme.color}"
										></div>
										<span>{theme.name}</span>
										{#if selected === theme.id}
											<IconCheck class="size-4 ml-auto text-primary" />
										{/if}
									</button>
								{/each}
							</div>
						</div>

						<div class="border-t pt-6">
							<div class="flex items-center gap-2 mb-4">
								{#if dark}
									<IconMoon  />
								{:else}
									<IconSun  />
								{/if}
								<h3 class="text-lg font-semibold">Display Mode</h3>
							</div>
							<label class="flex items-center justify-between p-4 rounded-lg border bg-muted/50 cursor-pointer hover:bg-muted transition-colors">
								<div>
									<div class="text-sm font-medium">Dark Mode</div>
									<div class="text-xs text-muted-foreground">
										{dark ? "Enabled" : "Disabled"}
									</div>
								</div>
								<Switch bind:checked={dark} size="lg" />
							</label>
						</div>
					</div>

					<div class="rounded-lg border bg-card p-4 shadow-sm">
						<div class="flex items-center justify-between mb-3">
							<span class="text-sm font-semibold flex items-center gap-2">
								<span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
								Generated Code
							</span>
							<button
								onclick={() => copyCode(themeCode)}
								class="text-xs px-3 py-1.5 rounded-md border hover:bg-accent transition-all hover:scale-105 font-medium"
							>
								{copiedCode === themeCode ? "✓ Copied!" : "Copy Code"}
							</button>
						</div>
						<pre class="text-sm overflow-x-auto bg-muted/50 p-3 rounded"><code>{themeCode}</code></pre>
					</div>
				</div>

				<div class="space-y-6">
					<div class={`${card} p-8 shadow-lg space-y-4`}>
						<div class="flex items-center gap-2 mb-2">
							<div class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
							<h3 class="text-lg font-semibold">Live Preview</h3>
						</div>

						<Item.Root variant="outline">
							<Item.Media variant="icon">
								<!-- <PaletteIcon class="size-4" /> -->
							</Item.Media>
							<Item.Content>
								<Item.Header>
									<Item.Title>Theme Applied</Item.Title>
									<Badge variant="success" size="sm">Active</Badge>
								</Item.Header>
								<Item.Description>
									{THEMES.find((t) => t.id === selected)?.name} theme with {dark
										? "dark"
										: "light"} mode
								</Item.Description>
							</Item.Content>
						</Item.Root>

						<div class="space-y-2">
							<div class="text-sm font-medium">Component Samples</div>
							<div class="space-y-2">
								<Button class="w-full">Primary Button</Button>
								<Button variant="outline" class="w-full">Outline Button</Button>
								<Button variant="ghost" class="w-full">Ghost Button</Button>
							</div>
						</div>

						<div class="space-y-2">
							<div class="text-sm font-medium">Badge Variants</div>
							<div class="flex flex-wrap gap-2">
								<Badge variant="default">Default</Badge>
								<Badge variant="primary">Primary</Badge>
								<Badge variant="success">Success</Badge>
								<Badge variant="warning">Warning</Badge>
								<Badge variant="destructive">Destructive</Badge>
							</div>
						</div>
					</div>

					<div class={`${card} p-6 space-y-3`}>
						<h3 class="text-base font-semibold">Color Palette</h3>
						<div class="grid grid-cols-3 gap-3">
							{#each THEMES as theme}
								<div class="flex flex-col items-center gap-2">
									<div
										class="size-16 rounded-lg border-2 shadow-sm transition-transform hover:scale-110"
										class:border-primary={selected === theme.id}
										class:border-border={selected !== theme.id}
										style="background: {theme.color}"
									></div>
									<span class="text-xs font-medium">{theme.name}</span>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="space-y-6">
			<div class="flex items-center gap-3 mb-2">
				<div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
				<h2 class="text-3xl font-bold">Available Themes</h2>
			</div>
			<p class="text-muted-foreground">Preview all available color themes side by side.</p>

			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
				{#each THEMES as theme}
					<button
						onclick={() => (selected = theme.id)}
						class={`${card} p-6 space-y-3 transition-all hover:shadow-md ${selected === theme.id ? "ring-2 ring-primary" : ""}`}
					>
						<div class="flex items-center justify-between">
							<h3 class="text-lg font-semibold">{theme.name}</h3>
							{#if selected === theme.id}
								<Badge variant="primary" size="sm">Active</Badge>
							{/if}
						</div>
						<div
							class="w-full h-24 rounded-lg border-2"
							style="background: {theme.color}"
						></div>
						<div class="grid grid-cols-4 gap-2">
							{#each [100, 80, 60, 40] as opacity}
								<div
									class="h-8 rounded border"
									style="background: {theme.color}; opacity: {opacity / 100}"
								></div>
							{/each}
						</div>
					</button>
				{/each}
			</div>
		</section>

		<section class="space-y-4">
			<div class="flex items-center gap-3">
				<div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
				<h2 class="text-3xl font-bold">Usage</h2>
			</div>

			<div class={`${card} p-6 space-y-4`}>
				<h3 class="text-lg font-semibold">Theme Implementation</h3>
				<p class="text-sm text-muted-foreground">
					Theme classes are applied to <code
						class="px-1.5 py-0.5 rounded bg-muted text-xs">document.documentElement</code
					>. Each theme defines CSS custom properties that cascade throughout the application.
				</p>

				<div class="space-y-2">
					<div class="text-sm font-medium">Current Configuration:</div>
					<div class="rounded-lg border bg-muted/50 p-4 space-y-2 text-sm font-mono">
						<div>
							<span class="text-muted-foreground">Theme:</span>
							<span class="font-semibold ml-2">{selected}</span>
						</div>
						<div>
							<span class="text-muted-foreground">Mode:</span>
							<span class="font-semibold ml-2">{dark ? "dark" : "light"}</span>
						</div>
						<div>
							<span class="text-muted-foreground">Persisted:</span>
							<span class="font-semibold ml-2">localStorage</span>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="space-y-4">
			<div class="flex items-center gap-3">
				<div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
				<h2 class="text-3xl font-bold">Notes</h2>
			</div>
			<div class={`${card} p-6`}>
				<ul class="space-y-3 text-sm">
					<li class="flex gap-3">
						<span class="text-primary mt-0.5">•</span>
						<span
							>Theme classes (e.g. <code class="px-1.5 py-0.5 rounded bg-muted text-xs"
								>violet</code
							>, <code class="px-1.5 py-0.5 rounded bg-muted text-xs">blue</code>,
							<code class="px-1.5 py-0.5 rounded bg-muted text-xs">dark</code>) are applied to
							<code class="px-1.5 py-0.5 rounded bg-muted text-xs"
								>document.documentElement</code
							>.</span
						>
					</li>
					<li class="flex gap-3">
						<span class="text-primary mt-0.5">•</span>
						<span
							>Ensure your global CSS defines the theme tokens/variables for those classes so
							the preview updates correctly.</span
						>
					</li>
					<li class="flex gap-3">
						<span class="text-primary mt-0.5">•</span>
						<span
							>Theme preferences are automatically saved to localStorage and restored on page
							load.</span
						>
					</li>
					<li class="flex gap-3">
						<span class="text-primary mt-0.5">•</span>
						<span
							>Dark mode can be toggled independently and works with any color theme.</span
						>
					</li>
				</ul>
			</div>
		</section>
	</div>
</div>
