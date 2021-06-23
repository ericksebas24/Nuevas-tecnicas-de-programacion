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