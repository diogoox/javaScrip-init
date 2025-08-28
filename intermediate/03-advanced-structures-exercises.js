// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección

let nombres = ['diogo', 'arnaldo', 'barreto']
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let nombresEnMayusculas = nombres.map(element => element.toUpperCase() )
console.log(nombresEnMayusculas)

let numerosPares = numeros.filter(element => element % 2 === 0)
console.log(numerosPares)

let sumaDeNumeros = numeros.reduce((element, siguiente) => element + siguiente, 0)
console.log(sumaDeNumeros)

// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares

let numerosx = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let nuevosValores = numerosx
.map(valor => valor ** 3 )
.filter(valor => valor % 2 === 0)
console.log(nuevosValores)

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección

let array = [['goodbye lester'], ['hello Maria']]

let aplanar = array.flat()
console.log(aplanar)


let array2 = ['hola kpe', 'haupei kpe']

let a = array2.flatMap(element => element.split(' '))
console.log(a)


// 4. Ordena un array de números de mayor a menor

let numerosA = [4, 6, 2, 3, 5, 1]

let numerosOrdenados = numerosA.sort((a, b) => a - b)
numerosOrdenados.reverse()

console.log(numerosOrdenados)

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos


let set1 = new Set([1, 2, 3, 4, 5, 6])
let set2 = new Set([1, 2, 3, 5, 6, 8, 9])

let union = new Set([...set1, ...set2])
console.log(union)

let intercepcion = new Set([...set1].filter(element => set2.has(element)))
console.log(intercepcion)

let diferencia = new Set([...set1].filter(element => !set2.has(element)))
console.log(diferencia)


// 6. Itera los resultados del ejercicio anterior

let iteracion1 = union
for (let numeros of union) {
    console.log(numeros)
}
console.log(iteracion1)


let iteracion2 = intercepcion
for (let numeros of intercepcion) {
    console.log(numeros)
}
console.log(iteracion2)


let iteracion3 = diferencia
for (let numero of diferencia) {
    console.log(numero)
}
console.log(iteracion3)


// 7. Crea un mapa que almacene información de usuarios (nombre, edad y email) e itera los datos

let usuarios = [
new Map ([['name',   'diogo'  ],['age',   19],['email', 'diogooxx.com']]),
new Map ([['name',   'eucebio'],['age',  15], ['email',  'eucebioxx.com']]),
new Map ([['name',   'andrea' ],['age',   21],['email',  'andrexx.com']])
]

for (let usuario of usuarios) {
    console.log(
        `Nombre: ${usuario.get('name')}    Edad: ${usuario.get('age')}      Email: ${usuario.get('email')}`
    )
}

// 8. Dado el mapa anterior, crea un array con los nombres

let names = usuarios.map(usuario => usuario.get('name'))
console.log(names)

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set

let emails = new Set (
    usuarios
    .filter(usuario => usuario.get('age') >= 18)
    .map(usuario => usuario.get('email'))
)

console.log(emails)


/*10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario
y como valor todos los datos del usuario*/

let mapaAobjeto = Object.fromEntries(
  usuarios.map(usuario => {
    const obj = Object.fromEntries(usuario); // convierte el Map en objeto
    return [obj.email, obj]; // usa el email como clave
  })
);
console.log(mapaAobjeto);

const mapaPorEmail = new Map(
  usuarios.map(usuario => {
    const obj = Object.fromEntries(usuario);
    return [obj.email, obj];
  })
);

console.log(mapaPorEmail);