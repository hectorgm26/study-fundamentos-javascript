let num1 = 14;
let num2 = 32;

// suma
let resultadoSuma = num1 + num2 + 10;
console.log(resultadoSuma);

// resta
let resultadoResta = num1 - num2;
console.log(resultadoResta); // En este caso da un numero negativo porque el primer número es menor que el segundo

// multiplicación
let resultadoMultiplicacion = num1 * num2;
console.log(resultadoMultiplicacion);

// división
let resultadoDivision = num1 / num2;
console.log(resultadoDivision);

// Las operaciones aritméticas se hacen de izquierda a derecha, y se pueden agrupar con paréntesis para dar prioridad a una operación, ya que se siguen las reglas de precedencia de operadores
let operacionCombinada = (5 + 10) * 2; // primero se suman los números dentro del paréntesis y luego se multiplica por 2
console.log(operacionCombinada);

// módulo - es el resto de la división, es decir, el número que sobra al dividir
let resultadoModulo = num1 % num2;
console.log(resultadoModulo);

// incremento
let resultadoIncremento = num1++;
// esto es lo mismo que hacer num1 = num1 + 1;
// si se quiere sumar de 2 en 2, se puede hacer num1 += 2, o num1 = num1 + 2;

// decremento
let resultadoDecremento = num1--;
// esto es lo mismo que hacer num1 = num1 - 1;
// si se quiere restar de 2 en 2, se puede hacer num1 -= 2, o num1 = num1 - 2;