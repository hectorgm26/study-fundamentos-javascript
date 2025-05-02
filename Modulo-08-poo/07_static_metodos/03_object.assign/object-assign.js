
// Es un metodo estatico de la clase Object que nos permite copiar las propiedades de uno o varios objetos hacia otro. Trabaja directamente con objetos y no con instancias de clases.

// En verdad no es copiar, si no asignar. Recibe dos argumentos: el objeto destino y el objeto origen (que pueden ser mas de uno). El objeto destino es el que se va a modificar, y el objeto origen es el que se va a copiar. Si hay propiedades con el mismo nombre, se sobrescriben las del objeto destino.

// Se usa para dos cosas:
// 1) clonar objeto

const persona1 = {
    ojos: "marron",
    pelo: "negro",
    sweater: "naranja, azul y blanco",
    pantalon: "amarillo",
    piel: "color-piel-1"
}

const clon = Object.assign({}, persona1)
// {} es el objeto destino, el que se va a modificar. En este caso es un objeto vacio, por lo que se crea un clon de persona1. Si no se pone el objeto destino, se modifica el objeto original.

console.log(persona1, clon); // Son dos objetos distintos, pero con las mismas propiedades y valores.
console.log(clon === persona1); // false, son dos objetos distintos


// 2) mezclar/fusionar objetos

const persona2 = {
    ojos: "marron",
    pelo: "negro",
    sweater: "naranja, azul y blanco",
    pantalon: "amarillo",
    piel: "color-piel-1"
}

const persona3 = {
    ojos: "verdes",
    piel: "color-piel-2",
}

const persona4 = {
    ojos: "celestes",
    piel: "violeta",
}

const fusion = Object.assign({}, persona2, persona3, persona4);
// Fusiona en un objeto vacio, todas las propiedades de todos los objetos de origen. PERO SI HAY PROPIEDADES EN COMUN, ESTAS SE PISARAN CON LOS NUEVOS VALORES
console.log(fusion);


// ADVERTENCIAS
// SI EL OBJETO QUE SE VA A CLONAR TIENE PROPIEDADES QUE SON OBJETOS, FUNCIONES, O CUALQUIER COSA QUE NO SEA UN VALOR PRIMITIVO, HAY QUE TENER CUIDADO PORQUE OBJECT.ASSIGN NO HACE UN COPIADO PROFUNDO DE LAS PROPIEDADES, ES DECIR, VA A COPIAR LAS REFERENCIAS EN MEMORIA INTERNA DE ESOS OBJETOS.

const mascota = {
    especie: "gato",
    nombre: "michi"
};

const personita = {
    ojos: "marron",
    pelo: "negro",
    sweater: "naranja, azul y blanco",
    pantalon: "amarillo",
    piel: "color-piel-1",
    mascota
};

const cloncito = Object.assign({}, personita);
console.log(personita === cloncito); // false, son dos objetos distintos)
console.log(personita.mascota === cloncito.mascota); // true, son el mismo objeto, porque se copio la referencia en memoria interna. Si se modifica uno, se modifica el otro.
cloncito.mascota.nombre = "Miguel"; // ESTO HARA QUE SE CAMBIEN EN AMBOS OBJETOS, PORQUE SE COPIO LA REFERENCIA EN MEMORIA INTERNA.
console.log(personita.mascota.nombre); // "Miguel"
console.log(cloncito.mascota.nombre); // "Miguel"


// Object.assign() no es una funcion pura, por lo que hay que tener cuidado cuando fusionamos objetos, debido a que puede modificar el objeto destino. Si el objeto destino es un objeto vacio, no hay problema, pero si es un objeto que ya tiene propiedades, estas se van a modificar. Por lo que hay que tener cuidado al usarlo.