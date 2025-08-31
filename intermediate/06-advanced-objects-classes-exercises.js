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

// 6. Crea una clase abstracta

// 7. Utiliza polimorfismo en dos clases diferentes

// 8. Implementa un Mixin

// 9. Crea un Singleton

// 10. Desarrolla un Proxy


//console.clear()