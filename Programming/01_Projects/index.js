const { Router } = require('express');
const express = require('express');
//genero una aplicacion express

const app = express()
// routes
const { RouterIndex } = require('./routes/index');

app.use("/", RouterIndex)
app.use("/deber-video", RouterIndex)
// app.use("/users", RouterIndex)
// app.use("/users-query/:id", RouterIndex)
// app.use("/users-params/:last_name", RouterIndex)
// app.use("/users/data", RouterIndex)

/*
        "/"+"/"="//" => "/"
        "/"+"saludo" = "//Saludo" => "/saludo"
        "/"+ "'/saludo/:nombre'" = //saludo/:nombre => "/saludo/:nombre"
        "/user" + "/saludo" = "/user/saludo"
        "user/data" + "/saludo" = "/user/data/saludo"
*/
app.listen(3000, ()=>{
    console.log("Servidor escuchando en htpp://localhost:3000");
})