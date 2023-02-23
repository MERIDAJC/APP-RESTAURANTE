// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs0S2oZsj453iPO32muea7gccI6kHOxqU",
  authDomain: "proyecto4-e11bc.firebaseapp.com",
  projectId: "proyecto4-e11bc",
  storageBucket: "proyecto4-e11bc.appspot.com",
  messagingSenderId: "787274254865",
  appId: "1:787274254865:web:b6706593f3acf92e06bfb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db = getFirestore()
