// strings

// concadenacion de cadenas
let myName = 'diogo'
let greeting = 'hola ' + myName + '!'
console.log(greeting)
console.log(typeof greeting)

// longitud 
console.log(greeting.length)

// acceso a caracteres
console.log(greeting[0])
console.log(greeting[1])
console.log(greeting[10])

// metodos comunes 
console.log(greeting.toUpperCase()) //todo mayuscula
console.log(greeting.toLowerCase()) // minuscula
console.log(greeting.indexOf('hola'))
console.log(greeting.indexOf('diogo'))
console.log(greeting.indexOf('xd'))
console.log(greeting.includes('hola'))
console.log(greeting.includes('diogo'))
console.log(greeting.includes('xd'))
console.log(greeting.slice(0, 10))
console.log(greeting.replace('diogo', 'moureved'))

// template literals (plantillas literales)

let message = `hola, este es 
curso de javaScrip`

console.log(message)

let email = 'barretodiogo128@gmail.com'

console.log(`hola, ${myName}! tu email es ${email}`)



