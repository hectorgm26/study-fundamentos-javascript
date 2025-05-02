const notas = [2.5, 4, 6.3, 8, 3.4 ];

// Metodo map: permite transformar un array en otro array nuevo con la misma longitud del original, aplicando una funcion a cada elemento del array original
// Dentro del map se debe pasar un callback, o directamente pasarle una funcion, que puede ser una funcion normal o una funcion flecha
// El callback puede recibir hasta 3 argumentos: el elemento actual, el indice y el array original
const notasPor2 = notas.map( (unaNota) => {
    return unaNota * 2;
});
console.log(notasPor2);

// Otro ejemplo, pero ahora pasandole directamente la funcion como callback, no definiendola dentro del map
const estudiantes = ["Hector", "Yanira", "Juan Pablo", "Leandro", "Cristopher"];

const agregarApellido = (unEstudiante) => {
  return `${unEstudiante} Doe`;
};

const estudiantesConApellido = estudiantes.map(agregarApellido);
console.log(estudiantesConApellido);
/* SERIA LO MISMO QUE
const estudiantesConApellido = estudiantes.map( (unEstudiante) => {
  return `${unEstudiante} Doe`;
});
console.log(estudiantesConApellido); */


// Metodo filter: permite filtrar un array, devolviendo un nuevo array con los elementos que cumplan la condicion que le pasemos en el callback
// Solo retorna los elementos en el nuevo array, que cumplan la condicion que le pasamos en el callback
const notasSemestre = [5, 7, 3, 2, 1, 8, 10, 7];

notasAprobadas = notasSemestre.filter( (unaNota) => {
  // En el return se escribe la condicion que queremos que cumpla el elemento para que se quede en el nuevo array cuando itere por el array original
    return unaNota >= 6;
});
console.log(notasAprobadas);

// Otro ejemplo
const nombres = ["Maria", "Pedro", "Carolina", "Walter", "Rocio", "Diego"];

const nombresLargos = nombres.filter( (unNombre) => unNombre.length >= 6); // Sin return, ya que es una sola linea
console.log(nombresLargos);