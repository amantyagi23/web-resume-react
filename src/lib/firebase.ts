import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4jsa76AIFB_wLWbe_LNG2R3luxMLiHjI",
  authDomain: "my-portfolio-89ad8.firebaseapp.com",
  projectId: "my-portfolio-89ad8",
  storageBucket: "my-portfolio-89ad8.firebasestorage.app",
  messagingSenderId: "886641675137",
  appId: "1:886641675137:web:67ef4a07fe4a34cbba7680",
  measurementId: "G-8L88CY78LR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
