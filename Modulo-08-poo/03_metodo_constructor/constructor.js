// Los constructores se escriben como si fuesen funciones, pero sin la palabra reservada function. Y se usa la palabra reservada constructor
// Los constructores se ejecutan automaticamente al crear una instancia de la clase al hacer uso de la palabra reservada new
// Pueden recibir parametros para inicializar propiedades de la clase por el constructor ser un tipo de funcion

class Persona {
    // Constructor
    constructor(prueba) {
        console.log("Se ha ejecutado el metodo constructor de la clase Persona");
        console.log(prueba);
    }
};

class Mascota {
    constructor() {
        console.log("Se ha ejecutado el metodo constructor de la clase Mascota");
    }
};

// Instancia de la clase Persona
const JohnDoe = new Persona("Hola soy un texto de prueba");
console.log(JohnDoe);

const Koda = new Mascota();
console.log(Koda);