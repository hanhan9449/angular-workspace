// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChuJNYbGFEIDNxG1EBVpy5IVZigT6PSLw",
  authDomain: "angular-workspace-511e0.firebaseapp.com",
  projectId: "angular-workspace-511e0",
  storageBucket: "angular-workspace-511e0.appspot.com",
  messagingSenderId: "403351094816",
  appId: "1:403351094816:web:a5434bfd2f1b791f8c9e45",
  measurementId: "G-64G8K0EE22"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);