// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: 'AIzaSyBwESi48cGjKDDpkdl_FJqP60IbuuW1hiY',
    authDomain: 'car2auto-2023.firebaseapp.com',
    databaseURL:'https://car2auto-2023-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'car2auto-2023',
    storageBucket: 'car2auto-2023.appspot.com',
    messagingSenderId: '198431939068',
    appId: '1:198431939068:web:2e4af41776dd223bb67a79',
    measurementId: 'G-PY1K9CHXJL',
};

// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];


export default firebase_app;
export const auth = getAuth(firebase_app);