import { db } from "./firebase";

// User API

export const doCreateUser = (id, ...rest) =>
    db.ref(`users/${id}`).set({
        ...rest
    });

export const onceGetUsers = () => db.ref("users").once("value");

// Other Entity APIs ...
