

let myArray = [1, 2, 3, 4]

let person = {
    name: 'diogo',
    age: 37,
    alias: 'diogox'
}

let myValue = myArray[1]
console.log(myValue)

let myName = person.name
console.log(myName) 

// desestructuracion

// Sintaxis arrays

let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)

// sintaxis arrays con valores predeterminados

let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] = myArray
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)


//ignorar elementos array

let [myValue10, , ,  myValue13] = myArray
console.log(myValue10)
console.log(myValue13)

// sintaxis objets

let {name, age, alias} = person
console.log(name)
console.log(age)
console.log(alias)

// sintaxis objects con valores predeterminados

let {name2, age2, alias2, email = 'emailaaa.com'} = person
console.log(name2)
console.log(age2)
console.log(alias2)   // no existen
console.log(email)


// sintaxis objects con nuevos nombres de variables

let {name: name3, age: age3, alias: alias3} = person
console.log(name3)
console.log(age3)
console.log(alias3)

// objetos anidados

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

let {name: name4, job: { name: jobName} } = person3

console.log(name4)
console.log(jobName)

//propagacion (...)

// sintaxis array

let myArray3 = [...myArray, 5, 6]
console.log(myArray3)

// copia de arrays

let myArray2 = [...myArray] // copia
console.log(myArray2)

// combinacion de arrays

let myArray4 = [...myArray, ...myArray2, ...myArray3]

console.log(myArray4)

// sintaxis objetos

let person4 = {...person, email: 'xdxdxd.com'}
console.log(person4)

//copia de objetos

let person5 = {...person}
console.log(person5)
