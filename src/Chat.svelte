<script>
    import Message from "./Message.svelte";
    import Login from './Login.svelte';
    import {user, username} from "./user";
    import {onMount} from 'svelte';

    import Gun from 'gun';

    const db = Gun();
    let newMessage;
    let messages = [];

    onMount(() => {
        // get msgs
        db.get('chat').map()
            .once(async (data) => {
                if (data) {
                    const key = '#something';

                    let message = {
                        who: await db.user(data).get('alias'),
                        what: `${(await SEA.decrypt(data.what, key))}`,
                        when: Gun.state.is(data, 'what')
                    }

                    if (message.what) {
                        messages = [...messages, message]
                    }
                }
            })
    })

    async function sendMessage() {
        const secret = await SEA.encrypt(newMessage, '#something');
        const message = user.get('all').set({what: secret});
        const index = new Date().toISOString();
        db.get('chat').get(index).put(message);
    }
</script>

{#if $username}
    <div class="randomClass">
        {#each messages as message (message.when)}
            <Message
                    text={message.what}
                    sender={message.who}
                    timeStamp={message.when}
                    isMe={message.who === $username}
            />
        {/each}
    </div>

    <form class="userInput" on:submit|preventDefault={sendMessage}>
        <input type="text" placeholder="Type a message..." bind:value={newMessage} maxlength="100"/>
        <button type="submit" disabled={!newMessage}>💥</button>
    </form>
{:else}
    <Login/>
{/if}

<style>
    div {
        background-color: yellow;
        display: flex;
        flex-direction: column;
        width: 700px;
        align-self: center;
    }

    .randomClass {
        background-color: #444;
        max-height: 400px;
        overflow-y: auto;
    }

    .userInput {
        color: blue;
        align-self: center;
    }
</style>
