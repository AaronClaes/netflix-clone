import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5R256_6fN0rSgRQrpcdwGyTN8vMRMo8Y",
  authDomain: "netflix-clone-59890.firebaseapp.com",
  projectId: "netflix-clone-59890",
  storageBucket: "netflix-clone-59890.appspot.com",
  messagingSenderId: "296635188373",
  appId: "1:296635188373:web:7708d330a40a881678479c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
