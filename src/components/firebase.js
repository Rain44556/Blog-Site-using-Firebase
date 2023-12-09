import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyBcC5haSBM3adSUH2cCrfJa2q4GJo2lKeM",
    authDomain: "blogapp-9e0da.firebaseapp.com",
    projectId: "blogapp-9e0da",
    storageBucket: "blogapp-9e0da.appspot.com",
    messagingSenderId: "1052311828639",
    appId: "1:1052311828639:web:aea3ed3855d9c9f2610aaa",
    measurementId: "G-2WYJ3KRSZT"
});

const fb =firebase;
export default fb;