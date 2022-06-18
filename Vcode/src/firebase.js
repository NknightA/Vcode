// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmlgZPaeQmiWzQLcBNdqhTNw9ujndnRZY",
  authDomain: "vcode-v1.firebaseapp.com",
  projectId: "vcode-v1",
  storageBucket: "vcode-v1.appspot.com",
  messagingSenderId: "90033559094",
  appId: "1:90033559094:web:d8265a2f53006ac8d3ea97",
  measurementId: "G-9JKH4YQ4CB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);