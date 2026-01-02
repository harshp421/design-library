<script lang="ts" generics="T">
    import AvatarFallback from "$lib/components/ui/avatar/avatar-fallback.svelte";
    import AvatarImage from "$lib/components/ui/avatar/avatar-image.svelte";
    import Avatar from "$lib/components/ui/avatar/avatar.svelte";
    import { getCellValue, type Column } from "../data-table.svelte";
    interface CellType<T> {
        row: T;
        column: Column<T>;
    }
    let { column, row }: CellType<T> = $props();
    type Attechment = {
        fileName: string;
        fileSize: string;
        fileType: string;
        fileUrl: string;
    };
    let attechment = getCellValue(row, column) as Attechment[];
</script>

<span class="flex items-center gap-2">
    {#if attechment !== null && attechment !== undefined}
        {#each attechment as item}
            <Avatar class="h-[1.5rem] w-[1.5rem] rounded-4">
                <AvatarImage src={item.fileUrl} alt={item.fileName} />
                <AvatarFallback>{item.fileName}</AvatarFallback>
            </Avatar>
        {/each}
    {:else}
        N/A
    {/if}
</span>
