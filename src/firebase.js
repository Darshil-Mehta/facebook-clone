import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBLuSp0-Ml240_2-mU93sw5vLoTuWd337U",
    authDomain: "facebook-clone-9a650.firebaseapp.com",
    projectId: "facebook-clone-9a650",
    storageBucket: "facebook-clone-9a650.appspot.com",
    messagingSenderId: "886584253248",
    appId: "1:886584253248:web:c90324bbac5369777af8a5",
    measurementId: "G-6YTH12XYMQ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db