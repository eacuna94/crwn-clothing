import { initializeApp } from "@firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA39fjBgU2PSCROAunXs-eCu0ehy3-z7eI",
  authDomain: "crwn-db-99bd3.firebaseapp.com",
  projectId: "crwn-db-99bd3",
  storageBucket: "crwn-db-99bd3.appspot.com",
  messagingSenderId: "540429664179",
  appId: "1:540429664179:web:8cc8856afadd4561b5d5c6",
  measurementId: "G-RTLGLBJ3RV"
};

initializeApp(config);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default firebase;
