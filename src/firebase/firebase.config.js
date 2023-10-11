// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5gmjY6mslCE8-rqsPGbY0V8WxKLUK77U",
  authDomain: "user-email-pass-authproject.firebaseapp.com",
  projectId: "user-email-pass-authproject",
  storageBucket: "user-email-pass-authproject.appspot.com",
  messagingSenderId: "329860549489",
  appId: "1:329860549489:web:18d53c07d2666cd32cc4d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;