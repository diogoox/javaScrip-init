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

// 5. Utiliza group

// 6. Utiliza time

// 7. Valida con assert si un número es positivo

// 8. Utiliza count

// 9. Utiliza trace

// 10. Utiliza clear