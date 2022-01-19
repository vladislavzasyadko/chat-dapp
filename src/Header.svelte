<script>
import {username, user} from "./user";

function singOut() {
    user.leave();
    username.set('');
}

</script>

<header>
    {#if $username}
        <div>
            <span>
                Hello, {username}!
            </span>
            <img src={`https://avatars.dicebear.com/api/initials/${username}.svg`} alt="#"/>
        </div>
        <button on:click={singOut}>Sign out</button>
    {:else}
        <h1>Decentralized app hehe</h1>
    {/if}
</header>

<style>
    header {
        background-color: aquamarine;
        color: darkblue;
        padding: 20px;
        display: flex;
        justify-content: center;
    }
</style>
