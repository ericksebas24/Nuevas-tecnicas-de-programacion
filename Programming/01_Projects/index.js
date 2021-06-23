//genero una aplicacion express

const express = require('express'); 
const app = express()
// endpoint 
app.get('/',(req, res) => {
    res.send("Hola mundo con ExpressJS")
})

app.listen(3000, ()=>{
    console.log("Servidor escuchando en htpp://localhost:3000");
})