// Encontrar todas las vocales en un texto

const String = 'hola mundo'

const Vocales = String.match(/[aeiou]/g)

console.log(Vocales)

// Validar que una palabra solo tenga letras

function validarPalabra(palabra) {
    return /^[a-zA-Z]+$/.test(palabra)
}
console.log(validarPalabra('h0la'))

// Validar un número entero positivo

function numeroEntero(number) {
    return /^\d+$/.test(number)
}

console.log(numeroEntero(-1))

// encontrar espacios en el texto

function encontrarEspacios(string) {
    return string.match(/\s+/g)
}

console.log(encontrarEspacios('hola mundo'))

// Validar que una cadena empiece con 'H'

function H(cadena) {
     return /^H/.test(cadena)
}
console.log(H('Hola'))

// Validar que termine con un punto

function punto(texto) {
    return /\.$/.test(texto)
}
console.log(punto('hol'))

// Validar que haya al menos un número en el texto

function validarNumero(t) {
    return /\d+/.test(t)
}

console.log(validarNumero('hol1'))

// Validar un correo sencillo

function validarCorreo(correo) {
    return /^[\w.-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/.test(correo)
}

console.log(validarCorreo())

// Validar un número de teléfono

function validarNumeroTelefono(number) {
    return /^\+5959\d{8}$/.test(number)
}

console.log(validarNumeroTelefono('+595912345678'))