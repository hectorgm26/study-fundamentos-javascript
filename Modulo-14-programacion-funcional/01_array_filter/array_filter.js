
// Filter permite crear un array nuevo de igual o menor cantidad de elementos que el array original con el que estamos trabajando

// Filter sirve para cuando queremos quedarnos solamente con una parte de los elementos del array. El objetivo es tener un array filtrado con los elementos que cumplen una condición específica.

// El metodo filter es inmutable, es decir, no modifica el array original, sino que crea un nuevo array con los elementos que cumplen la condición

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const mascotas = [
    { nombre: "Puchini", edad: 12, raza: "perro" },
    { nombre: "Chanchito feliz", edad: 3, raza: "perro" },
    { nombre: "Pulga", edad: 10, raza: "perro" },
    { nombre: "Pelusa", edad: 16, raza: "gato" },
]

// Filtramos los números menores a 5, siempre cuando la condicion se cumpla, devolviendo true, y generando un array nuevo con los elementos que cumplen la condición.
const filterNumbers = numbers.filter( x => x < 5);
console.log(filterNumbers);
/*
Es lo mismo que:
const filterNumbers = numbers.filter((x) => {
    return x < 5;
})
*/

const filterMascotas = mascotas.filter( (mascota) => {
    return mascota.raza == "perro"; // Devuelve el elemento completo que cumpla la condicion y no la propiedad específica
})
/*
Es lo mismo que:
const filterMascotas = mascotas.filter( mascota => mascota.raza == "perro");
*/

console.log(filterMascotas);

// Al argumento de la arrow fuction se le puede poner el nombre que queramos, no necesariamente tiene que ser "x" o "mascota".
// PERO es recomendable que el nombre del argumento sea lo más descriptivo posible, para que el código sea más legible y entendible. Por ejemplo, si estamos filtrando un array de números, es mejor usar "numero" en lugar de "x". Si estamos filtrando un array de objetos, es mejor usar "mascota" en lugar de "x".


const gatos = mascotas.filter( (mascota) => {
    return mascota.raza == "gato"; // Devuelve el elemento completo que cumpla la condicion y no la propiedad específica
})
console.log(gatos);