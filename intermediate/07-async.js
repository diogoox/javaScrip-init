// programacion asincrona

// codigo sincrono

console.log('inicio') 

for (let i = 0; i < 1000000; i++) {}

console.log('fin')

// event loop (bucle de eventos)

//   componenetes del Event loop
// call stack (pila de ejecucion)
// web APis (APis del navegador) o Node.js: setTimeout()...
// Task  Queue (cola de tareas) y MicrotasKQueue


// flujo de event loop:
// 1 call stack
// 2 operaciones asincronas -> web APis o Node.js
// 3 operacion termina -> la coloca en Task Queue o MicroTask Queue
// 4 si call Stack vacio -> Mueve tareas del MicroTask Queue o Task Queue al call Stack
// 5 el proceso se repite

// codigo asincrono 

// callback

console.log('inicio')

setTimeout(() => {
    console.log('esto se ejecuta despues de 2 segundos')
}, 2000)

console.log('fin')

// problema: callback hell

function step1(callback) {
    setTimeout(() => {
        console.log('paso 1 completado')
        callback()
    }, 1000)
}

function step2(callback) {
    setTimeout(() => {
        console.log('paso 2 completado')
        callback()
    }, 1000)
}
function step3(callback) {
    setTimeout(() => {
        console.log('paso 3 completado')
        callback()
    }, 1000)
}

step1(() => {
    step2(() => {
        step3(() => {
            console.log('todos los pasos completados')
        })
    })
})

// promesas

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const ok = true
        if (ok) {
            resolve('operacion exitosa')
        } else {
            reject('se ha producido un error')
        }
    }, 3000)
})

promise
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })

// Encadenamiento de promesas

function step1Promise() {
    return new Promise(resolve => {
        setTimeout(() => { 
            console.log('paso 1 con promise completado')
            resolve()
        }, 1000)
    })
}

function step2Promise() {
    return new Promise(resolve => {
        setTimeout(() => { 
            console.log('paso 2 con promise completado')
            resolve()
        }, 1000)
    })   
}

function step3Promise() {
    return new Promise(resolve => {
        setTimeout(() => { 
            console.log('paso 3 con promise completado')
            resolve()
        }, 1000)
    })
}

step1Promise()
.then(step2Promise)
.then(step3Promise)
.then(console.log('todos los pasos con promesas completados'))


// async/Await

function  waint(ms) {
    return new Promise(resolve =>  setTimeout(resolve, ms))
}

async function process() {
    console.log('inicio de proceso')
    
    await waint(5000) 
    console.log('proceso despues de 5 segundos')

    await waint(1000) 
    console.log('proceso despues de 1 segundos')
    await waint(2000) 
    console.log('proceso despues de 2 segundos')

    console.log('fin de proceso')
}

process()
