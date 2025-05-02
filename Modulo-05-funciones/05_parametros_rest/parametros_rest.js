// Son aquellos parámetros que se envían a una función como un arreglo y no se sabe cuántos serán.
// Se definen con tres puntos (...) antes del nombre del parámetro
// Pueden ser cualquier tipo de datos

// Si no se quiere tener un número fijo de parámetros, se puede usar el operador rest (...) acompañados de cualquier palabra
// Con esto, aparte de los primeros 2 parametros, se podrán recibir más parámetros y se guardarán en un arreglo

const sumar = (n1, n2, ...params) => {
  console.log(params); // Imprime el arreglo que contendra los parametros adicionales restantes que se toman al ejecutar la función
// console.log(...params); // Imprimira solo los valores del arreglo, sin estar encerrados en corchetes
// console.log(params[0]); // Imprime el primer valor del arreglo params eb la posición 0
  return n1 + n2;
};

console.log(sumar(34, 67, 5, 4, 3, 2));


const datosPersonales = (nombre, documento, ...datos) => {
  console.log(datos);
  return `Nombre: ${nombre}, Documento: ${documento}`;
}

console.log(datosPersonales("Hector", "ABC123", 27, "Chile", 1.72));