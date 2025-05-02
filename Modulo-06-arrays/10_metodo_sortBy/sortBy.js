// El metodo sortBy en arrays permite ordenar un arreglo de objetos segun una propiedad especifica, en este caso, por el nombre y apellido de los usuarios. El resultado es un nuevo arreglo ordenado, sin modificar el arreglo original.

// Ejemplo basico de uso del metodo sortBy en arrays, sin lodash
const users = [
    {id: 1, nombre: 'Juan', apellido: 'Pérez'},
    {id: 2, nombre: 'Ana', apellido: 'García'},
    {id: 3, nombre: 'Pedro', apellido: 'López'}
];

// Creamos una función llamada sortBy que sirve para ordenar cualquier arreglo de objetos
// Recibe dos parámetros:
// - arr: el arreglo que queremos ordenar (por ejemplo, el arreglo de usuarios)
// - prop: el nombre de la propiedad por la cual queremos ordenar (como 'nombre' o 'apellido')
const sortBy = (arr, prop) => {
    // Usamos el método .sort() de JavaScript, que ordena los elementos del arreglo. sort() recibe una función de comparación que dice cómo comparar dos elementos: a y b.
    return arr.sort((a, b) => {
        // a[prop] significa "el valor de la propiedad 'prop' en el objeto a".
        // Por ejemplo, si prop es 'nombre', entonces a[prop] es a['nombre'], o sea, el nombre del usuario a.

        if (a[prop] < b[prop]) {
            // Si el valor de a es menor que el de b (alfabéticamente), ponemos a antes que b en el arreglo
            return -1;
        }
        if (a[prop] > b[prop]) {
            // Si el valor de a es mayor que el de b, ponemos b antes que a
            return 1;
        }
        // Si son iguales, no cambiamos el orden
        return 0;
    });
}

// Llamamos a la función sortBy, pasándole el arreglo de usuarios y la propiedad 'nombre'.
// Esto quiere decir que queremos ordenar los usuarios por su nombre.
const sortedUsers = sortBy(users, 'nombre');

// Mostramos el arreglo ya ordenado por nombre en consola.
console.log(sortedUsers);
// Resultado:
// [
//   { id: 2, nombre: 'Ana', apellido: 'García' },
//   { id: 1, nombre: 'Juan', apellido: 'Pérez' },
//   { id: 3, nombre: 'Pedro', apellido: 'López' }
// ]


// Para trabajar de forma mas facil y rapida, podemos usar la libreria lodash, que nos permite hacer lo mismo de una forma mas sencilla y rapida. En este caso, ordenar el arreglo de usuarios por nombre y apellido. Lodash es una libreria de utilidades para javascript, que nos ayuda a trabajar con arreglos, objetos y otras estructuras de datos, permitiendo hacer operaciones de manera mas sencilla y rapida, como por ejemplo, transformar un arreglo de objetos en un objeto con una clave especifica, o filtrar un arreglo de objetos segun una condicion, entre otras cosas. En este caso, la utilizamos para capitalizar el nombre y apellido de los usuarios (capitalizar es poner la primera letra en mayuscula y el resto en minuscula).

const _ = require('lodash');

// Creamos una función llamada sortByLodash que sirve para ordenar cualquier arreglo de objetos
// Recibe dos parámetros:
// - arr: el arreglo que queremos ordenar (por ejemplo, el arreglo de usuarios)
// - prop: el nombre de la propiedad por la cual queremos ordenar (como 'nombre' o 'apellido')
const sortByLodash = (arr, prop) => {
    // Usamos el método _.sortBy() de lodash, que ordena los elementos del arreglo. sortBy() recibe dos parámetros: el arreglo y la propiedad por la cual queremos ordenar.
    return _.sortBy(arr, prop);
}

// Llamamos a la función sortByLodash, pasándole el arreglo de usuarios y la propiedad 'nombre'.
// Esto quiere decir que queremos ordenar los usuarios por su nombre.
const sortedUsersLodash = sortByLodash(users, 'nombre');

// Mostramos el arreglo ya ordenado por nombre en consola.
console.log(sortedUsersLodash);

// Resultado:
// [
//   { id: 2, nombre: 'Ana', apellido: 'García' },
//   { id: 1, nombre: 'Juan', apellido: 'Pérez' },
//   { id: 3, nombre: 'Pedro', apellido: 'López' }
// ]

