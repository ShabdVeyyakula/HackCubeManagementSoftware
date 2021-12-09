import { initializeApp } from 'firebase/app';

import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration


const firebaseConfig = {
    apiKey: "AIzaSyBshXE-mSGLZx5-ABuIfzShOeOxBxu1vjE",
    authDomain: "hackcubeweb.firebaseapp.com",
    projectId: "hackcubeweb",
    storageBucket: "hackcubeweb.appspot.com",
    messagingSenderId: "863250220137",
    appId: "1:863250220137:web:17ae692d9d2fe836434ef8",
    measurementId: "${config.measurementId}"
  };
  


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log(db)


export default {
  app, db
}