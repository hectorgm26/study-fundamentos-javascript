// Antes del 2015 se declaraban las variables con var, que tiene un alcance de función, es decir, si se declara una variable dentro de una función, solo se puede acceder a ella dentro de esa función. Si se declara una variable fuera de una función, se puede acceder a ella desde cualquier parte del código.
// Sin embargo, si se declara una variable con var dentro de un bloque de código (por ejemplo, un if), se puede acceder a ella desde fuera de ese bloque de código.

// Por ello es que a partir de 2015 se introdujeron let y const, que tienen un alcance de bloque, es decir, si se declara una variable con let o const dentro de un bloque de código, solo se puede acceder a ella dentro de ese bloque de código, y no desde fuera de él.

if (true) {
    var variable1 = 'Hola Mundo';
}

console.log(variable1);
// En este ejemplo se declara una variable con var dentro de un bloque de código, y se intenta acceder a ella desde fuera de ese bloque de código. Como se puede ver, se puede acceder a la variable desde fuera del bloque de código, lo cual no debería ser posible si se declara la variable con let o const.

// PERO, si se declara la variable con let o const, se produciría un error, ya que no se puede acceder a la variable desde fuera del bloque de código. En el caso que se quisiera usar let o const, se debería hacer de la siguiente manera:

let variable;

if (true) {
  variable = 'Hola Mundo';
}
console.log(variable); // Esto imprimiría 'Hola Mundo', ya que se puede acceder a la variable desde fuera del bloque de código, y no se produciría ningún error.


var marca = "Ferrari";
let nombre = "Hector";
const precio = 2.50;
let edad; // Declarar una variable sin asignarle un valor, es decir, sin inicializarla, es lo mismo que asignarle el valor undefined.

console.log(marca);
marca = "Lamborghini"; // Se puede reasignar un valor a una variable declarada ya sea con var, let, pero no a una constante.
console.log(marca);

console.log(nombre);
console.log(precio);
console.log(edad);

// No se puede declarar una misma variable más de una vez con let o const, pero sí con var.
var variable2 = "Hola";
var variable2 = "Mundo";
console.log(variable2); // Esto imprimiría 'Mundo', ya que se reasigna el valor de la variable.