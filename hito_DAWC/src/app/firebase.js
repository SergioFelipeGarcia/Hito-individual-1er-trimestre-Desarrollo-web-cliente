 // Import the functions you need from the SDKs you need
 
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 import { getAuth } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyCA16r_pRx5bqGdSgQRn0w5qHU-1nlpzy8",
   authDomain: "hito-daw-cliente.firebaseapp.com",
   projectId: "hito-daw-cliente",
   storageBucket: "hito-daw-cliente.appspot.com",
   messagingSenderId: "962385315826",
   appId: "1:962385315826:web:2f10568224c6e19eee8d6b"
 };

 
 // Initialize Firebase con la configuración de arriba
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)
 // inicaliza la base de datos
  export const db = getFirestore(app);

 



  