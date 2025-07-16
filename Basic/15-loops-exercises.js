// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for(i = 1; i < 21; i++ ){
    console.log(`xd ${i}`)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let ii = 1
let suma = 0
while(ii <= 100) {
    suma += ii
    ii++
}
console.log(`la suma es: ${suma}`)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

iii = 1
do {
    if (iii % 2 == 0){
        console.log(iii)
    }
    iii++

} while (iii <= 50)

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola


const nombres = ["Brais", "Moure", "mouredev", 'arnaldo', 'diogo']

for(let nombre of nombres)
    console.log(nombre)

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let texto = 'hola javascrip'
let contador = 0
for( let letra of texto) {
   if(letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
    contador++
   }
}

console.log(`el numero de vocales es: ${contador}`)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto


let numeros = [2, 3, 4, 5]
let producto = 1 

for (let numero of numeros) {
    producto *= numero
}

console.log(`El producto total es: ${producto}`)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

for(let y = 1; y <= 10; y++) {
    console.log(`5 * ${y} = ${5 * y}`)
}

// 8. Usa un bucle para invertir una cadena de texto

let textoo = 'diogo'
let invertidoo = ''

for (let palabras of textoo ) {
    invertidoo = palabras + invertidoo
}

console.log(invertidoo)



// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let a = 0
let siguiente 
let b = 1

for (let i = 0; i < 10; i++) {
    console.log(a)
    siguiente = a + b
    a = b
    b = siguiente
}



// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let array = [6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 15]

let arrayNumerosMayoresA10 = []

for (let x = 0; x < array.length; x++) {
    if (array[x] > 10)
        arrayNumerosMayoresA10.push(array[x])
}
 console.log(arrayNumerosMayoresA10)