
// 1

function verificarEdad(edad) {

    return new Promise((resolve, reject) => {
        if (edad >= 18) {
            resolve('eres mayor de edad')
        } else {
            reject('eres menor de edad')
        }
    })
}
verificarEdad(17)
.then(mayor => console.log(mayor))
.catch(error => console.error(error))

// 2

function tiempoDeEspera(ms) {
    return new Promise(resolve => {
        setTimeout(() => resolve('tiempo cumplido'), ms)
    })
}

tiempoDeEspera(1000).then(result => console.log(result))

// 3

function esperarConLimite(mss) {
    return new Promise((resolve, reject) => {

        if (mss > 2000) {
            reject('el tiempo de espera no debe ser mayor que: 2000 ms...')
        } else {
            setTimeout(() => resolve(`el tiempo de espera es de:  ${mss} ms`), mss)
        }
    })
}

esperarConLimite(1900)
.then(result => console.log(result))
.catch(error => console.error(error))

// 4

function conectarServidor() {
    return new Promise((resolve, reject) => {
        console.log("🔄 Conectando al servidor...")
        setTimeout(() => {
            let exito = Math.random() > 0.5
            if (exito) {
                resolve("✅ Conectado al servidor")
            } else {
                reject("❌ Error al conectar")
            }
        }, 3000)
    })
}

conectarServidor()
    .then(msg => console.log(msg))
    .catch(err => console.error(err))

