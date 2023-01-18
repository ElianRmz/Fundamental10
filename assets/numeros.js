//en js todos los numeros se crean igual
let nmb1 = 20
let nmb2 = 30.5
let nmb3 = 0.45
let nmb4 = -30

//operacion basica
let resultado ;

//suma
resultado = nmb1 + nmb2
//resta
resultado = nmb1 - nmb2
//multiplicacion
resultado = nmb1 * nmb2
//division
resultado = nmb1 / nmb2
//modulo
resultado = nmb1 % nmb2
//potencia
resultado = nmb1 ** nmb2

/*
//operados MATH
let pi = Math.PI;
pi = Math.round(pi);
console.log(pi);
document.write(pi);
//RAiz cuadrada
let raiz = Math.sqrt(144)
console.log(raiz);
document.write(raiz);
//valor absoluto
resultado = Math.abs(-444)
console.log(resultado);
document.write(resultado);
//
resultado = Math.pow(5,3)
console.log(resultado);
document.write(resultado);
// Numero mayor de una secuencia
resultado = Math.max(10,20,30)
console.log(resultado);
document.write(resultado);
// numero menor de una secuencia
resultado = Math.min(10,20,30)
console.log(resultado);
document.write(resultado);
*/
let ropa1 = prompt("Cuanto cuesta esta prenda")
let ropa2 = prompt("Cuanto cuesta otra prenda")
let ropa3 = prompt("Cuanto cuesta otra prenda")

ropa1 = parseInt(ropa1)
ropa2 = parseInt(ropa2)
ropa3 = parseInt(ropa3)
let resultado1 = ropa1 + ropa2 + ropa3
let descuento = resultado1 * 0.2
let iva = resultado1 * 1.16
let total = iva - descuento
alert = resultado1
console.log(alert)
document.write ('<br>'+alert)
alert = descuento
console.log(alert)
document.write ('<br>'+alert)
alert = iva
console.log(alert)
document.write ('<br>'+alert)
alert = total
console.log(alert)
document.write ('<br>'+alert.round)