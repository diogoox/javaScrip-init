// 1. Crea una función que retorne a otra función

function one(a) {
    return function two(b) {
        return a + b
    }
}

const suma = one(1)
console.log(suma(4))

// 2. Implementa una función currificada que multiplique 3 números

function uno(a) {
    return function dos(b) {
        return function tres(c) {
            return a * b * c
        }
    }
}

const unoYdos = uno(2)(2)
const multiplicar = unoYdos(2)

console.log(multiplicar)


// otra forma de hacerlo
const multiplicarr = a => b => c => a * b * c;
console.log(multiplicarr(2)(2)(2)); // 👉 8

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente

function potencia(base, exponente) {
    if(exponente === 0) return 1;
    return base * potencia(base, exponente -1)
}

console.log(potencia(2, 0))


//4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado
function initCounter(valorInicial) {
    let counter = valorInicial

    return {
        increment() {
            counter++
        },
        decrement() {
            counter--
        },
        getValue() {
            return counter
        }
    }
}

const Counter = initCounter(5)
Counter.increment()
Counter.increment()
console.log(Counter.getValue())

Counter.decrement()
console.log(Counter.getValue())




// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier
let numbers = [1, 2, 3, 4, 5]
function sumManyTimes(multiplier, ...numbers) {
    let sum = 0
    for (let numero of numbers) {
        sum += numero
    }
    return sum * multiplier
}

let resultado = (sumManyTimes(2, ...numbers))
console.log(resultado)

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función

function sumaa(...numeross) {
    let result = 0
    for(let i = 0; i < numeross.length; i++) {
        result += numeross[i]
    }
    return result
}

function callback(sum, callback) {
    const resultado = sumaa(...sum)
    callback(resultado)
}

function mostrarResultado(resultado) {
    console.log(`este es el resultado: ${resultado}`)
}

callback([4, 4, 4, 4], mostrarResultado)


// 7. Desarrolla una función parcial

// 8. Implementa un ejemplo que haga uso de Spread

// 9. Implementa un retorno implícito

// 10. Haz uso del this léxico






//console.clear()