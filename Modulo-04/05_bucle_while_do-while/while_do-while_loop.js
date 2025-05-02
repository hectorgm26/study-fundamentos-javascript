// El bucle while se ejecuta mientras la condición sea verdadera.
// El bucle do-while se ejecuta al menos una vez y luego se sigue ejecutando mientras la condición sea verdadera.

/*
do {

} while (condition);
*/


let i = 1;

do {
    let resultado = 12 * i;
    if (resultado === 48) {
        console.log("Yuju... llegamos al 48");
    }

    console.log(`12 x ${i} = ${resultado}`);

    i++; // se requiere incrementar la variable para que la condición sea falsa en algún momento y así salir del bucle. Se usa generalmente un contador como modificacion de la variable de control.

} while (i <= 10);


// El while se ejecuta mientras la condición sea verdadera. Por ende, puede que nisiquiera se ejecute el código en caso de que la condición sea falsa desde el principio.
let y = 123;

while (y < 10) {

    let resultado = 12 * i;
    if (resultado === 48) {
        console.log("Yuju... llegamos al 48");
    } else {
      console.log(`12 x ${i} = ${resultado}`);
    }
    i++;
}
// No se hara nada en este caso, ya que la condición es falsa desde el principio, por ende no entra al bucle.