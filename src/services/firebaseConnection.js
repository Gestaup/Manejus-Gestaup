import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCOufXriESertpFz0kruhcz7QdBgXhyaSk",
  authDomain: "manejus-app.firebaseapp.com",
  projectId: "manejus-app",
  storageBucket: "manejus-app.appspot.com",
  messagingSenderId: "518399619248",
  appId: "1:518399619248:web:dcd06f691e5675c1140b75",
  measurementId: "G-S1RX91GKVJ"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp)
const storage = getStorage(firebaseApp)

export { auth, db, storage };
