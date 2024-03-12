// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCb-ZZwdmridF3f_zwHJXpMJbJFUkmmGOE",
  authDomain: "tech-space-c295e.firebaseapp.com",
  projectId: "tech-space-c295e",
  storageBucket: "tech-space-c295e.appspot.com",
  messagingSenderId: "847813355284",
  appId: "1:847813355284:web:adffc643b902a1a9648401",
  measurementId: "G-6726TGS3GD"
};

// Initialize Firebase
 
const firebasApp = initializeApp(firebaseConfig);
const db = getFirestore(firebasApp);
const auth = getAuth(firebasApp)

export {db, auth};