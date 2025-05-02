// Los booleanos son un tipo de dato que puede tener dos valores: true o false, y se colocan sin comillas.

let estamosAprendiendoJS = true;
let estamosEnVenus = false;

// Siempre que hacemos operaciones de conparacion, nos da como resultado un booleano. Es po ello, que los booleanos son muy utilizados en las estructuras de control.





// Encontramos valores truthy y falsy. Son valores que no son booleanos, pero si en algun momento operamos con logica booleana con ellos, se comportaran como si fueran booleanos.
// Es decir, JS les da representacion booleana, es decir, en determinado contexto, un dato que no es booleano, se comporta como si lo fuera.

// Valores Truthy - tienen algun significante de true, siendo representado por un vsalor booleano true.
/*
    "string"
    'string'
    " " - strings con un espacio
    numeros > 0
    [1, 2, 3] - arrays con al menos un elemento
    {} - objetos con al menos una propiedad
*/

// Valores Falsy - representan valores de false
/*
    "" - todo string vacio
    0
    null
*/