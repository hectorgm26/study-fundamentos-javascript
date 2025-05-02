// El metodo concat en arrays se utiliza para unir dos o mas arrays, y devuelve un nuevo array. No modifica los arrays existentes. Por lo tanto, el resultado de la concatenacion es un nuevo array que contiene todos los elementos de los arrays originales. Se le pasan como argumentos: los arrays que se quieren concatenar.

// Ejemplo de uso del método concat:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const resultado = array1.concat(array2, array3);
console.log(resultado); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Ejemplo implementando una funcion flecha:
const concatenarArrays = (arr1, arr2) => arr1.concat(arr2);
const arrayA = [1, 2, 3];
const arrayB = [4, 5, 6];
const resultadoConcatenado = concatenarArrays(arrayA, arrayB);