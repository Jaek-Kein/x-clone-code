// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvfFOHzlXylD75CDa_niwO-xkS77l-Lkk",
  authDomain: "nwitter-reloaded-16cb0.firebaseapp.com",
  projectId: "nwitter-reloaded-16cb0",
  storageBucket: "nwitter-reloaded-16cb0.appspot.com",
  messagingSenderId: "62328446465",
  appId: "1:62328446465:web:2eaa5afbebb09ef1d2aa00"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);