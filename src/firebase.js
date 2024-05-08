import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyACGo7OMTmzBJjDPMBx0b_pO2uwAS1xzgs",
    authDomain: "groupapp-aef30.firebaseapp.com",
    projectId: "groupapp-aef30",
    storageBucket: "groupapp-aef30.appspot.com",
    messagingSenderId: "727749678488",
    appId: "1:727749678488:web:4f861c86d8145af2a607ed",
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)



export { auth }
