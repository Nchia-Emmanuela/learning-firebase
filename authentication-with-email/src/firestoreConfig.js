import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDhZVouD7GYkzTry8pD737xF11JqmDfbdU",
    authDomain: "authentication-with-emai-6d6c9.firebaseapp.com",
    projectId: "authentication-with-emai-6d6c9",
    storageBucket: "authentication-with-emai-6d6c9.appspot.com",
    messagingSenderId: "824076216899",
    appId: "1:824076216899:web:c0f648c8886d39e09482f6"
  };


  const app = initializeApp(firebaseConfig)

  export const auth = getAuth(app)