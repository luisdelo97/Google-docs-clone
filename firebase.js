// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXAgAItkWGFxtHHy3bSLtIFnUvvHtha5M",
  authDomain: "docs-clone-9713b.firebaseapp.com",
  projectId: "docs-clone-9713b",
  storageBucket: "docs-clone-9713b.appspot.com",
  messagingSenderId: "264812038380",
  appId: "1:264812038380:web:0260ef22ea860d0b033dc9",
};

// Initialize Firebase
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
