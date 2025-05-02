
// Un callback es una funcion que se pasa como argumento a otra funcion, para que complete una serie de instrucciones. Es una forma de hacer que una funcion espere a que otra funcion termine de ejecutarse antes de continuar.

//  Esto es especialmente util en el caso de las funciones asincronas, donde no sabemos cuando se completaran. Los callbacks son una forma de manejar la asincronia en js, y permiten que el codigo sea mas legible y facil de entender.


console.log("1");

setTimeout( () => {
    console.log("2");
}, 3000);

console.log("3");
// En este caso, el resultado sera 1, 3, 2. Esto se debe a que el setTimeout es una funcion asincrona que se ejecuta en segundo plano, y no bloquea la ejecucion del resto del codigo. Por lo tanto, el console.log("3") se ejecuta antes que el setTimeout, y luego se ejecuta el setTimeout cuando termina de esperar los 3 segundos. ESTO ES CLARO EJEMPLO DE LA APLICACION DE LA ASINCRONIA EN JS, DONDE PRIMERO SE EJECUTA LO SINCRONO Y LUEGO LO ASINCRONO.


// ESTO SE SOLUCIONA CON CALLBACKS, PROMESAS O ASYNC/AWAIT, COMO EN EL SIGUIENTE EJEMPLO:

function llegar() {
    console.log("1. Llegue a casa");
}

const esperar = (callback) => { // A esta fn se le pasa una fn como callback, que se ejecutara una vez que se complete la espera, es decir, una vez que ya se ejecuto el codigo que se supone habia que esperar
    setTimeout( () => {
        console.log("2. Espera, no traje las llaves");
        callback();
    }, 5000);
}

function irse() {
    console.log("3. Me fui de casa");
}

function main() {
    llegar();
    esperar(irse);
}

main();
// En este caso, la funcion esperar recibe una funcion como argumento (callback), que se ejecutara una vez que se complete la espera y no antes, permitiendo que el flujo de ejecucion sea el correcto. En este caso, el resultado sera 1, 2, 3. Esto se debe a que la funcion esperar espera 5 segundos antes de ejecutar la funcion irse, y no bloquea la ejecucion del resto del codigo.


// Sin embargo, los callbacks pueden llevar a un problema conocido como "callback hell", donde se anidan muchas funciones de callback y el codigo se vuelve dificil de leer y mantener. Para evitar esto, se pueden usar promesas o async/await, que son formas mas modernas de manejar la asincronia en js.
