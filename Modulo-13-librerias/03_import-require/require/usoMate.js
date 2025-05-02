// usoMate.js
const matematicas = require('./matematicas');
// Lo mismo aplica para librerias externas: const axios = require('axios');


// Llamamos a las funciones del módulo
console.log(`Suma: ${matematicas.sumar(10, 5)}`);
console.log(`Resta: ${matematicas.restar(10, 5)}`);
console.log(`Multiplicación: ${matematicas.multiplicar(10, 5)}`);