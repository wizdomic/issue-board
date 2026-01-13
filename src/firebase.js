import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBh1d2JW2rRfa7ZzfgF5T75RjDY9a3spLA",
  authDomain: "issue-board-78082.firebaseapp.com",
  projectId: "issue-board-78082",
  storageBucket: "issue-board-78082.firebasestorage.app",
  messagingSenderId: "753837087130",
  appId: "1:753837087130:web:a03b59ebe3dfceebdc8223"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ EXPORT THESE
export const auth = getAuth(app);
export const db = getFirestore(app);
