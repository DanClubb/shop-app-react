import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC0gCXbuKTvrUwtIY9e9NieNpgHXrEsLhU",
  authDomain: "shop-dd8fa.firebaseapp.com",
  projectId: "shop-dd8fa",
  storageBucket: "shop-dd8fa.appspot.com",
  messagingSenderId: "855517489311",
  appId: "1:855517489311:web:e25e3a1a690519d30f9aaa",
  measurementId: "G-FFJLXD8GS6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db