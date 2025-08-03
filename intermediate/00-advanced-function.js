// funciones avanzadas

// ciudadanos de primera clase

const greet = function (name) {
    console.log(`hola ${name}`)
}

greet('brais')

function processGreeting(greetFunction, name) {
    greetFunction(name)
}

processGreeting(greet, 'mouredev')