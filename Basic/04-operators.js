// operadores

// operadores aritmeticos

let a = 5
let b = 10

console.log(a + b) //suma
console.log(a - b) //resta
console.log(a * b) //multiplicacion
console.log(a / b) //division

console.log(a % b) //modulo
console.log(a ** b) //exponente

a++ //incremento
console.log(a)

b-- //decremento
console.log(b)

//operadores de asignacion

let myVariable = 2
console.log(myVariable)
myVariable += 2
console.log(myVariable)

myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2

//operadores de comparacion

console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b)
console.log(a == 6) //igualdad por valor
console.log(a == '6') //igualdad por valor
console.log(a == a)
console.log(a === a) //igualdad por identidad (por tipo y valor)
console.log(a === 6)
console.log(a === '6')
console.log(a != '6')
console.log(a !== '6')
console.log(0 == false)
console.log(1 == false)
console.log(0 == '')
console.log(0 == ' ')
console.log(0 == 'hola')
console.log(0 === '')
console.log(undefined == null)
console.log(undefined === null)

// truthy values (valores verdaderos)

// todos los numeros positivos y negativos menos el cero
// todas las cadenas de texto menos las vacias
// El boolean true

// falsy values (valores falsos)

//0
//0n
//null
//undefined
//NaN
//el boolean false
//cadena de texto vacias

// operadores logicos 

//and (&&)
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)
console.log(5 > 10 && 15 > 20 && 30 > 40)

//or (||)
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)
console.log(5 > 10 || 15 > 20 || 30 > 40)

console.log(5 > 10 && 15 > 20 || 30 < 40)

//not (!)
console.log(!true)
console.log(!false)
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))

//operaciones ternarios
const isRainig = false

isRainig ? console.log('esta lloviendo') : console.log('no esta lloviendo')
