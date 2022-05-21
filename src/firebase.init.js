import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMqw42cWAdQ5fxnMUqcxLtpxOfKBHsYKs",
  authDomain: "dentist-portal-e9830.firebaseapp.com",
  projectId: "dentist-portal-e9830",
  storageBucket: "dentist-portal-e9830.appspot.com",
  messagingSenderId: "706981552671",
  appId: "1:706981552671:web:628ecc1e707d360029eb2a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
