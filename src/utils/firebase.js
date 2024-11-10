// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmKpkKLdCqPfmILZMZLwtS10i-L0jJxQY",
  authDomain: "netflix-gpt-69ddf.firebaseapp.com",
  projectId: "netflix-gpt-69ddf",
  storageBucket: "netflix-gpt-69ddf.firebasestorage.app",
  messagingSenderId: "380310446531",
  appId: "1:380310446531:web:bad421e8a209ee6d415d76",
  measurementId: "G-6W0BWDEE1G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
export const auth = getAuth();