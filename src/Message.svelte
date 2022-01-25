<script>
export let text;
export let sender;
export let timeStamp = 0;
export let isMe;

let date = new Date(timeStamp).toLocaleDateString("en-US");
date = new Date().toLocaleDateString("en-US") === date ? 'Today' : date
let time = new Date(timeStamp).toLocaleTimeString("en-US").replace(/(.*)\D\d+/, '$1');

</script>

<div class="messageBox" class:me={isMe}>
    <p>{sender} <span>{time} {date}</span></p>
    <div class="messageText" class:myMessageText={isMe}>{text}</div>
</div>

<style>
    p {
        margin: 2px;
    }
    .messageBox {
        color: white;
        padding: 6px;
        font-weight: bolder;
        margin-top: 6px;
        margin-bottom: 6px;
        width: fit-content;
        margin-right: auto;
    }

    .messageText {
        border-radius: 15px;
        background-color: darkcyan;
        padding: 8px;
        width: fit-content;
        margin-right: auto;
    }

    .myMessageText {
        margin-right: 0;
        margin-left: auto;
        background-color: #ffc857;
        color: #151515;
    }

    .me{
        margin-left: auto;
        margin-right: 0;
    }

    span {
        color: rgba(255, 255, 255, 0.63);
    }

</style>
