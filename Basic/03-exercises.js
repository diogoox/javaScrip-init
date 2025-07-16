// 1. Escribe un comentario en una línea

// Este es un comentario en una sola línea


// 2. Escribe un comentario en varias líneas

/*
Este es un comentario
en varias líneas
para practicar
*/


// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

// (string)
let myName = 'Diogo';
let alias = 'diogoox';
let email = 'barretodiogo128@gmail.com';

// (number)
let age = 19;
let height = 1.83;

// (boolean)
let isTeacher = false;
let isStudent = true;

// (undefined)
let undefinedValue;

// (null)
let nullValue = null;

// (symbol)
let mySymbol = Symbol('mysymbol');

// (BigInt)
let myBigInt1 = BigInt(12345678901234567890);
let myBigInt2 = 12345678901234567890n;


// 4. Imprime por consola el valor de todas las variables

console.log(myName);
console.log(alias);
console.log(email);

console.log(age);
console.log(height);

console.log(isTeacher);
console.log(isStudent);

console.log(undefinedValue);

console.log(nullValue);

console.log(mySymbol);

console.log(myBigInt1);
console.log(myBigInt2);


// 5. Imprime por consola el tipo de todas las variables

console.log(typeof myName);
console.log(typeof alias);
console.log(typeof email);

console.log(typeof age);
console.log(typeof height);

console.log(typeof isTeacher);
console.log(typeof isStudent);

console.log(typeof undefinedValue);

console.log(typeof nullValue); // ¡Ojo! Esto devuelve "object" por una peculiaridad de JS

console.log(typeof mySymbol);

console.log(typeof myBigInt1);
console.log(typeof myBigInt2);


// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

myName = 'Carlos';
alias = 'carlitox';
email = 'carlos@example.com';

age = 25;
height = 1.75;

isTeacher = true;
isStudent = false;

undefinedValue = undefined;

nullValue = null;

mySymbol = Symbol('nuevoSimbolo');

myBigInt1 = BigInt(98765432109876543210);
myBigInt2 = 98765432109876543210n;


// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

myName = 123;               // number
alias = true;               // boolean
email = null;               // null

age = 'veinticinco';        // string
height = false;             // boolean

isTeacher = 'sí';           // string
isStudent = 0;              // number

undefinedValue = 'ahora definido'; // string

nullValue = 999;            // number

mySymbol = 'no es más un símbolo'; // string

myBigInt1 = 'muy grande';   // string
myBigInt2 = true;           // boolean


// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const constName = 'Constante';
const constAge = 30;
const constBool = true;
const constUndefined = undefined;
const constNull = null;
const constSymbol = Symbol('constSymbol');
const constBigInt = 1234567890123456789012345n;


// 9. A continuación, modifica los valores de las constantes

// ❌ Esto generaría error, así que lo comentamos:

// constName = 'Otro nombre';        // Error
// constAge = 31;                    // Error
// constBool = false;                // Error
// constUndefined = 'definido';     // Error
// constNull = 0;                    // Error
// constSymbol = Symbol('nuevo');   // Error
// constBigInt = 1n;                // Error


// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

// Ya fueron comentadas en el paso 9 arriba
