// clases avanzadas

class Person {
    
    constructor(name, age) {
        this.name = name
        this.age = age
    } 

    greet() {
        console.log(`hola, soy ${this.name}`)
    }
}

const person = new Person('Brais', 37)
person.greet()

person.sayAge = function () {
    console.log(`soy ${this.name}, tengo ${this.age}`)
}
person.sayAge()

// clases abstractas

class Animal {

    constructor(name) {
        if (new.target === Animal) {
            throw new Error('No se puede instanciar una clase abtracta')
        }
        this.name = name
    }

    makeSound() {
        throw new Error('Este metodo tiene que ser implementado por la subclase ')
    }
}

//Error
//const animal = new Animal('mou') 
//console.log(animal)

// polimorfismo

class Gat extends Animal {
    makeSound() {
        console.log('miau')
    }
}

class Dog extends Animal {
    makeSound() {
        console.log('guau')
    }
}

const cat = new Gat('moureGat')
console.log(cat)
cat.makeSound()

const dog = new Dog('moureDog')
console.log(dog)
dog.makeSound()

// mixins 

const flyMixin = {
    fly() {
        console.log(`${this.name} esta volando`)
    }
}

class Bird extends Animal {}

class Dragon extends Animal {}

Object.assign(Bird.prototype, flyMixin)
Object.assign(Dragon.prototype, flyMixin)

const bird = new Bird('moureBird')
console.log(bird.name)
bird.fly()

const dragon = new Dragon('mouredragon')
console.log(dragon.name)
dragon.fly()

// patron singleton

class Session {

    constructor(name) {
        if (Session.instance) {
            return Session.instance
        }
        this.name = name
        Session.instance = this
    }
}

const session1 = new Session('diogox')
const session2 = new Session()
console.log(session1.name)
console.log(session2.name)
console.log(session1 === session2)

const session3 = new Session('mouredes') // no se puede cambiar...
console.log(session3.name) // invalido

// symbol

const ID = Symbol('id')

class User {
    constructor(name) {
        this.name = name
        this[ID] = Math.random()
    }

    getId() {
        return this[ID]
    }
}

const user = new User ('diogox')
console.log(user.name)
console.log(user.ID)   // no se puede
console.log(user[ID])
console.log(user.getId())

// instanceof

class Car {}

const car = new Car()
console.log(car instanceof Car)

// create

const anotherCar = Object.create(Car.prototype)

console.log(anotherCar instanceof Car)
console.log(anotherCar)

// proxy

const proxy = {
    get(target, property) {
        console.log(`se accede a la propiedad ${property}`)
        return target[property]

    },
    set(target, property, value) {
        if (property === 'balance' && value < 0) {
            throw new Error('el saldo no puede ser negativo')
        }
        target[property] = value
    }
}

class BanckAccount {
    constructor(balance) {
        this.balance = balance
    }
}

const account = new Proxy(new BanckAccount(100), proxy)
console.log(account.balance)

account.balance = 50
console.log(account.balance)

account.balance = -10

