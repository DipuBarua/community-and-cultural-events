// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJ_lhvgdmHP5GTwj8bEHcpzidWf7dHCy0",
    authDomain: "community-and-cultural-events.firebaseapp.com",
    projectId: "community-and-cultural-events",
    storageBucket: "community-and-cultural-events.appspot.com",
    messagingSenderId: "1058570711913",
    appId: "1:1058570711913:web:b9a5aa853b7c99b42743f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;