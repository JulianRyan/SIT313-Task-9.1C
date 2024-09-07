// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCDlxpJuMzQg13YzqkYLiNiXUuq6tdGccA",
    authDomain: "deakin-web-app-sit313.firebaseapp.com",
    projectId: "deakin-web-app-sit313",
    storageBucket: "deakin-web-app-sit313.appspot.com",
    messagingSenderId: "1097839254218",
    appId: "1:1097839254218:web:cd674b3dd5e9c4aed07233"
};

const firebaseApp = initializeApp(firebaseConfig)

export const auth = getAuth();
export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth, additionalInformation={}) => {
    if (!userAuth.email) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        }
        catch (error) {
            console.log('error in creating ', error.message);
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInWithAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password)
}