
// *********** MAP ***********

// Usamos map cuando tenemos un array y queremos obtener un nuevo array de otra cosa, permitiendo obtener uno nuevo de la misma longitud del original, aplicando una funcion a cada elemento del array original

// Podemos pensar map como una maquina que transforma los elementos del array uno por uno, aplicandoles a cada uno, una funcion en base al elemento en cuestion y a su posicion en el array original

// Como parametros de la funcion que le pasamos a map, primero es el elemento en cuestion, y segundo OPCIONAL: la posicion del elemento dentro del array original

const numbers = [3, 10, 20, 50];

const dobles = numbers.map( (ele, posicion) => {
    return ele * 2;
})

// LO QUE HACEMOS DENTREO DE MAP DEBE SER SINCRONO SI O SI, NO UNA PROMESA, NO UN ASYNC AWAIT, NO UN FETCH, NO UN THEN, NO UN CATCH, NO NADA DE ESO. SOLO UNA FUNCION QUE RETORNE UN VALOR SINCRONO.

const productos = [
    {id: 1, nombre: 'Camiseta', precio: 500},
    {id: 2, nombre: 'Pantalon', precio: 1000},
    {id: 3, nombre: 'Zapatos', precio: 2000},
];

const productosConDescuento = productos.map((producto) => {
    if (producto.precio < 1000) {
        return producto;
    } // EARLY RETURN: para sacarnos de encima lo que no nos interesa lo antes posible y seguir con lo que sí

    // Si queremos conservar la estructura del objeto, pero con los valores cambiados, podemos retornar un nuevo objeto, retornando las mismas propiedades que tenía, pero pisándole el precio con el nuevo precio

    return {
        ...producto,         // spread operator: copia todas las propiedades del objeto original

        // la coma separa propiedades dentro de un objeto. En JavaScript, cada clave-valor se separa con una coma, como en:
        // const persona = { nombre: 'Ana', edad: 30, ciudad: 'Madrid' }

        // ...producto no es una propiedad como tal, sino una forma de decir "copiá todas las propiedades de producto". Pero una vez que se expande, se convierte en muchas propiedades, que se tratan igual que las otras (separadas por coma).
        // Por ejemplo, si producto = { id: 2, nombre: 'Pantalon', precio: 1000 }, entonces:
        // {
        //     ...producto,
        //     precio: producto.precio * 0.8
        // }
        // es equivalente a:
        // {
        //     id: 2,
        //     nombre: 'Pantalon',
        //     precio: 1000,
        //     precio: 800
        // }
        // Y como en los objetos la última clave con el mismo nombre gana, el precio final será 800.

        // Acá sobrescribimos (pisamos) la propiedad precio con un nuevo valor: 20% de descuento
        precio: producto.precio * 0.8
    };

    // return producto.precio * 0.8; NO DEBEMOS HACER LO SIGUIENTE:  producto.precio = producto.precio * 0.8 porque estarías modificando el objeto original, y Lo que queremos es crear un nuevo array con los productos con descuento, sin tocar el array original ni sus objetos.
});

console.log(productos); // array original sin modificaciones
console.log(productosConDescuento); // nuevo array con los productos con descuento


// EXTRAER DATOS DE UN OBJETO
const idProductos = productos.map((producto) => {
    return producto.id; // Retorna un nuevo array con los ids de los productos
});
console.log(idProductos); // [1, 2, 3]


// PODEMOS TAMBIEN DESARMAR EL OBJETO EN EL PARAMETRO DE LA FUNCION, Y HACERLO MAS CLARO:
const idProductos2 = productos.map(({ id }) => {
    return id; // Retorna un nuevo array con los ids de los productos
});