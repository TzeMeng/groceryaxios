import firebase from 'firebase';

const firebaseConfig = {
    //Key in your database details
    apiKey: "AIzaSyCi4Cd2vHyVKongwVNjgFb4i5fFSh2Grz8",
    authDomain: "week8hw.firebaseapp.com",
    databaseURL: "https://week8hw.firebaseio.com",
    projectId: "week8hw",
    storageBucket: "week8hw.appspot.com",
    messagingSenderId: "15913097756",
    appId: "1:15913097756:web:25b84e47b0de58a295ddd9",
    measurementId: "G-MV97EFF1VS"

  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;