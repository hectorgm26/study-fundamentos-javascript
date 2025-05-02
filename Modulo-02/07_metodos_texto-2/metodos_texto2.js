let nombreCompleto = "Yanira Fontalba";

// startsWith - Comprueba si la cadena empieza con un valor concreto. Devuelve true o false.
console.log(nombreCompleto.startsWith("Y")); // true
console.log(nombreCompleto.startsWith("f")); // false

// endsWith - Comprueba si la cadena termina con un valor concreto. Devuelve true o false.
console.log(nombreCompleto.endsWith("a")); // true
console.log(nombreCompleto.endsWith("b")); // false

// trim - Elimina los espacios en blanco al principio y al final de la cadena, pero no los que estén en medio.
let miMascota = "     Koda          ";
console.log(miMascota);
console.log(miMascota.length);

let miMascotaSinEspacios = miMascota.trim(); // "Koda", se almacena el resultado de la operación en la variable miMascotaSinEspacios
console.log(miMascotaSinEspacios);
console.log(miMascotaSinEspacios.length);

// repeat - Repite la cadena un número de veces. Por argumento se le pasa el número de veces que se quiere repetir la cadena.
let nana = "Na na";
console.log(nana.repeat(5)); // Na naNa naNa naNa naNa na. Se repite 5 veces la cadena "Na na", pero no se añade espacio entre las repeticiones.

// replace - Reemplaza una cadena por otra.
// Se le pasan dos argumentos, el primero es la letra o cadena que se quiere reemplazar y el segundo la cadena por la que se quiere reemplazar.
let nombreErrado = "Hector gonsales";
console.log(nombreErrado.replace("gonsales", "Gonzalez"));

let nombreErrado2 = "Juan Perez";
console.log(nombreErrado2.replace("e", "O")) // Juan POrez. PESE A HABER DOS "e" SOLO SE CAMBIA LA PRIMERA, YA QUE REPLACE CAMBIA SOLO LA PRIMERA COINCIDENCIA.

// replaceAll - Reemplaza todas las coincidencias de una cadena por otra.
console.log(nombreErrado2.replaceAll("e", "i")); // Juan Piriz. Se cambian todas las "e" por "i".

// split - Divide una cadena en un array de subcadenas.
let frase = "Hola, soy Yanira";
console.log(frase.split(" ")); // ["Hola,", "soy", "Yanira"]. Se divide la cadena en un array cada vez que se encuentra un espacio.

// slice - Extrae una parte de una cadena y devuelve una nueva cadena.
let texto = "Hola, soy Yanira";
console.log(texto.slice(5)); // ", soy Yanira". Se extrae desde la posición 5 hasta el final de la cadena.
console.log(texto.slice(5, 8)); // se excluye el último índice, por lo que se extrae desde la posición 5 hasta la 7.

// substring - Extrae los caracteres de una cadena entre dos índices especificados.
console.log(texto.substring(5, 8)); // ", s". Se extrae desde la posición 5 hasta la 8, excluyendo el último índice.
// acepta valores negativos, en cuyo caso se cuenta desde el final de la cadena.
console.log(texto.substring(-5)); // "Yanira". Se extrae desde la posición -5 hasta el final de la cadena. el conteo de negativos se hace desde el final de la cadena, el cual sera el -1.