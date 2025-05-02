// En ocasiones tendremos la necesidad de que nuestro codigo tome decisiones en base a lo que escribimos y a lo que esta pasando en el programa
// Para ello utilizamos condiciones y operadores logicos

// La sintaxis es if (si) seguido de una condicion entre parentesis y luego entre llaves el codigo que se ejecutara si la condicion es verdadera
// Cualquier codigo dentro de las llaves del if, solo existe dentro de ese bloque de codigo, tiene scope local

/* SINTACIS
if (condicion) {
    codigo a ejecutar
}
*/

let clima = "soleado";
let horario = 21;
let dia = "domingo";

if (clima === "soleado" && horario < 6) {
  console.log("EXCELENTE! Es un buen momento para salir a correr"); // se ejecuta si la o las condiciones son verdaderas
}
// Si la condicion es falsa, nunca se ejecutara el codigo dentro del if, y por ende. no pasara nada, SALVO si no existe un else o else if

// Else
if (clima === "soleado" && horario < 18) {
  let mensaje = "vamos a dar un paseo";
  console.log(`Ya que el clima esta ${clima} y son las ${horario}, entonces: ${mensaje}`);
} else {
  console.log("Mejor nos quedamos en casa a estudiar con JaviScript"); // se ejecuta si la condicion es falsa
}

// si queremos dar mayor importancia a ciertas condiciones o grupos de condiciones, podemos utilizar parentesis en las condiciones
// toda las condiciones anidadas en un parentesis se evaluaran como una sola condicion
if ((clima === "soleado" && horario < 18) || dia == "domingo") {
  let mensaje = "vamos a dar un paseo";
  console.log(`Ya que el clima esta ${clima} y son las ${horario}, entonces: ${mensaje}`);
} else {
  console.log("Mejor nos quedamos en casa a estudiar con JaviScript"); // se ejecuta si la condicion es falsa
}
// aca le damos prioridad a los parentesis, primero se evalua lo que esta dentro de los parentesis y luego se evalua el resto de la condicion
// es decir, que todo el parentesis de verdadero, o si el dia es domingo, alli recien se ejecutara el codigo dentro del if