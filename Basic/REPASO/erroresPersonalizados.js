
// 1
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



// 2
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




// 3
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


// Crear un error si el nombre de usuario tiene menos de 4 caracteres.

class NombreCorto extends Error {

    constructor(usuario) {
        super (`este nombre es muy corto`)
        this.name = 'NombreCorto'
        this.usuario = usuario
    }

    sugerencias() {
        console.log('El nombre debe tener minimo cuatro caracteres')
    }
}

function analizarUsuario(usuario) {
    if (typeof usuario !== 'string') {
        console.log('usuario invalido, solo se permiten letras!')
    } else if (usuario.length < 4) {
        throw new NombreCorto(usuario)

    } 

    console.log(`bienvenido ${usuario}`)
}

try {
    analizarUsuario('dio')

} catch(error) {
    if (error instanceof NombreCorto ) {
        console.log(error.message)
        error.sugerencias()
    }
}

// Lanzar error si el texto NO termina en .jpg, .png o .gif.

class ErrorTexto extends Error {

    constructor(textoo) {
        super(`el texto no es valido`)
        this.name = 'ErrorTexto'
        this.textoo = textoo
    }

    sugerenciaa() {
        console.log('el texto debe terminar en: .jpg, .png o .gif ')
    }
}

function analizarTexto(textoo) {
    if (
        !textoo.endsWith('.jpg') &&
        !textoo.endsWith('.png') &&
        !textoo.endsWith('.gif')
    ) {
        throw new ErrorTexto(textoo)
    }
    console.log('este texto es valido')
}


try {
    analizarTexto('hola.g')
} catch(error) {
    if (error instanceof ErrorTexto) {
        console.log(error.message)
        error.sugerenciaa()
    }
}



// Solo se permiten archivos .mp3, .wav, o .ogg.

class ArchivoNoPermitido extends Error {

    constructor(archivo) {
        super('archivo no valido') 
        this.name = 'ArchivoNoPermitido'
        this.archivo = archivo
    }

    sugerir() {
        console.log('el archivo debe terminar en: .mp3, .wav, o .ogg')
    }
}

function verificarArchivo(archivo) {
    if (
        !archivo.endsWith('.mp3') &&
        !archivo.endsWith('.wav') &&
        !archivo.endsWith('.ogg')
    ) {
        throw new ArchivoNoPermitido(archivo)
    }

    console.log('archivo insertado!')
}

try {
    verificarArchivo('a.mp3')
} catch(error) {
    if (error instanceof ArchivoNoPermitido) {
        console.log(error.message)
        error.sugerir()
    }
}



//Crear una función que verifique si un archivo termina en .md, .txt, o .csv.

class ArchivoNoCombatible extends Error {

    constructor(archivo1) {
        super('No es posible insertar el archivo :(')
        this.name = 'ArchivoNoCombatible'
        this.archivo1 = archivo1
    }

    sug() {
        console.log('EL ARCHIVO DEBE TERMINAR EN: .md, .txt, o .csv')
    }
}

function verificarArchivo1(archivo1) {
    if (
        !archivo1.endsWith('.md')&&
        !archivo1.endsWith('.txt')&&
        !archivo1.endsWith('.csv')
    ) {
        throw new ArchivoNoCombatible(archivo1)
    }

    console.log('el archivo fue insertado con exito!')
}

try {
    verificarArchivo1('aa.')
} catch(error) {
    if (error instanceof ArchivoNoCombatible) {
        console.log(error.message)
        error.sug()
    }
}


