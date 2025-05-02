// Los metodos son funciones que se pueden ejecutar sobre un objeto, en este caso sobre un string

// Acceder a la longitud de la cadena, es decir, saber cuantos caracteres tiene la cadena - length
let nombreCompleto = "Hector Gonzalez";
console.log(nombreCompleto.length); // 15

let paisNacimiento = "Chile";
console.log(paisNacimiento.length);

// includes - para saber si una cadena de texto incluye una subcadena de texto. Devuelve un booleano, y pide como argumento la subcadena que se quiere buscar
// Es case sensitive, es decir, diferencia entre mayusculas y minusculas, incluyendo acentos
console.log(nombreCompleto.includes("G")); // true
console.log(nombreCompleto.includes("Y")); // false
console.log(nombreCompleto.includes("Hector")); // true

// Pasar a minusculas toda una cadena - toLowerCase
let mascota = "OTITO";
console.log(mascota);
console.log(mascota.toLowerCase());

// Pasar a mayusculas toda una cadena - toUpperCase
let ciudad = "santiago";
console.log(ciudad.toUpperCase()); // SANTIAGO