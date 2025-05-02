
// Es un metodo estatico de la clase Object que sirve para crear un nuevo objeto, con el prototipo de otro objeto existente que le pasamos por parametro.

// Object.create() es la manera mas simple de crear objetos con cierto prototipo/molde, sin necesidad de usar la palabra reservada new ni clases.

// Object.create() recibe como primer argumento el objeto que queremos usar como prototipo, y un segundo argumento opcional que contiene descriptores para las propiedades del nuevo objeto, es decir, que propiedades queremos que tenga el nuevo objeto y que valores iniciales queremos que tenga.

const persona = {

    init: function(nombre) {
        this.nombre = nombre;
        return this; // El patron return.this sirve para ir encadenando invocaciones a distintos metodos del objeto
    },

    saludar: function() {
        console.log(`Hola, mi nombre es ${this.nombre}`);
        return this;
    }
}

const sacha = Object.create(persona).init('Sacha').saludar(); // Se encadenan los metodos create y init, y luego se llama al metodo saludar. Se crea un nuevo objeto sacha que tiene como prototipo el objeto persona, y se le asigna el nombre 'Sacha'.



// Ejemplo con segundo argumento
const persona2 = {
    nombre: 'Sacha',
    edad: 28,

    saludar: function() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    }
}

const sacha2 = Object.create(persona2,  {
    nombre: { value: 'Sacha', writable: true, enumerable: true, configurable: true },
    edad: { value: 28, writable: true, enumerable: true, configurable: true }
});
// Se crea un nuevo objeto sacha2 que tiene como prototipo el objeto persona2, y se le asigna el nombre 'Sacha' y la edad 28. Se pueden definir propiedades con el segundo argumento de Object.create().

sacha2.saludar(); // Se llama al metodo saludar del objeto sacha2, que tiene como prototipo el objeto persona2. Se imprime en consola 'Hola, mi nombre es Sacha y tengo 28 años'.