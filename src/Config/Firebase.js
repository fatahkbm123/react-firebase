import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAchgcLJ6urCOWQGpdu-OoVhoM99BuM4R4",
  authDomain: "loginsytem-11c50.firebaseapp.com",
  databaseURL: "https://loginsytem-11c50.firebaseio.com",
  projectId: "loginsytem-11c50",
  storageBucket: "loginsytem-11c50.appspot.com",
  messagingSenderId: "741391596390",
  appId: "1:741391596390:web:d629e4affe503e9ca066a7",
  measurementId: "G-EJGCXX8ST9",
};

// Initiliaze
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

export default firebase;
