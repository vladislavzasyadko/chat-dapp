<script>
    import {user} from "./user";

    let username;
    let password;

    function login() {
        user.auth(username, password, ({err}) => err && alert(err))
    }

    function signUp() {
        user.create(username, password, ({err}) => {
            if(err){
                alert(err);
            }else {
                login();
            }
        });
    }

</script>

<label>Username</label>
<input name="username" bind:value={username} type="text"/>
<label>Password</label>
<input name="password" bind:value={password} type="password"/>

<button class={'login'} on:click={login}>Log In</button>
<button class={'signup'} on:click={signUp}>Sign Up</button>

<style>

</style>

