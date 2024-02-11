<script lang="ts">
    import { enhance } from "$app/forms"

    export let data
</script>

<form use:enhance method="post">
    <input type="text" name="username" placeholder="username" />
    <input type="email" name="email" placeholder="email" />
    <input type="number" name="age" placeholder="age" />
    <button type="submit">Submit</button>
</form>

{#each data.users as user}
    <div>
        {user.id}
        {user.username}
        {user.email}
        {user.age}
    </div>
{:else}
    No users found!
{/each}
