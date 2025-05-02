const superheroes = ["Superman", "Wonder Woman", "Batman", "Aquaman"];
console.log(superheroes);

// METODO UNSHIFT - PARA INSERTAR UN ELEMENTO AL INICIO DEL ARRAY - adicionalmente devuelve la longitud del nuevo array
// Por ende, modifica las posiciones de todos los elementos del array
superheroes.unshift("Flash");
superheroes.unshift("Spiderman", "Wolverine", "Hulk");
console.log(superheroes);

const tamanio = superheroes.unshift();
console.log(`El nuevo tamaño del array es ${tamanio}`);


// METODO SHIFT - PARA ELIMINAR EL PRIMER ELEMENTO DEL ARRAY - adicionalmente devuelve el elemento eliminado
superheroes.shift();
const elPrimero = superheroes.shift();

console.log(`El primer elemento eliminado es ${elPrimero}`);
console.log(superheroes);