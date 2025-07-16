// 1. Crea un array que almacene cinco animales

let myArray

myArray = ['burro', 'perro', 'gallina', 'gato', 'puma']

console.log(myArray)

// 2. Añade dos más. Uno al principio y otro al final

myArray.unshift('tigre')
myArray.push('mono')

console.log(myArray)

//

// 3. Elimina el que se encuentra en tercera posición

myArray.splice(2,1)

console.log(myArray)

// 4. Crea un set que almacene cinco libros

let mySet = new Set(['algebra baldor', 'aritmetica baldor', 'geometria baldor', 'fisica', 'fnaf'])

console.log(mySet)

// 5. Añade dos más. Uno de ellos repetido

mySet.add('xd')
mySet.add('fnaf')

console.log(mySet)

// 6. Elimina uno concreto a tu elección

mySet.delete('aritmetica baldor')

console.log(mySet)

// 7. Crea un mapa que asocie el número del mes a su nombre

 let myMap = new Map([
    ['1', 'enero'],
    ['2', 'febrero'],
    ['3', 'marzo'],
    ['4', 'abril'],
    ['5', 'mayo'],
    ['6', 'junio']
])

console.log(myMap)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

if(myMap.has('5')){
    console.log('el mes 5 es = ', myMap.get('5'))
} else {
    console.log('no existe')
}


// 9. Añade al mapa una clave con un array que almacene los meses de verano

const mapa = new Map()

mapa.set('verano', ['enero', 'febrero', 'marzo'])

console.log(mapa)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let array = []

array = ['diogo', 'arnaldo', 'jesus']

console.log(array)

//
let mySett = new Set(array)

console.log(mySett)

//
let myMapp = new Map()

myMapp.set('nombres', mySett)

console.log(myMapp)
