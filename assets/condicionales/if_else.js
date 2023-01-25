//if(condicion booleana){
    //Instrucciones si la condicion es verdadera

let score = 7;
if (score > 8){
    document.write("Pasaste puerko, con "+ score);
} else { 
    document.write("reprobado puerko, con "+ score);
}
document.write("<br>");
let num= 100
if (num == 100){
    document.write("son iguales gei");
}else { document.write("son diferentes gei");}
document.write("<br>");

alert("Vamos a ver si puedes sacar tu dinero");
let dinero = prompt("ingrese su dinero pobreton");
dinero = parseInt (dinero);
if (dinero <= 5000){
    document.write("tu dinero es menor a 5000, podemos sacar billete gei");
} else if (dinero > 5000){
    document.write("tu dinero es mayor a 5000, no podemos sacar billete gei");
}
//condicion ? expr1 : expr2;
var billete = Math.PI > 4 ? "sirola" : "no sirola";
console.log(billete);


var calif = 9<6 ? "reprueba por gei" : "no reprueba por gei";
console.log(calif);

if (condicion){
    //instrucciones si la condicion 1 es verdadera
}else if (condicion2){
    //istrucciones si la condicion 1 es falsa y la condicion 2 es verdadera
}else{
    //instrucciones si la condicion 1 es falsa y la condicion 2 es tambien
}
const billete = 1000
let retirar = prompt("ingrese su dinero pobreton");
if (retirar  <= billete ) {
    document.write("tu dinero es mayor a 5000, no podemos sacar billete gei");

}else if (retirar > 2000 && retirar <= 5000) {
    document.write("si se armo la sacadaa");
}else if (retirar >=  5000){
    document.write("no se permite sacar mas de 5000 gei"); 
}

let calificacion = prompt("ingrese su calificacion simio");
calificacion = parseInt (calificacion);
if (calificacion < 6) {
    document.write("tu calificacion es menor a 6, reprobado por idiota, va pa albañil usted"); 
}else if (calificacion >= 6 && calificacion <= 8 ) {
    document.write("tu calificacion es mayor a 6 y menor a 8 estas aprobado pero con condicional por idiota"); 

}else if (calificacion >= 8 && calificacion <= 10 ) {
    document.write("Paso bien milagrosamente")
}
else if (calificacion >10 ){
document.write("nmme no puede sacar mas de 10 jto"); 
}else if (calificacion != Number) {
    document.write("ponga un numero gei");
}













