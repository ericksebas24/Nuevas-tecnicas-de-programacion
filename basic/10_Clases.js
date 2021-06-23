// //Como se hacia antes 
// function Rectangulo(base, altura){
//     this.base = base
//     this.altura = altura
// }

// Rectangulo.prototype.CalcularArea = function() {
//     return this.base * this.altura
// }

// var rectangulo = new Rectangulo(6, 3)

// console.log(rectangulo.CalcularArea())
// console.log(rectangulo.base)

// //  Declaracion de clases
// class Rectangulo2{
//     constructor(base, altura) {
//         this.base = base 
//         this.altura = altura
//     }

//     CalcularArea(){
//         return this.base * this.altura
//     }
// }

// var Rectangulo2 = new Rectangulo2 (6, 3)

// console.log(Rectangulo2.CalcularArea())
//Clase persona 
//implementar getters, setters y realizar una implementacion 
//implementar metodos estaticos -clase punto, function distancia
//construir clase persona y estudiante, extender Estudiantes con persona

/*
DEBER
*/
// class Persona{
//     constructor(nombre, apellido, email, edad){
//         this._nombre = nombre;
//         this._apellido = apellido;
//         this._email = email;
//         this._edad = edad;
//     }
//     get nombre(){
//         return this._nombre;
//     }

//     set nombre(nombre){
//         this._nombre = nombre;
//     }

//     get apellido(){
//         return this._apellido;
//     }

//     set apellido(apellido){
//         this._apellido = apellido;
//     }

//     get email(){
//         return this._email;
//     }

//     set email(email){
//         this._email = email;
//     }

//     get edad(){
//         return this._edad;
//     }
    
//     set edad(edad){
//         this._edad = edad;
//     }
// }

// let edward = new Persona('Erick', 'Fernández', 'ericksebas13jer@gmail.com', 21);

// console.log(edward);

// console.log(edward.nombre);

// edward.nombre = 'Sebas';
// console.log(edward.nombre);

class Punto {
    constructor ( x , y ){
      this.x = x;
      this.y = y;
    }
    static distancia ( a , b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      return Math.sqrt ( dx * dx + dy * dy );
    }
  }
  const p1 = new Punto(20, 20);
  const p2 = new Punto(14, 14);
  console.log (Punto.distancia(p1, p2));