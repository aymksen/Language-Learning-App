import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider} from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAYaDc9QVrNpT8nZfnjJ5WBh2GqQjmwFZ4",
  authDomain: "fir-crs-b5ddf.firebaseapp.com",
  projectId: "fir-crs-b5ddf",
  storageBucket: "fir-crs-b5ddf.appspot.com",
  messagingSenderId: "1095486350926",
  appId: "1:1095486350926:web:0e66fc082d528815ad451f",
  measurementId: "G-BQY6TXTJHS"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);