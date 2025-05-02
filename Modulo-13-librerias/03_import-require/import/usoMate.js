import { sumar, restar, multiplicar } from "./matematicas.js"; // el archivo termina en js, a diferencia del require que no lo necesita

// Llamamos a las funciones especificas que hemos importado, ya no necesitamos el nombre del modulo
console.log(`Suma: ${sumar(10, 5)}`);
console.log(`Resta: ${restar(10, 5)}`);
console.log(`Multiplicación: ${multiplicar(10, 5)}`);

// Esto dara error cannot use import statement outside a module, y se soluciona:
// escribiendo en el package.json "type": "module" (Crear proyecto con npm init -y),
// o (opcion 2: cambiar la extension a .mjs),
// o (opcion 3: usar yarn add esm y ejecutar el archivo con node -r esm nombreArchivo.js)

// POR TANTO, SI QUEREMOS EVITAR CAMBIAR EL PACKAGE.JSON O CAMBIAR LA EXTENSION A .MJS, ES MEJOR USAR EL REQUIRE