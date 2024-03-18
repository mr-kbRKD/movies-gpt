// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA9ZMFAgGjD-lsIAv58kDy3qa68Z0SDLfo",
    authDomain: "movies-32f75.firebaseapp.com",
    projectId: "movies-32f75",
    storageBucket: "movies-32f75.appspot.com",
    messagingSenderId: "183962368308",
    appId: "1:183962368308:web:e53edb834418f1de348d61",
    measurementId: "G-7QV0WXN9D0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();