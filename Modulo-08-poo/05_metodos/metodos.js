// Los metodos son funciones que nos permiten acceder a la informacion directa de los atributos de una clase, sean publicos o privados.
// Por convencion se utilizan Getters para obtener el valor de los atributos, y Setters para modificar el valor de los atributos

class Persona {
    #nombre;
    #apellido;
    #edad;
    #mascota;

    constructor(nombre, apellido) {
        this.#nombre = nombre;
        this.#apellido = apellido;
    }

    // Metodos
    getNombre() {
        return this.#nombre;
    }

    getApellido() {
        return this.#apellido
    }

    getNombreCompleto() {
        return `${this.#nombre} ${this.#apellido}`;
    }

    getEdad() {
        return this.#edad;
    }

    // Los setter de atributos privados en sus argumentos no deben tener el simbolo de #, ya que no son privados, solo los atributos lo son
    // y en el this. se hace referencia al atributo privado, y se le asigna el valor del argumento que no tiene el simbolo de #, por pasarlo nosotros
    setEdad(edad) {
        this.#edad = edad;
    }

    getMascota() {
        return this.#mascota;
    }

    setMascota(laMascota) {
        if (laMascota instanceof Mascota) { // instanceof Verifica si lo que recibimos es la instancia de una clase llamada Mascota, y no un objeto cualquiera o cualquier otra cosa que no querramos recibir
            this.#mascota = laMascota;
            return; // Siempre que se coloca un return, se termina la ejecucion de la funcion, por lo que no es necesario seguir ejecutando el resto del codigo
        }
        console.log("ERROR, intentaste setear algo que no es una mascota");
        console.log(`Estas en la persona ${this.getNombreCompleto()}`)
    }
};

class Mascota {
    #nombre;
    #tipo;

    constructor(nombre, tipo) {
        this.#nombre = nombre;
        this.#tipo = tipo;
    }

    getInformacion() {
        return `${this.#nombre} es un ${this.#tipo}`;
    }
};

// Instancias de las clases
const johnDoe = new Persona("John", "Doe");
const marieSmithers = new Persona("Marie", "Smithers");
// johnDoe.setEdad(25);
// marieSmithers.setEdad(30);

const koda = new Mascota("Koda", "Perro");

marieSmithers.setMascota(koda);
johnDoe.setMascota("Una mascota falsa");

console.log(johnDoe.getNombreCompleto());
// console.log(johnDoe.getEdad());
console.log(marieSmithers.getNombreCompleto());
// console.log(marieSmithers.getEdad());

const mascotaMarie = marieSmithers.getMascota();
console.log(mascotaMarie.getInformacion());
// ESTO PORQUE MARIE SMITHERS PUEDE ACCEDER A LA MASCOTA QUE TIENE, PERO LA MASCOTA TIENE SU PROPIA INFORMACION Y METODOS, Y LA CLASE PERSONA NO TIENE ACCESO A LOS METODOS DE LA CLASE MASCOTA, POR LO QUE HAY QUE HACER UNA INSTANCIA DE LA CLASE MASCOTA PARA PODER ACCEDER A SUS METODOS