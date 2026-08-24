// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);