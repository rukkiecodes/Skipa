import firebase from 'firebase';
require("firebase/firestore");

// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAb8VSdNflEN4mur7N2Ba8PKsGsPc2Fh6w",
    authDomain: "skipa-43cff.firebaseapp.com",
    databaseURL: "https://skipa-43cff.firebaseio.com",
    projectId: "skipa-43cff",
    storageBucket: "",
    messagingSenderId: "299430710385",
    appId: "1:299430710385:web:c8dadd022456c920d05fd0"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  export{fb,db}