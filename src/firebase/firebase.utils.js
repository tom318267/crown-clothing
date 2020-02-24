import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDoi4gnVpRqJg97m3mPpgBwol8pkbSl9A4",
  authDomain: "crown-db-3a4b7.firebaseapp.com",
  databaseURL: "https://crown-db-3a4b7.firebaseio.com",
  projectId: "crown-db-3a4b7",
  storageBucket: "crown-db-3a4b7.appspot.com",
  messagingSenderId: "815005168250",
  appId: "1:815005168250:web:1f0df0bf0a7a85b82f81c3",
  measurementId: "G-95GDB1W99M"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
