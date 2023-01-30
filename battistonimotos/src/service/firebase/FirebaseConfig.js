import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyAFAHTYJg2oj22W-dOx2GzPDEZrdyvngsM",
  authDomain: "backendbattimoto.firebaseapp.com",
  projectId: "backendbattimoto",
  storageBucket: "backendbattimoto.appspot.com",
  messagingSenderId: "992343252527",
  appId: "1:992343252527:web:8a0701b86de38ff62df0da"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const storage = getFirestore(app)