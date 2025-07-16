// set

// declaracion

let mySet = new Set()

console.log(mySet)

// inicializacion

mySet = new Set(["Brais", "Moure", "mouredev", 37, true, 'barretodiogo128@gmail.com'])

console.log(mySet)

// metodos comunes

// add y delete

mySet.add('http://moure.dev')

console.log(mySet)

mySet.delete('http://moure.dev')

console.log(mySet)

console.log(mySet.delete('Brais'))
console.log(mySet.delete(4))

console.log(mySet)

// has 

console.log(mySet.has('Moure'))
console.log(mySet.has('Brais'))

// size

console.log(mySet.size)

// convertir un set a array
let myArray = Array.from(mySet)

console.log(myArray)

// convertir un array a set

mySet = new Set(myArray)

console.log(mySet)


// no admite duplicados

mySet.add('barretodiogo128@gmail.com') // este esta dulicado y no guarda

mySet.add('BarretoDiogo128@gmail.com') 
console.log(mySet)