// Permiten realizar operaciones de comparación entre dos o más valores booleanos, uniendo secuencias logicas
// Devuelven un valor booleano
// Siempre para la sintaxis, cada una de las condiciones se debe poder leer cada una por separado, y luego unirlas con el operador logico correspondiente (dia == "sabado && dia == "domingo")

/*
Salir al parque, si se cumplen dos condiciones:
  1. Clima soleado
  2. dia Viernes
  3. Horario antes de las 6pm
En este caso, se deben cumplir TODOS los criterios para que se cumpla la condición general, por ende se utilizaria el operador logico AND (&&)

Salir al parque, si se cumple al menos una de las siguientes condiciones:
  1. Clima soleado
  2. dia Viernes
  3. Horario antes de las 6pm
En este caso, se debe cumplir al menos una de las condiciones para que se cumpla la condición general, por ende se utilizaria el operador logico OR (||)

Salir al parque, si no se cumple la siguiente condición:
  1. Clima soleado
  2. dia Viernes
  3. Horario antes de las 6pm
En este caso, se debe cumplir al menos una de las condiciones para que se cumpla la condición general, por ende se utilizaria el operador logico NOT (!)
*/


let clima = "soleado";
let dia = "viernes";
let horario = 2;

// AND - &&
console.log(clima === "soleado" && dia === "viernes" && horario < 6); // true
// Javascript analiza las condiciones de izquierda a derecha, si la primera condición es falsa, no analiza las siguientes condiciones
// y si la primera si es verdadera, y se pone luego un &&, analiza la siguiente condición, y si es falsa, no analiza las siguientes condiciones por que ya no se cumpliria la condición general

// OR - ||
console.log(clima === "soleado" || dia === "viernes" || dia == "sabado" || horario < 6); // true

// NOT - ! - Se coloca antes de la variable, al inicio de la condición para negar el valor de la variable y asi realizar comparaciones respectivas
let estamosAprendiendo = true;
let esFamoso = false;
console.log(!estamosAprendiendo); // false
console.log(!esFamoso); // true