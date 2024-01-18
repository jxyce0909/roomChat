// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PRO_ID,
  storageBucket: process.env.SB,
  messagingSenderId: process.env.MESSAGE_SEND_ID,
  appId: process.env.APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);