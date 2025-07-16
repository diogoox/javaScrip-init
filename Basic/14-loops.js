// loop o bucles

// for

for (let i = 0; i < 5; i++) {
    console.log(`hola ${i}`)
}

const numbers = [1, 2, 3, 4, 5]

for (let i = 0; i < numbers.length; i++) {
    console.log(`elemento: ${numbers[i]}`)
}

// while
let i = 0
while (i < 5) {
    console.log(`hola ${i}`)
    i++
}

// while(true) { } = bucle infinito

// do while

i = 6
do {
    console.log(`hola ${i}`)
    i++
} while(i < 5)

// for of
myArray = [1, 2, 3, 4]

mySet = new Set(["Brais", "Moure", "mouredev", 37, true, 'barretodiogo128@gmail.com'])

myMap = new Map([
    ['name', 'brais'],
    ['email', 'barretodiogo128@gmail.com'],
    ['age', 37]
])

myString = 'hola javascrip'

for (let valor of myArray) {
    console.log(valor)
} 
for (let valor of mySet) {
    console.log(valor)
} 
for (let valor of myMap) {
    console.log(valor)
} 
for (let valor of myString) {
    console.log(valor)
} 


// buenas practicas

// break y continue

for (let i = 0; i < 10; i++) {
    if(i == 5) {
        continue
    } else if(i == 7) {
        break
    }
    console.log(`hola ${i}`)
}