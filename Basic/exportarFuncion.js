// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)

 export default function verificarNumero(number) {
    if (typeof number == 'number') {
       console.log( number % 2 == 0 ? 'este numero es par' : 'este numero es impar' ) 
    }
}

verificarNumero(10)


