// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9s4jeY30HInxHazgJi0X9Js6KLZ4hEM8",
  authDomain: "identity-pulse-user-management.firebaseapp.com",
  projectId: "identity-pulse-user-management",
  storageBucket: "identity-pulse-user-management.appspot.com",
  messagingSenderId: "574961581256",
  appId: "1:574961581256:web:225b615d99bc4a6831f9fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;