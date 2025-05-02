// En ocasiones tendremos que hacer cosas de forma repetitiva, para ello utilizaremos un bucle for.
// Un bucle for permite ejecutar un bloque de código varias veces.

// Un bucle for se compone de tres partes, separadas por punto y coma, que se encargan de controlar la ejecución del bucle.
// 1. Inicialización de la variable de control para iniciar el bucle.
// 2. Condición de continuación.
// 3. Incremento o decremento de la variable de control para que en algún momento la condición deje de cumplirse y pueda salir del bucle. Se reasinga el valor de la variable de control.

// Siempre que la condicion se este cumpliendo, el bucle y su codigo se ejecutará, y al momento en que se rompa la condicion, deja de ejecutarse el bucle.

/*
for (let index = 0; index < arra.length; index++) {
    codigo a ejecturar
}
*/

for (let i = 1; i <= 50; i++) {
    console.log(`El valor de i es ${i}`);
}
// El conteo de las iteraciones del bucle for SIEMPRE empieza en 0, por lo que si queremos que empiece en 1, debemos inicializar la variable de control en 1.

num = 12;
for (let i = 1; i <= 12; i++) {
    let resultado = num * i;
    console.log(`${num} x ${i} = ${resultado}`);
}