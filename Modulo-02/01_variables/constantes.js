/*
=============================================
📌 ¿Qué es "const" en JavaScript?
=============================================
- "const" es una palabra clave que define una CONSTANTE.
- Una constante es una variable cuyo valor NO puede ser reasignado.
- Sin embargo, en algunos casos, el contenido de la constante puede cambiar si es un tipo de dato mutable.

=============================================
📌 ¿Cuándo es inmutable y cuándo es mutable?
=============================================
1️⃣ Tipos primitivos (number, string, boolean) -> ❌ NO se pueden modificar.
2️⃣ Objetos y arrays -> ✅ Se pueden modificar sus propiedades o elementos, pero NO reasignarlos, ya que lo que se modifica es la referencia a la memoria.
3️⃣ Funciones -> ✅ Se pueden ejecutar, pero NO reasignarlas.
4️⃣ "const" tiene un ámbito de bloque, es decir, solo existe dentro del bloque donde se declara.
*/

// 🔹 Ejemplo 1: const con tipos primitivos (INMUTABLE)
const numero = 10;
// numero = 20; // ❌ Error: No puedes reasignar una constante
console.log(numero); // 10

// 🔹 Ejemplo 2: const con objetos (MUTABLE el contenido)
const persona = { nombre: "Juan", edad: 30 };

// Podemos modificar las propiedades del objeto
persona.edad = 31; // ✅ Esto SÍ es válido, porque estamos cambiando un valor dentro del objeto
console.log(persona.edad); // 31

// persona = { nombre: "Ana", edad: 25 }; // ❌ Error: No se puede reasignar un nuevo objeto

// 🔹 Ejemplo 3: const con arrays (MUTABLE el contenido)
const numeros = [1, 2, 3];

// Podemos modificar el contenido del array
numeros.push(4); // ✅ Esto SÍ es válido, estamos agregando un elemento
console.log(numeros); // [1, 2, 3, 4]

// numeros = [5, 6, 7]; // ❌ Error: No podemos reasignar otro array

// 🔹 Ejemplo 4: const con funciones
const saludar = () => console.log("Hola!");

// saludar = () => console.log("Adiós!"); // ❌ Error: No puedes reasignar una constante

saludar(); // ✅ Funciona correctamente

// 🔹 Ejemplo 5: const dentro de un bloque
if (true) {
    const mensaje = "Hola desde el bloque";
    console.log(mensaje); // ✅ Funciona dentro del bloque
}

// console.log(mensaje); // ❌ Error: mensaje solo existe dentro del bloque if

/*
=============================================
📌 🔥 RESUMEN FINAL
=============================================
✅ "const" impide la reasignación, pero no siempre la modificación interna.
✅ Tipos primitivos son inmutables con "const".
✅ Objetos y arrays pueden modificarse internamente, pero NO ser reasignados.
✅ Las funciones declaradas con "const" no pueden ser reasignadas.
✅ "const" tiene ámbito de bloque, es decir, solo existe dentro del bloque donde se declara.
*/

