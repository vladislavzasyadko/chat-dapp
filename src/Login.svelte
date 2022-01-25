<script>
    import {user} from "./user";

    let username;
    let password;

    function login() {
        user.auth(username, password, ({err}) => err && alert(err))
    }

    function signUp() {
        user.create(username, password, ({err}) => {
            if (err) {
                alert(err);
            } else {
                login();
            }
        });
    }

</script>
<div>
    <label>Username</label>
    <input name="username" bind:value={username} type="text" autocomplete="off"/>
    <label>Password</label>
    <input name="password" bind:value={password} type="password" autocomplete="off"/>
    <button class={'login'} on:click={login}>Log In</button>
    <button class={'signup'} on:click={signUp}>Sign Up</button>
</div>
<style>
    div {
        width: 700px;
        align-self: center;
        background-color: #ffffff;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input {
        width: 250px;
        padding: 5px;
        border: none;
        border-bottom: 2px solid black;
        outline:none;
        transition: .3s ease;
        font-size: 16px;
    }

    input:focus {
        border-bottom: 2px solid red;
    }

    label {
        font-size: 20px;
        padding: 10px;
    }

    button {
        transition: .3s ease;
        background-color: #412234;
        color: white;
        padding: 10px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        margin: 10px;
        font-size: 18px;
    }

    button:hover {
        background-color: #330b21;
    }

    button:active {
        background-color: #230113;
    }


</style>

