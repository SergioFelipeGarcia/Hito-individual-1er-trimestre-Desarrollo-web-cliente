

export function mostrarMensaje(mensaje, tipo = "success") {

    Toastify({
        text: mensaje,
        duration: 2000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {// asi en javascript es como colocar una condicional
          background: tipo === "success" ? "green" : "red"
        },
        onClick: function(){} // Callback after click
    }).showToast();

}

