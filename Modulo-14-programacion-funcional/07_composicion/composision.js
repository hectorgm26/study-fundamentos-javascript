
// Composision es el arte de ir construyendo funciones mas grande, es base a funciones mas pequeñas

// Son faciles de probar y de intuir, ya que las funciones pequeñas son faciles de entender

import _ from 'lodash';

// ------------------------------------------------------------------
// FUNCION COMPOSE EXPLICADA
// ------------------------------------------------------------------

// Compose es una función que permite combinar varias funciones pequeñas en una sola.
// Se lee y se ejecuta de derecha a izquierda.
// Por ejemplo: compose(f3, f2, f1)(valor) equivale a f3(f2(f1(valor)))

const compose = (...fns) => {
    // ...fns significa que puede recibir cualquier cantidad de funciones como argumentos
    // y las guarda en un arreglo llamado "fns"
    
    return (x) => {
        // Esta función que devuelve "compose" recibe un valor x.
        // Este valor x va a ser procesado por todas las funciones que pasamos antes a compose.

        // Usamos reduceRight para aplicar las funciones de derecha a izquierda.
        // reduceRight toma como valor inicial el valor de x (el input)
        // y va aplicando cada función f sobre el resultado anterior y.

        // Paso a paso con ejemplo:
        // Si tenemos compose(f3, f2, f1)
        // Y hacemos compose(f3, f2, f1)(10)
        // Entonces se ejecuta:
        // f1(10) => resultado1
        // f2(resultado1) => resultado2
        // f3(resultado2) => resultadoFinal

        return fns.reduceRight((y, f) => {
            // f es la función actual del array de funciones (empezando desde la derecha)
            // y es el resultado acumulado (comienza siendo x)
            return f(y); // Aplicamos la función f al resultado anterior y
        }, x); // x es el valor inicial que pasamos a la composición
    };
};

// ------------------------------------------------------------------
// FUNCIONES PARA TRANSFORMAR DATOS
// ------------------------------------------------------------------

const users = [
    { id: 1, nombre: 'jUAn', apellido: 'péREz' }
];

// head toma un arreglo y devuelve el primer elemento
const head = (array) => array[0];

// Esta función capitaliza el nombre y apellido de un usuario
const capitalizaNombreYApellido = (user) => ({
    nombre: _.upperFirst(_.toLower(user.nombre)),   // → "Juan"
    apellido: _.upperFirst(_.toLower(user.apellido)) // → "Pérez"
});

// Esta función toma un objeto con nombre y apellido y devuelve un string con el nombre completo
const generarNombre = (x) => `${x.nombre} ${x.apellido}`;

// ------------------------------------------------------------------
// APLICACIÓN DE COMPOSICIÓN DE FUNCIONES
// ------------------------------------------------------------------

// Ahora creamos una función compuesta que hace lo siguiente:
// 1. Toma el arreglo de usuarios
// 2. Le aplica head para obtener el primer usuario
// 3. Le aplica capitalizaNombreYApellido para formatear nombre y apellido
// 4. Le aplica generarNombre para devolver un string con el nombre completo

const getNombreCompleto = compose(
    generarNombre,               // Tercer paso: genera el string "Juan Pérez"
    capitalizaNombreYApellido,   // Segundo paso: capitaliza nombre y apellido
    head                         // Primer paso: obtiene el primer usuario del arreglo
);
// POINT FREE = Es una forma de escribir funciones en la que no se especifica el argumento de entrada, sino que se utilizan funciones que ya tienen su propio argumento. En este caso, estamos utilizando la funcion head para obtener el primer elemento del arreglo de usuarios, y luego pasamos ese elemento a las funciones capitalizaNombreYApellido y generarNombre. Esto nos permite escribir la funcion getNombreCompleto sin tener que preocuparnos por el argumento de entrada, ya que lo estamos obteniendo de otra funcion (head).

// Ejecutamos la función con el arreglo de usuarios
const x = getNombreCompleto(users);

console.log(x); // → "Juan Pérez"