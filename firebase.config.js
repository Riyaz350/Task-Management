import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw9BMxetRGl_uRByBmIRbloqCQcRbC_Qg",
  authDomain: "task-management-61ff1.firebaseapp.com",
  projectId: "task-management-61ff1",
  storageBucket: "task-management-61ff1.appspot.com",
  messagingSenderId: "1098702042644",
  appId: "1:1098702042644:web:5b2da2f392011893379901"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;