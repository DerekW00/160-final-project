import firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBQuajsrx45sb5okKF0UHDF7wSE6wwD4BM",
  authDomain: "cs160-final-project-394603.firebaseapp.com",
  databaseURL: "https://cs160-final-project-394603-default-rtdb.firebaseio.com",
  projectId: "cs160-final-project-394603",
  storageBucket: "cs160-final-project-394603.appspot.com",
  messagingSenderId: "194794314914",
  appId: "1:194794314914:web:30d5e27cbd235e2639cbfb",
  measurementId: "G-0S04MEYWK3"
};

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

// source: https://dev.to/mdamirgauhar/firebase-google-authentication-with-react-gop