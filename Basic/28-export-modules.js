// Exportacion de modulos

// funciones

export function add(a, b) {
    return a + b
}
console.log(add(5, 10))

// propiedades

export const PI = 3.1416
export let name = 'diogo'

// clases

export class Circle {

    constructor(radius) {
        this.radius = radius
    }
    area() {
        return Math.PI * Math.pow(this.radius, 2)
    }

    perimeter() {
        return 2 * Math.PI * this.radius
    }
}

// exportacion por defecto

export default function substract(a, b) {
   return a - b 
}

//export default class MyClass {

 //   func() {
//        console.log("Mi clase")
//    }
//}