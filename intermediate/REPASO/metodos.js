// Dado un string, contá cuántas vocales tiene

function countString(string) {
    return string.split("").filter(l => 'aeiuo'.includes(l)).length
}

console.log(countString('holaa'))


// Filtrar números pares

function numerosPares(numbers) {
    return numbers.filter(n => n % 2 === 0)
}

console.log(numerosPares([1, 2, 3, 4, 5, 6]))

//  Dado un array de palabras, devolvé solo las que tengan la letra "a"

function filtrarPalabras(palabras) {
    return palabras.filter(l => l.includes('a'))
}

console.log(filtrarPalabras(['hola','hole','holi', 'opa']))

