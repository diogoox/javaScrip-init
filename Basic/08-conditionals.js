// if, else if, else

// if (si)

let age = 37

if (age == 37) {
    console.log('la edad es 37')
}

// else (si no)

if (age == 10) {
    console.log('la edad es 37')
} else {
    console.log('la edad no es 37')
}

// else if (si no, si)

if (age == 37) {
    console.log('la edad es 37')
} else if (age < 18) {
    console.log('es menor de edad')
} else {
    console.log('la edad no es 37 ni es menor de edad ')
}

// operador ternario 

const messaje = age == 37 ? 'la edad es 37' : 'la edad no es 37'

console.log(messaje)

// switch

let day = 9
let dayName

if (day == 0) {
    dayName = 'lunes'
} else if (day == 1) {
    dayName = 'martes'
} else if (day == 2) {
    dayName = 'martes'
} else if (day == 3) {                 // fackin desperdicio de tiempo
    dayName = 'miercoles'
} else if (day == 4) {
    dayName = 'jueves'
} else if (day == 5) {
    dayName = 'viernes'
} else if (day == 6) {
    dayName = 'sabado'
} else if(day == 7) {
    dayName = 'domingo'
} else {
    dayName = 'xd'
}
console.log(dayName)


// asi es mas rapido rey
switch (day) {
    case 0:
        dayName = 'lunes'
        break
    case 1:
        dayName = 'martes'
        break
    case 2:
        dayName = 'miercoles'
        break
    case 3:
        dayName = 'jueves'
        break
    case 4:
        dayName = 'viernes'
        break
    case 5:
        dayName = 'sabado'
        break
    case 6:
        dayName = 'domingo'
        break
    default:
        dayName = 'solo es hasta el 6 nde tembo'
}

console.log(dayName)
