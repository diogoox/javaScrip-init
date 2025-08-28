// objetos avanzados

// prototipos y herencias

// prototipos

let person = {
    name: 'brais',
    age: 37,
    greet() {
        console.log(`hola, soy ${this.name}`)
    }
}

console.log(person.__proto__)
console.log(Object.getPrototypeOf(person))
console.log(person.prototype)

person.sayAge = function () {
    console.log(`soy ${this.name}, tengo ${this.age}`)
}

console.log(person)
person.sayAge()

// herencia

console.log('---------')

let programer = Object.create(person)
programer.languaje = 'javaScript'

programer.name = 'mouredev'
console.log(person.name)
console.log(person.languaje)

console.log(programer.name)
console.log(programer.age)
console.log(programer.languaje)
programer.greet()
programer.sayAge()


// metodos estaticos y de instancia

function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.greet = function () {
    console.log(`hola, soy ${this.name}`)
}


let new_person = new Person('Brais', 37)
new_person.greet()

// metodos avanzados

// assign

let person_core = {name: 'brais' }
let person_details =  {age: 37, alias: 'moureDev' }

let fullPerson = Object.assign(person_core, person_details)
console.log(fullPerson)

// keys, values, entries

console.log(Object.keys(fullPerson))
console.log(Object.values(fullPerson))
console.log(Object.entries(fullPerson))



