// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp, FirebaseOptions } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyDFcCCHWgdOhOFRMkEqm7EN_XFpl2dzQIc",
  authDomain: "ebuddy-30bc4.firebaseapp.com",
  projectId: "ebuddy-30bc4",
  storageBucket: "ebuddy-30bc4.firebasestorage.app",
  messagingSenderId: "846676233483",
  appId: "1:846676233483:web:6033c328a86e9bb52ce60e",
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);