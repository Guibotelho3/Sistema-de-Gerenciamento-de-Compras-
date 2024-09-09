import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
    apiKey: "AIzaSyCPL3EKWx6ExPb3ImdnOOmWtsV4xhkoQKk",
    authDomain: "loja-engsoft.firebaseapp.com",
    projectId: "loja-engsoft",
    storageBucket: "loja-engsoft.appspot.com",
    messagingSenderId: "45617605342",
    appId: "1:45617605342:web:f5a886e16fd5fdceb4704f",
    measurementId: "G-9TQCG6DXD4"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);
const functions = getFunctions(firebaseApp);

export { db, auth, storage, functions };