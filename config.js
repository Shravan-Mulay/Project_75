import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyAb5dnvOlmgOSIowEIt0VlP7tIxl3Rn6bA",
  authDomain: "e-ride-e1a78.firebaseapp.com",
  projectId: "e-ride-e1a78",
  storageBucket: "e-ride-e1a78.appspot.com",
  messagingSenderId: "554922852871",
  appId: "1:554922852871:web:820af61e28802ff4ac60a2"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
