import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6jLUmmlxoFnTV47Jyv8bMpZQonMtZ5Vg",
  authDomain: "challenge-e200f.firebaseapp.com",
  projectId: "challenge-e200f",
  storageBucket: "challenge-e200f.appspot.com",
  messagingSenderId: "853463689725",
  appId: "1:853463689725:web:201ef4f7d7d66481809194",
  measurementId: "G-3T3S5ZN60M",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
