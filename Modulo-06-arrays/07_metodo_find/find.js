
// en los arrays, el metodo find busca un elemento dentro del array, y devuelve EL PRIMER ELEMENTO QUE CUMPLA con la condicion que le pasamos como argumento. Y Si no encuentra ningun elemento, devuelve undefined.

// El metodo find no modifica el array original, y se puede usar con arrays de objetos, strings, etc.

// El metodo find es muy util para buscar elementos dentro de un array de objetos, ya que podemos pasarle una funcion que busque por una propiedad especifica del objeto.

// EJEMPLO 1: Buscamos un elemento dentro de un array de numeros, y devolvemos el primer elemento que sea mayor a 2.
const numeros = [1, 2, 3, 4, 5];
const resultado = numeros.find( eln => eln > 2 );
console.log(resultado);


// EJEMPLO 2: Buscamos un elemento dentro de un array de objetos, y devolvemos el primer objeto que tenga la propiedad nombre igual a "Puchini".
const mascotas = [
    { nombre: "Puchini", edad: 12, tipo: "perro" },
    { nombre: "Chanchito feliz", edad: 3, tipo: "perro" },
    { nombre: "Pulga", edad: 10, tipo: "perro" },
    { nombre: "Pelusa", edad: 12, tipo: "gato" },
];
const resultadoMascota = mascotas.find( mascota => mascota.nombre === "Puchini" );
console.log(resultadoMascota);


// EJEMPLO 3: FUNCION QUE BUSCA PROPIEDAD ESPECIFICA EN UN ARRAY DE OBJETOS
const buscarMascota = (nombre) => {
    return mascotas.find( mascota => mascota.nombre === nombre );
}
const resultadoBuscarMascota = buscarMascota("Puchini");
console.log(resultadoBuscarMascota);