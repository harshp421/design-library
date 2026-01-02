<script lang="ts">
    import DataTable, { type Column } from "$lib/components/shared/data-table/data-table.svelte";
    import Badge from "$lib/components/ui/badge/badge.svelte";
    import Button from "$lib/components/ui/button/button.svelte";

    interface User {
        id: number;
        name: string;
        email: string;
        role: string;
        status: "active" | "inactive" | "pending";
        joinDate: string;
    }

    const sampleUsers: User[] = [
        { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "active", joinDate: "2024-01-15" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "active", joinDate: "2024-02-20" },
        { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Editor", status: "pending", joinDate: "2024-03-10" },
        { id: 4, name: "Alice Williams", email: "alice@example.com", role: "User", status: "inactive", joinDate: "2024-01-05" },
        { id: 5, name: "Charlie Brown", email: "charlie@example.com", role: "Admin", status: "active", joinDate: "2024-02-28" },
    ];

    const columns: Column<User>[] = [
        {
            id: "name",
            header: "Name",
            accessor: "name",
            sortable: true,
            filterable: true,
        },
        {
            id: "email",
            header: "Email",
            accessor: "email",
            sortable: true,
            filterable: true,
        },
        {
            id: "role",
            header: "Role",
            accessor: "role",
            sortable: true,
            filterable: true,
            filterType: "select",
            filterOptions: ["Admin", "User", "Editor"],
        },
        {
            id: "status",
            header: "Status",
            accessor: "status",
            cell: (row) => {
                const variant = row.status === "active" ? "success" : row.status === "pending" ? "warning" : "neutral";
                return {
                    component: Badge,
                    props: {
                        variant,
                        children: row.status,
                    },
                };
            },
            sortable: true,
        },
        {
            id: "joinDate",
            header: "Join Date",
            accessor: "joinDate",
            sortable: true,
        },
    ];

    let data = $state(sampleUsers);
    let tableColumns = $state<Column<User>[]>(columns);
    let copiedCode = $state("");

    const card = "rounded-xl border bg-gradient-to-br from-card to-muted/20";
    const buttonToggle = "px-3 py-2 text-sm rounded-lg border-2 transition-all hover:scale-105";

    function copyCode(code: string) {
        navigator.clipboard.writeText(code);
        copiedCode = code;
        setTimeout(() => (copiedCode = ""), 2000);
    }

    const basicCode = `import DataTable, { type Column } from "$lib/components/shared/data-table/data-table.svelte";

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
}

const columns: Column<User>[] = [
    { id: "name", header: "Name", accessor: "name", sortable: true },
    { id: "email", header: "Email", accessor: "email", sortable: true },
    { id: "role", header: "Role", accessor: "role", sortable: true },
];

const data: User[] = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
];

<DataTable {data} {columns} />`;

    const customCellCode = `const columns: Column<User>[] = [
    {
        id: "status",
        header: "Status",
        accessor: "status",
        cell: (row) => ({
            component: Badge,
            props: {
                variant: row.status === "active" ? "success" : "neutral",
                children: row.status,
            },
        }),
    },
];`;
</script>

<div class="min-h-screen bg-gradient-to-b from-background to-muted/20">
    <div class="container max-w-6xl mx-auto px-6 py-12 space-y-16">
        <section class="space-y-6">
            <div class="flex items-center gap-3">
                <div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
                <h1 class="text-3xl font-bold">Data Table</h1>
            </div>
            <p class="text-muted-foreground">A powerful and flexible data table component with sorting, filtering, and custom cell rendering.</p>

            <div class="space-y-4">
                <div class={`${card} p-6 shadow-lg overflow-hidden`}>
                    <DataTable data={sampleUsers} columns={tableColumns} pageSize={5} />
                </div>
            </div>
        </section>

        <section class="space-y-4">
            <div class="flex items-center gap-3">
                <div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
                <h2 class="text-3xl font-bold">Quick Start</h2>
            </div>
            <div class="rounded-lg border bg-card/80 backdrop-blur-sm p-4 shadow-sm">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-semibold">Basic Usage</span>
                    <button
                        onclick={() => copyCode(basicCode)}
                        class="text-xs px-3 py-1.5 rounded-md border hover:bg-accent transition-all hover:scale-105 font-medium"
                    >
                        {copiedCode === basicCode ? "✓ Copied" : "Copy"}
                    </button>
                </div>
                <pre class="text-sm overflow-x-auto bg-muted/50 p-3 rounded max-h-96"><code>{basicCode}</code></pre>
            </div>
        </section>

        <section class="space-y-6">
            <div class="flex items-center gap-3 mb-2">
                <div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
                <h2 class="text-3xl font-bold">Features</h2>
            </div>
            <p class="text-muted-foreground">Key capabilities of the data table component.</p>

            <div class="grid md:grid-cols-2 gap-6">
                <div class={`${card} p-6 space-y-3`}>
                    <h3 class="text-lg font-semibold">Sorting</h3>
                    <p class="text-sm text-muted-foreground">Enable sorting on columns by setting `sortable: true`</p>
                    <pre class="text-xs overflow-x-auto bg-muted/50 p-3 rounded"><code>&#123; id: "name", header: "Name", accessor: "name", sortable: true &#125;</code></pre>
                </div>

                <div class={`${card} p-6 space-y-3`}>
                    <h3 class="text-lg font-semibold">Filtering</h3>
                    <p class="text-sm text-muted-foreground">Add filters with text, number, date, or select types</p>
                    <pre class="text-xs overflow-x-auto bg-muted/50 p-3 rounded"><code>&#123;
  filterable: true,
  filterType: "select",
  filterOptions: ["Admin", "User"]
&#125;</code></pre>
                </div>

                <div class={`${card} p-6 space-y-3`}>
                    <h3 class="text-lg font-semibold">Custom Cells</h3>
                    <p class="text-sm text-muted-foreground">Render custom components in table cells</p>
                    <pre class="text-xs overflow-x-auto bg-muted/50 p-3 rounded"><code>cell: (row) => (&#123;
  component: Badge,
  props: &#123; variant: "success" &#125;
&#125;)</code></pre>
                </div>

                <div class={`${card} p-6 space-y-3`}>
                    <h3 class="text-lg font-semibold">Pagination</h3>
                    <p class="text-sm text-muted-foreground">Built-in pagination with customizable page size</p>
                    <pre class="text-xs overflow-x-auto bg-muted/50 p-3 rounded"><code>&lt;DataTable &#123;data&#125; &#123;columns&#125; pageSize=&#123;10&#125; /&gt;</code></pre>
                </div>

                <div class={`${card} p-6 space-y-3`}>
                    <h3 class="text-lg font-semibold">Row Selection</h3>
                    <p class="text-sm text-muted-foreground">Enable multi-row selection with callbacks</p>
                    <pre class="text-xs overflow-x-auto bg-muted/50 p-3 rounded"><code>&lt;DataTable
  enableRowSelection
  onRowSelect=&#123;(rows) => console.log(rows)&#125;
/&gt;</code></pre>
                </div>

                <div class={`${card} p-6 space-y-3`}>
                    <h3 class="text-lg font-semibold">Column Pinning</h3>
                    <p class="text-sm text-muted-foreground">Pin columns to left or right side</p>
                    <pre class="text-xs overflow-x-auto bg-muted/50 p-3 rounded"><code>&#123; id: "actions", header: "Actions", pinned: "right" &#125;</code></pre>
                </div>
            </div>
        </section>

        <section class="space-y-6">
            <div class="flex items-center gap-3 mb-2">
                <div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
                <h2 class="text-3xl font-bold">Custom Cell Rendering</h2>
            </div>
            <p class="text-muted-foreground">Examples of custom cell rendering with components.</p>

            <div class="space-y-4">
                <div class={`${card} p-6`}>
                    <h3 class="text-lg font-semibold mb-4">Status Badge Example</h3>
                    <div class="overflow-hidden rounded-lg border">
                        <table class="w-full text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="text-left p-4 font-semibold">User</th>
                                    <th class="text-left p-4 font-semibold">Status</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y">
                                <tr>
                                    <td class="p-4">John Doe</td>
                                    <td class="p-4"><Badge variant="success">Active</Badge></td>
                                </tr>
                                <tr>
                                    <td class="p-4">Jane Smith</td>
                                    <td class="p-4"><Badge variant="warning">Pending</Badge></td>
                                </tr>
                                <tr>
                                    <td class="p-4">Bob Johnson</td>
                                    <td class="p-4"><Badge variant="neutral">Inactive</Badge></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="rounded-lg border bg-card/80 backdrop-blur-sm p-4 shadow-sm">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-sm font-semibold">Code</span>
                        <button
                            onclick={() => copyCode(customCellCode)}
                            class="text-xs px-3 py-1.5 rounded-md border hover:bg-accent transition-all hover:scale-105 font-medium"
                        >
                            {copiedCode === customCellCode ? "✓ Copied" : "Copy"}
                        </button>
                    </div>
                    <pre class="text-sm overflow-x-auto bg-muted/50 p-3 rounded"><code>{customCellCode}</code></pre>
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
                        onclick={() => copyCode('import DataTable, { type Column } from "$lib/components/shared/data-table/data-table.svelte";')}
                        class="text-xs px-3 py-1.5 rounded-md border hover:bg-accent transition-all hover:scale-105 font-medium"
                    >
                        {copiedCode === 'import DataTable, { type Column } from "$lib/components/shared/data-table/data-table.svelte";' ? "✓ Copied" : "Copy"}
                    </button>
                </div>
                <pre class="text-sm overflow-x-auto bg-muted/50 p-3 rounded"><code>import DataTable, &#123; type Column &#125; from "$lib/components/shared/data-table/data-table.svelte";</code></pre>
            </div>
        </section>

        <section class="space-y-4">
            <div class="flex items-center gap-3">
                <div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
                <h2 class="text-3xl font-bold">Props</h2>
            </div>

            <div class="space-y-6">
                <div>
                    <h3 class="text-lg font-semibold mb-3">DataTable</h3>
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
                                    <td class="p-4 font-mono text-xs font-semibold">data</td>
                                    <td class="p-4 font-mono text-xs text-muted-foreground">T[]</td>
                                    <td class="p-4 font-mono text-xs">required</td>
                                    <td class="p-4 text-muted-foreground">Array of data objects (bindable)</td>
                                </tr>
                                <tr class="hover:bg-muted/20 transition-colors">
                                    <td class="p-4 font-mono text-xs font-semibold">columns</td>
                                    <td class="p-4 font-mono text-xs text-muted-foreground">Column&lt;T&gt;[]</td>
                                    <td class="p-4 font-mono text-xs">required</td>
                                    <td class="p-4 text-muted-foreground">Column configuration array (bindable)</td>
                                </tr>
                                <tr class="hover:bg-muted/20 transition-colors">
                                    <td class="p-4 font-mono text-xs font-semibold">pageSize</td>
                                    <td class="p-4 font-mono text-xs text-muted-foreground">number</td>
                                    <td class="p-4 font-mono text-xs">10</td>
                                    <td class="p-4 text-muted-foreground">Number of rows per page</td>
                                </tr>
                                <tr class="hover:bg-muted/20 transition-colors">
                                    <td class="p-4 font-mono text-xs font-semibold">enableRowSelection</td>
                                    <td class="p-4 font-mono text-xs text-muted-foreground">boolean</td>
                                    <td class="p-4 font-mono text-xs">false</td>
                                    <td class="p-4 text-muted-foreground">Enable multi-row selection</td>
                                </tr>
                                <tr class="hover:bg-muted/20 transition-colors">
                                    <td class="p-4 font-mono text-xs font-semibold">onRowSelect</td>
                                    <td class="p-4 font-mono text-xs text-muted-foreground">(rows: T[]) => void</td>
                                    <td class="p-4 font-mono text-xs">—</td>
                                    <td class="p-4 text-muted-foreground">Callback when rows are selected</td>
                                </tr>
                                <tr class="hover:bg-muted/20 transition-colors">
                                    <td class="p-4 font-mono text-xs font-semibold">getRowId</td>
                                    <td class="p-4 font-mono text-xs text-muted-foreground">(row: T) => string | number</td>
                                    <td class="p-4 font-mono text-xs">—</td>
                                    <td class="p-4 text-muted-foreground">Function to get unique row ID</td>
                                </tr>
                                <tr class="hover:bg-muted/20 transition-colors">
                                    <td class="p-4 font-mono text-xs font-semibold">className</td>
                                    <td class="p-4 font-mono text-xs text-muted-foreground">string</td>
                                    <td class="p-4 font-mono text-xs">—</td>
                                    <td class="p-4 text-muted-foreground">Custom CSS classes</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>
                    <h3 class="text-lg font-semibold mb-3">Column Interface</h3>
                    <div class="rounded-xl border overflow-hidden shadow-lg bg-card">
                        <table class="w-full text-sm">
                            <thead class="bg-gradient-to-r from-muted to-muted/50">
                                <tr>
                                    <th class="text-left p-4 font-semibold">Property</th>
                                    <th class="text-left p-4 font-semibold">Type</th>
                                    <th class="text-left p-4 font-semibold">Required</th>
                                    <th class="text-left p-4 font-semibold">Description</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y">
                                <tr class="hover:bg-muted/20 transition-colors">
                                    <td class="p-4 font-mono text-xs font-semibold">id</td>
                                    <td class="p-4 font-mono text-xs text-muted-foreground">string</td>
                                    <td class="p-4 font-mono text-xs">Yes</td>
                                    <td class="p-4 text-muted-foreground">Unique column identifier</td>
                                </tr>
                                <tr class="hover:bg-muted/20 transition-colors">
                                    <td class="p-4 font-mono text-xs font-semibold">header</td>
                                    <td class="p-4 font-mono text-xs text-muted-foreground">string</td>
                                    <td class="p-4 font-mono text-xs">Yes</td>
                                    <td class="p-4 text-muted-foreground">Column header text</td>
                                </tr>
                                <tr class="hover:bg-muted/20 transition-colors">
                                    <td class="p-4 font-mono text-xs font-semibold">accessor</td>
                                    <td class="p-4 font-mono text-xs text-muted-foreground">keyof T | (row: T) => any</td>
                                    <td class="p-4 font-mono text-xs">Yes</td>
                                    <td class="p-4 text-muted-foreground">Data accessor key or function</td>
                                </tr>
                                <tr class="hover:bg-muted/20 transition-colors">
                                    <td class="p-4 font-mono text-xs font-semibold">subheader</td>
                                    <td class="p-4 font-mono text-xs text-muted-foreground">string</td>
                                    <td class="p-4 font-mono text-xs">No</td>
                                    <td class="p-4 text-muted-foreground">Optional subheader text</td>
                                </tr>
                                <tr class="hover:bg-muted/20 transition-colors">
                                    <td class="p-4 font-mono text-xs font-semibold">cell</td>
                                    <td class="p-4 font-mono text-xs text-muted-foreground">RenderConfig | Function</td>
                                    <td class="p-4 font-mono text-xs">No</td>
                                    <td class="p-4 text-muted-foreground">Custom cell renderer</td>
                                </tr>
                                <tr class="hover:bg-muted/20 transition-colors">
                                    <td class="p-4 font-mono text-xs font-semibold">sortable</td>
                                    <td class="p-4 font-mono text-xs text-muted-foreground">boolean</td>
                                    <td class="p-4 font-mono text-xs">No</td>
                                    <td class="p-4 text-muted-foreground">Enable column sorting</td>
                                </tr>
                                <tr class="hover:bg-muted/20 transition-colors">
                                    <td class="p-4 font-mono text-xs font-semibold">filterable</td>
                                    <td class="p-4 font-mono text-xs text-muted-foreground">boolean</td>
                                    <td class="p-4 font-mono text-xs">No</td>
                                    <td class="p-4 text-muted-foreground">Enable column filtering</td>
                                </tr>
                                <tr class="hover:bg-muted/20 transition-colors">
                                    <td class="p-4 font-mono text-xs font-semibold">filterType</td>
                                    <td class="p-4 font-mono text-xs text-muted-foreground">"text" | "number" | "date" | "select"</td>
                                    <td class="p-4 font-mono text-xs">No</td>
                                    <td class="p-4 text-muted-foreground">Filter input type</td>
                                </tr>
                                <tr class="hover:bg-muted/20 transition-colors">
                                    <td class="p-4 font-mono text-xs font-semibold">filterOptions</td>
                                    <td class="p-4 font-mono text-xs text-muted-foreground">string[]</td>
                                    <td class="p-4 font-mono text-xs">No</td>
                                    <td class="p-4 text-muted-foreground">Options for select filter</td>
                                </tr>
                                <tr class="hover:bg-muted/20 transition-colors">
                                    <td class="p-4 font-mono text-xs font-semibold">width</td>
                                    <td class="p-4 font-mono text-xs text-muted-foreground">string</td>
                                    <td class="p-4 font-mono text-xs">No</td>
                                    <td class="p-4 text-muted-foreground">Column width (CSS value)</td>
                                </tr>
                                <tr class="hover:bg-muted/20 transition-colors">
                                    <td class="p-4 font-mono text-xs font-semibold">pinned</td>
                                    <td class="p-4 font-mono text-xs text-muted-foreground">"left" | "right" | null</td>
                                    <td class="p-4 font-mono text-xs">No</td>
                                    <td class="p-4 text-muted-foreground">Pin column position</td>
                                </tr>
                                <tr class="hover:bg-muted/20 transition-colors">
                                    <td class="p-4 font-mono text-xs font-semibold">visible</td>
                                    <td class="p-4 font-mono text-xs text-muted-foreground">boolean</td>
                                    <td class="p-4 font-mono text-xs">No</td>
                                    <td class="p-4 text-muted-foreground">Column visibility</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>
