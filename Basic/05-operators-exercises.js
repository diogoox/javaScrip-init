
// 1. Crea una variable para cada operación aritmética

let a = 3

let suma = a + 3
let resta = a - 3
let multiplicacion = a * 3
let division = a / 3

let exponente = a ** 3
let modulo = a % 3


console.log(suma)
console.log(resta)
console.log(multiplicacion)
console.log(division)

console.log(exponente)
console.log(modulo)

a++
console.log(a)

a--
console.log(a)


// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let sumaAsignacion = a
sumaAsignacion += 2
console.log(sumaAsignacion)

let restaAsignacion = a
restaAsignacion -= 2
console.log(restaAsignacion)

let multiplicacionAsignacion = a
multiplicacionAsignacion *= 2
console.log(multiplicacionAsignacion)

let divisionAsignacion = a
divisionAsignacion /= 3
console.log(divisionAsignacion)

let exponenteAsignacion = a
exponenteAsignacion **= 2
console.log(exponenteAsignacion)

let moduloAsignacion = a
moduloAsignacion %= 3
console.log(moduloAsignacion)


// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(a == 3)
console.log(a === a)
console.log(a > 1)
console.log(a < 4)
console.log(a !== 'a')

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(a === '3')
console.log(a != a)
console.log(a < 1)
console.log(a > 4)
console.log(a >= 4)

// 5. Utiliza el operador lógico and

console.log(a > 1 && a > 2)
console.log(a < 1 && a > 2)
console.log(a == 3 && a === 3)
console.log(a == 3 && a === '3')


// 6. Utiliza el operador lógico or

console.log(a > 1 || a < 2)
console.log(a != 1 || a < 2)



// 7. Combina ambos operadores lógicos

console.log(a > 1 && a > 2 || a > 1 && a < 2 )
console.log(a > 1 && a < 2 || a > 1 && a < 2 )

// 8. Añade alguna negación

console.log(!(a > 4 && a > 5))
console.log(!true)
console.log(!false)


// 9. Utiliza el operador ternario

const isRainig = true
isRainig ? console.log('esta lloviendo') : console.log('no esta lloviendo')


// 10. Combina operadores aritméticos, de comparáción y lógicas

let edad = 10
let altura = 1.75
let puntos = 20

let mitadEdad = edad / 2
let dobleAltura = altura * 2
let masPuntos = puntos + 2

let esMayorDeEdad = edad >= 18
let buenaAltura = altura >= 1.70
let buenPuntaje = puntos === 22

let cumpleCondiciones = esMayorDeEdad && buenaAltura && buenPuntaje

console.log(edad)
console.log(altura)
console.log(puntos)

console.log(esMayorDeEdad)
console.log(buenaAltura)
console.log(buenPuntaje)

console.log(cumpleCondiciones)




