
// Crear una jerarquía donde Vehiculo sea la clase base, y Auto y Bicicleta las clases hijas.

class Vehiculo {

    constructor(vehiculo, marca) {
        this.vehiculo = vehiculo
        this.marca = marca
    }
    sonido() {
        console.log(`sonido generico...`)
    }
}

class Auto extends Vehiculo {
    sonido() {
        console.log(`el ${this.vehiculo} hace brumm`)
    }
}

const vehiculo = new Auto('camioneta', 'toyota')

console.log(vehiculo)
vehiculo.sonido()


class Bici extends Vehiculo {
    sonido() {
        console.log(`${this.vehiculo} no hace ruido...`)
    }
}

const Bicii = new  Bici('bicicleta', 'milano')

console.log(Bicii)
Bicii.sonido()




// jerarquia de personajes

 class Personaje {

    constructor(nombre, nivel) {
        this.nombre = nombre
        this.nivel = nivel
    }   
    saludar() {
        console.log(`Hola soy ${this.nombre}, de nivel: ${this.nivel}`)
    }
 }

class Gerrero extends Personaje {
    saludar() {
        console.log(`Yo, soy ${this.nombre}, peleo por la gloria`)
    }
    atacar() {
        console.log(`${this.nombre} lanza un ataque poderoso!`)
    }
}

class Mago extends Personaje {

    constructor(nombre, nivel, mana) {
        super(nombre, nivel)
        this.mana = mana
    }
    hechizar() {
        console.log(`${this.nombre} lanza un hechizo magico con ${this.mana} puntos de mana!`)
    }
}


const merlin = new Mago('Merlín', 42, 150)
merlin.saludar()
merlin.hechizar()

const eucebio = new Gerrero('eucebio', 50)
eucebio.saludar()
eucebio.atacar()




// ALumnos del primer grado...

class AlumnosDelPrimerGrado {
    
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    info() {
        console.log('informacion del alumno')
    }
}

class AlumnoBueno extends AlumnosDelPrimerGrado {

    constructor(name, age, notas) {
        super(name, age)
        this.notas = notas
    }

    info() {
        console.log(`El alumno ${this.name} tiene buen rendimiento!\nSu nota es: ${this.notas}`)
    }
}

class AlumnoMalo extends AlumnosDelPrimerGrado {

    constructor(name, age, notas) {
        super(name, age) 
        this.notas = notas
    }

    info() {
        console.log(`El alumno ${this.name} No tiene buen rendimiento\nSu nota es: ${this.notas}`)
    }
}

const marcos = new AlumnoMalo('Marcos', 6, '2/10')
marcos.info()

const luis = new AlumnoBueno('Luis', 6 , '10/10')
luis.info()

