/*
for (inicializacion; condicion; actualizacio) {
    sentencias a ejecutar en cada iteracion
} 
*/
let ii 
for (i = 0; i <= 10; i++) {
    document.write(i)
    document.write("<br>")
}
//escribir los numeros del 1 al 2000 de 50 en 50
for(i = 0; i <= 2000; i += 50){
    document.write(i)
    document.write("<br>")
}

const enterprises = ['tesla', 'amazon', 'microsoft','meta']
console.warn('for tradicional')
for (let i = 0 ; i < enterprises.length; i++){
    console.log(enterprises[i])
}
console.warn('for in')
for(let i in enterprises){
    console.log(enterprises[i])
}
console.warn('for of')
for (let i of enterprises){
    console.log(i)
}

let i 
let arr = ['nivel 1','nivel 2', 'nivel 3', 'nivel 4', 'nivel 5', 'nivel 6']
for (let i = 1; i <= 6; i++ ){
    console.log(i)
    document.write("<h"+[i]+">Encabezado de "+''+arr[i-1]+"</h"+[i]+">")
}

