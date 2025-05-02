// La herencia es una forma de reutilizar código en JavaScript con el fin de crear una jerarquía de clases
// y compartir propiedades y métodos entre ellas. En JavaScript, la herencia se implementa a través de prototipos.
// Esto significa que un objeto puede heredar propiedades y métodos de otro objeto.
// La herencia permite crear clases más específicas a partir de clases más generales, lo que facilita la organización y el mantenimiento del código.
// En este ejemplo, crearemos una clase base llamada "Animal" y dos clases derivadas llamadas "Perro" y "Gato".

// Se usa la palabra clave "extends" para indicar que una clase hereda de otra.

class Persona {
    #nombre;
    #apellido;
    #edad;

    constructor(nombre, apellido) {
        this.#nombre = nombre;
        this.#apellido = apellido;
    }

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

    setEdad(edad) {
        this.#edad = edad;
    }
};

// Al hacer extends, inmediatamente se heredan los atributos y métodos de la clase padre, sin necesidad de volver a definirlos.
// Lo que si es necesario definir como setear los atributos de la clase padre, ya que no se puede acceder a ellos directamente desde la clase hija.
class Estudiante extends Persona {
    #curso;

    constructor(nombre, apellido) {
        super(nombre, apellido); // Con super llamamos al constructor de la clase padre, porque ese constructor seteara de entrada los atributos de la clase padre, ya que ese constructor tiene la logica para setearlos. Y dentro de super se le pasan los atributos que recibe el constructor de la clase hija.
    }

    getCurso() {
        return this.#curso;
    }

    setCurso(curso) {
        if (curso instanceof Curso) {
            this.#curso = curso;
        }
    }
};

class Curso {
    #nombre;
    #materias = []; // Podemos inicializar valores por defecto en los atributos de la clase. Y en este caso inicializamos un array vacio para tener acceso inmediato al metodo push.

    constructor(nombre) {
        this.#nombre = nombre;
    }

    getNombre() {
        return this.#nombre;
    }

    getMaterias() {
        return this.#materias;
    }

    setMateria(unaMateria) {
        this.#materias.push(unaMateria);
    }
}

const hectorGonzalez = new Estudiante("Hector", "Gonzalez");
const cursoFrontend = new Curso("Frontend con JS");

cursoFrontend.setMateria({lenguaje: "HTML", cargaHoraria: 40});
cursoFrontend.setMateria({lenguaje: "CSS", cargaHoraria: 32});
cursoFrontend.setMateria({lenguaje: "JavaScript", cargaHoraria: 680});

hectorGonzalez.setCurso(cursoFrontend);

console.log(`Hola, mi nombre es ${hectorGonzalez.getNombreCompleto()}`);
const cursoHector = hectorGonzalez.getCurso();
console.log(`Estoy cursando: ${cursoHector.getNombre()}`);
// con chaining quedaria: console.log(`Estoy cursando: ${hectorGonzalez.getCurso().getNombre()}`);

for(const unaMateria of cursoHector.getMaterias()) {
    console.log(`La Materia: ${unaMateria.lenguaje}, carga horaria: ${unaMateria.cargaHoraria} horas`);
}
// PODEMOS USAR EL chaining, que es una forma de encadenar metodos para acceder a los atributos de la clase padre desde la clase hija. En este caso, primero accedemos al getCurso() de la clase Estudiante, y luego al getNombre() propio de la clase Curso. Ejemplo: hectorGonzalez.getCurso().getNombre()