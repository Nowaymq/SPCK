
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDsnXwMmEykLGWyizgB3CIEBogiIrrtIX8",
    authDomain: "spckjsa-48d34.firebaseapp.com",
    projectId: "spckjsa-48d34",
    storageBucket: "spckjsa-48d34.appspot.com",
    messagingSenderId: "81094075231",
    appId: "1:81094075231:web:b692cc664645beeadbccea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };