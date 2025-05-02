// const persona1 = ['Juan', 32, "Ingeniero", "correo@correo.com, ["Chile", "Santiago"]];

// a diferencia del array que para identificar un elemento usamos el indice, los objetos usan pares clave-valor que permiten identificar el elemento por su clave
// para colocar la key con espacios, se usan comillas dobles o simples
// los valores se indican con dos puntos y se separan por comas
// los objetos pueden tener diferentes tipos de datos, incluso otros objetos y arrays

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
    mascotas: null // Esto es ideal para indicar que no tiene mascotas, pero no es necesario, ya que se puede omitir la propiedad si no tiene valor
};

const yaniraFontalba = {
    email: "yaniuwu@uwu.cl",
    edad: 25,
    ubicacion: {
        pais: "Chile",
        ciudad: "Santiago",
    },
    nombre: "Yanira Fontalba",
    estaCasada: false,
    mascotas: ["Kobu", "Kitty"]
};
// se puede crear un objeto de la misma manera que el anterior, pero con otro nombre, y tambien se pueden colocar los mismos valores, pero no es necesario que sean iguales, ya que cada objeto es independiente y puede tener diferentes valores, inclusive distinto orden de los valores, pero es recomendable que el orden sea el mismo para facilitar la lectura y comprensión del código, aunque no es necesario.
// Lo ideal que todos los datos sigan un mismo formato, para que sea más fácil de leer y entender el código


// PARA ACCEDER AL VALOR DE UNA KEY EN ESPECIFICO
// se usa el nombre del objeto seguido de un punto y el nombre de la key
console.log(hectorGonzalez.nombre);
console.log(hectorGonzalez["email"]); // ESTA FORMA DE ACCEDER NO SE SUELE UTILIZAR MUCHO
console.log(yaniraFontalba.nombre);
console.log(hectorGonzalez.email);

// ubicacion es un objeto, por lo que se puede acceder al objeto completo, o a sus valores de la misma manera que un objeto, es decir, usando el nombre del objeto seguido de un punto y el nombre de la key
console.log(hectorGonzalez.ubicacion);
console.log(hectorGonzalez.ubicacion.pais);
console.log(hectorGonzalez.ubicacion.ciudad);

// mascotas es un array, por lo que se puede acceder al array completo, o a sus valores de la misma manera que un array, es decir, usando el nombre del objeto seguido de un punto y el nombre de la key, y luego el indice del array entre corchetes
console.log(yaniraFontalba.mascotas);
console.log(yaniraFontalba.mascotas[0]); // kobu

// y cuando queremos acceder a una key que no existe, nos devuelve undefined, pero no da error, porque simplemente no existe la key
console.log(yaniraFontalba.hobbies);