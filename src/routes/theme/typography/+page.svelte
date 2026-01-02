<script lang="ts">
  const sample = "The quick brown fox jumps over the lazy dog.";
  const headings = [
    { level: "H1", size: "5xl", weight: "bold", text: "Display — Bold" },
    { level: "H2", size: "4xl", weight: "semibold", text: "Hero — Semibold" },
    { level: "H3", size: "3xl", weight: "semibold", text: "Title — Semibold" },
    { level: "H4", size: "2xl", weight: "semibold", text: "Section — Semibold" },
    { level: "H5", size: "xl", weight: "medium", text: "Subsection — Medium" },
    { level: "H6", size: "lg", weight: "medium", text: "Label — Medium" },
  ];

  const textBlocks = [
    {
      title: "Paragraph Large",
      className: "text-p-large leading-7",
      description: "1.5rem / 1.75rem line-height",
    },
    {
      title: "Paragraph Medium",
      className: "text-p-medium ",
      description: "1.25rem / 1.5rem line-height",
    },
    {
      title: "Paragraph Small",
      className: "text-p-small",
      description: "1rem / 1.25rem line-height",
    },
    {
      title: "Paragraph X-Small",
      className: "text-p-xsmall ",
      description: "0.875rem / 1rem line-height",
    },
    {
      title: "Paragraph XX-Small",
      className: "text-p-xxsmall ",
      description: "0.75rem / 1rem line-height",
    },
    {
      title: "Overline Large",
      className: "text-o-large ",
      description: "0.75rem / 0.625rem line-height",
    },
    {
      title: "Overline Medium",
      className: "text-o-medium ",
      description: "0.625rem / 0.5rem line-height",
    },
    {
      title: "Overline Small",
      className: "text-o-small ",
      description: "0.625rem / 0.5rem line-height",
    },
  ];
</script>

<main class="max-w-7xl mx-auto my-10 px-6 pb-16 font-host-grotesk bg-background">
  <header class="mb-10 flex flex-col gap-3">
  
    <h5>Type system playground</h5>
    <p class="text-p-medium">
      Explore headings, body, code, lists, weights, tracking, and line heights side-by-side. Use this page to verify
      readability, rhythm, and contrast across light and dark themes.
    </p>
  </header>

  <section class="grid md:grid-cols-2 gap-6 mb-10">
    <div class="rounded-xl border bg-card p-6 shadow-sm">
      <div class="flex items-center gap-2 mb-4">
        <div class="w-1 h-8 bg-primary rounded-full"></div>
        <div>
          <h2 class="text-xl font-semibold">Headings</h2>
          <p class="text-sm text-muted-foreground">Scale preview with sizes and weights.</p>
        </div>
      </div>
      <div class="space-y-4">
        {#each headings as h}
          <div>
            {#if h.level === "H1"}
              <h1 class={`font-${h.weight} leading-tight`}>{h.text}</h1>
            {:else if h.level === "H2"}
              <h2 class={`font-${h.weight} leading-tight`}>{h.text}</h2>
            {:else if h.level === "H3"}
              <h3 class={`font-${h.weight} leading-tight`}>{h.text}</h3>
            {:else if h.level === "H4"}
              <h4 class={`font-${h.weight} leading-tight`}>{h.text}</h4>
            {:else if h.level === "H5"}
              <h5 class={`font-${h.weight} leading-tight`}>{h.text}</h5>
            {:else}
              <h6 class={`font-${h.weight} leading-tight`}>{h.text}</h6>
            {/if}
            <p class="text-xs text-muted-foreground mt-1">{h.level} · {h.size} · {h.weight}</p>
          </div>
        {/each}
      </div>
    </div>

    <div class="rounded-xl border bg-card p-6 shadow-sm">
      <div class="flex items-center gap-2 mb-4">
        <div class="w-1 h-8 bg-primary rounded-full"></div>
        <div>
          <h2 class="text-xl font-semibold">Paragraph styles</h2>
          <p class="text-sm text-muted-foreground">Lead, body, small, and caption examples.</p>
        </div>
      </div>
      <div class="space-y-4">
        {#each textBlocks as block}
          <div class="rounded-lg border bg-muted/30 p-3">
            <div class="text-xs font-semibold text-muted-foreground mb-1">{block.title}</div>
            <p class={block.className}>{sample}</p>
            <p class="text-xs text-muted-foreground mt-1">{block.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section class="grid md:grid-cols-2 gap-6 mb-10">
    <div class="rounded-xl border bg-card p-6 shadow-sm">
      <div class="flex items-center gap-2 mb-4">
        <div class="w-1 h-8 bg-primary rounded-full"></div>
        <div>
          <h2 class="text-xl font-semibold">Lists & quote</h2>
          <p class="text-sm text-muted-foreground">Bulleted, ordered, and blockquote treatments.</p>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4 text-sm">
        <div class="space-y-2">
          <h3 class="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Unordered</h3>
          <ul class="list-disc pl-5 space-y-1">
            <li>First item — short</li>
            <li>Second item — wraps to test spacing</li>
            <li>Third item</li>
          </ul>
        </div>
        <div class="space-y-2">
          <h3 class="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Ordered</h3>
          <ol class="list-decimal pl-5 space-y-1">
            <li>Step one</li>
            <li>Step two — narrow wrap test</li>
            <li>Step three</li>
          </ol>
        </div>
      </div>
      <div class="mt-6 border-l-2 pl-4 italic text-muted-foreground">
        “Typography is the craft of endowing human language with a durable visual form.”
      </div>
    </div>

    <div class="rounded-xl border bg-card p-6 shadow-sm space-y-4">
      <div class="flex items-center gap-2">
        <div class="w-1 h-8 bg-primary rounded-full"></div>
        <div>
          <h2 class="text-xl font-semibold">Code & monospace</h2>
          <p class="text-sm text-muted-foreground">Inline and block code styles.</p>
        </div>
      </div>
      <pre class="p-3 rounded bg-muted/50 overflow-auto text-xs border">
<code>const greet = (name) =&gt; `Hello, ${sample.split(" ")[1]}`;</code>
      </pre>
      <div class="bg-muted/30 p-3 rounded text-sm border">
        Inline code: <code class="bg-muted/40 px-1 rounded">npm install @envizom/ui</code>
      </div>
    </div>
  </section>

  <section class="grid md:grid-cols-3 gap-6 mb-10">
    <div class="rounded-xl border bg-card p-6 shadow-sm space-y-3">
      <div class="text-xs font-semibold text-muted-foreground">Weights</div>
      <div class="flex flex-wrap gap-3 items-baseline text-lg">
        <span class="font-thin">Thin</span>
        <span class="font-light">Light</span>
        <span class="font-normal">Regular</span>
        <span class="font-medium">Medium</span>
        <span class="font-semibold">Semibold</span>
        <span class="font-bold">Bold</span>
      </div>
    </div>
    <div class="rounded-xl border bg-card p-6 shadow-sm space-y-3">
      <div class="text-xs font-semibold text-muted-foreground">Tracking</div>
      <div class="space-y-1 text-sm">
        <div class="tracking-tight">{sample} (tight)</div>
        <div class="tracking-normal">{sample} (normal)</div>
        <div class="tracking-wide">{sample} (wide)</div>
      </div>
    </div>
    <div class="rounded-xl border bg-card p-6 shadow-sm space-y-3">
      <div class="text-xs font-semibold text-muted-foreground">Leading</div>
      <div class="space-y-1 text-sm">
        <div class="leading-tight">{sample} (tight)</div>
        <div class="leading-normal">{sample} (normal)</div>
        <div class="leading-loose">{sample} (loose)</div>
      </div>
    </div>
  </section>

  <section class="rounded-xl border bg-card p-6 shadow-sm mb-10">
    <div class="flex items-center gap-2 mb-4">
      <div class="w-1 h-8 bg-primary rounded-full"></div>
      <div>
        <h2 class="text-xl font-semibold">Type scale cards</h2>
        <p class="text-sm text-muted-foreground">Display, heading, and body examples side by side.</p>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="p-4 rounded-lg border bg-gradient-to-b from-muted/40 to-card">
        <div class="text-5xl font-bold">Display</div>
        <div class="text-xs text-muted-foreground mt-2">5xl / bold</div>
        <div class="mt-3 text-muted">{sample}</div>
      </div>
      <div class="p-4 rounded-lg border bg-gradient-to-b from-muted/40 to-card">
        <div class="text-3xl font-semibold">Heading</div>
        <div class="text-xs text-muted-foreground mt-2">3xl / semibold</div>
        <div class="mt-3 text-muted">{sample}</div>
      </div>
      <div class="p-4 rounded-lg border bg-gradient-to-b from-muted/40 to-card">
        <div class="text-base">Body</div>
        <div class="text-xs text-muted-foreground mt-2">base / normal</div>
        <div class="mt-3 text-muted">{sample}</div>
      </div>
    </div>
  </section>

  <section class="rounded-xl border bg-card p-6 shadow-sm">
    <div class="flex items-center gap-2 mb-4">
      <div class="w-1 h-8 bg-primary rounded-full"></div>
      <div>
        <h2 class="text-xl font-semibold">Utility snapshot</h2>
        <p class="text-sm text-muted-foreground">Quick reference for core text utilities.</p>
      </div>
    </div>
    <div class="grid md:grid-cols-2 gap-4 text-sm">
      <div class="space-y-2">
        <div class="font-semibold">Sizes</div>
        <div class="flex flex-wrap gap-2">
          <span class="px-2 py-1 rounded bg-muted/40">text-xs</span>
          <span class="px-2 py-1 rounded bg-muted/40">text-sm</span>
          <span class="px-2 py-1 rounded bg-muted/40">text-base</span>
          <span class="px-2 py-1 rounded bg-muted/40">text-lg</span>
          <span class="px-2 py-1 rounded bg-muted/40">text-xl</span>
          <span class="px-2 py-1 rounded bg-muted/40">text-2xl</span>
          <span class="px-2 py-1 rounded bg-muted/40">text-3xl</span>
          <span class="px-2 py-1 rounded bg-muted/40">text-4xl</span>
          <span class="px-2 py-1 rounded bg-muted/40">text-5xl</span>
        </div>
      </div>
      <div class="space-y-2">
        <div class="font-semibold">Weights</div>
        <div class="flex flex-wrap gap-2">
          <span class="px-2 py-1 rounded bg-muted/40">font-thin</span>
          <span class="px-2 py-1 rounded bg-muted/40">font-light</span>
          <span class="px-2 py-1 rounded bg-muted/40">font-normal</span>
          <span class="px-2 py-1 rounded bg-muted/40">font-medium</span>
          <span class="px-2 py-1 rounded bg-muted/40">font-semibold</span>
          <span class="px-2 py-1 rounded bg-muted/40">font-bold</span>
        </div>
      </div>
      <div class="space-y-2">
        <div class="font-semibold">Tracking</div>
        <div class="flex flex-wrap gap-2">
          <span class="px-2 py-1 rounded bg-muted/40">tracking-tight</span>
          <span class="px-2 py-1 rounded bg-muted/40">tracking-normal</span>
          <span class="px-2 py-1 rounded bg-muted/40">tracking-wide</span>
        </div>
      </div>
      <div class="space-y-2">
        <div class="font-semibold">Leading</div>
        <div class="flex flex-wrap gap-2">
          <span class="px-2 py-1 rounded bg-muted/40">leading-tight</span>
          <span class="px-2 py-1 rounded bg-muted/40">leading-normal</span>
          <span class="px-2 py-1 rounded bg-muted/40">leading-loose</span>
        </div>
      </div>
    </div>
  </section>
</main>
