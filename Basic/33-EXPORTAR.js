// 1. Exporta una función

export function suma(a, b) {
    return a + b
}
console.log(suma(2, 1))

// 2. Exporta una constante

export const usuario = 'diogo'
console.log(usuario)

// 3. Exporta una clase

export class Usuario {

    constructor(name, age) {
        this.name = name
        this.age = age
    }
    accion() {
        console.log(`el usuario ${this.name} tiene ${this.age}`)
    }
}
console.log(new Usuario('diogo',19))

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)

 export default function verificarNumero(number) {
    if (typeof number == 'number') {
       console.log( number % 2 == 0 ? 'este numero es par' : 'este numero es impar' ) 
    }
}

verificarNumero(10)

////////




