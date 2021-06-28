//traemos el paquete

const { Router } = require('express');
const data = require('../MOCK_DATA.json')



//inicializamos el router

const router = Router();

router
.get("/users", (req, res) => {
    res.json({
        msg: "Lista de usuarios",
        body: data,
        
    });
    
var modifiedData = data.map((person)=>{
    person.first_name = person.first_name.toUpperCase();
    person.last_name = person.last_name.toUpperCase();
    return person
})
})

.get("/users-query/", (req, res) => {
    const { query: {id} } = req;
    var fil = data.find(user => user.id === parseInt(id))
    if (fil) {
        res.json({
            msg: "Filtrado por ID",
            body: fil
        });
    } else {
        res.json({
            msg: "Dato inexistente",
            body: data,
        });
    }
})

.get("/users-params/:last_name", (req, res) => {
const { params:{last_name}} = req;
var ap = data.find(a => a.last_name === last_name)
if(ap){
    res.json({
        msg: "Filtrado por Apellido",
        body: [`${ap.email}`],
    });
}else{
    res.json({
        msg: "Dato inexistente",
        body: [null]
    })
}
})


//exportamos la rutas
module.exports.RouterIndex = router;

// module = {
//     exports: {
//         RouterIndex: router
//     }
// }
