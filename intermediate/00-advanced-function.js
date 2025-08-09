// funciones avanzadas

// ciudadanos de primera clase

const greet = function (name) {
    console.log(`hola ${name}`)
}

greet('brais')

function processGreeting(greetFunction, name) {
    greetFunction(name)
}

function returnGreeting() {
    return greet
}

processGreeting(greet, 'mouredev')

const greet2 = returnGreeting()

greet2('brais moure')


// arrow functions avanzada

// retorno implicito
const multiply = (a, b) => a * b 
console.log(multiply(5, 2))

// this lexico

const handler = {
    name: 'diogo',
    greeting: function () {
        console.log(`hola, ${this.name}`)
    },
    arrowGreeting: () => {
        console.log(`hola, ${this.name}`)
    }
}

handler.greeting()
handler.arrowGreeting();      // ( ";" se tiene que usar para que funcione iife )

// iife ( expresion de funcion invocada inmediatamente)

// iife clasico

( function () {
    console.log('iife clasico')
})(); // ";"

    (() => {
        console.log('iife con arrow function')
    })(); // ","

// parametros Rest (...)

function sum(...numbers) {
    let resultado = 0
    for(let numeros of numbers) {
        resultado += numeros
    }
    return resultado
}

console.log(sum(1,2,3,4,5,6,7,8,9))
console.log(sum(1,2,3,4,5,6,7,8,9))

// operador spread (...)

const number = [1, 2, 3]
function sumWithSpread(a, b, c) {
    return a + b + c
}

console.log(sumWithSpread(1, 2, 3)) // sin spread
console.log(sumWithSpread(...number))

// closures (clausuras) 

function createCounter() {
    let counter = 0
    return function () {
        counter++
        console.log(`contador: ${counter}`)
    }
}

const counter = createCounter()
counter()
counter()
counter()

const counter2 = createCounter()
counter()
counter()
counter()

// recursividad

function factorial(n) {
    if (n <= 1) {
        return 1
    }
    return n * factorial(n - 1)
}

console.log(factorial(0))

// funciones parciales

function partialSum(a) {
    return function (b, c) {
        return sum(a, b, c)
    }
}

const sumWith = partialSum(4)
console.log(sumWith(2, 3))
console.log(sumWith(1, 2))

// currying 

function currySum(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return sum(a, b, c, d)
            }
        }
    }
}

const sumAB = currySum(1)(2)
const sumC = sumAB(3)
console.log(sumC(3))
console.log(sumC(4))
//console.log(sumC(5)(7))


// callbacks

function processData(data, callback) {
    const result = sum(...data) 
    callback(result)
}

function processResult(result) {
    console.log(result)
}

function processResult2(result) {
    console.log(`mi resultado es: ${result}`)
}

processData([1, 2, 3, 4], processResult)
processData([1, 2, 3, 4], processResult2)
processData([1, 2, 3, 4], (result) => {
    console.log(`mi resultado en la arrow function es: ${result}`)
})





//console.clear()