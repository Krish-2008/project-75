import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAl3wQPlnCUUJWMacoXmAI5aNTiD1wOqo0",
  authDomain: "project-71-53530.firebaseapp.com",
  projectId: "project-71-53530",
  storageBucket: "project-71-53530.appspot.com",
  messagingSenderId: "821422572485",
  appId: "1:821422572485:web:e83c7c7223a63d20dc81ac"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
