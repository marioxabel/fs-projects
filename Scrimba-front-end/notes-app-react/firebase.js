// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQfdxKqSjYs8BWYHZuHmdcBjLWY6rQy18",
  authDomain: "notes-app-44afe.firebaseapp.com",
  projectId: "notes-app-44afe",
  storageBucket: "notes-app-44afe.appspot.com",
  messagingSenderId: "273388092840",
  appId: "1:273388092840:web:464e114f12217bd4a3719d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")