
// ******* FILTER *******

// Filter es como una maquina que analiza cada uno de los elementos del array, y va decidiendo si cada uno pasa a un nuevo array. Y si el elemento cumple la condicion, lo añade al nuevo array.

// El resultado de filter es un nuevo array, que contiene solo los elementos del array original que cumplen cierta condicion programada por nosotros que devuelve true o false, llamada predicado.

// Filter permite crear un array nuevo de igual o menor cantidad de elementos que el array original con el que estamos trabajando

const productos = [
    {id: 1, nombre: 'Camiseta', precio: 500},
    {id: 2, nombre: 'Pantalon', precio: 1000},
    {id: 3, nombre: 'Zapatos', precio: 2000},
];

const productosBaratos = productos.filter( (producto) => {
    producto.precio < 1000;
})
console.log(productosBaratos);
// SE DEVOLVERA EL ELEMENTO COMPLETO QUE CUMPLA LA CONDICION, Y NO SOLO LA PROPIEDAD QUE SE LE HA PASADO COMO PARAMETRO


/* O PODEMOS PASAR EL PREDICADO COMO CALLBACK, QUE ES UNA FUNCION QUE SE PASA COMO PARAMETRO A OTRA FUNCION:
const esBarato = (producto) => producto.precio < 1000;
const esCaro = (producto) => !esBarato(producto);

const productosBaratos = productos.filter(esBarato);
const productosCaros = productos.filter(esCaro);
*/


// TAMBIEN SE PUEDE USAR PARA SACAR LOS ELEMENTOS REPETIDOS DE UN ARRAY
// Podemos usar el tercer y ultimo parametro, que es el array original, para comparar el elemento actual con los elementos anteriores y ver si ya existe en el array original. Si no existe, lo añadimos al nuevo array.
const numeros = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

const numetrosUnicos = numeros.filter((numero, posicion, numeros) => {
    return posicion === numeros.indexOf(numero);
});
// Lo que hace indexOf es devolver la posicion del primer elemento que cumple la condicion, y si la posicion actual es igual a la posicion del primer elemento, significa que es el primero que se encuentra y lo añade al nuevo array. Si no, lo ignora.