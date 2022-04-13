// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDRWapDyu0X23IslaM6A8EjyHi_l4-yupA",
    authDomain: "dictionary-8d10b.firebaseapp.com",
    projectId: "dictionary-8d10b",
    storageBucket: "dictionary-8d10b.appspot.com",
    messagingSenderId: "193527690146",
    appId: "1:193527690146:web:29b5d952f787cbb09178fb",
    measurementId: "G-HYP7WNTJ1S",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
