import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBsKX8IlWbpJ1FPvpkaDIsXeb3Hyqe_EWg",
  authDomain: "instagram-f89e8.firebaseapp.com",
  projectId: "instagram-f89e8",
  storageBucket: "instagram-f89e8.appspot.com",
  messagingSenderId: "700430135878",
  appId: "1:700430135878:web:23c5f72c22d7adc89ad047",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
