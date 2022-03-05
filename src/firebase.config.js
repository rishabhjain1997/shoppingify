// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5R9QJut3QmHDQbLaZC901DYArsa22L70",
  authDomain: "shoppingify-b85c1.firebaseapp.com",
  projectId: "shoppingify-b85c1",
  storageBucket: "shoppingify-b85c1.appspot.com",
  messagingSenderId: "467392280023",
  appId: "1:467392280023:web:dd3dc5ed0d63af2acc4792",
  measurementId: "G-NPPKWY91HH",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const db = getFirestore()
