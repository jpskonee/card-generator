import firebase from "firebase";
import "firebase/firestore";
import "firebase/storage"

export const app = firebase.initializeApp({
    apiKey: "AIzaSyBe6oNaM7Oy92fclS5twBjREvs-PrcSSy8",
    authDomain: "card-generator-bd.firebaseapp.com",
    projectId: "card-generator-bd",
    storageBucket: "card-generator-bd.appspot.com",
    messagingSenderId: "966261508576",
    appId: "1:966261508576:web:6d2a9959759b71e3c70385",
    measurementId: "G-KEREN2T0MN"
});