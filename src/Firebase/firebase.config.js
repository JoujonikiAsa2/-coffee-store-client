// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBluXR5x2aG6We_pfqYLOyhvkgTr-SK328",
  authDomain: "coffee-store-ed7d3.firebaseapp.com",
  projectId: "coffee-store-ed7d3",
  storageBucket: "coffee-store-ed7d3.appspot.com",
  messagingSenderId: "266443859816",
  appId: "1:266443859816:web:10a27b62c941cde117d8dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;