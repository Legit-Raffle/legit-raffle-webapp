// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore
}   from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApaX6_aZTeQE5uajWx64tJ6lw9ZBwdQH0",
  authDomain: "legit-raffle.firebaseapp.com",
  projectId: "legit-raffle",
  storageBucket: "legit-raffle.appspot.com",
  messagingSenderId: "614298644754",
  appId: "1:614298644754:web:19c49f8610a8d9b74903cb",
  measurementId: "G-C2SR8YKSSQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()
