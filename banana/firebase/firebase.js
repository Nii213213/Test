// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpcmr9zEeLWSI_BcR6Uqpp30SC65bJwNg",
  authDomain: "banana-sheep.firebaseapp.com",
  projectId: "banana-sheep",
  storageBucket: "banana-sheep.appspot.com",
  messagingSenderId: "971898478966",
  appId: "1:971898478966:web:6cc1ed1a60386f208a1a57",
  measurementId: "G-7M2R8BN063",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };
