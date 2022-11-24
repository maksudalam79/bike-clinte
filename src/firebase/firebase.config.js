// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA448r-biIGq83Hcrtof3vIbAzneZ-N1ls",
  authDomain: "bike-recell-client.firebaseapp.com",
  projectId: "bike-recell-client",
  storageBucket: "bike-recell-client.appspot.com",
  messagingSenderId: "580300457558",
  appId: "1:580300457558:web:7e570908c6a1a09732ddf7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app