
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

