let currencies = ['MXN', 'USD', 'EUR', 'CAD']
console.log(currencies)
//conocer el tamaño de un arreglo lenght
let size = currencies.length
// si quiero conocer la ultima posicion del arreglo
let ultima_posicion = currencies[currencies.length -1]
console.log(ultima_posicion)
//crear un nuevo valor en un arreglo
let new_currency = currencies.push('JPY')
console.log({new_currency})
//agrega un valor al inicio del arreglo
let add_init = currencies.unshift('NZD')
//borra la ultima posicion del arreglo
let delete_last_pos = currencies.pop()
// borra el valor de una posicion especifica del arreglo
let delete_pos = currencies.splice(2, 1)
//posicion indice de una moneda
let currencies_pos = currencies.indexOf('EUR')

let number = []
let numero01 = prompt ('Hechese un numero')
number.push(numero01)
let numero02 = prompt ('Hechese otro numero')
number.push(numero02)
let numero03 = prompt ('Hechese otro numero')
number.push(numero03)
let sum = Number(number[0]) + parseInt (number[1]) + parseFloat(number[2])
console.log(sum)
document.write(sum)
