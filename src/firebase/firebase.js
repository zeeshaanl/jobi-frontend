import * as firebase from "firebase";

// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBFqrp4pxbcjHhNtJ_VanY_4tYWyNXzgdQ",
    authDomain: "jobi-lagos.firebaseapp.com",
    databaseURL: "https://jobi-lagos.firebaseio.com",
    projectId: "jobi-lagos",
    storageBucket: "",
    messagingSenderId: "370323033587"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

export { auth };
