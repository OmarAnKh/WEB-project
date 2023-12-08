
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBZhF_cdpyJJV4mdJIV5y-26IkfJOvxqKg",
    authDomain: "web-project-b0257.firebaseapp.com",
    projectId: "web-project-b0257",
    storageBucket: "web-project-b0257.appspot.com",
    messagingSenderId: "131606367651",
    appId: "1:131606367651:web:b3ff3071edc49393d55e16",
    measurementId: "G-XCFXLRX2EN"
};


const app = initializeApp(firebaseConfig); 
export const  db = getFirestore(app);
