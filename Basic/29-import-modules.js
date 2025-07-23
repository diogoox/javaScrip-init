// importacion de modulos

import { add, PI, name, Circle } from "./28-export-modules.js"

import defaultImport from "./28-export-modules.js"

// funciones

console.log(add(5, 10))

// propiedades

console.log(PI)
console.log(name)

// clases

let circle = new Circle(10)
console.log(circle.radius)
console.log(circle.area().toFixed(2))
console.log(circle.perimeter().toFixed(2))

// Importacion por defecto

console.log(defaultImport(5, 10))

// let myClass = new defaulImport()
// MyClass.func()

// Proyecto modular

//import { MyImport } from "./directory/file.js"

