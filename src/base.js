import firebase from "firebase";
import "firebase/firestore";
import "firebase/storage"


export const app = firebase.initializeApp({
    apiKey: "AIzaSyAPu8baWMr9ARDbsRvjUsrrpTPiyYKkCuA",
    authDomain: "cardgendb.firebaseapp.com",
    projectId: "cardgendb",
    storageBucket: "cardgendb.appspot.com",
    messagingSenderId: "1076649912000",
    appId: "1:1076649912000:web:ed5923cf441e9db939ef25",
    measurementId: "G-TXJ2LMXGS4"
});


