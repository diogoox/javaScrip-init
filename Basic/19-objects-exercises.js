// 1. Crea un objeto con 3 propiedades
let persona = {
    nombre: 'Diogo',
    edad: 18,
    email: 'barretodiogo128@gmail.com'
};


// 2. Accede y muestra su valor
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.email);

// 3. Agrega una nueva propiedad

persona.alias = 'diogox';
console.log(persona);

// 4. Elimina una de las 3 primeras propiedades
delete persona.edad;
console.log(persona);

// 5. Agrega una función e invócala

persona.saludar = function() {
    console.log('Hola, soy ' + this.nombre);
};
persona.saludar();


// 6. Itera las propiedades del objeto

for (let clave in persona) {
    console.log(clave + ': ' + persona[clave]);
}


// 7. Crea un objeto anidado

let persona2 = {
    nombre: 'Leo',
    edad: 20,
    contacto: {
        telefono: '123456',
        ciudad: 'Asunción',
        mostrarInfo: function() {
            console.log(`Teléfono: ${this.telefono}, Ciudad: ${this.ciudad}`);
        }
    }
};

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(persona2.contacto.telefono);
console.log(persona2.contacto.ciudad);
persona2.contacto.mostrarInfo();

// 9. Comprueba si los dos objetos creados son iguales

console.log(persona === persona2); 

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(persona.nombre === persona2.nombre);