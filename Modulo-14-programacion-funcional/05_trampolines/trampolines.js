
// La recursividad en JS tiene problemas de optimizacion, que se solucionan con trampolines

// Un trampoline es una función que permite ejecutar funciones recursivas sin caer en el stack overflow
// Por stack overflow se entiende cuando se llena el stack de llamadas, es decir, cuando una función llama a otra función, y esa función llama a otra función, y así sucesivamente, hasta que se llena el stack de llamadas (ERROR Maximum call stack size exceeded)

// En lugar de llamar a la función recursiva directamente, se devuelve una función que se ejecutará en el siguiente ciclo del event loop.

// En este caso, la función trampoline se encarga de ejecutar la función recursiva y devolver el resultado final. El trampoline recibe una funcion y retorna otra funcion, y juntara todos los argumentos dentro de un array. Luego creara una variable resultado y va a llamar a la funcion original (fn) pasandole todos sus argumentos, Luego, preguntara si el tipo de la variable de resultado es una funcion, y en el caso de que lo sea, la va a llamar y se remplazara a si misma, llamandose a la funcion una y otra vez, hasta que retorne un valor y deje de ser una funcion

const trampoline = fn => (...args) => {
// Llamamos a la función original (fn) con sus argumentos y guardamos el resultado en 'result'
    let result = fn(...args);

// Mientras el resultado sea una función, la recursión seguira activa... Esto ocurre porque la función recursiva devuelve otra función en lugar de devolver el valor final.
    while (typeof result === 'function') {
        result = result();
        // Este proceso ocurre hasta que la función devuelta por 'fn' ya no sea otra función, es decir, cuando llegamos al caso base de la recursión.
        // Una vez que el resultado no es una función, salimos del ciclo y devolvemos el valor final.
    }
    return result;
};

/*
Explicación adicional del result() en el contexto de trampolines:
const ejemplo = () => {
    return () => {  // Devuelve otra función
        return 42;
    };
};

let result = ejemplo();  // 'result' ahora es la función devuelta por 'ejemplo'.
console.log(result());   // Aquí estamos ejecutando esa función, y el resultado será 42.
*/

const suma = (number, sum = 0) => {
    return number === 0
        ? sum
        : () => suma(number - 1, sum + number) // <- Aquí tenemos que devolver una función que representa la llamada recursiva, para que el trampoline la ejecute más tarde, Y ASI TENER UN CASO DE SALIDA, que seria cuando number es 0
// Este operador ternario indica que si number es 0, se devuelve el valor de sum
// Por el contrario, suma lo que hace es ir restando 1 a number y sumando el número a la suma acumulada, hasta que number sea 0, en cuyo caso se devuelve la suma acumulada
}

const tsuma = trampoline(suma); // Aquí estamos envolviendo la función suma con el trampoline
const r = tsuma(10000);
console.log(r);


/*
EXPLICACION ADICIONAL:

Dentro del código del trampoline, hay una comparación clave que ocurre en el siguiente fragmento:
while (typeof result === 'function') {
    result = result(); // <-- Aquí estamos ejecutando la función devuelta
}

Paso 1: ¿Qué es result?
Primero, es importante entender qué es la variable result.
let result = fn(...args); // Ejecuta la función 'fn' con los argumentos

- fn es la función que le pasamos al trampoline. En este caso, es la función suma.
- args son los argumentos que le pasamos a la función suma cuando la ejecutamos a través del trampoline. En el caso de tsuma(10000), args es [10000].
- result es el resultado de ejecutar la función suma con esos argumentos.

Paso 2: Comparación dentro del trampoline
while (typeof result === 'function') {
    result = result(); // Aquí estamos ejecutando la función devuelta
}

- Este bloque de código es la clave de cómo funciona el trampoline.
- typeof result === 'function'  verifica si el resultado devuelto por suma es una función.

¿Por qué result podría ser una función?
Recuerda que dentro de suma, si number !== 0, suma devuelve una nueva función en lugar de llamar directamente a sí misma. Esta es la parte de la recursión "modificada" que el trampoline maneja.

const suma = (number, sum = 0) => {
    return number === 0
        ? sum
        : () => suma(number - 1, sum + number) // <-- Aquí devolvemos una función
}

En este caso, si number !== 0, suma devuelve una nueva función que cuando se ejecute llamará a la función suma de nuevo con los parámetros number - 1 y sum + number. Entonces, en vez de llamar directamente a suma (lo que causaría un desbordamiento de pila), suma devuelve una función, y el trampoline la ejecuta más tarde.

Paso 3: ¿Qué hace result()?
result = result(); // Aquí estamos ejecutando la función devuelta por `suma`

- Cuando result es una función, el trampoline ejecuta esa función al llamar a result().
- En la primera iteración, result es la función devuelta por suma, es decir, algo como:
() => suma(number - 1, sum + number)

- Entonces, el trampoline ejecuta esta función, lo que dispara una nueva llamada a suma con los valores number - 1 y sum + number. Este proceso se repite hasta que suma devuelve un valor no-funcional, es decir, cuando number === 0.

Paso 4: Cuando el resultado deja de ser una función
Finalmente, cuando result deja de ser una función (porque suma ha llegado a su caso base, es decir, number === 0), entonces el trampoline sale del bucle y devuelve el valor final.
*/