// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBpWW_r7hnsIwLt5E7REIOkEnjsZMojjs",
  authDomain: "darkdevil-a6df3.firebaseapp.com",
  projectId: "darkdevil-a6df3",
  storageBucket: "darkdevil-a6df3.appspot.com",
  messagingSenderId: "598522999195",
  appId: "1:598522999195:web:98fbb1678923ddb678b13e",
  measurementId: "G-YGESTRKE2E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);