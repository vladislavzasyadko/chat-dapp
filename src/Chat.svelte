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
        db.get('chat').map().once(async (data, id) => {
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
        const message = user.get('all').set({ what: secret });
        const index = new Date().toISOString();
        db.get('chat').get(index).put(message);

    }
</script>

<main>
    {#if $username}
        <div>
            {#each messages as message (message.when)}
                <Message text={message.what} sender={$username}/>
            {/each}
        </div>

        <form on:submit|preventDefault={sendMessage}>

        </form>
    {:else}
        <Login />
    {/if}

</main>

<style>
    main {
        background-color: cadetblue;

    }
</style>
