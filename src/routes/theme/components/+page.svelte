<script lang="ts">
    import { onMount } from "svelte";
    import Button from "$lib/components/ui/button/button.svelte";
    import Input from "$lib/components/ui/input/input.svelte";
    import Checkbox from "$lib/components/ui/checkbox/checkbox.svelte";
    import Switch from "$lib/components/ui/switch/switch.svelte";
    import * as RadioGroup from "$lib/components/ui/radio-group/index.js";
    import * as Tabs from "$lib/components/ui/tabs/index.js";
    import DataTable, {
        type Column,
    } from "$lib/components/shared/data-table/data-table.svelte";
    import CellBasic from "$lib/components/shared/data-table/data-table-cell/cell-basic.svelte";
    import CellTime from "$lib/components/shared/data-table/data-table-cell/cell-time.svelte";
    import CellDeviceStatus from "$lib/components/shared/data-table/data-table-cell/cell-device-status.svelte";
    import { renderComponent } from "$lib/components/shared/data-table";
    import CellData from "$lib/components/shared/data-table/data-table-cell/cell-data.svelte";
    import CellEmail from "$lib/components/shared/data-table/data-table-cell/cell-email.svelte";
    import CellNumber from "$lib/components/shared/data-table/data-table-cell/cell-number.svelte";
    import CellPriority from "$lib/components/shared/data-table/data-table-cell/cell-priority.svelte";
    import CellDevicetype from "$lib/components/shared/data-table/data-table-cell/cell-devicetype.svelte";
    import CellComplainStatus from "$lib/components/shared/data-table/data-table-cell/cell-complain-status.svelte";
    import CellBatteryStatus from "$lib/components/shared/data-table/data-table-cell/cell-battery-status.svelte";
    import CellUser from "$lib/components/shared/data-table/data-table-cell/cell-user.svelte";
    import CellAttechment from "$lib/components/shared/data-table/data-table-cell/cell-attechment.svelte";
    import CellSummery from "$lib/components/shared/data-table/data-table-cell/cell-summery.svelte";
    import IconAlertCircle from "$lib/icons/icon-alert-circle.svelte";
    import CellActions from "$lib/components/shared/data-table/data-table-cell/cell-actions.svelte";


    // Theme / display helpers consistent with other theme pages
    const THEMES = [
        { id: "violet", name: "Violet" },
        { id: "blue", name: "Blue" },
        { id: "pink", name: "Pink" },
        { id: "cyan", name: "Cyan" },
        { id: "orange", name: "Orange" },
        { id: "default", name: "Default" },
    ];

    let theme: string = $state(THEMES[0].id);
    let dark: boolean = $state(false);

    function applyTheme() {
        const root = document.documentElement;
        THEMES.forEach((t) => root.classList.remove(t.id));
        if (dark) root.classList.add("dark");
        else root.classList.remove("dark");
        root.classList.add(theme);
        try {
            localStorage.setItem("envizom:theme", theme);
            localStorage.setItem("envizom:dark", dark ? "1" : "0");
        } catch {}
    }

    onMount(() => {
        try {
            const s = localStorage.getItem("envizom:theme");
            const d = localStorage.getItem("envizom:dark");
            if (s && THEMES.find((t) => t.id === s)) theme = s;
            dark = d === "1";
        } catch {}
        applyTheme();
    });

    $effect(() => {
        applyTheme();
    });

    // Data table demo (Employees)
    type Employee = {
        id: string;
        employee: string;
        age: number;
        position: string;
        dob: string;
        location: string;
        date: number; // unix timestamp (seconds)
        status: "online" | "offline";
        data: number;
        email: string;
        phone?: string;
        priority?: string;
        devicetype: string;
        complainstatus: string;
        bs: string | number;
        user: user[];
        attechment?: attechment[];
    };

    type attechment = {
        fileName: string;
        fileSize: string;
        fileType: string;
        fileUrl: string;
    };
    type user = {
        name: string;
        email: string;
        avatar?: string;
    };

    let columns: Column<Employee >[] = [
        {
            id: "employee",
            header: "Employee",
            subheader: "Full name",
            accessor: (row) => row.employee,
            width: "220px",
            cell: (row, column) =>
                renderComponent(CellBasic<Employee>, {
                    row,
                    column,
                    type: "text",
                }),
        },
        {
            id: "position",
            header: "Position",
            accessor: (row) => row.position,
        },
        {
            id: "age",
            header: "Age",
            accessor: (row) => row.age,
        },
        {
            id: "dob",
            header: "DOB",
            accessor: (row) => {
                const d = new Date(row.dob);
                return d.toLocaleDateString();
            },
        },
        {
            id: "location",
            header: "Location",
            accessor: (row) => row.location,
            cell: (row, column) =>
                renderComponent(CellBasic<Employee>, {
                    row,
                    column,
                    type: "location",
                }),
        },
        {
            id: "date",
            header: "Last seen",
            accessor: (row) => row.date,
            cell: (row, column) =>
                renderComponent(CellTime<Employee>, {
                    row,
                    column,
                    type: "DURATION-PAST",
                }),
        },
        {
            id: "status",
            header: "Status",
            accessor: (row) => row.status,
            cell: (row, column) =>
                renderComponent(CellDeviceStatus<Employee>, { row, column }),
        },
        {
            id: "data",
            header: "Data Used (GB)",
            accessor: (row) => row.data,
            cell: (row, column) =>
                renderComponent(CellData<Employee>, {
                    row,
                    column,
                }),
        },

        {
            id: "email",
            header: "Email",
            accessor: (row) => row.email,
            cell: (row, column) =>
                renderComponent(CellEmail<Employee>, {
                    row,
                    column,
                }),
        },
        {
            id: "phone",
            header: "Phone",
            accessor: (row) => row.phone,
            cell: (row, column) =>
                renderComponent(CellNumber<Employee>, {
                    row,
                    column,
                }),
        },
        {
            id: "priority",
            header: "Priority",
            accessor: (row) => row.priority,
            cell: (row, column) =>
                renderComponent(CellPriority<Employee>, {
                    row,
                    column,
                }),
        },
        {
            id: "devicetype",
            header: "Device Type",
            accessor: (row) => row.devicetype,
            cell: (row, column) =>
                renderComponent(CellDevicetype<Employee>, {
                    row,
                    column,
                }),
        },
        {
            id: "complainstatus",
            header: "Complain Status",
            accessor: (row) => row.complainstatus,
            cell: (row, column) =>
                renderComponent(CellComplainStatus<Employee>, {
                    row,
                    column,
                }),
        },
        {
            id: "bs",
            header: "Battery Status",
            accessor: (row) => row.bs,
            cell: (row, column) =>
                renderComponent(CellBatteryStatus<Employee>, {
                    row,
                    column,
                }),
        },
        {
            id: "user",
            header: "User",
            accessor: (row) => row.user,
            cell: (row, column) =>
                renderComponent(CellUser<Employee>, {
                    row,
                    column,
                    showAvatar: true,
                }),
        },
        {
            id: "attechment",
            header: "Attechment",
            accessor: (row) => row.attechment,
            cell: (row, column) =>
                renderComponent(CellAttechment<Employee>, {
                    row,
                    column,
                }),
        },
        {
            id: "id",
            header: "user-details",
            accessor: (row) => row.id,
            cell: (row, column) =>
                renderComponent(CellSummery<Employee>, {
                    row,
                    column,
                    icon: IconAlertCircle,
                    iconType: "complain",
                    title: row.employee,
                    subtext: row.position,
                    subtext2: row.location,
                }),
        },
        {
            id: "actions",
            header: "More actions",
            accessor: (row) => row.id,
            cell: (row, column) =>
                renderComponent(CellActions<Employee>, {
                    row,
                    column,
                    actions: [
                        {
                            component: Switch, // Your custom component
                            componentProps: {
                                onchange: (e: Event) =>
                                console.log("Toggled for", row.id, e),
                            },
                        },
                    ],

                }),
        },
    ];

    let data: Employee[] = [
        {
            id: "e1",
            employee: "John Doe",
            age: 30,
            position: "Frontend Engineer",
            dob: "1993-01-01",
            location: "New York",
            date: Math.floor(Date.now() / 1000) - 60 * 60 * 5,
            status: "online",
            data: 120.23,
            email: "demo@oizom.com",
            phone: "123-456-7890",
            priority: "high",
            devicetype: "Polludrone",
            complainstatus: "active",
            bs: 85,
            user: [
                {
                    name: "John Doe",
                    email: "jone@gmail.com",
                    avatar: "https://i.pravatar.cc/150?img=3",
                },
                {
                    name: "John Doe",
                    email: "jonedsf@gmail.com",
                    avatar: "https://i.pravatar.cc/150?img=3",
                },
                {
                    name: "John Doe",
                    email: "jonedersf@gmail.com",
                    avatar: "https://i.pravatar.cc/150?img=3",
                },
                {
                    name: "John Doe",
                    email: "jonedqwesf@gmail.com",
                    avatar: "https://i.pravatar.cc/150?img=3",
                },
                {
                    name: "John Doe",
                    email: "jonqweedsf@gmail.com",
                    avatar: "https://i.pravatar.cc/150?img=3",
                },
            ],
            attechment: [
                {
                    fileName: "report.pdf",
                    fileSize: "2 MB",
                    fileType: "application/pdf",
                    fileUrl: "/files/report.pdf",
                },
                {
                    fileName: "image.png",
                    fileSize: "500 KB",
                    fileType: "image/png",
                    fileUrl: "/files/image.png",
                },
            ],
        },
        {
            id: "e2",
            employee: "Jane Smith",
            age: 27,
            position: "Product Designer",
            dob: "1996-05-15",
            location: "San Francisco",
            date: Math.floor(Date.now() / 1000) - 60 * 60 * 24 * 2,
            status: "offline",
            data: 75.89,
            email: "demo@oizom.com",
            phone: "987-654-3210",
            priority: "medium",
            devicetype: "Dustroid",
            complainstatus: "ongoing",
            bs: "Charging",
            user: [
                {
                    name: "Jane Smith",
                    email: "smith@gmail.com",
                    avatar: "https://i.pravatar.cc/150?img=5",
                },
            ],
        },
        {
            id: "e3",
            employee: "Mike Johnson",
            age: 35,
            position: "Engineering Manager",
            dob: "1988-10-30",
            location: "Chicago",
            date: Math.floor(Date.now() / 1000) - 60 * 30,
            status: "offline",
            data: 200.45,
            email: "demo@oizom.com,oizom.com",
            phone: "555-123-4567,555-765-4321",
            priority: "low",
            devicetype: "Pollusense",
            complainstatus: "resolved",
            bs: 40,
            user: [
                {
                    name: "Mike Johnson",
                    email: "mile@gmail.com",
                    avatar: "https://i.pravatar.cc/150?img=7",
                },
            ],
            attechment: [
                {
                    fileName: "summary.docx",
                    fileSize: "1.5 MB",
                    fileType:
                        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                    fileUrl: "/files/summary.docx",
                },
            ],
        },
    ];

    // Small form state for inputs demonstration
    let search = $state("");
    let checked = $state(false);
    let selectedRadio = $state("option1");
    let currentTab = $state("components");

    const mySnippet = () => `<p>This is dynamic content inside a tab.</p>`;
</script>

<main class="max-w-6xl mx-auto my-8 p-6 bg-background">
    <header class="mb-6">
        <h1 class="text-2xl font-semibold">Theme — Components</h1>
        <p class="text-sm text-muted-foreground mt-1">
            Separate page that demonstrates composed components: data table,
            tabs, inputs, switches and checkboxes.
        </p>
    </header>

    <section class="grid grid-cols-1 gap-6 mb-6">
        <div class=" p-4 rounded-md border bg-surface/50">
            <div class="flex items-center justify-between mb-4">
                <div>
                    <h2 class="text-lg font-medium">Data Table</h2>
                    <p class="text-sm text-muted-foreground">
                        A simple employee table using shared table cells.
                    </p>
                </div>
                <div class="flex items-center gap-3">
                    <Input placeholder="Search..." bind:value={search} />
                    <Button onclick={() => (search = "")}>Clear</Button>
                </div>
            </div>

            <div>
                <DataTable   {data} {columns} getRowId={(row) => row.id} />
            </div>
        </div>

        <aside class="p-4 rounded-md border bg-surface/50 space-y-4">
            <div>
                <h3 class="text-sm font-medium">Theme & display</h3>
                <div class="mt-3 flex flex-col gap-3">
                    <RadioGroup.RadioGroup
                        bind:value={theme}
                        class="flex gap-2"
                    >
                        {#each THEMES as t}
                            <label class="flex items-center gap-2 text-sm">
                                <RadioGroup.RadioGroupItem
                                    name="theme"
                                    value={t.id}
                                    aria-label={t.name}
                                    onchange={applyTheme}
                                />
                                <span>{t.name}</span>
                            </label>
                        {/each}
                    </RadioGroup.RadioGroup>
                    <label class="flex items-center gap-2 text-sm">
                        <Switch bind:checked={dark} onchange={applyTheme} />
                        <span>Dark mode</span>
                    </label>
                </div>
            </div>

            <div>
                <h3 class="text-sm font-medium">Controls</h3>
                <div class="mt-3 flex flex-col gap-3">
                    <label class="flex items-center gap-2">
                        <Checkbox bind:checked id="demo-check" />
                        <span class="text-sm">Checkbox demo</span>
                    </label>

                    <Button
                        onclick={() =>
                            alert(
                                `Checked: ${checked}, Radio: ${selectedRadio}`,
                            )}
                    >
                        Show state
                    </Button>
                </div>
            </div>
        </aside>
    </section>

    <section class="mb-6 p-4 rounded-md bg-surface/50">
        <h2 class="text-lg font-medium mb-3">Tabs</h2>
        <Tabs.Root bind:value={currentTab}>
            <Tabs.List class="flex gap-2 mb-3" variant="primary">
                <Tabs.Trigger value="components" variant="primary"
                    >Components</Tabs.Trigger
                >
                <Tabs.Trigger value="layout" variant="primary"
                    >Layout</Tabs.Trigger
                >
                <Tabs.Trigger value="snippet" variant="primary"
                    >Snippet</Tabs.Trigger
                >
            </Tabs.List>

            <Tabs.Content value="components">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="p-3 rounded border">
                        <h3 class="text-sm font-medium mb-2">Input</h3>
                        <Input placeholder="Type here..." />
                    </div>
                    <div class="p-3 rounded border">
                        <h3 class="text-sm font-medium mb-2">Switch</h3>
                        <Switch bind:checked={dark} />
                    </div>
                    <div class="p-3 rounded border">
                        <h3 class="text-sm font-medium mb-2">Checkbox</h3>
                        <Checkbox />
                    </div>
                </div>
            </Tabs.Content>

            <Tabs.Content value="layout">
                <p class="text-sm text-muted-foreground">
                    Layout helpers demonstration — panels, spacing & typography
                    show in your theme.
                </p>
                <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="p-4 rounded border">
                        <h4 class="font-medium">Panel</h4>
                        <p class="text-sm text-muted-foreground">
                            Content goes here
                        </p>
                    </div>
                    <div class="p-4 rounded border">
                        <h4 class="font-medium">Panel</h4>
                        <p class="text-sm text-muted-foreground">
                            Another content
                        </p>
                    </div>
                </div>
            </Tabs.Content>

            <Tabs.Content value="snippet">
                <div class="prose">
                    {@html mySnippet()}
                </div>
            </Tabs.Content>
        </Tabs.Root>
    </section>

    <section class="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-4 rounded-md border bg-surface/50">
            <h2 class="text-lg font-medium mb-3">Inputs & form</h2>
            <div class="space-y-3">
                <Input placeholder="Full name" />
                <Input placeholder="Email address" />
                <div class="flex items-center gap-3">
                    <Button variant="primary">Submit</Button>
                    <Button variant="secondary">Cancel</Button>
                </div>
            </div>
        </div>

        <div class="p-4 rounded-md border bg-surface/50">
            <h2 class="text-lg font-medium mb-3">Misc</h2>
            <div class="space-y-3">
                <Button
                    onclick={() => alert("Primary clicked")}
                    variant="primary">Primary</Button
                >
                <Button
                    onclick={() => alert("Destructive clicked")}
                    variant="destructive">Destructive</Button
                >
                <div class="text-sm text-muted-foreground">
                    Try interactions and switch themes on the left to validate
                    styles.
                </div>
            </div>
        </div>
    </section>

    <footer class="text-sm text-muted-foreground mt-6">
        Tip: This page is intentionally compositional so you can split sections
        into independent routes (e.g. <code>/theme/components/table</code>). If
        you want that, I can create the subroutes and update the sidebar.
    </footer>
</main>
