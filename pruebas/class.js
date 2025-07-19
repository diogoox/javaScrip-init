
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