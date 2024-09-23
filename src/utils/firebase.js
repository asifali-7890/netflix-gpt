// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwYIUnBX3S2GLqWVO-lPnqmqnF5k2JHoY",
  authDomain: "netflixgpt-47c21.firebaseapp.com",
  projectId: "netflixgpt-47c21",
  storageBucket: "netflixgpt-47c21.appspot.com",
  messagingSenderId: "497956295546",
  appId: "1:497956295546:web:cf3ff8305377ff8c67fcc3",
  measurementId: "G-VG54QT371G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();