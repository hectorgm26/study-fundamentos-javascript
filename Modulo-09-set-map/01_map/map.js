
// El map es otra estructura de codigo, distinto a un array y a un objeto, y sirve para almacenar una coleccion de elementos definidos por pares clave-valor

// SI QUEREMOS AGREGAR UN ELEMENTO CON UNA CLAVE YA EXISTENTE, SE VA A SOBREESCRIBIR

// LA UTILIDAD DE LOS MAP ES PARA BUSCAR ELEMENTOS DE FORMA MAS FACIL QUE CON UN OBJETO, al tener el valor get, evitando usar .find de los arrays. Y TAMBIEN PARA GUARDAR NUEVAS PROPIEDADES EN OBJETOS DINAMICOS CON UNA ESTRUCTURA CLARA

const map = new Map(); // Se crea un map vacio. Se puede crear un map con valores iniciales, pero no es necesario.
//  Para crear con valores iniciales:
const map2 = new Map([["clave1", "valor1"], ["clave2", "valor2"]]);

// El metodo set() se usa para agregar un elemento al map.
map.set(1, "Lunes");
map.set("2", 3);
map.set(false, 10);
// Pueden tener cualquier tipo de dato como clave y como valor. Se pueden mezclar tipos de datos, pero no es recomendable porque puede ser confuso. Lo mejor es usar el mismo tipo de dato para las claves y los valores, pero no es obligatorio.
console.log(map); // Map(3) { 1 => 'Lunes', '2' => 3, false => 10 }


// Podemos usar el metodo has para comprobar si existe una clave en el map. Se necesita el map a recorrer.has y como argumento la clave a buscar. Devuelve true o false.
console.log(map.has(1)); // true
console.log(map.has(2)); // false


// Podemos obtener el tamaño del map con el metodo size. Devuelve el numero de elementos que hay en el map, contando cuantos pares clave-valor hay. No cuenta las claves repetidas, solo cuenta una vez la clave y su valor.
console.log(map.size); // 3


// Podemos eliminar un elemento del map con el metodo delete. Se necesita el map a recorrer y como argumento la clave a eliminar. SE ELIMINA EL PAR CLAVE-VALOR COMPLETO, NO SOLO LA CLAVE. Devuelve true si se ha eliminado el elemento y false si no se ha encontrado la clave.
console.log(map.delete(1)); // true

// LOS MAP SE ITERAN CON UN FOR OF
for (const item of map) {
    console.log(item); // [ 1, 'Lunes' ] [ '2', 3 ] [ false, 10 ]
}
console.log("");

// PODEMOS TAMBIEN DESESTRUCTURARLO CON EL FOR OF
for (const [key, value] of map) {
    console.log(key, value);
}


// SI QUEREMOS ACCEDR AL VALOR DE UNA ENTRADA, SE USA EL METODO GET Y COLOCAMOS LA CLAVE, PARA QUE ASI SE DEVUELVA EL VALOR
console.log(map.get("2"));