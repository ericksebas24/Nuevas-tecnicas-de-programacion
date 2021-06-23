//Como se hacia antes 
function Rectangulo(base, altura){
    this.base = base
    this.altura = altura
}

Rectangulo.prototype.CalcularArea = function() {
    return this.base * this.altura
}

var rectangulo = new Rectangulo(6, 3)

console.log(rectangulo.CalcularArea())
console.log(rectangulo.base)

//  Declaracion de clases
class Rectangulo2{
    constructor(base, altura) {
        this.base = base 
        this.altura = altura
    }

    CalcularArea(){
        return this.base * this.altura
    }
}

var Rectangulo2 = new Rectangulo2 (6, 3)

console.log(Rectangulo2.CalcularArea())
//Clase persona 
//implementar getters, setters y realizar una implementacion 
//implementar metodos estaticos -clase punto, function distancia
//construir clase persona y estudiante, extender Estudiantes con persona

/*
DEBER
*/