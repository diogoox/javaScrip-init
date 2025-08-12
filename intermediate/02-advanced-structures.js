// estructuras avanzadas

// arrays avanzados

// Metodos funcionales

// forEach

let numbers = [1, 2, 3, 4, 5, 6]

numbers.forEach(element => console.log(element))

// map 

let doubled = numbers.map(elementt => elementt * 2)
console.log(doubled)

// filter

let evens = numbers.filter(element => element % 2 === 0) 
console.log(evens)

// reduce

let sum = numbers.reduce((result, siguiente) => result + siguiente, 0)
console.log(sum)

// manipulacion

// flat

let nestedArray = [1, [2, [3, [4]]]]
console.log(nestedArray)
let flatArray = nestedArray.flat(1) 
console.log(flatArray)
flatArray = nestedArray.flat(2) 
console.log(flatArray)
flatArray = nestedArray.flat(3) 
console.log(flatArray)

// flatMap

let phrases = ['hola mundo', 'adios mundo']
let words = phrases.flatMap(phrases => phrases.split(" "))
console.log(words)

// ordenacion

// sort

let unsorted = ['b', 'a', 'c', 'd']
let sorded = unsorted.sort()
console.log(sorded)

unsorted = [3, 5, 4, 10, 1, 2]
sorded = unsorted.sort((a, b) => a - b)
console.log(sorded)

// reverse

sorded.reverse()
console.log(sorded)

// busqueda

// includes

console.log(sorded.includes(4))
console.log(sorded.includes(20))

// find 

let firtsEven = sorded.find(element => element % 2 === 0)// muestra solo el primer par
console.log(firtsEven)

// findIndex

sorded = [2, 3, 4]
let firtsEvenIndex = sorded.findIndex(element => element % 2 === 0) // devuelve el primer indice que cumpla con la condicion
console.log(firtsEvenIndex)

// sets avanzados

// operaciones

// eliminacion de duplicados

let numbersArray = [1, 2, 2, 3, 4, 5, 6, 6]
numbersArray =[...new Set(numbersArray)]
console.log(numbersArray)

// Union

const setA = new Set([1, 2, 3])
const setB = new Set([1, 2, 4, 5, 6 ])
const union = new Set([...setA, ...setB])

console.log(union)

// interseccion 

const intersection = new Set([...setA].filter(element => setB.has(element)))
console.log(intersection)

// diferencia

const difference = new Set([...setA].filter(element => !setB.has(element)))
console.log(intersection)