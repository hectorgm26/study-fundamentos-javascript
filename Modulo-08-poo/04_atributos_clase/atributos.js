// Son particularidades de los objetos a los cuales podemos asignarles valores
// Los objetos literales tienen key y value, y a ese conjunto se le llama atributo o propiedades
// Los atributos de una clase se definen en el constructor de la clase, con la palabra reservada this, que hara referencia a la instancia de la clase creada
// El objetivo de que los atributos esten dentro del constructor, es que podamos definir que a traves de los argumentos, el constructor cuando sea instanciado, le podamos asignar un valor. Es decir, como parametro recibiremos un valor para el atributo, y ese valor sera el asignado para la instancia de la clase

// NO NECESARIAMENTE PARA INSTANCIAR UNA CLASE, SE DEBEN UTILIZAR TODOS LOS ATRIBUTOS QUE SE DEFINAN EN EL CONSTRUCTOR, PODEMOS HACERLO CON UNO SOLO, O CON NINGUNO, O CON TODOS, Y NO HAY PROBLEMA. SI NO SE LE ASIGNA UN VALOR A UN ATRIBUTO, QUEDARA COMO UNDEFINED. SI SE LE ASIGNA UN VALOR A UN ATRIBUTO QUE NO SE ENCUENTRA DEFINIDO EN EL CONSTRUCTOR, NO HABRA PROBLEMA TAMPOCO, YA QUE ES UNA PROPIEDAD DEL OBJETO LITERAL QUE SE CREO AL INSTANCIAR LA CLASE

// LAS ULTIMAS VERSIONES DE JS IMPLEMENTARON ATRIBUTOS PRIVADOS, a travs de la notacion de #, que se declaran antes del constructor, y en el constructor se deben referencias luego del this.#

// LOS ATRIBUTOS PRIVADOS SON AQUELLOS QUE SOLAMENTE PUEDEN SER ACCEDIDOS DE FORMA INTERNAMENTE POR LA CLASE, Y NO PUEDEN SER ACCEDIDOS DESDE FUERA, SALVO QUE SE HAGA A TRAVES DE UN METODO PUBLICO QUE LOS RETORNE COMO VALOR (GETTER Y SETTER). Si se trata de acceder a un atributo privado desde fuera de la clase, se lanzara un undefined. SIEMPRE SE RECOMIENDA POR BUENA PRACTICA QUE TODOS LOS ATRIBUTOS SEAN PRIVADOS


class Persona {
    #nombre; // Atributo privado
    // Constructor
    constructor(nombre, apellido, edad) {
        // Atributos o propiedades (no hay problema con el privado, ya que al utilizarse internamente en la clase, tiene acceso a el)
        this.#nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
};

class Mascota {
    #nombre;
    constructor(nombre, tipo) {
        this.#nombre = nombre;
        this.tipo = tipo;
    }
};

// Instancia de la clase Persona
const johnDoe = new Persona("John")
const marieSmithers = new Persona("Marie")
console.log(johnDoe);
console.log(marieSmithers);
// SI SE INSTANCIA UN OBJETO SIN PASARLE TODOS LOS ARGUMENTOS, LOS QUE NO SE LE PASEN QUEDARAN COMO UNDEFINED

const koda = new Mascota("Koda", "Perro");
console.log(koda);

// PARA ACCEDER A UNA PROPIEDAD O A UNOS ATRIBUTOS EN ESPECIFICOS, SE USA LA MISMA NOTACION QUE EN LOS OBJETOS LITERALES, ES DECIR, CON PUNTO O CORCHETES
console.log(koda.nombre);