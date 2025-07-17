
class DetectarNumero extends Error {

    constructor(numero) {
        super(`el numero ${numero} no es valido`)
        this.name = 'DetectarNumero'
        this.numero = numero
    }
    
    sugerencia() {
        console.log('deber ser mayor que 10')
    }
}

function verificarNumero(numero) {
    if(typeof numero !== 'number' || numero <= 10){
        throw new DetectarNumero(numero)
    }

    console.log(`excelente! el numero: ${numero} es mayor que 10`)

}

try{
    verificarNumero(11)

} catch(error) {
    if (error instanceof DetectarNumero) {
        console.log(error.message)
        error.sugerencia()
    } else {
        console.log('se ha producido un error desconocido')
    }
}
















class TextoMuyLargo extends Error{

    constructor(texto) {
        super(`el texto es muy largo`)
        this.name = 'TextoMuyLargo'
        this.texto = texto
    }

    sugerencia() {
        console.log('el texto debe tener menos de 5 caracteres')
    }
}

function examinarTexto(texto) {
    if (typeof texto !== 'string' || texto.length >= 5) {
        throw new TextoMuyLargo(texto)
    }

    console.log(`el texto: ${texto} Es compatible`)

}

try {
    examinarTexto('aaaa')    
} catch(error) {
    if (error instanceof TextoMuyLargo) {
        console.log(error.message)
        error.sugerencia()
    } else {
        console.log('se ha producido un error desconocido')
    }
}










let arrayDePrueba = ['diogo', 'arnaldo']

class arraysInsuficientes extends Error {

    constructor(array) {
        super(`el array tiene solo ${array.length} elementos`)
        this.name = 'arraysInsuficientes'
        this.array = array
    }

    sugerencia() {
        console.log('el array debe de tener minimo tres elementos')
    }
}


function examinarArrays(array) {
    if (array.length < 3) {
        throw new arraysInsuficientes(array)
    }

    console.log('Este array es valido!')
}

try {
    examinarArrays(arrayDePrueba) 

} catch(error) {
    if (error instanceof arraysInsuficientes) {
        console.log(error.message)
        error.sugerencia()
    }
}



//- Función que devuelve el cuadrado de un número

function numeroAlCuadrado(numero) {
    return numero * numero
}


//- Función que dice si un número es par o impar
 

function numeroParImpar(number) {

    if (number % 2 == 0) {
        console.log('este numero es par')
    } else {
        console.log('este numero es impar')
    }
}

numeroParImpar(9)


         // otra forma de hacerlo
         function numeroParImpar(number) {
  return number % 2 === 0 ? '✅ Es par' : '🔹 Es impar'
}

console.log(numeroParImpar(9)) // 👉 🔹 Es impar
console.log(numeroParImpar(10)) // 👉 ✅ Es parr