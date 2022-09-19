// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoDPd6lmMj6yyOLTgWPjdri0YjUqHFvc4",
  authDomain: "backway-cb2a9.firebaseapp.com",
  projectId: "backway-cb2a9",
  storageBucket: "backway-cb2a9.appspot.com",
  messagingSenderId: "748085829750",
  appId: "1:748085829750:web:6af9e00faca125ac00ff57",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
