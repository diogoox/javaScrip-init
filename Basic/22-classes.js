// classes 

class Person {
    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }
}

// sintaxis 

let person = new Person('diogo', 19, 'diogoox')
let person2 = new Person('leo', 14, 'a')

console.log(person)
console.log(person2)

console.log(typeof person)

// valores por defecto

class DefaultPerson {
    constructor(name = 'sin nombre', age = 'sin edad', alias = 'sin alias') {
        this.name = name
        this.age = age
        this.alias = alias
    }
}  

let persona3 = new DefaultPerson('diogo', )

console.log(persona3)


// acceso a propiedades

console.log(persona3.alias)
console.log(persona3['alias'])

persona3.alias = 'diogoox'

console.log(persona3)

// funciones en clases

class Person2 {

    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }

    walk() {
        console.log('la persona camina')
    } 
}

let person4 = new Person2('a', 'e', 'i')
person4.walk()

// propiedades privadas

class PrivatePerson {

    #banck
    constructor(name, age, alias, banck) {
        this.name = name
        this.age = age
        this.alias = alias
        this.banck = banck
    }

    pay() {
       this.#banck
    }

}

// console.log(person5.banck) no podemos acceder
let person5 = new Person2('a', 'e', 'i', '11')


// getters y setters

class GetSetPerson {

    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    get name() {
        return this.#name
    }

    set bank(bank) {
        this.#bank = bank
    }

}

person6 = new GetSetPerson("Brais", 37, "MoureDev", "IBAN123456789")

console.log(person6)
console.log(person6.name)

person6.bank = "new IBAN123456789"


// herencia

class Animal {

    constructor(name) {
        this.name = name
    }

    sound() {
        console.log('emite un sonido generico')
    }
}

class Dog extends Animal {

    sound() {
        console.log('guau')
    }

    run() {
        console.log('el perro corre')
    }
}

class Fish extends Animal {

    constructor(name, size) {
        super(name)
        this.size = size
    }

    swim() {
        console.log('el pez nada')
    }
}

let myDog = new Dog('moureDog')
myDog.run()
myDog.sound()

let myFish = new Fish('mourefift', 10)
myFish.swim()
myFish.sound()

// metodos estaticos

class maht {
static sun(a,b) {
    return a + b
}
}

console.log(maht.sun(5, 10))