import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyD8RWmVNz6p1uGUk4H8n3H69zq1IYuyMe0",
  authDomain: "uploading-files-d8dba.firebaseapp.com",
  projectId: "uploading-files-d8dba",
  storageBucket: "uploading-files-d8dba.appspot.com",
  messagingSenderId: "850201651443",
  appId: "1:850201651443:web:9afca677f40899a7ccaf86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)