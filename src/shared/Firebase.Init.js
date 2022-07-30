// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2MgupuaqalJf5MIVIgMPRtKso-9uaGT0",
  authDomain: "react-firebase-741cf.firebaseapp.com",
  projectId: "react-firebase-741cf",
  storageBucket: "react-firebase-741cf.appspot.com",
  messagingSenderId: "866981694028",
  appId: "1:866981694028:web:aa36009c0c3b10a39642e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;