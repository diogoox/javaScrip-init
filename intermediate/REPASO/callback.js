// Crea una función transformarTexto que reciba un texto y un callback, y aplique el callback al texto

function transformarTexto(texto, callback) {
    return callback(texto)
}

let transformarProcces = transformarTexto('diogo', texto => texto.toUpperCase())
console.log(transformarProcces)

//  Crea una función filtrar que reciba un array y un callback, y devuelva un nuevo array con los elementos para los que el callback devuelve true

let array1 = [1, 2, 3, 4, 5, 6, 7, 8]

function filtrar(array, callback) {
    let newArray = []
    for (let numeros of array) {
        if (callback(numeros)) {
            newArray.push(numeros)
        }
    }
    return newArray
}

let numerosPares = filtrar(array1, numeros => numeros % 2 === 0 )
console.log(numerosPares)

// Crea una función calcular que reciba dos números y un callback, y el callback decida si sumar, restar o multiplicar.

function calcular(a, b, callback) {
    return callback(a, b)
}

let sumar = calcular(2, 2,(a, b) => a + b)

console.log(sumar)


// Crea una función ejecutarVariasVeces que reciba un callback y un número n, y lo ejecute n veces

function ejecutarVariasVeces(callback, n) {
    for (let i = 0; i < n; i++) {
        callback()
    }
}

ejecutarVariasVeces(() => console.log('hola'), 3)


//Crea una función llamada ejecutarCallback que reciba un callback y lo ejecute

function ejecutarCallback(callback) {
    return callback()
}

ejecutarCallback(() => console.log('holaa'))


/*Crea una función llamada procesarNumero que reciba un número y un callback.
La función debe pasar el número al callback y el callback debe imprimir el doble del número*/

function procesarNumero(n, callback) {
    return callback(n)
}

let numeroDoble = procesarNumero(10, (n) => n * 2 )
console.log(numeroDoble)


/*Crea una función llamada filtrarArray que reciba un array y un callback.
Debe devolver un nuevo array con los elementos que el callback devuelve true*/

let arrayXd = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function filtrarArray(array, callback) {
    let newArrayXd = []
    for (let elements of array) {
        if (callback(elements)) {
            newArrayXd.push(elements)
        }
    }
    return newArrayXd
}

function numeroPar(elements) {
    return elements % 2 === 0
}

console.log(filtrarArray(arrayXd, numeroPar))