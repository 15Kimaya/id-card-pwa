// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeHXrx9fOsRjWoXPl4KtuymSHdsUE7eYQ",
  authDomain: "id-card-194ed.firebaseapp.com",
  projectId: "id-card-194ed",
  storageBucket: "id-card-194ed.firebasestorage.app",
  messagingSenderId: "673411130881",
  appId: "1:673411130881:web:5a558437ac82dfdf2ec200"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);