// 9. Exporta una función, una constante y una clase desde una carpeta

export function sumarNumerosPares(numeros) {
    let suma = 0

    for (let numero of numeros ) {
        if (numero % 2 == 0) {
            suma += numero
        }
    }
    console.log(`la suma total de los numeros pares es: ${suma}`)
} 

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
sumarNumerosPares(numeros)

//

export const UserInfo = {
    name: 'diogo',
    age: 19,
    jobInfo: function() {
        console.log(`${this.name} tiene 2 anos de experiencia como cajero xd`)
    }
}

UserInfo.jobInfo()

//

export class Personal {

    constructor(name, age) {
        this.name = name
        this.age = age
    }
    info() {
        console.log(`${this.name} es nuevo funcionario de la empresa!`)
    }
}

const PersonalNuevo = new Personal('diogo', 19)
console.log(PersonalNuevo)
PersonalNuevo.info()
