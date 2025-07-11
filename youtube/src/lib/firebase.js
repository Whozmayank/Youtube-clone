// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7-ECT_cmih8MWH4oY6gYpf8yN4yQMxVQ",
  authDomain: "fir-55b44.firebaseapp.com",
  projectId: "fir-55b44",
  storageBucket: "fir-55b44.firebasestorage.app",
  messagingSenderId: "783731454829",
  appId: "1:783731454829:web:373123d001db55ad8d2064"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };