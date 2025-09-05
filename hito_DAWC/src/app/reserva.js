
const usuarioLogeado = sessionStorage.getItem('usuario');

console.log(usuarioLogeado);

async function guardarEnFirestore(){
     

    try {
    const docRef = await addDoc(collection(db, "reservas"), {
        hora: document.getElementById("hora").value,
        dia: document.getElementById("dia").value,
        Estilo: document.getElementById("estilo").value,
        usuario: usuarioLogeado
    });
        alert("reservado")
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

//function guardarEnFirestore(){
//    console.log("entro en la fución guadarEnFirestore")
    
//    db.collection("reservas").add({
//        hora: document.getElementById("hora").value,
//        dia: document.getElementById("dia").value,
//        Estilo: document.getElementById("estilo").value,
//        usuario: usuarioLogeado
//    })
//    .then((docRef) => {
//        alert("Reserva registrada, Gracias")
//    })
//    .catch((error) => {
//        console.error("Error adding document: ", error);
//    });
//
//}   
    



