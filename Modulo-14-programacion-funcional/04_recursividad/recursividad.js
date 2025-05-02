
// La recursividad es una técnica de programación en la que una función se llama a sí misma para resolver un problema.
// Se basa en una funcion que se llama a si misma, hasta que se cumple una condicion de salida

const conteoRegresivo = (a) => {
    if (a < 0) {
        return; // Condición de salida: si 'a' es menor que 0, se termina la función, sin hacer nada, es decir, no se imprime nada.
    }
    console.log(a); // Si el argumento no es menor a cero, se imprimira el valor de 'a'
    return conteoRegresivo(a - 1); // Llamada recursiva a si misma como funcion, con el mismo argumento 'a', pero restando 1 a 'a'. Y cada vez que se llame a la funcion, se restara 1 a 'a' hasta que llegue a -1.
}

conteoRegresivo(10); // Inicia el conteo desde 10 hasta 0


// Con la recursividad tambien podemos hacer conteos hacia arriba, tambien podemos iterar elementos de un array sin usar for o while, obviando loops (como por ejemplo for dentro de otro for)

