import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBAv64zFOeWlwYi6-Roe7Vi_HToLpu9Ao",
  authDomain: "alpha-climb0.firebaseapp.com",
  projectId: "alpha-climb0",
  storageBucket: "alpha-climb0.appspot.com",
  messagingSenderId: "213242817201",
  appId: "1:213242817201:web:a7540baa454e63a72e5090",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
