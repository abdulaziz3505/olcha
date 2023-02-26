import { initializeApp } from "firebase/app"
import { getFirestore } from "@firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBb3zoiMnD3TQAPVCudQAkwNMnRmcr_8h8",
    authDomain: "gladiator-bbdef.firebaseapp.com",
    projectId: "gladiator-bbdef",
    storageBucket: "gladiator-bbdef.appspot.com",
    messagingSenderId: "432763277112",
    appId: "1:432763277112:web:6da3420462749055a0fbcd",
    measurementId: "G-LT5CDEWQPZ"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app) 