import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAxS2XfV-2chIAXL8D8Fheh7TAQyqodtQg",
  authDomain: "react-chat-app-fabb8.firebaseapp.com",
  projectId: "react-chat-app-fabb8",
  storageBucket: "react-chat-app-fabb8.appspot.com",
  messagingSenderId: "326768212453",
  appId: "1:326768212453:web:41729e539dc8c1bf96d70c",
  measurementId: "G-GJ8537RJ7K"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()