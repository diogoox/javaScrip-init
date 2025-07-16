// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let nombre = 5

if (nombre == 5 ) {
    console.log('diogo')
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let contrasena = 2

if (contrasena == 2) {
    console.log('contrasena correcta')
} else {
    console.log('contrasena incorrecta')
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let numero = 5

if (numero > 0) {
    console.log('numero  positivo')
    
} else if (numero === 0) {
    console.log('numero 0')
} else  {
    console.log('numero negativo')
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edadParaVotar = 3

if (edadParaVotar === 18) {
    console.log('si puede votar')
} else if (edadParaVotar > 18) {
    console.log('si puede votar')
} else if (edadParaVotar < 18) {
    console.log('no puede votar')    
} else {
    console.log('pone py tu edad ')
}


// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let edadd = 18
console.log(edadd)

const mensajee = edadd >= 18 ? 'adulto' : 'menor'
console.log(mensajee)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = 'mayo'

if (mes === 'enero') {
    console.log('verano')
} else if (mes === 'mayo') {
    console.log('invierno')
} else {
    console.log('mes incorrecto')
}


// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if(mes === 'mayo') {
    console.log('31 dias')
}


// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = 'guarani' 

switch(idioma) {
    case 'ingles':
        console.log('hi')
        break
    case 'guarani' :
        console.log('haupei')
        break
    case 'espanol' :
        console.log('hola')
        break
}


// 9. Usa un switch para hacer de nuevo el ejercicio 6

let mess = 'enero'

switch(mess) {
 case 'mayo' :
    console.log('invierno')
    break
 case 'enero' :
    console.log('verano')
    break
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7

let messs = 'febrero'

switch(messs) {
    case 'febrero' :
        console.log('tiene 28 dias pai')
        break
    case 'abril' :
        console.log('tiene 30 dias')
        break
}
