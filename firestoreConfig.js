import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  projectId: "ganiyu-firebase-2025",
  storageBucket: "ganiyu-firebase-2025.firebasestorage.app",
  apiKey: "AIzaSyD-NYFS92ojX0fmHiRZMIoKkQNTscn0xe8",
  authDomain: "ganiyu-firebase-2025.firebaseapp.com",
  messagingSenderId: "467468752799",
  projectNumber: "467468752799"
  
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);