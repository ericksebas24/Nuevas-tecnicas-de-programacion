/*
    CONCAT  
*/

var numeros = [1, 2, 3, 4, 5]
// console.log(numeros);
var nuevonumeros = numeros.concat([6, 7, 8, 9, 0])
// console .log(nuevonumeros)

/*
    JOIN
*/
var nombre = ["E", "r", "i", "c", "k", "k"]
// console.log(nombre.join(""));

/*
    SLICE
*/
// console.log(nombre.slice(2));

/*
    INDEX OF
*/
// console.log(nombre.indexOf("a"));

/*
    Last Index of
*/
// console.log(nombre.lastIndexOf("k"));

/*
    REVERSE
 */
// console.log(nombre.reverse());
/*
    STAR
*/

var numeroDesordenados = [3, 4, 6, 8, 9, 1, 2, 4]
// console.log(numeroDesordenados.sart());

/*
    SHFIT
*/
// console.log(numeroDesordenados.shift());

/*
    POP
*/

// console.log(numeroDesordenados.pop());

/*
    Push
*/
numeroDesordenados.push(1012)
console.log(numeroDesordenados);
// Consultar funciones de modificacion de arreglos

var pares = [2, 4, 6, 8, 10]

console.log(pares.map((elemento)=> elemento + 1));

// consultar funciones de arreglo

/* console.goup() (en-US)
// Crea un nuevo grupo, indentando todos los mensajes subsecuentes 
en un nuevo nivel. Para retroceder un nivel, se utiliza groupEnd().
*/
console.log("This is the outer level");
console.group();
console.log("Level 2");
console.group();
console.log("Level 3");
console.warn("More of level 3");
console.groupEnd();
console.log("Back to level 2");
console.groupEnd();
console.log("Back to the outer level");

/* Console.groupCollapsed() (en-US)
Crea un nuevo grupo, indentando todos los mensajes subsecuentes 
en un nuevo nivel. A diferencia de group(), inicia con la línea 
de grupo colapsada, requiriendo el uso de un botón de apertura para expandir el grupo. Para retroceder un nivel, se utiliza groupEnd().
*/
console.groupCollapsed([label]);

/*Console.info()
Muestra un mensaje de información en la Consola Web. Se puede utilizar sustitución de cadena 
y argumentos adicionales con este método.
*/
console.info(obj1 [, obj2, ..., objN]);
console.info(msg [, subst1, ..., substN]);

/* Console.log()
Para mensajes generales de registro de información. Se puede utilizar sustitución de 
cadena y argumentos adicionales con este método.
*/
console.log(obj1 [, obj2, ..., objN]);
console.log(msg [, subst1, ..., substN]);

/* Console.time()
Inicia un temporizador con un nombre específico como parámetro. Hasta 10.000 temporizadores
simultáneos pueden ejecutarse en una página determinada.
*/
console.time(label);
