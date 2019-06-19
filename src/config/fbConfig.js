import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
let config = {
  apiKey: "AIzaSyAb4hJM6G8UR4MX3Ch5ANzj6TUppQ0_CQ8",
  authDomain: "codesolve-4122b.firebaseapp.com",
  databaseURL: "https://codesolve-4122b.firebaseio.com",
  projectId: "codesolve-4122b",
  storageBucket: "",
  messagingSenderId: "953031803776",
  appId: "1:953031803776:web:2d380527ab6593e0"
};
firebase.initializeApp(config);
//firebase.firestore().settings({ timestampsInSnapshots: true });
//firebase.firestore().settings();

export default firebase;
