// Imports
import { initializeApp } from 'firebase/app';  
import { getFirestore} from 'firebase/firestore';



// Expores firebase config
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

const db = getFirestore(app)

export default {db};
