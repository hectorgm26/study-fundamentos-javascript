// el metodo reduce() se utiliza para reducir un array a su minima expresion

// la funcion recibe dos argumentos necesita un acumulador y el valor actual
// el acumulador es el valor que se va acumulando en cada iteracion
// el valor actual representa a caaduno de los elementos del array

// Opcionalmente se le puede pasar un valor inicial al acumulador como segundo argumento
// El primer argumento sera la funcion que tendra de argumentos el acumulador y el valor actual, junto a su retorno, y el segundo argumento sera el valor inicial del acumulador

// si no se le pasa un un valor inicial al acumulador, el primer valor del array se tomara como el acumulador y el segundo valor del array se tomara como el valor actual

// Reduce permite realizar operaciones con los elementos de un array y devolver un solo valor
const notasDelSemestre = [8, 9, 3, 5, 7, 10, 2, 4.5];

const totalDeNotas = notasDelSemestre.reduce( (acumulador, nota) => {
    return acumulador + nota;
});
// En este caso, el acumulador tomara como primer valor 0 por no tener un valor inicial, tomando el tipo de dato del primer elemento del array
// y asi se iterara todo el array, sumando cada elemento al acumulador
console.log(totalDeNotas);

const promedioSemestre = Math.round(totalDeNotas / notasDelSemestre.length);
console.log(promedioSemestre);


// Otro ejemplo
const mascotas = ["Koda", "Parrilla", "Otito"];

const todasLasMascotasJuntas = mascotas.reduce( (acum, mascota) => `${acum} ${mascota}`, "Mis mascotas se llaman:");
// En este caso, el acumulador toma como valor inicial la cadena "Mis mascotas se llaman:" y va concatenando cada elemento del array
// De esta forma, se le puede dar un valor inicial al acumulador
// Para el reduce, el primer parametro es la funcion principal con sus parametros y retorno, y el segundo parametro es el valor inicial del acumulador
console.log(todasLasMascotasJuntas);

/*
Esto es lo mismo que:
const todasLasMascotasJuntas = mascotas.reduce( (acum, mascota) => {
    return `${acum} ${mascota}`;
}, "Mis mascotas se llaman:");

Otra forma de hacerlo es: (RECOMENDADO):

const callbackParaElReduce = (acum, mascota) => `${acum} ${mascota}`;
const todasLasMascotasJuntas = mascotas.reduce(callbackParaElReduce, "Mis mascotas se llaman:");

Con una funcion normal seria (ES MAS CLARO):

const todasLasMascotasJuntas = mascotas.reduce( function(acum, mascota) {
    return `${acum} ${mascota}`;
}, "Mis mascotas se llaman:")  ;
*/