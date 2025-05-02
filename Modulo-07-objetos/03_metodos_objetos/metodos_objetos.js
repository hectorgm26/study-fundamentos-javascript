// Los objetos tienen funcionalidades, los cuales se llaman métodos.
// Los métodos son funciones que están dentro de un objeto de poder hacer algo, haciendo referencia a una característica del objeto.

// Se accede a los métodos de un objeto de la misma manera que se accede a sus propiedades, usando el operador punto (.) o corchetes ([]).
// Los métodos pueden recibir parámetros y devolver valores, al igual que las funciones normales, y se les llama con paréntesis () después de su nombre.
// Los métodos pueden ser funciones anónimas o funciones nombradas.

const hectorGonzalez = {
    nombre: "Hector Gonzalez",
    edad: 27,
    email: "hhector.agm@gmail.com",
    estaCasada: false,
    ubicacion: {
        pais: "Chile",
        ciudad: "Santiago",
    },
    hobbies: ["programar", "jugar", "leer"],

    saludar: function () {
        return "¿Hola como estas?";
    },

    decirNombre: function () {
        return `Hola, mi nombre es ${this.nombre}`;
    // Si se coloca solo nombre dara error, ya que no sabe a que nombre se refiere, por eso se usa this.nombre, para referirse al objeto actual que ejecuta la funcion o llama la propiedad, es decir a si mismo
    // this.nombre dentro del objeto seria lo mismo que decir hectorGonzalez.nombre
    },

    obtenerNombreEdad: function () {
        return `${this.nombre} - ${this.edad}`;
    },

    mascotas: ["Pelusa", "Otito", "Koda"],
    obtenerMascotas: function (indice) {
        if (indice >= this.mascotas.length || indice < 0) {
            return `No tienes mascotas en la posicion ${indice}, intenta con un numero menor a ${this.mascotas.length}`;
        }
        return this.mascotas[indice];
    }

// USAR EL THIS TIENE UNA COMPLICACION EN LAS FUNCIONES ARROW,
// PORQUE DENTRO DE JS LAS ARROW FUNCTIONS TIENEN UN SCOPE QUE VA MAS ALLA DEL OBJETO DONDE SE ESPECIFICA LA FUNCION
// EL THIS EN UNA FUNCION FLECHA NO HARA REFERENCIA AL OBJETO QUE SE ENCUENTA, SI NO HARA REFERENCIA A UN OBJETO GLOBAL QUE NO TIENE PROPIEDADES

// RECOMENDACION: NO USAR ARROW FUNCTIONS DENTRO DE UN OBJETO, SI NO FUNCIONES NORMALES, ES DECIR, ESPECIFICAR LA PALABRA FUNCTION

// nombreEdad: `${this.nombre} - ${this.edad}`; DARA ERROR
// RECOMENDACION 2: SIEMPRE QUE SE REQUIERE USAR UN THIS, DEBE IR DENTRO DE UNA FUNCION NORMAL
};

console.log(hectorGonzalez.saludar());
console.log(hectorGonzalez.decirNombre());
console.log(hectorGonzalez.obtenerNombreEdad());
console.log(hectorGonzalez.obtenerMascotas(1));