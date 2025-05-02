const suma = (numeros) => {
    let acumulado = 0;
    for (let i = 0; i < numeros.length; i++) {
        acumulado = acumulado + numeros[i];
    }
    return acumulado;
}

// Map sirve para transformar los elementos de un array, tomando un array con una cantidad x de elementos, y devolvera otro array de la misna longitud, pero con todos los elementos transformados y cambiados, dependiendo de la funcion que se le haya aplicado

const numeros = [1, 2, 3, 4, 5];

// Multiplicar cada elemento del array por 2, y devolver un nuevo array con los resultados
const multiplicados = numeros.map( (numero) => {
    return numero * 2;
})
console.log(multiplicados);


// Pasar a pares de pareja los elementos del array. El [x, x] lo que hace es crear un array de arrays, donde cada elemento del array original se convierte en un array de 2 elementos, donde ambos son el mismo elemento, luego pasando al siguiente elemento del array original, y repitiendo el proceso hasta que se acaben los elementos del array original. Por tanto, el resultado es un array de arrays, donde cada subarray tiene 2 elementos iguales.
const parejas = numeros.map( (x) => {
    return [x, x];
})
console.log(parejas);
// Se crearon parejas de todos los numeros del array. Por tanto map no solamente sirve para operaciones sencillas, si no que se puede usar para crear objetos, o arrays de arrays, o cualquier tipo de transformacion que queramos hacer a los elementos del array


// Crear un array con todas las edades de las mascotas, obteniendo la edad promedio de todas las mascotas
const mascotas = [
    { nombre: "Puchini", edad: 12, tipo: "perro" },
    { nombre: "Chanchito feliz", edad: 3, tipo: "perro" },
    { nombre: "Pulga", edad: 10, tipo: "perro" },
    { nombre: "Pelusa", edad: 12, tipo: "gato" },
]

const edades = mascotas.map( (mascota) => {
    return mascota.edad;
})

const promedio = (suma(edades) / edades.length);
console.log(promedio);
// En este caso, se ha usado el map para obtener un array con todas las edades de las mascotas, y luego se ha usado la funcion suma para obtener la suma de todas las edades, y dividirlo entre la cantidad de elementos del array, para obtener el promedio de edad de las mascotas.
