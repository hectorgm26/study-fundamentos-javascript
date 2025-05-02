// Un modulo de node es un archivo o conjunto de archivos que exportan funcionalidades especificas y pueden ser importados en otros archivos usando requiere o import

// MODULOS NATIVOS SON DIFERENTES A LAS LIBRERIAS EXTERNAS

/*
Modulos Nativos:
1. Son modulos incorporados en Node.js para usarse sin requerir instalacion adicional.
2. Se usan directamente con require o import.
3. Forman parte del nucleo de Node y estan preinstalados
*/

/*
Librerias externas:
1. Son paquetes de terceros que deben instalarse con npm o yarn antes de usarse.
2. Deben instalarse con npm install nombre-libreria o yarn add nombre-libreria.
3. Se almacenan en la carpeta node_modules del proyecto despues de la instalacion.
*/

// ¿Puedo crear un modulo propio?
// Si, siempre que la funcionalidad que se necesite no este incluida o se quiera personalizar
// Ejemplo:
// Se le nombra al archivo matematicas.js

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

// Exportamos las funciones para poder usarlas en otro archivo. Con module.exports se exportan las funciones para que puedan ser usadas en otros archivos. Se puede exportar una funcion o un objeto con varias funciones.
module.exports = {
    sumar,
    restar
};


// Antes se usaba require para importar modulos, pero ahora se recomienda usar import, ya que es mas moderno y permite usar modulos de manera mas eficiente. Sin embargo, require sigue siendo valido y se puede usar en proyectos que no soportan import.

// Import requiere .msj como extension del archivo que se quiere que sea un modulo, o "type": "module" en el package.json. Si no se usa "type": "module", se debe usar la extension .cjs para los archivos de modulo. Si se usa require, no es necesario usar la extension .js o .mjs, pero es recomendable para evitar confusiones.

// Ademas con import ya no se usa module.exports, sino que antes de cada funcion que se quiere exportar se antepone la palabra export. Luego en el archivo se coloca import { nombreFuncion } from './nombreArchivo.js' para importar la funcion o las funciones que se requieran. (se requiere poner la extension .js al final del nombre del archivo, si no se pone, no funcionara, a diferencia del requiere que funciona sin la extension).

// Y con import, para llamar a la funcion ya no se le llama por el nombre del archivo.modulo, si no directamente se llama al modulo, por ejemplo: sumar(1,2) o restar(1,2)