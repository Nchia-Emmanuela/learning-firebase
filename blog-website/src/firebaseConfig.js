import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCxmlKGJEPrj4vi5qeDast0vkyDU3k7OVU",
    authDomain: "blog-website-3ded6.firebaseapp.com",
    projectId: "blog-website-3ded6",
    storageBucket: "blog-website-3ded6.appspot.com",
    messagingSenderId: "539037640590",
    appId: "1:539037640590:web:99e80e5607577819f1a6df"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app)

  export const db = getFirestore(app)

  export const provider = new GoogleAuthProvider()