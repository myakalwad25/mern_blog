// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAbdggy1987nnRboFAydljPClT_kBD9sw",
  authDomain: "mern-blog-7b25e.firebaseapp.com",
  projectId: "mern-blog-7b25e",
  storageBucket: "mern-blog-7b25e.appspot.com",
  messagingSenderId: "67952775177",
  appId: "1:67952775177:web:2b27ba4b07a73d3375e8d8",
  measurementId: "G-E3C74PYKJF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);