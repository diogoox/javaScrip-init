// excepcion

//produce una excepcion
let myObject
//console.log(myObjeto.email)

// captura de errores

//try-catch

try {
    //codigo que intenta ejecutar
    console.log(myObject.email)
    console.log('finaliza la ejecucion')
} catch {
    //bloque de error
    console.log('se ha producido un error')
}

// captura del error

try {  
    console.log(myObject.email)
} catch (error) {
    console.log('se ha producido un error:', error.message)
}

// finally

try {  
    console.log(myObject.email)
} catch (error) {
    console.log('se ha producido un error:', error.message)
} finally{
    console.log('este codigo se ejecuta siempre')
}


//no esta soportando

//try {  
  //  console.log(myObject.email)
//} finally{
  //  console.log('este codigo se ejecuta siempre')
//}

// lanzar errores

//throw

//throw new Error('se ha producido un error');

function sumIntegers(a,b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('esta operacion solo suma numeros')
    }

    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error('esta operacion solo suma numeros enteros')
    }
    if (a == 0 || b == 0) {
        throw new SumZeroIntegerError('se esta intentando sumar cero:', a, b)
    }
    return a + b
}

try {
    console.log(sumIntegers(5, 10))
    //console.log(sumIntegers(5.5 , 10))
    console.log(sumIntegers('10', 10))
    //console.log(sumIntegers(5, '10'))
    //console.log(sumIntegers('5', '10'))
} catch (error) {
    console.log('se ha producido un error:', error.message)
}

// capturar varios tipos de errores

try {
    //console.log(sumIntegers(5.5 , 10))
    console.log(sumIntegers('5', 10))

} catch (error) {
    if (error instanceof TypeError) {
        console.log('se ha producido un error de tipo:', error.message)
    } else if (error instanceof Error) {
        console.log('se ha producido un error:', error.message)
    }  
}


// crear excepciones personalizadas

class SumZeroIntegerError extends Error {
    constructor(message,a, b) {
        super(message)
        this.a = a
        this.b = b
    }

    printNumbers() {
        console.log(this.a, ' + ',this.b)
    }
}

try {
    console.log(sumIntegers(0, 10))
} catch (error) {
    console.log('se ha producido un error personalizado:', error.message)
    error.printNumbers()
}
