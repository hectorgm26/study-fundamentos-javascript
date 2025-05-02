// Las funciones existen para reutilizar código, es decir, para no tener que escribir el mismo código una y otra vez en cada lugar donde lo necesitemos.
// Las funciones se definen con la palabra reservada function seguida del nombre de la función y los paréntesis. Dentro de los paréntesis se pueden pasar parámetros que serán los valores que la función necesita para trabajar.

// Hay funciones con inputs, otras sin inputs, funciones con outputs y funciones sin outputs.

/*
function nombreFuncion() {
    // Cuerpo y código con la logica de la funciones. Puede ir el codigo que queramos
}
*/

// Paso 1. Crear la función
function saludar() {
    return "¡Hola que tal!"; // Los return solo van en funciones, y para devolver un string, no es necesario devolverlo en una variable.
}

// Paso 2. Ejecutar/llamar/invocar la función, escribiendo el nombre de la función seguido de los paréntesis.
// Cuando en una funcion se determina un return, ese return se debe almacenar en una variable para poder ser utilizado, o quizas se pueda imprimir directamente en consola.
const mensajeDeSaludo = saludar();
console.log(mensajeDeSaludo);


// Funciones con parámetros, se pasan los parámetros dentro de los paréntesis de la función.
// Los valores de entrada automaticamente podremos usarlos como variables locales dentro de la función
function saludarVersion2(nombrePersona) {

  let mensaje;

  if (nombrePersona === undefined) {
    mensaje = "Hola persona desconocida"; // Esta validacion es en casos de que no se le pase ningun valor a la funcion
  } else {
    mensaje = `Hola ${nombrePersona}!`;
  }

  return mensaje; // LO IDEAL ES NO TENER MAS DE UN RETURN EN UNA FUNCION, ASI QUE LO MEJOR ES TENER UNA VARIABLE QUE ALMACENE EL MENSAJE Y LUEGO RETORNAR ESA VARIABLE
}

// Se le entrega el valor del parametro a la función, conocido como argumento, mediante el llamado a la función, poniendo el valor entre los paréntesis.
const saludo1 = saludarVersion2("Hector");
console.log(saludo1);

const saludo2 = saludarVersion2();
console.log(saludo2); // ESTO IMPRE HOLA UNDEFINED, YA QUE NO SE LE PASO NINGUN VALOR A LA FUNCION QUE SI TENIA PARAMETROS
//POR LO QUE EL PARAMETRO TOMA EL VALOR DE UNDEFINED, DEBIDO A TENER UNA VARIABLE SIN UN VALOR ASIGNADO (NO SE ROMPE EL CODIGO)

