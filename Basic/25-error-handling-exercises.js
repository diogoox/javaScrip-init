// 1. Captura una excepción utilizando try-catch

function detectarEdad(age) {
    if (typeof age !== 'number'){
        throw new TypeError('no ingresaste un numero')
    }

    if (age < 18) {
        throw new Error('no eres mayor de edad')
    }

    console.log('puedes ingresar')

}    

try {
    detectarEdad(17)
} catch(error) {        
    console.log('No puedes ingresar porque', error.message)
}
        
// 2. Captura una excepción utilizando try-catch y finally

function poderVotar (nombre, edad) {

        //nombre
    if (typeof nombre !== 'string') {
        throw new TypeError ('nombre no valido')
    }
        //edad
    if (typeof edad !== 'number') {
        throw new TypeError('porfavor ingrese un numero')
    }

    if (edad < 18 ) {
        throw new Error('no podes votar, eres menor de edad')
    }

    console.log(`${nombre} si podes votar`)
}

try {

    poderVotar('diogo', 19)

} catch (error) {

    console.log('Se ha producido un error', error.message)

} finally {
    
    console.log(`gracias por tu participacion`)

}

// 3. Lanza una excepción genérica

function xd(stringg) {

    if (typeof stringg !== 'string') {
        throw new Error ('ingresa un string')
    }

    console.log('ingresaste un string')

}

    try {
        xd('a')

    } catch (error) {
        console.log('se ha producido un error', error.message)
    }

// 4. Crea una excepción personalizada
// 5. Lanza una excepción personalizada
// 6. Lanza varias excepciones según una lógica definida
// 7. Captura varias excepciones en un mismo try-catch

class EdadInvalidaError extends Error {
    
    constructor(edadIngresada) {
        super(`edad invalida ${edadIngresada}`)
        this.name = 'EdadInvalidaError'
        this.edad = edadIngresada
    }

    sugerencia() {
        console.log('la edad debe ser entre 1 a 120')
    }
}


function verificarEdad(edad) {
    if(typeof edad !== 'number'  || edad < 1 || edad > 120 )
        throw new EdadInvalidaError(edad)
} 

console.log('edad valida')

try {
    verificarEdad(200)
} catch (error) {
    if (error instanceof EdadInvalidaError) {
        console.log(error.message)
        error.sugerencia()
    } else {
        console.log('se ha producido un error desconocido')
    }
}


// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

const valores = ['10.5', 'hola', 25, null, '3.14', undefined, true, {}, 'NaN']

for (let i = 0; i < valores.length; i++) {
  const valor = valores[i]

  try {
    const resultado = parseFloat(valor)

    if (isNaN(resultado)) {
      throw new Error(`❌ No se puede convertir: ${valor}`)
    }

    console.log(`✅ Valor convertido: ${valor} → ${resultado}`)
  } catch (error) {
    console.log(`⚠️ Error en la posición ${i}:`, error.message)
  }
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada




class PropiedadNoEncontradaError extends Error {

    constructor(propiedad) {
        super(`la propiedad ${propiedad} no existe en el objeto`)
        this.name = 'PropiedadNoEncontradaError'
        this.propiedad = propiedad
    }

    sugerencia() {
        console.log('verifica que el objeto tenga esa propiedad')
    }
}

function verificarPropiedad(objeto, propiedadBuscada) {
    if(!objeto.hasOwnProperty(propiedadBuscada)) {
        throw new PropiedadNoEncontradaError(propiedadBuscada)
    }

console.log(`la propiedad ${propiedadBuscada} si existe y esta como: ${objeto[propiedadBuscada]} `)
}


const persona = {
    nombree: 'diogo',
    edad: 18
}

try {
verificarPropiedad(persona, 'email')
} catch(error) {
    if(error instanceof PropiedadNoEncontradaError) {
        console.log(error.message)
        error.sugerencia()

    } else {
        console.log('se ha producido otro tipo de error', error.message)
    }
}


// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

function ejecutarConReintentos(fn, maxReintentos = 10) {
    let intentos = 0

    while(intentos < maxReintentos) {
        try {
    console.log(`intento numero: ${intentos + 1}`)
    return fn()
        } catch(error) {
            console.log(`error de intento ${intentos + 1}`, error.message)
            intentos ++
        }

    }

    throw new Error(`fallo despues de ${maxReintentos} intentos`)
} 

function tareaInestable() {
  if (Math.random() < 0.7) {
    throw new Error('💥 Fallo aleatorio')
  }
  console.log('✅ ¡Éxito!')
  return 'resultado final'
}

try {
  const resultado = ejecutarConReintentos(tareaInestable, 10)
  console.log('📦 Resultado obtenido:', resultado)
} catch (error) {
  console.log('🚨 ERROR DEFINITIVO:', error.message)
}
