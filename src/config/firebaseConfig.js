import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBNMRdVQWalRXfH5NRYsE2_N5e1xmhb3Ug",
  authDomain: "planner-86fd6.firebaseapp.com",
  databaseURL: "https://planner-86fd6.firebaseio.com",
  projectId: "planner-86fd6",
  storageBucket: "planner-86fd6.appspot.com",
  messagingSenderId: "84263011015",
  appId: "1:84263011015:web:8aeea398fe91de7d11f4e2",
  measurementId: "G-D5PHCMNGF6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
