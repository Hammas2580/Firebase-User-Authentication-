import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBYV44G2DCKhpRAVlEhXNa-oN1LV_xT4fg",
  authDomain: "react-practice-ebb08.firebaseapp.com",
  projectId: "react-practice-ebb08",
  storageBucket: "react-practice-ebb08.appspot.com", // ✅ Fixed Storage Bucket
  messagingSenderId: "174587915950",
  appId: "1:174587915950:web:5126285d36e4e67263c73f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };  // Remove signIn if not needed
