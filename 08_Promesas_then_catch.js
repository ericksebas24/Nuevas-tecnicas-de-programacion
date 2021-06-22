/*
    PROMESA
*/

function promesa(bandera) {

    return new Promise((resolve, reject) => {
        if (bandera){
        setTimeout(()=>{
            resolve("Peticion Resuelta");
        }, 3000);
    } else {
            setTimeout(() => {
                reject("La operacion fallo")
            }, 2000);
        }
    })
}

// promesa(true)
//     .then((resultado) =>{
//         console.log("Respuesta Positiva");

//     })
//     .catch((error) => {
//         console.log("Error" . error);
//     })

var segundaPromesa = () => new Promise((resolve, reject) => {
    if (bandera){
        setTimeout(()=>{
            resolve("Peticion Resuelta");
        }, 3000);
    } else {
            setTimeout(() => {
                reject("La operacion fallo")
            }, 2000);
        }
})

segundaPromesa(true)
    .then((resultado) => {
            console.log("Respuesta" . respuesta);    
        })
        .catch((error) => {
            console.log("Error" . error);
        })

promesa(true) // peticion del clientes
        .then((respuesta) =>{ //respuesta de lista de cliente
            console.log(respuesta)
            return segundaPromesa(true) // compras del cliente
        })
        .catch((error)=>{ // respuesta de la segunda promesa
            console.log(error)
        })

// async - await
function promesa(bandera) {

    return new Promise((resolve, reject) => {
        if (bandera){
        setTimeout(()=>{
            resolve("Peticion Resuelta");
        }, 3000);
    } else {
            setTimeout(() => {
                reject("La operacion fallo")
            }, 2000);
        }
    })
}

(async () => {
    try{
    var respuesta = await promesa(true)
    var respuesta2 = await promesa(true)
    console.log(resopuesta);
    console.log(resopuesta2);
    } catch (error){
        console.log(error);
    }
})()