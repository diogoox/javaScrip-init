// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

let arrays = ['diogo', 'arnaldo', 'jesus', 'barreto']

let [array1, array2] = arrays

console.log(array1)
console.log(array2)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let arrays2 = []

let [valor1 = 1, ] = arrays2

console.log(valor1)

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let persona = {
    nombre: 'diogo',
    edad: 19,
    email: 'barretodiogo.com'
}

let {nombre, edad} = persona

console.log(nombre)
console.log(edad)



// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let persona2 = {
    nombre: 'leo',
    edad: 15,
    pais: 'paraguay'
}

let {nombre: nombre2, edad: edad2 } = persona2

console.log(nombre2)
console.log(edad2)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

persona3 = {
    nombree: 'axel',
    edad: 20,
    pais: 'argentina',
    job: {
        trabajo: 'programador', 
        experiencia: function() {
            console.log(`${nombree} tiene 25 anos de experiencia como ${this.persona3.job.trabajo}`)
        }       
    }
}

let {nombree, job: { trabajo, experiencia } } = persona3

console.log(nombree)
console.log(trabajo)
experiencia()

// 6. Usa propagación para combinar dos arrays en uno nuevo

let array = [1, 2, 3]
let arra2 = [4, 5, 6]

combinarArrays = [ ...array,  ...arra2 ]

console.log(combinarArrays)

// 7. Usa propagación para crear una copia de un array

let newArray = ['diogo', 'barreto']

let copia = [...newArray]

//console.log(copia)

// 8. Usa propagación para combinar dos objetos en uno nuevo

let name11 = {
    nombre: 'diogo',
    apellido: 'arnaldo'
}

let name2 = {
    nombre: 'leo',
    apellido: 'xd' 
}


let combinar = {
    nombre1: name11,
    nombre2: name2
}

console.log(combinar)


// 9. Usa propagación para crear una copia de un objeto

let object = {
    n: 1,
    x: 2
}

let copiaa = {...object}

console.log(copiaa)

// 10. Combina desestructuración y propagación

let objeto = {
    names: 'diogo',
    edads: 19,
    paiss: 'paraguay',
    region: 'latam'
}

let {names, ...resto} = objeto

let copiax = {names, ...resto}

console.log(copiax)

