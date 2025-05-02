// Novedad de ECMAScript 6 que nos permite interpolar variables dentro de un string de una forma más sencilla y legible.
// Se utilizan las comillas invertidas `` (alt Gr + boton) y el símbolo de dolar y llaves ${} para interpolar variables.

// Aplican cuando tenemos dos datos de texto en distintas variables y queremos concatenarlos, podemos hacerlo de la siguiente forma:
let nombre = 'Juan';
let apellido = 'Perez';
let nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto); // Juan Perez

// Con template literals podemos hacerlo de la siguiente forma:
let nombreCompleto2 = `${nombre} ${apellido}`;
console.log(nombreCompleto2); // Juan Perez

// Podemos hacer operaciones matemáticas dentro de un template literal:
let precio = 1000;
let cantidad = 3;
let total = `El total es: ${precio * cantidad}`;
console.log(total); // El total es: 3000

// EJERCICIO

let nombre2 = "Hector";
let apellido2 = "Gonzalez";
let edad = 27;
let intereses = "Jugar JRPGs, leer comics y hacer rap";

let saludo = "Hola, mi nombre es " + nombre2 + " " + apellido2 + " y tengo " + edad + " años. Mis intereses son: " + intereses;
console.log(saludo);

let saludo2 = `Hola, mi nombre es ${nombre2} ${apellido2} y tengo ${edad} años. Mis intereses son: ${intereses}`;
console.log(saludo2);

// Dentro de la interpolación de variables, podemos hacer muchas cosas como operaciones matemáticas, llamar funciones, etc.