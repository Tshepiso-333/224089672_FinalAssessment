import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyASc3dCTLhjOvDLsPv0X-lCe5wltBwytyI",
  authDomain: "hotelapp-7b50f.firebaseapp.com",
  projectId: "hotelapp-7b50f",
  storageBucket: "hotelapp-7b50f.firebasestorage.app",
  messagingSenderId: "82749099223",
  appId: "1:82749099223:web:3128fdda7540cf4181f492"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;