import * as firebase from 'firebase';

// Optionally importing the services that you want to use
import "firebase/auth";
import "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDWekF4M3NpfhDuEZXOLDJZ5_8M_aQnrPQ",
    authDomain: "signal-klone.firebaseapp.com",
    projectId: "signal-klone",
    storageBucket: "signal-klone.appspot.com",
    messagingSenderId: "531843372034",
    appId: "1:531843372034:web:b24ec7bd8785fee9b6031b"
};

let app;
if(firebase.apps.length===0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app=firebase.app();
}

const db = app.firestore(); 
const auth = firebase.auth(); 

export {db, auth};