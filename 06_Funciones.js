// /*
//     funviones declarativas
//  */

//     function saludar(){
//         return "hola soy Erick";
//     }
//     function saludar2(){
//         console.log("Hola soy Sebas")
//     }
//     //saludar()
//     var resultado=saludar()
//     console.log(resultado)
//     console.log(saludar())

// //funciones con paramewtros 
// function SaludarConParametros(nombre, apellido) {
//     return `Hola soy ${nombre} ${apellido}`
// }
// // funciones con parametrospor defecto
// function saludoConProfesion(nombre="Persona", profesion = "Analista de sistemas"){
//     return Hola ${nombre} mi profesion es ${profesion}
// }
// console.log(saludoConProfesion("Erick", "Desarolllador de software"))
// // //console.log(saludarConParametros("Erick", "Fernandez"));

// var SaludoConEdad = function(nombre, edad) {
//     return `Hola soy ${nombere} y tengo ${edad} año(s)`
// }
// console-log(SaludoConEdad("Sebas", 21))

/*
    ARROW FUNCTIONS - FUNCIONES FLECHA
*/

// var saludoConApellido = (nombre, apellido) => {
//     return `Hola soy ${nombre} ${apellido}`
// }
// console.log(saludoConApellido("Sebas", "Fernandez"));

// var suma=(num1,num2)=> num1+num2
// console.log (suma(2,3));

function saludoconFunciones(nombre, cb){
    return cb(nombre)
}

var misaludo = saludoconFunciones("Sebas", function(nombre){
    return `Hola soy ${nombre}`
})
console.log(misaludo);

setInterval(() => {
    console.log("Hola Mundo");
}, 2000);