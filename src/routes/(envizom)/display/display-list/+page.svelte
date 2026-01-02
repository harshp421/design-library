<script lang="ts">
    import { createAsyncStore } from "$lib/wrappers/asyncStore";
    import displayEndpoints from "$lib/api/display";
    import { goto } from "$app/navigation";

    const createTemplate = () => {
        goto("/display/create-template");
    };

    const { execute, isLoading, store } = createAsyncStore(
        () => displayEndpoints.login(),
        {
            showToastOnError: true,
            showToastOnSuccess: true,
        },
    );

    execute({});
</script>

{#if $isLoading}
    <p>Fetching Display......</p>
{:else}
    <div class="flex justify-end">
        <button type="button" style="max-width: 250px;" onclick={createTemplate}
            >Create Template</button
        >
    </div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table
            class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
            <thead
                class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
                <tr>
                    <th scope="col" class="px-6 py-3"> Display Id </th>
                    <th scope="col" class="px-6 py-3"> Display Name </th>
                    <th scope="col" class="px-6 py-3"> Total Screens </th>
                </tr>
            </thead>
            <tbody>
                {#if $store.type === "success"}
                    {#each $store.data as item}
                        <tr
                            class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
                        >
                            <td class="px-6 py-4"> {item.displayId} </td>
                            <td class="px-6 py-4"> {item.label} </td>
                            <td class="px-6 py-4">
                                {item.options?.screens?.length}
                            </td>
                        </tr>
                    {/each}
                {/if}
            </tbody>
        </table>
    </div>
{/if}
