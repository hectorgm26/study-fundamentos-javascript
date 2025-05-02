// Las funciones expresadas tienen distinta forma de declararse, pero son lo mismo que las funciones declaradas.

// funcion declarada
console.log(saludo());

function saludo() {
    return "Hola";
}


// funcion expresada - son aquellas que se asignan a una variable, SON CONOCIDAS COMO FUNCIONES ANONIMAS

const despedida = function () {
  return "Adios";
}; // el punto y coma es necesario en este caso, ya que es una expresion que se asigna a una variable

// no tienen diferencia en cuanto a las declaradas y su estructura, solo que la expresion se asigna a una variable y la declarada no.
// no es recomendable ponerle nombres a las funciones expresadas, ya que se pierde el sentido de la expresion (ej: NO PONER const despedida = function despedida () )

console.log(despedida()); // aca a la funcion se le llama mediante el nombre de la variable que la contiene, junto con los parentesis para que se ejecute

// ESTO TIENE IMPORTANCIA POR EL HOISTING. EN CASO DE LLAMAR A UNA FUNCION DECLARADA ANTES DE DEFINIARLA, FUNCIONARAN IGUAL
// DEBIDO A QUE JS AGRUPA LAS DEFINICIONES DE FUNCIONES AL PRINCIPIO DEL ARCHIVO.
// PERO EN CASO DE FUNCIONES EXPRESADAS, NO FUNCIONARA, dara error de referencia, POR LO QUE SE DEBE DEFINIR LA FUNCION ANTES DE LLAMARLA.

const despedida2 = function (lenguaje) {
  let mensajeDespedida;

  switch(lenguaje) {
    case "es":
      mensajeDespedida = "Adios";
      break;
    case "en":
      mensajeDespedida = "Goodbye";
      break;
    case "fr":
      mensajeDespedida = "Au revoir";
      break;
    default:
      mensajeDespedida = "Tienes que elegir un idioma";
  }
  return mensajeDespedida;
};

console.log(despedida2());
console.log(despedida2("es"));
console.log(despedida2("en"));
console.log(despedida2("fr"));