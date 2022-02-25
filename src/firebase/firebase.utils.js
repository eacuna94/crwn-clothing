import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';


const config = {
  apiKey: "AIzaSyA39fjBgU2PSCROAunXs-eCu0ehy3-z7eI",
  authDomain: "crwn-db-99bd3.firebaseapp.com",
  projectId: "crwn-db-99bd3",
  storageBucket: "crwn-db-99bd3.appspot.com",
  messagingSenderId: "540429664179",
  appId: "1:540429664179:web:8cc8856afadd4561b5d5c6",
  measurementId: "G-RTLGLBJ3RV"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(firestore, `users/${userAuth.uid}`);

  const snapShot = await getDoc(userRef);
  console.log('snapshot:', snapShot);
  console.log('exists? :', snapShot.exists());

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

initializeApp(config);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);