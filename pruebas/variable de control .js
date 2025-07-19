
// - Imprimir números del 1 al 10 con for

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (const numero of numeros) {
  console.log(`Número: ${numero}`)
}


// - Imprimir los elementos de un array de frutas

let frutas = ['naranja', 'banana', 'manzana', 'pera']

for (i = 0; i < frutas.length; i++) {
    //console.log(`fruta: ${frutas[i]}`)
}
    // otra forma de hacerlo

    for (let fruta of frutas) {
        console.log(`fruta: ${fruta}`)
    }

// - Mostrar todos los números pares del 0 al 20

for (i = 0; i <= 20; i+= 2) {
    console.log(i)
}

// - Recorrer un array y decir si cada número es par o impar

array1 = [1, 2, 3, 4, 5, 6, 7, 8]

for ( let numeros of array1) {
    if (numeros % 2 == 0) {
        console.log(`${numeros} es par`)
    } else if (!numeros % 2 == 0) {
        console.log(`${numeros} es impar`)
    }
}

// - Recorrer un texto carácter por carácter

let textoo = 'hola'

for (letra of textoo) {
    console.log(letra)
}

// - Calcular la suma total de los elementos de un array

const numeross = [3, 5, 7, 2, 4]
let suma = 0

for (let i = 0; i < numeross.length; i++) {
  suma += numeross[i]
}

console.log(`La suma total es: ${suma}`)

