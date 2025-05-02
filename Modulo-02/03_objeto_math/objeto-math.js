// Es una funcionalidad nativa de JavaScript que nos permite realizar operaciones matemáticas más complejas.

// Numeros random
let numeroRandom = Math.random(); // Devuelve un número aleatorio entre 0 y 1, sin incluir el 1.
console.log(numeroRandom);

const randomNumber = Math.round(Math.random() * 10);
// Genera un numero aleatorio entre 0 y 10, Y SI SE QUIERE CAMBIAR EL RANGO, SE MULTIPLICA POR EL NUMERO QUE SE QUIERA
// y SI SE QUIERE QUE PARTA POR UN NUMERO DISTINTO A 0, SE LE SUMA EL NUMERO QUE SE QUIERA, ES DECIR:
// (Math.round(Math.random() * 10) + 5) GENERA UN NUMERO ALEATORIO ENTRE 5 Y 15.

// Redondear un número hacia arriba, es decir, hacia el entero más cercano. IMPRIME HACIA ARRIBA DESDE 0.5
let precioBoletoTren = 3.75;
let precioBoletoTrenRedondo = Math.round(precioBoletoTren); // math.round() redondea al siguiente entero más cercano.
console.log(precioBoletoTrenRedondo);

// Redondear un número hacia abajo. IMPRIME HACIA ABAJO HASTA 0.4
let precioBoletoTrenRedondoAbajo = Math.floor(precioBoletoTren); // math.floor() redondea hacia abajo.
console.log(precioBoletoTrenRedondoAbajo);

// Encontrar el numero más grande de una lista de números.
console.log(Math.max(2, 4, 56, 31, 793, 651));

// Encontrar el numero más pequeño de una lista de números.
console.log(Math.min(2, 4, 56, 31, 793, -34, 651));

// Potencia de un número
console.log(Math.pow(2, 5)); // 2^5 = 32. El primer argumento es la base y el segundo es el exponente.

// Raíz cuadrada de un número
console.log(Math.sqrt(25)); // Raíz cuadrada de 25 = 5.

// Número PI
console.log(Math.PI); // Devuelve el número PI.

// Número E
console.log(Math.E); // Devuelve el número Euler.

// Redondear un número hacia arriba
console.log(Math.ceil(3.1)); // Redondea 3.1 a 4.

// Truncar un número
console.log(Math.trunc(3.9)); // Trunca 3.9 a 3, es decir, elimina los decimales.

// MATEMATICAS AVANZADAS

// Seno de un ángulo
console.log(Math.sin(90)); // Seno de 90 grados = 1.

// Coseno de un ángulo
console.log(Math.cos(0)); // Coseno de 0 grados = 1.

// Tangente de un ángulo
console.log(Math.tan(45)); // Tangente de 45 grados = 1.

// Logaritmo natural de un número
console.log(Math.log(10)); // Logaritmo natural de 10 = 2.302585092994046.

// Logaritmo en base 10 de un número
console.log(Math.log10(100)); // Logaritmo en base 10 de 100 = 2.

// Logaritmo en base 2 de un número
console.log(Math.log2(256)); // Logaritmo en base 2 de 256 = 8.