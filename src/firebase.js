import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDj3qEaghycxVYe45juEyEtNOhIZdf5EGk",
  authDomain: "instagram-reels-e90c0.firebaseapp.com",
  databaseURL: "https://instagram-reels-e90c0.firebaseio.com",
  projectId: "instagram-reels-e90c0",
  storageBucket: "instagram-reels-e90c0.appspot.com",
  messagingSenderId: "629751801763",
  appId: "1:629751801763:web:4541c0a6e52f88c7e61c16",
  measurementId: "G-HNCTP0R9NE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
