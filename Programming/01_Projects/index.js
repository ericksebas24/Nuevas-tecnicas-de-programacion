const express = require('express');


//genero una aplicacion express

const app = express()
// endpoint 
app.get('/',(req, res) => {
    res.send("Hola mundo con ExpressJS")
})

app.get("/saludo",(req, res) =>{
    //req.query
    // console.log(req.query);
    const { query: {nombre, apellido} } = req;
    // const nombre = req.query.nombre
    // const apellido = req.query.apellido

    // const user={
    //     nombre: "Gio",
    //     apellido: "Ortiz"

    // }
    // user.nombre
    // user.apellido
    // req.query.nombre


    res.json({
        saludo: `Hola soy ${nombre} ${apellido}`,
    });
})

app.get('/saludo/:nombre', (req, res) =>{

    const { params: { nombre } } = req
    console.log(req.params);

    res.json({
        nombre: nombre,
    })
})
app.listen(3000, ()=>{
    console.log("Servidor escuchando en htpp://localhost:3000");
})
