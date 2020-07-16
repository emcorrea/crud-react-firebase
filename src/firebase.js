import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBLELtakbM1AcN8nqEzuUpgdVQhJO3z5os",
    authDomain: "crud-udemy-react-76931.firebaseapp.com",
    databaseURL: "https://crud-udemy-react-76931.firebaseio.com",
    projectId: "crud-udemy-react-76931",
    storageBucket: "crud-udemy-react-76931.appspot.com",
    messagingSenderId: "677625842960",
    appId: "1:677625842960:web:dcb3b069f02d49f0256995"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export {firebase}