<script lang="ts">
    export let data
</script>

{#each data.users as user}
    {user.id}
    {user.intModifiers}
    {user.textModifiers}
{/each}
