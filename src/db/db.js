
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore"




const firebaseConfig = {
  apiKey: "AIzaSyCgkaZkGVoMVDy5ixh3E3-LSlEgWx0DAQo",
  authDomain: "ecomerce-juegos.firebaseapp.com",
  projectId: "ecomerce-juegos",
  storageBucket: "ecomerce-juegos.appspot.com",
  messagingSenderId: "140516129914",
  appId: "1:140516129914:web:71fc98c6e9d61e565c8fc3"
};


initializeApp(firebaseConfig);

const db= getFirestore ()

export default db