// 1
let user = {nombre: ''}

let proxy = new Proxy(user, {

    get(target, propiedad) {
        console.log(`leyendo propiedad... => ${propiedad}`)
        return target[propiedad]
    },

    set(target, propiedad, valor) {
        console.log(`modificando ${propiedad} a: ${valor}`)
        target[propiedad = valor]
        return true
    }
})

//console.log(proxy.nombre)
//proxy.nombre = 'diogo'



// 2

let usuario = {name: '', age: 24}

let userProxy = new Proxy(usuario, {
    get(objec, prop) {
        console.log(`accediendo a la propiedad: ${prop}`)
        return objec[prop]
    },
    set(objec, prop, value) {
        console.log(`asignando propiedad: ${value}`)
        objec[prop] = value
        return true
    }
})

//console.log(userProxy.name)
//.name = 'diogo'
//console.log(userProxy.name)

// 3

let userX = {name: 'diogo', apellido: 'barreto'}

let userXproxy = new Proxy(userX, {
    get(objec, prop) {
        if ( prop === 'nombreCompleto') {
            return `${objec.name} ${objec.apellido}`
        }
        return objec[prop]
    }
})

console.log(userXproxy.nombreCompleto)
