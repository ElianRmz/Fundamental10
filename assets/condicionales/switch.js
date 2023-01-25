
const type_payment = 'cash';

switch (type_payment) {
    case 'cash':
        document.writeln('tipo de pago efectivo')
        break;
    case 'cc':
        document.writeln('tipo de pago de tarjeta de crédito')
        break;
    default: 
        document.writeln('sin tipo de pago')
        break;
}
let edad = prompt('su edad madafaker')
edad = parseInt(edad)
switch (edad) {
    case 0: 
        document.writeln('recien nacido y prodigio al parecer')
        break;
    case 18: 
        document.writeln('legal')
        break;
    default: 
        document.writeln('sin edad')
}