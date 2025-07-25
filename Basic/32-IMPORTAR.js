import { suma, usuario, Usuario } from "./33-EXPORTAR.js"

// 4. Importa una función
console.log(suma(2, 3))

// 5. Importa una constante
console.log(usuario)

// 6. Importa una clase
console.log(new Usuario('diogo', 19))


// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)

import nombre from"./exportarConstante.js" // 1
import User from"./exportarClase.js" // 2
import verificarNumero from"./exportarFuncion.js" // 3

// 1
console.log(nombre)

// 2
console.log(new User('eucebio', 20))

// 3
verificarNumero(10)

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior

