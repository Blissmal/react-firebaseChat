import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "react-chat-179d8.firebaseapp.com",
    projectId: "react-chat-179d8",
    storageBucket: "react-chat-179d8.appspot.com",
    messagingSenderId: "1092168258638",
    appId: "1:1092168258638:web:4c6366370065dea30b5f1f"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()