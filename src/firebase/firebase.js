
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBZhF_cdpyJJV4mdJIV5y-26IkfJOvxqKg",
    authDomain: "web-project-b0257.firebaseapp.com",
    projectId: "web-project-b0257",
    storageBucket: "web-project-b0257.appspot.com",
    messagingSenderId: "131606367651",
    databaseURL: "https://web-project-b0257-default-rtdb.europe-west1.firebasedatabase.app",
    appId: "1:131606367651:web:b3ff3071edc49393d55e16",
    measurementId: "G-XCFXLRX2EN"

};

// const firebaseConfig = {
//     apiKey: "AIzaSyBN4KBxWbPl48JK8s5WwCEOar64r_KTdGU",
//     authDomain: "testing-3e2d9.firebaseapp.com",
//     projectId: "testing-3e2d9",
//     storageBucket: "testing-3e2d9.appspot.com",
//     messagingSenderId: "33483771193",
//     appId: "1:33483771193:web:fb653a1f6ecac9b5c82ce8",
//     measurementId: "G-C1YEDD9YWX"
// };
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
