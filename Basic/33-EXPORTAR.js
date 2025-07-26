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

