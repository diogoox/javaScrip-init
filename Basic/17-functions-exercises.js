// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function suma(a, b) {
    console.log(a + b)
}

suma(5, 10)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

function encontrarMayor(array) {
    let mayor = array[0]; // asumimos que el primero es el mayor
    array.forEach((valor) => {
        if (valor > mayor) {
            mayor = valor;
        }
    });
    return mayor;
}

let numeros = [4, 9, 2, 15, 6];
console.log(encontrarMayor(numeros)); 

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

function contarVocales(texto) {
    let vocales = 'aeiou'
    let contador = 0

    for(let letra of texto) {
        if (vocales.includes(letra)){
            contador++
        }
    }

    return contador
}

console.log(contarVocales('diogoooo'))

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

function convertirAMayusculas(array) {
    let nuevoArray = []

    for (let palabra of array) {
        nuevoArray.push(palabra.toUpperCase())
    }

    return nuevoArray
}

let palabras = ['diogo', 'arnaldo', 'jesus']
console.log(convertirAMayusculas(palabras)) 

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function numeroPrimo(numero) {

  if(numero <= 1) {
    return false
  }

for(let i = 2; i < numero; i++) {
    if(numero % 2 === 0){
        return false
    }
} 

return true

}

console.log(numeroPrimo(4))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

function elementosComunes(array1, array2) {
    let comunes = []

    for (let elemento of array1) {
        if (array2.includes(elemento)) {
            comunes.push(elemento)
        }
    }

    return comunes
}
const resultado = elementosComunes([1, 2, 3, 4], [3, 4, 5, 6])
console.log(resultado) // [3, 4]


// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

function sumaNumerosPares(array) {
    let suma = 0
    for (let numero of array) {
        if (numero % 2 === 0) {
            suma += numero
        }
    }
    return suma
}

console.log(sumaNumerosPares([1, 2, 3, 4, 5, 6]))


// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function cuadradosArray(array) {
    let nuevoArray = []
    for (let numero of array) {
        nuevoArray.push(numero ** 2)
    }
    return nuevoArray
}

console.log(cuadradosArray([1, 2, 3, 4]))


// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function invertirPalabras(texto) {
    return texto.split(' ').reverse().join(' ')
}


console.log(invertirPalabras("hola mundo cruel")) 


// 10. Crea una función que calcule el factorial de un número dado

function factorial(n) {
    let resultado = 1
    for (let i = 1; i <= n; i++) {
        resultado *= i
    }
    return resultado
}

console.log(factorial(5))