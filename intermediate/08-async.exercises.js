// 1. Crea una función para saludar que reciba un nombre y un callback. 
//    El callback debe ejecutarse después de 2 segundos y mostrar en consola "Hola, [nombre]".

function saludar(nombre, callback) {
    console.log('esto se ejecuta despues de 2 segundos')
    setTimeout(() => {
        callback(nombre)
    }, 2000)
}

saludar('diogo', (nombre) => {
    console.log('hola,' + nombre)
})

// 2. Crea tres funciones task1(callback), task2(callback) y task3(callback). 
//    Cada función debe tardar 1 segundo en ejecutarse y luego llamar al callback.

function task1(callback) {
    setTimeout(() => {
        console.log('task1...')
        callback()
    },1000)
}

function task2(callback) {
    console.log('task2...')
    setTimeout(() => {
        callback()
    },1000)
}

function task3(callback) {
    console.log('task3...')
    setTimeout(() => {
        callback()
    },1000)
}

task1(() => {
    task2(() => {
        task3(() => {
            console.log('todos los tasks ejecutados con exito')
        })
    })
})

// 3. Crea una función para verificar un número que retorne una Promesa. 
//    Si el número es par, la promesa se resuelve con el mensaje "Número par". 
//    Si el número es impar, la promesa se rechaza con el mensaje "Número impar".

function verificarNumero(number) {
    return new Promise((resolve, reject) => {
        if (number % 2 === 0) {
            resolve('numero par')
        } else {
            reject('numero impar')
        }
    })
}

verificarNumero(2)
.then(result => console.log(result))
.catch(error => console.error(error))

// 4. Crea tres funciones que devuelvan promesas:
//    firstTask(): tarda 1s y muestra "Primera tarea completada".
//    secondTask(): tarda 2s y muestra "Segunda tarea completada".
//    thirdTask(): tarda 1.5s y muestra "Tercera tarea completada".

function firstTask() {
    return new Promise(resolve =>
        setTimeout(() => {
            resolve('primera tarea completada')
        }, 1000)
    )
}


function secondTask() {
    return new Promise(resolve =>
        setTimeout(() => {
            resolve('segunda tarea completada')
        }, 2000)
    )
}


function thirdTask() {
    return new Promise(resolve =>
        setTimeout(() => {
            resolve('tercera tarea completada')
        }, 1500)
    )
}


firstTask()
  .then(result => {
    console.log(result);
    return secondTask();
  })
  .then(result => {
    console.log(result);
    return thirdTask();
  })
  .then(result => {
    console.log(result);
    console.log("Todas las tareas completadas");
  });


// 5. Transforma el ejercicio anterior de Promesas en una función async/await llamada executeTasks().

function awaitt(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

async function executeTasks() {
    
    
    await awaitt(1000)
    console.log('primera tarea completada') 

    await awaitt(2000)
    console.log('segunda tarea completada')

    await awaitt(1500)
    console.log('tercera tarea completada')

}

executeTasks()

// 6. Crea una función getUser(id) que devuelva una promesa y simule una llamada a una API (que se demore 2s).
//    Si el id es menor a 5, la promesa se resuelve con { id, nombre: "Usuario " + id }.
//    Si el id es 5 o mayor, la promesa se rechaza con el mensaje "Usuario no encontrado".
//    Usa async/await para llamar a getUser(id) y maneja los errores con try/catch.







// 7. Intenta predecir el resultado de este código antes de ejecutarlo en la consola:
//    console.log("Inicio")
//    setTimeout(() => console.log("setTimeout ejecutado"), 0)
//    Promise.resolve().then(() => console.log("Promesa resuelta"))
//    console.log("Fin")






// 8. Crea tres funciones que devuelvan promesas con tiempos de espera distintos.
//    A continuación, usa Promise.all() para ejecutarlas todas al mismo tiempo y mostrar "Todas las promesas resueltas" cuando terminen.






// 9. Crea una función waitSeconds(segundos) que use setTimeout dentro de una Promesa para esperar la cantidad de segundos indicada.
//    A continuación, usa async/await para que se espere 3 segundos antes de mostrar "Tiempo finalizado" en consola.







// 10. Crea una simulación de un cajero automático usando asincronía.
//     - La función checkBalance() tarda 1s y devuelve un saldo de 500$.
//     - La función withdrawMoney(amount) tarda 2s y retira dinero si hay suficiente saldo, o devuelve un error si no hay fondos.
//     - Usa async/await para hacer que el usuario intente retirar 300$ y luego 300$ más.
//     
//     Posible salida esperada:
//     Saldo disponible: 500$
//     Retirando 300$...
//     Operación exitosa, saldo restante: 200$
//     Retirando 300$...
//     Error: Fondos insuficientes
