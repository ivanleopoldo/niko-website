import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


/* 
    FOR DEVELOPMENT PURPOSES ONLY
*/
const firebaseConfig = {
    apiKey: "AIzaSyDi1Xo_Q4hyixmhmTMPcxROErUcEHEoJK8",
    authDomain: "nikodb-5e1dd.firebaseapp.com",
    projectId: "nikodb-5e1dd",
    storageBucket: "nikodb-5e1dd.appspot.com",
    messagingSenderId: "684282764864",
    appId: "1:684282764864:web:bc65b6d7eb65b9f9c309a5",
    measurementId: "G-GNQW0HKR4P"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);


  