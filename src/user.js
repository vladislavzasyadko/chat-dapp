import Gun from "gun";
import 'gun/sea'; // security encryption and auth
import 'gun/axe'; // advanced exchange equation

import { writable } from "svelte/store";

//Database init
export const db = Gun();

//Db user stays logged in between browser sessions
export const user = db.user().recall({sessionStorage: true});

// writable current username | store
export const username = writable('');

user.get('alias').on(name => username.set(name));

db.on('auth', async () => {
    const alias = await user.get('alias'); //username string
    username.set(`${alias}`);

    console.log(`signed in as ${alias}`);
})
