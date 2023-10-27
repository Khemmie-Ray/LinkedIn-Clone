import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"


import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA2BA5WK4_lw4hSB0tOkop78bpkFP17Snk",
  authDomain: "linkedin-clone-2e69b.firebaseapp.com",
  projectId: "linkedin-clone-2e69b",
  storageBucket: "linkedin-clone-2e69b.appspot.com",
  messagingSenderId: "468527238340",
  appId: "1:468527238340:web:e4b872ab76104a7ff14d91",
  measurementId: "G-5P8FEX92JS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// export default colRef;

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
