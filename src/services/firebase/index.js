import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCoyLcej52AqFx7Vg42Q8uRepEMXMvbZM0",
    authDomain: "rocktica-91a08.firebaseapp.com",
    projectId: "rocktica-91a08",
    storageBucket: "rocktica-91a08.appspot.com",
    messagingSenderId: "383381085652",
    appId: "1:383381085652:web:71b546d66199aca934ca41"
};

const app = initializeApp(firebaseConfig);

export const database = getFirestore(app)