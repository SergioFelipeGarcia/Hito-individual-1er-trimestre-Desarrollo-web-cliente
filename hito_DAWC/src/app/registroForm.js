import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { auth } from './firebase.js';
import {mostrarMensaje } from './mostrarMensaje.js'

const registroForm = document.querySelector('#registro-form');

registroForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = registroForm['signup-email'].value;
  const password = registroForm['signup-password'].value;

  console.log(email, password);

  try {
    const datos_usuario = await createUserWithEmailAndPassword(auth, email, password);
    console.log(datos_usuario);
    // Cerrar el modal de registro
    const signupModal = document.querySelector('#signupModal');
    const modal = bootstrap.Modal.getInstance(signupModal);
    modal.hide();
    mostrarMensaje("Bienvenido" + datos_usuario.user.email)
    console.log(email);
    console.log(password);

   
  } catch (error) {
    console.error(error.message);
    console.error(error.code);
    if (error.code=== 'auth/email-already-in-use'){
      mostrarMensaje("El correo ya existe","error")
      
    }
    else if (error.code === 'auth/invalid-email') {
     mostrarMensaje('Email inválido',"error");
    }else if(error.code==='auth/weak-password'){
        mostrarMensaje('Contraseña demasiado debil almenos 6 caracteres',"error")
    }else if (error.code){
      mostrarMensaje('Algo  salio mal',"error")
    }
  }
});