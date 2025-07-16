// objetos

// Sintaxis

let person = {
    name: 'diogo',
    age: 37,
    alias: 'diogox'
}

// acceso a propiedades

// notacion punto
console.log(person.name)

// notacion de corchetes
console.log(person['name'])

// modificacion de propiedades 

person.name = 'arnaldo'
person.name = 'diogo'
console.log(person.name)

console.log(typeof person.age)
person.age = '37'
console.log(person.age)
console.log(typeof person.age)

// eliminacion de propiedades

delete person.age

console.log(person)

// nueva propiedad

person.email = 'barretodiogo128@gmail.com'

console.log(person.email)
person['age'] = 37

console.log(person)

// metodos (funciones)

let person2 = {
    name: 'diogo',
    age: 37,
    alias: 'diogox',  
    walk: function() {
        console.log('la persona camina')
    } 
}

person2.walk()

// anidacion de objetos

let person3 = {
    name: 'diogo',
    age: 37,
    alias: 'diogox',  
    walk: function() {
        console.log('la persona camina')
    },
    job: {
        name: 'programador',
        exp: 15,
        work: function() {
            console.log(`la persona con ${this.exp} anos de experiencia trabaja`)
        } 
    }
}

console.log(person3)

console.log(person3.name)
console.log(person3.job)
console.log(person3.job.name)
person3.job.work()

// igualdad de objets

let person4 = {
    name: 'diogo',
    age: 37,
    alias: 'diogox'
}

console.log(person)
console.log(person4)

console.log(person == person4)
console.log(person === person4)
console.log(person.name === person4.name)

//iteracion

for(key in person4) {
    console.log(key + ': ' + person4[key])
}

// funciones como objetos

function Person(name, age) { //deberia ser una clase
    this.name = name
    this.age = age
}

let person5 = new Person('diogo', 18)
console.log(person5)
console.log(person5.name)


console.log( typeof person5)
console.log( typeof person4)
