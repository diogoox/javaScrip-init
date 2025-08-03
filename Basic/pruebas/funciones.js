//- Función que devuelve el cuadrado de un número

function numeroAlCuadrado(numero) {
    return numero * numero
}


//- Función que dice si un número es par o impar
 

function numeroParImpar(number) {

    if (number % 2 == 0) {
        console.log('este numero es par')
    } else {
        console.log('este numero es impar')
    }
}

numeroParImpar(9)


         // otra forma de hacerlo
         function numeroParImpar(number) {
  return number % 2 === 0 ? '✅ Es par' : '🔹 Es impar'
}

console.log(numeroParImpar(9)) // 👉 🔹 Es impar
console.log(numeroParImpar(10)) // 👉 ✅ Es parr



// - Función que suma dos números y devuelve el resultado

function sumaDeNumeros(a, b) {
    let suma = a + b
    return `la suma de ${a} + ${b} es: ${suma}`
}
console.log(sumaDeNumeros(10, 20))

                //otra forma
                function sumaDeNumeros(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('❌ Ambos valores deben ser numéricos')
  }
  return `La suma de ${a} + ${b} es: ${a + b}`
}

// - Función que verifica si un texto está vacío
 
function verificarTexto(texto) {
    if (texto.length === 0 || typeof texto !== 'string') {
        console.log('este texto esta vacio')
    } else {
        console.log(`${texto}`)
    }
}

verificarTexto('')
verificarTexto('hola')


// - Función que compara dos números y devuelve el mayor

function compararNumeros(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        console.log('porfavor ingresa un numero')
    } else if (a > b) {
        console.log(`${a}`)
    } else  if (a < b) {
        console.log(`${b}`)
    } else {
        console.log(`son iguales`)
    }
}

compararNumeros(10, 6)
