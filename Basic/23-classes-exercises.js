// 1. Crea una clase que reciba dos propiedades

class DatosPersona {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

//console.log(new DatosPersona ('diogo', 19))

// 2. Añade un método a la clase que utilice las propiedades

class DatosPersona2{
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    random() {
        console.log(`${this.name} tiene ${this.age}`)
    }
}

//let personaNueva = new DatosPersona2 ('axel', 18)
//personaNueva.random()

// 3. Muestra los valores de las propiedades e invoca a la función

class Datos {

    constructor(name2, age2, email2) {
        this.name2 = name2
        this.age2 = age2
        this.email2 = email2
    }

    random2() {
        console.log(`${this.name2} tiene ${this.age2} y su email es ${this.email2}`)
    }
}

//let personaLeo = new Datos('leo', 20, 'leo.com' )
//personaLeo.random2()

//console.log(personaLeo.name2)
//console.log(personaLeo.age2)
//console.log(personaLeo.email2)

//console.log(personaLeo)



// 4. Añade un método estático a la primera clase

class DatosPersonaNuevo {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    static saludar(nombre) {
        console.log(`hola ${nombre}`)
    }
}


// 5. Haz uso del método estático

let xd = new DatosPersonaNuevo('xd', 17)
DatosPersonaNuevo.saludar(xd.name)


// 6. Crea una clase que haga uso de herencia

class Animal {

    constructor(nombre) {
        this.nombre = nombre
    }

    sound() {
        console.log('el animal emite un sonido generico')
    }
}


class Perro extends Animal {
    sound() {
        console.log('guau')
    }
}

let miPerro = new Perro('negra')

console.log(miPerro)
miPerro.sound()

// 7. Crea una clase que haga uso de getters y setters

class GetPersona {

    #name
    #edad
    #email

    constructor(name, edad, email) {
        this.#name = name
        this.#edad = edad
        this.#email = email
    }

    get name() {
        return this.#name
    }

    get email() {
        return this.#email
    }
    set email(email) {
        this.#email = email
    }
}

//persona = new GetPersona('diogo', 19, 'diogo.com')

//console.log(persona.name)

//persona.email = 'diolgoo'
//console.log(persona.email)




// 8. Modifica la clase con getters y setters para que use propiedades privadas

class GetPersona2 {

    #name
    #edad
    #email

    constructor(name, edad, email) {
        this.#name = name
        this.#edad = edad
        this.#email = email
    }

    get edad() {
        return this.#edad
    }
    get email() {
        return this.#email
    }

    set edad(valor) {
        if (typeof valor === 'number' && valor > 0 && valor < 120) {
            this.#edad = valor
        } else {
            console.log('pone bien tu edad kpe')
        }
    }

    set email(valor) {
        if(typeof valor === 'string' && valor.includes('@') && valor.length > 7) {
            this.#email = valor
        } else {
            console.log('su email debe incluir @ y almenos 7 caracteres')
        }       
    }
}

persona = new GetPersona2('diogo', 17, 'diogo.com')

console.log(persona)

console.log(persona.name)
console.log(persona.edad)
console.log(persona.email)

persona.edad = 2
persona.email = 'diogo@aeeeee'
console.log(persona.edad)
console.log(persona.email)

// 9. Utiliza los get y set y muestra sus valores

const Persona3 = new GetPersona2('leo', 17, 'diogo.com')

console.log(Persona3.edad)
console.log(Persona3.email)

Persona3.edad = 18
Persona3.email = 'diogo@.com'
console.log(Persona3.edad)
console.log(Persona3.email)

// 10. Sobrescribe un método de una clase que utilice herencia

class Vehiculo {
    arrancar() {
        console.log('el vehiculo arranca')
    }
}

class Moto extends Vehiculo {
    arrancar() {
        console.log('la moto arranca')
    }
}

const moto1 = new Moto()
moto1.arrancar()
