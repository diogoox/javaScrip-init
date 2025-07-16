// funciones


// simples
function myFunc() {
    console.log('hola, funcion')
}

for (let i = 0; i < 5; i++){
    myFunc()
}

// con parametros

function myFuncWithParams(name) {
    console.log(`hola ${name}`)
}

myFuncWithParams('diogo')
myFuncWithParams('arnaldo')

// funciones anonimas 

const myFunc2 = function(name) {
    console.log(`hola ${name}`)
}

myFunc2('xdxdxd')

// arrow functions

const myFunc3 = (name) => {
    console.log(`hola ${name}`)
}

const myFunc4 = (name) => console.log(`hola ${name}`)

myFunc3('xdxdxd')
myFunc4('xdxdxd')

// parametros

function sum(a, b) {
    console.log(a + b)
}

sum(5, 10)
sum(5)
sum()

function defaultSum(a = 0, b = 0) {
    console.log(a + b)
}

// por defecto 

defaultSum()
defaultSum(5)
defaultSum(5, 10)
defaultSum(b = 5)

// retorno de valores

function mult(a, b) {
    return a * b
} 

let result = mult(5, 10)

console.log(result)

// funciones anidadas

function extern() {
    console.log('funcion externa')
    function intern() {
        console.log('funcion interna')

    }
    intern()
}
extern()

// intern() error: fuera de scope

// funciones de orden superior

function applyFunc(func, param) {
    func(param)
}
applyFunc(myFunc4, 'funcion de orden superior')

// forEach

myArray = [1, 2, 3, 4]

myArray.forEach(function (value) {
    console.log(value)
})

myArray.forEach((value) => console.log(value))