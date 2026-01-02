<script lang="ts" generics="T extends { user: User[] }">
    import AvatarFallback from "$lib/components/ui/avatar/avatar-fallback.svelte";
    import AvatarImage from "$lib/components/ui/avatar/avatar-image.svelte";
    import Avatar from "$lib/components/ui/avatar/avatar.svelte";
    import { getCellValue, type Column } from "../data-table.svelte";

    interface User {
        name: string;
        email: string;
        avatar?: string;
    }

    interface CellType<T> {
        row: T;
        column: Column<T>;
    }

    let { column, row }: CellType<T> = $props();

    const user = $derived(
        getCellValue(row, column) as User[] | null | undefined,
    );
</script>

{#if user}
    <span class="flex items-center gap-3">
        {#if user.length > 1}
            <span class="flex items-center gap-2">
                <span
                    class="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale"
                >
                    {#each user.slice(0, 3) as individualUser (individualUser.email)}
                        <Avatar class="h-[1.5rem] w-[1.5rem] rounded-full">
                            {#if individualUser.avatar}
                                <AvatarImage
                                    src={individualUser.avatar}
                                    alt={individualUser.name}
                                />
                            {/if}
                            <AvatarFallback>{individualUser.name}</AvatarFallback>
                        </Avatar>
                    {/each}
                </span>
               
            </span>
            <span>{user.length} Users</span>
        {:else}
            <span class="flex items-center gap-3">
                <Avatar class="h-[1.5rem] w-[1.5rem] rounded-full">
                    {#if user[0].avatar}
                        <AvatarImage src={user[0].avatar} alt={user[0].name} />
                    {/if}
                    <AvatarFallback>{user[0].name}</AvatarFallback>
                </Avatar>
                <span>
                    {user[0].name}
                </span>
            </span>
        {/if}
    </span>
{:else}
    <span class="text-muted-foreground">N/A</span>
{/if}
