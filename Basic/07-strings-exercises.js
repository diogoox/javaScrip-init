// 1. Concatena dos cadenas de texto

let myName = ' diogo'
let greeting = 'hola' + myName
console.log(greeting)

// 2. Muestra la longitud de una cadena de texto

console.log(greeting.length)

// 3. Muestra el primer y último carácter de un string

console.log(greeting[0])
console.log(greeting[9])


// 4. Convierte a mayúsculas y minúsculas un string

console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())

// 5. Crea una cadena de texto en varias líneas

let message = `Este
curso
esta
purete`

console.log(message)

// 6. Interpola el valor de una variable en un string

let mensaje = `hola${myName}!!`

console.log(mensaje)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log(greeting.replace(' ', '_'))

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(greeting.includes('diogo'))

// 9. Comprueba si dos strings son iguales

console.log('hola' === 'diogo' )
console.log('diogo' === 'diogo' )

// 10. Comprueba si dos strings tienen la misma longitud

console.log('diogo'.length === 'diogo'.length)