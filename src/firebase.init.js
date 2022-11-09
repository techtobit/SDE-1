// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyAaYdfArGgBmq_8hSp573Ky2a4TM-zSOw4",
 authDomain: "rsquare-web-studio.firebaseapp.com",
 projectId: "rsquare-web-studio",
 storageBucket: "rsquare-web-studio.appspot.com",
 messagingSenderId: "149161649099",
 appId: "1:149161649099:web:335a7d81f8879a0e128c4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;