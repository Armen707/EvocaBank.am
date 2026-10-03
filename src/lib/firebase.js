// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCG8s1SYZdZSHUduQZYiCn1s2kCcBCuP5s",
  authDomain: "evocabank-ce332.firebaseapp.com",
  projectId: "evocabank-ce332",
  storageBucket: "evocabank-ce332.firebasestorage.app",
  messagingSenderId: "599609563805",
  appId: "1:599609563805:web:13c5bdfdcef04e4c13d274",
  measurementId: "G-R4JLYR3DX8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);