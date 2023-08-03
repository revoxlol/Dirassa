// Import the functions you need from the SDKs you need
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth";
import { useEffect } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCg9qUnqFYqUBkTFWVPC8xws1N75RaW8n4",
  authDomain: "dirassa-694ba.firebaseapp.com",
  projectId: "dirassa-694ba",
  storageBucket: "dirassa-694ba.appspot.com",
  messagingSenderId: "301302630870",
  appId: "1:301302630870:web:07d6830a9e411d0eb0bc77",
  measurementId: "G-5JP577WDDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

export function signUpAuth ( email, password) {
    return createUserWithEmailAndPassword(auth, email , password);
}
export function login ( email, password) {
  return signInWithEmailAndPassword(auth, email , password);
}

export function logout(){
  return signOut(auth);
}


export function useAuth(){
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user=> setCurrentUser(user));
    return unsub;
    
  }, [])
  return currentUser;
}