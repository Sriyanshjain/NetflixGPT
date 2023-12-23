// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfcRWHykz-gGtAipHlcakMYhxi02V2DTo",
  authDomain: "netflixgpt-2699e.firebaseapp.com",
  projectId: "netflixgpt-2699e",
  storageBucket: "netflixgpt-2699e.appspot.com",
  messagingSenderId: "504877014719",
  appId: "1:504877014719:web:6ac24628277f052cfe700a",
  measurementId: "G-CH96866YYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();