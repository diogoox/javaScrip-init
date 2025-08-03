
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



//gettersAndSetters

// Controlar inventario de productos

class NuevoArticulo {

    constructor(articulo, cantidad) {
        this.articulo = articulo
        this._cantidad = cantidad
    }

    get cantidad() {
        return this._cantidad
    }

    set cantidad(valor) {
        if ( typeof valor !== 'number' || valor < 0 ) {
            console.log('Valor invalido')
        } else {
            this._cantidad = valor 
        }
    }
}

const arroz = new NuevoArticulo('arroz', 10)

arroz.cantidad = 20
console.log(arroz.cantidad)

// validar edad minima

class VerificarEdad {

    constructor(nombre) {
        this.nombre = nombre
        this._age = null
    }

    get age() {
        return this._age
    }

    set age(valor) {
        if (typeof valor !== 'number') {
            console.log('porfavor ingresa un numero')
        } else if (valor < 18) {
            console.log('para poder acceder se requiere ser mayor de edad')
        } else {
            this._age = valor
            console.log(`bienvenido ${this.nombre}`)
             
        }
    }
}

const user = new VerificarEdad('diogo')
user.age = 18

console.log(user.age)


// validacion de tareas terminadas

class VerificarTarea {

    constructor(tema, estadoDeTarea = false) {
        this._tema = tema
        this._estadoDeTarea = estadoDeTarea
    }

    get estadoDeTarea() {
        return this._estadoDeTarea
    }

    set estadoDeTarea(valor) {
        if (typeof valor !== 'boolean') {
            console.log('completado = true  |  incompleto = false')
        } else {
            this._estadoDeTarea = valor
        }
    }
    tareaMensaje() {
        return this._estadoDeTarea ? 'tarea completada':'tarea incompleta'
    }
}

const matematica = new VerificarTarea('matematicas', false)


console.log(matematica.tareaMensaje())


// contrasena con validacion basica

class Cuenta {
  constructor(usuario) {
    this._usuario = usuario;
    this._password = null;
  }

  get password() {
    return '🔒 Información protegida';
  }

  set password(pass) {
    if (pass.length < 6) {
      console.log('La contraseña debe tener al menos 6 caracteres');
    } else {
      this._password = pass;
      console.log('✅ Contraseña establecida');
    }
  }
}

const cuenta = new Cuenta('DiogoDev');
cuenta.password = 'abc';
cuenta.password = 'secure1';
console.log(cuenta.password); 




/* 
VALIDAR NOMBRE DE USUARIO
.El nombre debe tener entre 3 y 12 caracteres
.Solo puede contener letras y números (sin espacios ni símbolos)
.El getter no muestra el nombre directamente, sino un mensaje genérico
 */
const regex = /^[a-zA-Z0-9]+$/

class validarNombre {

    constructor(name) {
        this._name = name
    }

    get name() {
        return 'nombre de usuario oculto'
    }

    set name(valor) {
        if (!regex.test(valor)) {
            console.log('Solo puede contener letras y números')
        } else if (valor.length > 12 || valor.length < 3) {
            console.log('El nombre debe tener entre 3 y 12 caracteres')
        } else {
            this._name = valor
            console.log('nombre de usuario establecido')
        }
    }
} 

const user1 = new validarNombre()
user1.name = 'diogoo'
console.log(user1.name)

