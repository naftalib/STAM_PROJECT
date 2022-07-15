import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBUsG2RDUW2AGd52h7DZhIUBNtvjs9Tqwc",
    authDomain: "stam-project-16fb2.firebaseapp.com",
    projectId: "stam-project-16fb2",
    storageBucket: "stam-project-16fb2.appspot.com",
    messagingSenderId: "245942592250",
    appId: "1:245942592250:web:edd6617e8eea4c32f61f43"
  };

  // this var enables connection to firebase services
  const app = initializeApp(firebaseConfig)
  
  export const auth = getAuth(app)