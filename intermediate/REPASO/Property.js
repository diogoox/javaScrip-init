// 1

let usuario = {_email: ''}

Object.defineProperty(usuario, 'email', {

    set: function (valor) {
        if (!valor.includes('@')) {
            console.log('EL correo debe incluir: @')
        } else {
            this._email = valor
        }
    },

    get: function () {
        return this._email
    },

    
})

usuario.email = 'barretodiogo@.com'

console.log(usuario.email)


// 2

let producto = {_precio: 0}

Object.defineProperty(producto, 'precio', {

    get: function() {
        let codigoDeBarras = Math.floor(Math.random() * 10000)
        return `Costo: ${this._precio} gs  |  Codigo: ${codigoDeBarras}`
    },
    set: function(valor) {
        this._precio = valor
    }
})

producto.precio = 14
console.log(producto.precio)