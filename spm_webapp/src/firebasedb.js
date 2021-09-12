import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDPW79E17fE9Nu91wKP9A3f_8fcGqeV-14",
  authDomain: "spm-webapp.firebaseapp.com",
  databaseURL: "https://spm-webapp-default-rtdb.firebaseio.com",
  projectId: "spm-webapp",
  storageBucket: "spm-webapp.appspot.com",
  messagingSenderId: "322589786717",
  appId: "1:322589786717:web:ba5e3c34dff8f5368ac3b4",
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
