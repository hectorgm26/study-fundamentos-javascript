
// Los setTimeout son funciones temporizadoras que permiten ejecutar codigo después de un cierto tiempo, o de forma repetitiva cada cierto tiempo respectivamente.

// ESTAS SE EJECUTAN SOLO UNA VEZ, DESPUES DE QUE PASAN LOS MILISEGUNDOS ESTABLECIDOS.

// A estas funciones se les pasa por argumento la función que se quiere ejecutar, y como segundo argumento el tiempo en milisegundos que se quiere esperar
// setTimeout( funcion, tiempoEnMilisegundos )

setTimeout( () => {
    console.log("Pasaron 2s")
}, 2000)

const delay3000ms = setTimeout(() => {
    console.log("Pasaron 3 segundos");
}, 3000);

clearTimeout(delay3000ms);
// clearTimeout lo que hace es cancelar el setTimeout, no se ejecuta la función que se le pasa como argumento. Se le pasa como argumento el setTimeout que se quiere cancelar.


// Los setInterval son funciones temporizadoras que permiten ejecutar un codigo de forma repetitiva, cada vez que pasa el tiempo establecido.
// setInterval( funcion, tiempoEnMilisegundos )

/*
setInterval( () => {
    console.log("Pasaron 1s")
}, 1000); // ESTO SE REPETIRA CADA SEGUNDO, HASTA QUE SE CANCELE EL setInterval, Y ESTE SE CANCELA CON clearInterval
*/

let conta = 0;
const intervalo = setInterval(() => {
    conta++;
    if (conta === 3) {
        clearInterval(intervalo); // Cancela el setInterval, no se ejecuta la función que se le pasa como argumento.
    }
    console.log("Paso 1s")
}, 1000);


let contador = 0;
const cve = setInterval( () => {
    if (contador <= 6) {
        console.log(`He hecho ${contador} pasos`);
        contador++;
    } else {
        clearInterval(cve);
    }
}, 1000);