//  Asignacion
// = 

//Comparacion 

/*
==
===
*/

//conparacion
/*
console.log(2 == 2);
console.log(2 === '2');
console.log(2 == '2');
*/
/*
    !=
    console.log(2 != 3);
    */
/*
    >
    <
    <=
    >=
*/

//Operadores de asignacion compuestos 
/*
    += / x = x + y
    -= / x = x - y
    *=
    /=
    %=
    **=

var numero = 3
numero -= 2;
console.log(numero);
*/

// operadores aritmeticos

/*
    +
    -
    *
    /
    %
    **
*/

//Desestructurar abjetos
var persona = { nombre: "Erick", 
    apellido: "Fernandez", 
    edad: 21, 
    viajes: { destino1: "Colombia", destino2: "Mexico" } };


var { nombre:nom, apellido, viajes: {destino1 } } = persona;

console.log(persona);
console.log(nom);
console.log(apellido);
