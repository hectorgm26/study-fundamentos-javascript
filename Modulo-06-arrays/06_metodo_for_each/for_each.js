// el metodo forEach() se utiliza para recorrer un array y ejecutar una funcion por cada elemento del array
// // el forEach() no devuelve nada, solo ejecuta la funcion de iterar por cada elemento del array

const superheroes = ["Spiderman", "Black Bolt", "Capitan America", "Reed Richards", "Gambit"];

superheroes.forEach( (heroe) => {
  if (heroe.length > 7) {
    console.log(heroe);
  }
});

// Para agregar elementos a un array con foreach, se puede utilizar el metodo push() para agregar elementos al array
const nuevoArray = [];

superheroes.forEach( (heroe) => {
  nuevoArray.push(heroe);
});
console.log(nuevoArray);