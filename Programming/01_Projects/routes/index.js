//Traer el paquete
const { Router } = require('express');
const { DataValidator }= require('../middlewares/DataValidator')
//inicializar el router
const router = Router()
//Crear los Endpoint
router
    .get("/",DataValidator,(req, res) => {
    res.send(req.pruebaDelMiddleware);
    })

    .get("/users", (req, res) => {
    res.json({
        msg: "Lista de usuarios",
        body: data,
        
    });
})

    .get("/saludo", datavalidator("query", User),(req, res) =>{

        const { query: {nombre, apellido} } = req;
        res.json({
            saludo: `Hola soy ${nombre} ${apellido}`,
        });
    })
    .get("/saludo",(req, res) =>{

        const { query: {nombre, apellido} } = req;
        res.json({
            saludo: `Hola soy ${nombre} ${apellido}`,
        });
    })
    .get('/saludo/:nombre', (req, res) =>{
        const { params: { nombre } } = req
        console.log(req.params);
        res.json({
            nombre: params.nombre,
        })
    })
//Exportar las Rutas
module.exports.RouterIndex = router

// module = {
//     exports: {
//         RouterIndex: router
//     }
// }
