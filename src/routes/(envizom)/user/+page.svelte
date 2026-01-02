<script lang="ts">
    import { goto } from "$app/navigation";
    import LS from "$lib/wrappers/localStorage";
    const { profile } = LS;
</script>

<!-- Reactive usage -->
<div class="min-h-screen bg-gray-900 text-white p-6">
    <h1 class="text-2xl font-bold mb-6">Profile Information</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div class="space-y-3">
            <div class="bg-gray-800 p-3 rounded-lg shadow">
                <strong>Name:</strong>
                {$profile.name}
            </div>
            <div class="bg-gray-800 p-3 rounded-lg shadow">
                <strong>Email:</strong>
                {$profile.email}
            </div>
            <div class="bg-gray-800 p-3 rounded-lg shadow">
                <strong>Contact:</strong>
                {$profile.contact}
            </div>
            <div class="bg-gray-800 p-3 rounded-lg shadow">
                <strong>City:</strong>
                {$profile.city}
            </div>
            <div class="bg-gray-800 p-3 rounded-lg shadow">
                <strong>Country:</strong>
                {$profile.country}
            </div>
        </div>

        <div class="space-y-3">
            <div class="bg-gray-800 p-3 rounded-lg shadow">
                <strong>Company:</strong>
                {$profile?.company}
            </div>
            <div class="bg-gray-800 p-3 rounded-lg shadow">
                <strong>Location:</strong>
                {$profile?.location}
            </div>
            <div class="bg-gray-800 p-3 rounded-lg shadow">
                <strong>State:</strong>
                {$profile?.state}
            </div>
        </div>
    </div>
    <div class="flex">
        <button class="w-20" type="button" onclick={() => goto("/user/edit")}>
            Edit
        </button>
    </div>
</div>
