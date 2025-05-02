// Permiten hacer comparaciones para el codigo pueda realizar distintas funcionalidades. Habran situaciones donde se neceiste comparar valores, para ello se utilizan los operadores de comparacion.
// Devuelven un valor booleano, es decir, true o false

// Operador de comparacion de igualdad, se utiliza el signo de igualdad doble "=="
console.log(5 == 5); // true
console.log(5 == 12); // false
console.log("hola" == "Hola"); // false

console.log(12 == "12"); // true, ya que el operador de igualdad simple solo compara los valores, el tipo de dato

// Operador de comparacion de igualdad estricta, se utiliza el signo de igualdad triple "===". USO RECOMENDADO
// La igualdad estricta compara los valores y los tipos de datos, no solo los valores.
console.log(5 === 5); // true
console.log(12 === "12"); // false por no ser del mismo tipo de dato

// Operador de comparacion mayor que, se utiliza el signo de mayor que ">". Se usa para numeros
console.log(4 > 2); // true
console.log(4 > 32); // false
console.log(4 > 4); // false, porque el 4 no es mayor a 4, sino que es igual

// Operador de comparacion menor que, se utiliza el signo de menor que "<". Se usa para numeros
console.log(4 < 2); // false
console.log(4 < 32); // true
console.log(4 < 4); // false

// Operador de comparacion mayor o igual que, se utiliza el signo de mayor que seguido de un signo de igualdad ">="
console.log(4 >= 2); // true
console.log(4 >= 32); // false
console.log(4 >= 4); // true

// Operador de comparacion menor o igual que, se utiliza el signo de menor que seguido de un signo de igualdad "<="
console.log(4 <= 2); // false
console.log(4 <= 32); // true
console.log(4 <= 4); // true

// Operador distinto de, se utiliza el signo de admiracion seguido de un signo de igualdad "!="
console.log(4 != 2); // true
console.log("hola" != "Hola"); // true, ya que son distintos valores poe tener una letra en mayuscula

console.log(45 != "45"); // false, ya que son iguales los valores

// Operador distinto de estricto, se utiliza para comparar los valores y los tipos de datos, y se usa el signo "!=="
console.log(45 !== 45); // false
console.log(45 !== "45"); // true, ya que son distintos tipos de datos