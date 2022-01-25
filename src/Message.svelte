<script>
export let text;
export let sender;
export let timeStamp = 0;
export let isMe;

let date = new Date(timeStamp).toLocaleDateString("en-US");
let time = new Date(timeStamp).toLocaleTimeString("en-US");

</script>

<div class="messageBox" class:me={isMe}>
    <p>{sender} {time} {date}</p>
    <div class="messageText" class:me={isMe}>{text}</div>
</div>

<style>
    .messageBox {
        color: white;
        padding: 6px;
        font-weight: bolder;
        margin-top: 6px;
        margin-bottom: 6px;
        width: fit-content;
        margin-left: auto;
    }

    .messageText {
        border-radius: 5px;
        background-color: darkcyan;
        padding: 6px;
        width: fit-content;
        margin-left: auto;
    }
    .me{
        margin-right: auto;
        margin-left: 0;
    }
</style>
