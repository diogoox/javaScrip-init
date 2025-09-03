// 1. Agregega una función al prototipo de un objeto

function Alumno(name, age) {
    this.name = name
    this.age = age
}

Alumno.prototype.info = function() {
    console.log(`${this.name} entra en el 7 grado`)
}

const alumno1 = new Alumno('diog', 14)
const alumno2 = new Alumno('limpi', 14)

alumno1.info()
alumno2.info()

// 2. Crea un objeto que herede de otro

let alumnosOtroSector = Object.create(Alumno.prototype)
alumnosOtroSector.name = 'a'
console.log(alumnosOtroSector.name)


// 3. Define un método de instancia en un objeto

function NewAlumno(name, age) {
    this.name = name
    this.age = age

}

NewAlumno.prototype.info = function() {
    console.log(`el nuevo alumno es: ${this.name}`)
}


let newAlumno = new NewAlumno('alex', 13)
newAlumno.info()

// 4. Haz uso de get y set en un objeto

let person = {
    name: 'diogo',
    age: 27,
    job: 'PROGRAMADOR',
    info() {
        console.log(`El usuario: ${this.name} trabaja como ${this.job} y tiene ${this.age} anos`)
    }
}

Object.defineProperty(person, 'perfil' , {
    get() {
        console.log('accediendo al info del usuario...')
        return person.info()
    },
    set(value) {
        console.log('actualizando datos del usuario...')
        const [name, age, job] = value
        person.name = name
        person.age = age
        person.job = job
    }
})

person.perfil
    
// 5. Utiliza la operación assign en un objeto

let userX = {name: 'diogo', lastName: 'barreto'}
let userDetalles = {age: 23, alias: 'diogoox'}

let fullUser = Object.assign(userX, userDetalles)
console.log(fullUser)

// 6. Crea una clase abstracta

class info {

    constructor(name) {
        if(new.target === info) {
            throw new Error('porfavor ingresa un nombre')
        }
        this.name = name
    }

    job() {
        throw new Error('ingresa informacion del trabajo del usuario')
    }
}


// 7. Utiliza polimorfismo en dos clases diferentes

class chamba1 extends info {
    job() {
        console.log(`${this.name} trabaja como desarrollador de paginas web`)
    }
}

class chamba2 extends info {
    job() {
        console.log(`${this.name} trabaja como tester de paginas webs`)
    }
}

let user1 = new chamba1('diogo') 
user1.job()

let user2 = new chamba2('eduardo') 
user2.job()

// 8. Implementa un Mixin

let exp = {
    expp() {
        console.log( `5 anos de experiencia`)
    }
}


let extras = Object.assign(chamba1.prototype, exp )
user1.expp()


// 9. Crea un Singleton


class Persona {

    constructor(name) {
        if(Persona.instance) {
            return Persona.instance
        }
        this.name = name
        Persona.instance = this
    }
}

const per1 = new Persona('diogo')
const per2 = new Persona()

console.log(per1)




// 10. Desarrolla un Proxy

let senso = {namee: '', pais:''} 

let infooo = new Proxy(senso, {

    get(objec, prop) {
        if( prop === 'namee') {
            console.log(`accediendo al nombre el usuario...`)

        } else if (prop === 'pais') {
            console.log('accediendo a la ubicacion del usuario...')
        }
        
        return objec[prop]
        
    },

    set(objec, prop, value) {
        console.log(`asignando propiedad: ${prop}`)
        objec[prop] = value
        return true
    }
})


infooo.namee = 'diogo'
infooo.pais = 'paraguay'

console.log(infooo.namee)





//console.clear()