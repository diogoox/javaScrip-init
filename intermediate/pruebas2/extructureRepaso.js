// 1

let numeros = [3, 7, 2, 9, 12, 5];
let newNumero = numeros
//.map(element => element * 2)
//.filter(element => element > 5)
//.reduce((acumulador, numero) => acumulador + numero, 0)

console.log(newNumero)

// 2

let edades = [25, 12, 33, 18, 40];
edades.sort((a, b) => a - b)
edades.reverse()
console.log(edades)

let mayorA30 = edades.find(numero => numero > 30 )
console.log(mayorA30)

let indiceMenor = edades.findIndex(number => number < 20)
console.log(indiceMenor)