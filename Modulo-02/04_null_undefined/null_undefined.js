// Null y undefined son datos primitivos en JavaScript.
// null es un valor que se asigna EXPLICITAMENTE a una variable para indicar que no tiene un valor
// undefined significa que la variable se ha declarado, pero sin asignarle un valor

// let nombre = Javi;
// SI LA ASIGNACION ES UNA CADENA QUE NO TIENE COMILLAS, SIGNIFICA QUE SE ESTA ASIGNANDO A NOMBRE, EL VALOR DE UNA VARIABLE LLAAMADA JAVI
// PERO COMO NO EXISTE LA VARIABLE JAVI, NOS DEVOLVERA UN UNDEFINED, que es el valor por defecto de una variable no inicializada

let nombre;
console.log(nombre); // undefined

// El tratar de imprimir una variable que no existe, nos devolvera un error de referencia, que es distinto a undefined

let apellido = null;
console.log(apellido); // null, y se coloca sin comillas