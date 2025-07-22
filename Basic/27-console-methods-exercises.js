// 1. Crea un función que utilice error correctamente

function DetectarEdad(age) {
    if (age < 18) {
        console.error('edad no valida', new Error('debe ser mayor que 18'))
    } else {
        console.log('si es mayor de edad')
    }
}

//DetectarEdad(17)

// 2. Crea una función que utilice warn correctamente

function verificarEdad(age) {
    if ( age < 18) {
        console.warn('para ingresar a esta pagina debes ser mayor de edad!')
    } else {
        console.log('Tienes acceso a esta pagina')
    }
}

verificarEdad(18)

// 3. Crea una función que utilice info correctamente

function crearAlumno(nombre, edad) {
    console.info(`creando nuevo alumno... \tNombre: ${nombre}  \tEdad: ${edad} `)
    return { nombre, edad }
}

crearAlumno('eucebio', '12')


// 4. Utiliza table

let personas = [
    {name: 'diogo', age: 19},
    {name: 'luana', age: 20}
]

console.table(personas)

// 5. Utiliza group

console.group('usuario:')
console.log('nombre: diogo')
console.log('edad: 19')
console.groupEnd()

// 6. Utiliza time

console.time('tiempo de ejecucion')

function verificarTiempoDeEjecucion() {
    for (let i = 0; i < 9000; i++ ) {
    }
}
verificarTiempoDeEjecucion()

console.timeEnd('tiempo de ejecucion')

// 7. Valida con assert si un número es positivo
   
function verificarNumero(numero) {
    console.assert(typeof numero === 'number', 'Porfavor ingrese un numero')

    if ( typeof numero === 'number') {
        console.assert( numero > 0, 'Este numero no es valido')
    
      if (numero < 0) {
        console.warn('Solo se permiten numeros Positivos')
      }

    }
}

verificarNumero(-1)

// 8. Utiliza count

function contadorDeSaludos(nombre) {
    console.count(`saludo a ${nombre}`)
    console.log(`se envia el saludo a ${nombre}`)
}

contadorDeSaludos('diogo')
contadorDeSaludos('diogo')
console.countReset(`saludo a diogo`)
contadorDeSaludos('diogo')
contadorDeSaludos('marcos')
contadorDeSaludos('marcos')

// 9. Utiliza trace

function crearAlumno(nombre) {
    console.trace(`alumno creado => ${nombre}`)
}

function registrar() {
    crearAlumno('diogo')
}

registrar()


// rastro de evaluacion de un alumno 

function ingresarAlSiguienteGrado(nombre) {
    evaluarExamen(nombre)
}

function evaluarExamen(nombre) {
    inicioDeExamen(nombre)
}

function inicioDeExamen(nombre) {
    console.trace(`${nombre} Paso al siguiente grado!`)
}

ingresarAlSiguienteGrado('diogo')



// rastro de evaluacion de un alumno// otro orden

function inicioDeExamen(nombre) {
    evaluarExamen(nombre)
}

function evaluarExamen(nombre) {
    ingresarAlSiguienteGrado(nombre)      //// este tiene mejor logica
}

function ingresarAlSiguienteGrado(nombre) {
    console.trace(`${nombre} Paso al siguiente grado!`)
}

inicioDeExamen('diogo')

// 10. Utiliza clear

console.clear()