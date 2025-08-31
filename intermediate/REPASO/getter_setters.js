// 1
let producto = {

    _precio: 0,

    get precio() {
        return `$${this._precio.toFixed(2)}`
    },
    set precio(valor) {
        this._precio = valor
    }
}

producto.precio = 1.99
console.log(producto.precio)

// 2

let edadDeUsuario = {

    _edad: 0,

        set edad (valor) {
            if (valor <= 0 ) {
                console.log('edad invalida')
            } else {
                this._edad = valor
            }
        },
        get edad () {
            return this._edad
        }
}

edadDeUsuario.edad = 0  

// 3

class Producto {

    constructor(name, precio) {
        this._name = name
        this._precio = precio
    }

    set precio (valor) {
        if (valor <= 0) {
            console.log('precio no valido')
        } else {
            this._precio = valor
        }
    }
    get precio () {
        return this._precio
    }
}


let item = new Producto('laptop', 50)
console.log(item.precio)

item.precio = 0

// 4

let user = {

    _name: 'diogo',
    age: 19,

    get name() {
        return this._name.toUpperCase()
    },
    set name(value) {
        value = this._name
    }
}

console.log(user.name)


