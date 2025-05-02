const superheroes = ["Superman", "Wonder Woman", "Batman", "Aquaman"];
console.log(superheroes);

// Metodo pop - Elimina el último elemento del array y adicionalmente extrae el ulitmo elemento eliminado (si es que se guarda en una variable)
const elUltimo = superheroes.pop();
console.log(superheroes);

console.log(elUltimo);
superheroes.pop();

// Metodo push - Agrega un nuevo elemento al final del array. Con push podemos insertar uno o más elementos al final del array
// Adicionalmente, el método push devuelve la nueva longitud del array después de agregar el nuevo elemento, si es que se guarda en una variable
const nuevo = superheroes.push("Flash");
superheroes.push("Green Lantern", "Animal Man", "Green Arrow");

const nuevoTamanio = superheroes.push();
console.log(`El nuevo tamaño del array es ${nuevoTamanio}`);
console.log(superheroes);