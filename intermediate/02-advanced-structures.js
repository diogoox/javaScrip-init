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

sorded = [3, 8, 11, 12]
let firtsEven = sorded.find(element => element % 2 === 0)// muestra solo el primer par
console.log(firtsEven)

//