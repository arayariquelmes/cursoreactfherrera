  // Your web app's Firebase configuration
  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCmx1c37wI95uJJpfNSlPe9uVhI6fh_j4A",
    authDomain: "react-curso-fernando-herrera.firebaseapp.com",
    projectId: "react-curso-fernando-herrera",
    storageBucket: "react-curso-fernando-herrera.appspot.com",
    messagingSenderId: "329837996718",
    appId: "1:329837996718:web:1281164d35f16032ee1b3f"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,googleAuthProvider,firebase
}
