// Los arrays/vectores/arreglos/matrices es una coleccion de datos almacenadas en una misma variable
// Los corchetes son necesarios para definir un array, y los elementos se separan por comas

// Tienen un indice y una longitud (el largo y la cantidad de elementos, y ese empieza de 1, pero el índice empieza de 0)
// Entonces la cantida dd ei indices del array sera la cantidad de elementos menos 1


const mascotas = ["perro", "gato", "loro", "pez", "tortuga"];
console.log(mascotas);
console.log(mascotas[0]); // con el nombre del array y corchetes se accede a los elementos del array a través de su índice, que comienza en 0

// Siempre que intentemos acceder a un indice que no existe, nos devolvera undefined

// pueden tener diferentes tipos de datos dentro de un mismo array
const mixto = ["perro", 1, true, null, undefined, [1, 2, 3]];

const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
console.log(meses[9]); // Octubre

// PARA IMPRIMIR TODOS LOS VALORES DE UN ARRAY, SE PUEDE HACER CON UN BUCLE FOR
// length es una propiedad que nos dice la longitud del array, o sea la cantidad de elementos que tiene
// Si el indice arranca en 0, y se usa length, el bucle for no necesitara restar 1 al length,
// porque el for va a ir hasta length - 1, es decir, al valor anterior al length. PERO SI SE INICIA EN 1, SI HAY QUE RESTAR 1 AL LENGTH
for (let i = 0; i < meses.length; i++) {
    console.log(`El mes: ${meses[i]} esta en el indice ${i}`);
}


// Javascript tiene una nueva funcion llamada for of, que permite recorrer un array sin necesidad de usar el indice
// Se usa cuando no se necesita el indice, solo el valor
// Se puede usar para recorrer cualquier iterable, como un string, un array, etc
// ELEMENTOS: la variable que representara a cada uno de los elementos, y el array que se va a recorrer
// La variable singular representa a cada uno de los elementos del array, sera local y solo existira dentro del for of
for (let mes of meses) {
  console.log(`El mes: ${mes}`);
}

// Tambien se puede usar el forEach, que es un metodo de los arrays que permite recorrerlos
// Se le pasa una funcion que recibe el elemento y el indice, y se ejecuta para cada elemento del array
// Se puede usar una funcion normal o una funcion flecha
// El forEach no devuelve nada, solo ejecuta la funcion para cada elemento del array
// ELEMENTOS: se le pasa el array que se va a recorrer + .forEach + la funcion que se va a ejecutar para cada elemento
mascotas.forEach(mascota => {
    console.log(mascota);
});