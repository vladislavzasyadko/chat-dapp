<script>
import {username, user} from "./user";

function singOut() {
    user.leave();
    username.set('');
}

</script>

<header>
    {#if $username}
        <img class="image" src={`https://avatars.dicebear.com/api/initials/${$username}.svg`} alt="#"/>
            <h3>
                Hello, {$username}!
            </h3>

        <button class="signOutButton" on:click={singOut}>Sign out</button>
    {:else}
        <h1>Decentralized app hehe</h1>
    {/if}
</header>

<style>
    header {
        background-color: #2e4052;
        color: #bdd9bf;
        padding: 20px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 700px;
        align-self: center;
    }
    .image {
        border-radius: 25%;
        height: 50px;
    }

</style>
