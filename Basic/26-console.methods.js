
// console

//log

console.log('Hola, JavaScript')

// error

console.error('este es un mensaje de error')
console.error('Error al conectarse en la base de datos:', new Error('conexion fallida'))

// warn

console.warn('este es un mensaje de advertencia')

// info

console.info('este es un mensaje de informacion adicional')

// table

let data = [
    ['brais' , 27],
    ['sara', 21]
]

console.table(data)

data = [
    { name: 'brais', age: 27 },
    { name: 'Sara', age: 23 }
]

console.table(data)

// group

console.group('usuario:')
console.log('nombre: brais')
console.log('edad: 37')
console.groupEnd()

// time

//
console.time('tiempo de ejecucion1')

for (let i = 0; i < 100000; i++) {

}
console.timeEnd('tiempo de ejecucion1')

//
console.time('tiempo de ejecucion2')

for (let i = 0; i < 100000; i++) {

}
console.timeEnd('tiempo de ejecucion2')

// assert

let age = 17
console.assert(age >= 18, 'el usuario debe ser mayor de edad')


// count 

console.count('click') 
console.count('click') 
console.count('click') 
console.countReset('click') 
console.count('click') 

// trace

function funcA() {
    funcB()
}

function funcB() {
    console.trace('seguimiento de la ejecucion')
}
funcA()

// clear

// console.clear()

