import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const API_KEY = import.meta.env.VITE_API_KEY;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "nicegadgets-auth.firebaseapp.com",
  projectId: "nicegadgets-auth",
  storageBucket: "nicegadgets-auth.appspot.com",
  messagingSenderId: "332002636883",
  appId: "1:332002636883:web:bf6d2257b26cd3a96102a6",
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleAuthProvider = new GoogleAuthProvider();
export default app;
