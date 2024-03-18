import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { auth } from './firebase.js'
import { mostrarMensaje} from './mostrarMensaje.js'

const login_form= document.querySelector('#login-form');

login_form.addEventListener('submit', async e=> {
    e.preventDefault()
    const email = login_form['login-email'].value;
    const password= login_form['login-password'].value;

    try {
        const credenciales= await signInWithEmailAndPassword(auth, email , password)
        console.log(credenciales)
        const modal =bootstrap.Modal.getInstance(document.querySelector('#signinModal'))
        modal.hide()
        mostrarMensaje("Bienvenido" + credenciales.user.email)
        
        // Almacena la información del usuario en sessionStorage
        sessionStorage.setItem('usuario', credenciales.user.email);
        window.location.href = 'reservas.html';
       
    } catch (error) {
       if (error.code === "auth/wrong-password"){
            //mostrarMensaje('Contraseña incorrecta','error')
            alert('Contraseña incorrecta');
          }  else if(error.code === "auth/user-not-found"){
               alert('Usuario no encontrado');

            //mostrarMensaje('Usuario no encontrado','error')
          }  else{
            mostrarMensaje(error.message ,'error')
          }

     }
})