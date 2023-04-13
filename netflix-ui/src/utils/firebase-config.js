import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";




const firebaseConfig = {
    apiKey: "AIzaSyArAKI5JJGmEOjVn_qubK0xf6VINajtt64",
    authDomain: "react-netflix-clone-19anuj.firebaseapp.com",
    projectId: "react-netflix-clone-19anuj",
    storageBucket: "react-netflix-clone-19anuj.appspot.com",
    messagingSenderId: "778585280473",
    appId: "1:778585280473:web:9a636c251aed4adb8913c8",
    measurementId: "G-GK9KDJMRXK"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);