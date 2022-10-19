// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDT7rR9k33paudC9uFrp63ySxWP-w-o8Ok",
    authDomain: "expenses-control-4342f.firebaseapp.com",
    databaseURL: "https://expenses-control-4342f-default-rtdb.firebaseio.com",
    projectId: "expenses-control-4342f",
    storageBucket: "expenses-control-4342f.appspot.com",
    messagingSenderId: "629432706890",
    appId: "1:629432706890:web:c3815732a5eb57232903b3"
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;