import * as firebase from "firebase";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA8mOi86qE64Xkh_vyfuKKxdacDTE0o1LI",
    authDomain: "jobi-9dfd0.firebaseapp.com",
    databaseURL: "https://jobi-9dfd0.firebaseio.com",
    projectId: "jobi-9dfd0",
    storageBucket: "jobi-9dfd0.appspot.com",
    messagingSenderId: "902623205907"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.database();
const auth = firebase.auth();

export { db, auth };
