
// ************ REDUCE ************

// Podemos pensar a reduce como una prensa comprimidora/acumuladora, que necesita un array y un valor inicial que le tenemos que indicar nosotros, y con cada vuelta de la palanca, aplasta y opera con cada uno de los elementos del array, y tras operar con cada uno de los elementos del array, nos devuelve un solo valor como resultado.

/* EJEMPLO SIN REDUCE
const numbers = [3, 10, 20, 50];
let total = 0;
for (let number of numbers) {
    total *= number;
}
*/

// CON REDUCE

const numbers = [3, 10, 20, 50];
let total = numbers.reduce( (acc, number) => {
    return acc + number;
}, 0)
console.log(total); // 83
// El primer parametro del reduce es la funcion acumuladora, que recibe dos parametros: el acumulador y el elemento actual. El segundo parametro es el valor inicial del acumulador, que en este caso es 0. El resultado de la funcion acumuladora se convierte en el nuevo valor del acumulador para la siguiente iteracion.

/* con callback
const numbers = [3, 10, 20, 50];
const sum = (acc, number) => acc + number;
let total = numbers.reduce(sum, 0)

EN una sola linea todo:
const numbers = [3, 10, 20, 50];
let total = numbers.reduce((acc, number) => acc + number, 0)
*/

// SI NO PONEMOS EL VALOR INICIAL, EL PRIMER ELEMENTO DEL ARRAY SE CONVERTIRA EN EL VALOR INICIAL DEL ACUMULADOR Y EL SEGUNDO ELEMENTO DEL ARRAY SE CONVERTIRA EN EL ELEMENTO ACTUAL. SI NO HAY ELEMENTOS EN EL ARRAY, REDUCE DEVOLVERA UN ERROR. ES POR ELLO QUE ES RECOMENDABLE EJECUTAR LA SENTENCIA DEL REDUCE, SIEMPRE ASEGURANDO QUE EL ARRAY TENGA ELEMTOS Y NO ESTE VACIO, ESTO SE PUEDE HACER ASI:

const numeros = [];

const acumular = (acc, numero) => acc + numero;
let total2 = numeros.length > 0 ? numeros.reduce(acumular, 0) : 0;


// PODRIAMOS TAMBIEN OBTENER UN NUEVO OBJETO O UN NUEVO ARRAY
const numeros2 = [71, 41, 19, 88, 3, 65];

const acumularDobles = (acc, numero) => {

    return [...acc, numero * 2]; // El spread operator lo que hace aqui es copiar el array acumulador y agregarle el nuevo elemento, que en este caso es el numero multiplicado por 2. De esta manera, cada vez que se ejecuta la funcion, se va creando un nuevo array con los elementos acumulados hasta ese momento. Y como el valor inicial es un array vacio, el primer elemento que se agrega es el primer elemento del array multiplicado por 2. El segundo elemento que se agrega es el segundo elemento del array multiplicado por 2, y asi sucesivamente. Al final, se devuelve un nuevo array con todos los elementos multiplicados por 2.
}
const dobles = numeros2.reduce(acumularDobles, []); // De esta manera recibira un array vacio como acumulador y valor inicial, y despues cada elemento
