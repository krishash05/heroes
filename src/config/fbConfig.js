import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAxuXByvo5PGl1JJrBlXOklNk1hmj8CcTA",
  authDomain: "superheroes-f4db4.firebaseapp.com",
  databaseURL: "https://superheroes-f4db4.firebaseio.com",
  projectId: "superheroes-f4db4",
  storageBucket: "superheroes-f4db4.appspot.com",
  messagingSenderId: "544840214617"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
