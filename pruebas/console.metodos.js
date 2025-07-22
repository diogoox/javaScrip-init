// Crear tres funciones: una que inicie el proceso, una que valide el rendimiento del estudiante, y una que registre su avance.

function iniciarProceso(nombre) {
    rendimientoDelEstudiante(nombre)
}

function rendimientoDelEstudiante(nombre) {
    registrarAvance(nombre)
}

function registrarAvance(nombre) {
    console.trace(`EL alumno: ${nombre} tiene buen rendimiento`)
}

//iniciarProceso('diogo')

//Simular el acceso de un alumno a un nivel avanzado solo si su puntuación supera 85.

function examinarPuntuacionDelAlumno(nombre, puntos) {

    if ( typeof puntos === 'number') {
        if (puntos > 85) {
            nivelAvanzado(nombre, puntos)
        } else {
            console.log('con este puntaje no se puede ingresar al nivel avanzado')
        }
    } else {
        console.log('Porfavor ingrese un numero')
    }

}

function nivelAvanzado(nombre, puntos) {
    console.trace(`${nombre} hizo ${puntos} puntos\nPuede ingresar al nivel avanzado`)
}

examinarPuntuacionDelAlumno('Diogo', 86)



//Crear funciones que representen: inscripción general, verificación de cupo, y asignación del módulo especial.

function inscripciónGeneral(nombre) {
    verificacionDeCupo(nombre)
}

function verificacionDeCupo(nombre) {
    asignacionDeModulo(nombre)
}

function asignacionDeModulo(nombre) {
    console.trace(`${nombre} fue asignado en un modulo especial`)
}

inscripciónGeneral('diogo')


//console.clear()
