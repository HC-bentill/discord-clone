import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA70yGhEkfuxB-tw6DxrmOhx1lqMGEUyaE",
  authDomain: "discord-clone-f87c9.firebaseapp.com",
  projectId: "discord-clone-f87c9",
  storageBucket: "discord-clone-f87c9.appspot.com",
  messagingSenderId: "613193012662",
  appId: "1:613193012662:web:f6f8f76dc3449b9f8d9d17",
  measurementId: "G-RGQSYL3Y51",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// grab the database
const db = firebaseApp.firestore();

// authentication
const auth = firebase.auth();

// provider - authentication by google services
const provider = new firebase.auth.GoogleAuthProvider();

// export
export { auth, provider };
export default db;
