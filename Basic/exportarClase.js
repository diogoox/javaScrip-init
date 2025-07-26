// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)

export default class User {

    constructor(name, age) {
        this.name = name
        this.age = age
    }
}
console.log(new User('diogo', 19))