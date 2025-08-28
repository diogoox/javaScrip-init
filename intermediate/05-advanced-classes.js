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
        console.log('esta volando')
    }
}

class Bird extends Animal {}

class dragon extends Animal {}

Object.assign(Bird, flyMixin)

const bird = new Bird('moureBird')

console.log(bird.name)
