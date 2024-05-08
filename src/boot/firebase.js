import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyACGo7OMTmzBJjDPMBx0b_pO2uwAS1xzgs",
    authDomain: "groupapp-aef30.firebaseapp.com",
    projectId: "groupapp-aef30",
    storageBucket: "groupapp-aef30.appspot.com",
    messagingSenderId: "727749678488",
    appId: "1:727749678488:web:4f861c86d8145af2a607ed",
}

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const userCollection = db.collection('users')


export default db
