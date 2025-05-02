
// Un set es una estructura de datos que permite almacenar valores únicos de cualquier tipo, ya sean primitivos u objetos. Es decir, valores que no se van a repetir.

// Se puede pensar como un array, pero sin indices y sin duplicados. Es una colección de valores únicos, que no se repiten. Se pueden agregar, eliminar y buscar valores en un set. Se pueden almacenar valores primitivos u objetos

const set = new Set(); // Se crea un set vacio.
// Se puede crear un set con valores iniciales, y se pueden pasar arrays, strings, objetos o valores primitivos.
const set2 = new Set([1, 2, 3, 4, 5]);

//  Se pueden agregar valores al set con el metodo add(). Si se intenta agregar un valor que ya existe, no se agrega y no da error. No se repiten los valores.
set.add(4);
set.add(1);
set.add(2);
set.add(3);
set.add(5);

// A DIFERENCIA DEL MAP, NO NOS PEDIRA UNA CLAVE Y VALOR, SIMPLEMENTE SON VALORES QUE SE IRAN ALMACENANDO

// Metodo has() para saber si un valor existe en el set. Devuelve true o false.
console.log(set.has(4)); // true
console.log(set2.has([1, 2, 3, 4, 5])); // IMPRIMIRA FALSO PESE A TENER LOS MISMOS VALORES. ES PORQUE EN JS LOS OBJETOS SON REFERENCIAS EN MEMORIA, NO SE COMPARAN POR VALOR, SINO POR REFERENCIA. EN ESTE CASO, SE CREO UN NUEVO ARRAY, POR LO QUE NO ES EL MISMO QUE EL DEL SET. Si se quiere comprar, hay que tener un array creado, y ese array agregarselo al set, y alli si comparar con has


// Metodo size para saber la cantidad de elementos que tiene el set. Devuelve un numero.
console.log(set.size); // 1

// Metodo delete() para eliminar un valor del set. Devuelve true si se elimino, o false si no se elimino porque no existia.
console.log(set.delete(4)); // true

// Se iteran con los for of, y se pueden usar los metodos forEach()
for (const item of set) {
    console.log(item);
}

set.forEach((item) => {
    console.log(item);
})

// PODEMOS JUGAR CON LOS ARRAYS PARA EN BASE A UN ARRAYS CON VALORES REPETIDOS, GENERAR UN SET CON LOS VALORES REPETIDOS Y ASI TENER UNA NUEVA COLECCION
const repeated = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

const set3 = new Set(repeated); // Se crea un set, pasandole como argumento el array con los valores repetidos. Se eliminan los duplicados y se crea un set con los valores unicos.

const array = [... new Set(repeated)]; // Se usa el spread operator para convertir el set en un array, ya que toma cada elemento del Set y lo pone dentro de un nuevo array. Spread operator "copia", pero el concepto verdadero es "expande" el contenido del iterable donde lo estés usando. Y al hacerlo dentro de corchetes ([]), sí, se termina creando un nuevo array
console.log(set3);
console.log(array);
