import { GoogleAuthProvider , signInWithPopup } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { auth } from './firebase.js'
import { mostrarMensaje} from './mostrarMensaje.js'

const googleButton= document.querySelector('#googleLogin');

googleButton.addEventListener('click', async () =>{
    const provider = new  GoogleAuthProvider()
   

   try {
        const credentials= await  signInWithPopup(auth, provider)
        console.log(credentials)   
        const modal =bootstrap.Modal.getInstance(document.querySelector('#signinModal'))
        modal.hide()
        mostrarMensaje('Bienvenido' + credentials.user.displayName, 'success')
        sessionStorage.setItem('usuario', credentials.user.displayName);
        window.location.href = 'reservas.html'
    } catch (error) {
        console.log(error)
    
   }

})