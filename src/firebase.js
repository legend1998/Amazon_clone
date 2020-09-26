// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAvQqMmyM6ITdPXwannC7g7C4KOfydwd_w",
  authDomain: "clone-cbc6a.firebaseapp.com",
  databaseURL: "https://clone-cbc6a.firebaseio.com",
  projectId: "clone-cbc6a",
  storageBucket: "clone-cbc6a.appspot.com",
  messagingSenderId: "941482607551",
  appId: "1:941482607551:web:d8fcfdc000d51d539ad70a",
  measurementId: "G-K2PT4HKP2G",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
