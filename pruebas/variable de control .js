
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

let array2 = [10, 20, 30]

let suma = 0

for (let i = 0; i < array2.length; i++) {
    suma += array2[i]
}

console.log(`la suma total de los numeros de este array es: ${suma}`)


// sumar solo los numeros pares

let array3 = [1, 2, 3, 4, 5, 6]
let sum = 0

for (let i = 0; i < array3.length; i++) {
    if (array3[i] % 2 == 0) {
        sum += array3[i]
    }
}

console.log(`suma de los numeros pares de este array: ${sum}`)

     // otra forma de hacerlo
    let array4 = [1,2,3,4,5,6,7,8,9,10]
    let sum2 = 0

    for ( numbers of array4) {
        if (numbers % 2 == 0) {
            sum2 += numbers
        }
    }

    console.log(`La suma total de los numeros pares de este array es: ${sum2}`)
    
    

    