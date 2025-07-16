// Map

// declaracion → crea un nuevo objeto Map vacío
let myMap = new Map()

console.log(myMap)

// inicializacion → inicializa el Map con pares clave-valor
myMap = new Map([
    ['name', 'brais'],
    ['email', 'barretodiogo128@gmail.com'],
    ['age', 37]
])

console.log(myMap)

// metodos y propiedades

// set → añade o actualiza una clave con su valor
myMap.set('alias', 'diogoox')
myMap.set('name', 'diogo')

console.log(myMap)

// get → obtiene el valor de una clave específica
console.log(myMap.get('name'))

// has → verifica si una clave existe en el Map
console.log(myMap.has('age'))

// delete → elimina un par clave-valor del Map
myMap.delete('email')

console.log(myMap)

// keys, values y entries

// keys → devuelve un iterador con todas las claves del Map
console.log(myMap.keys())

// values → devuelve un iterador con todos los valores del Map
console.log(myMap.values())

// entries → devuelve un iterador con todos los pares clave-valor del Map
console.log(myMap.entries())

// size → muestra cuántos elementos hay en el Map
console.log(myMap.size)

// clear → elimina todos los elementos del Map
myMap.clear()

console.log(myMap)