// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVpURGiZOV4-ZVqSo1yAtGWgSaMxTJjXw",
  authDomain: "music-app-41a05.firebaseapp.com",
  projectId: "music-app-41a05",
  storageBucket: "music-app-41a05.appspot.com",
  messagingSenderId: "193275536232",
  appId: "1:193275536232:web:979cad6312203928d76cdd",
  measurementId: "G-25J4X6JWR4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// info about authenticated Users who and which users is authenticated
export const authentication = getAuth(app);