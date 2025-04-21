// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AlzaSyDLbuTxR23ZtF_xjtMoyf5HDepTWXhnbCo",
  authDomain: "lumperapp1.firebaseapp.com",
  projectId: "lumperapp1",
  storageBucket: "lumperapp1.appspot.com",
  messagingSenderId: "192913670185",
  appId: "1:192913670185:web:b7c271a49f96ad8bd91c38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app; 