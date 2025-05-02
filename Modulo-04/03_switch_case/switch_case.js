// Sentencia que nos permite tomar decisiones dependiendo del valor de una variable que se recibe como parámetro (no se recibe una condición como en el if)
// Se utiliza para comparar valores de una variable con múltiples casos

// El objetivo es agrupar en una sola sentencia, los distintos escenarios que se pueden presentar, sin la necesidad de anidar múltiples sentencias if

/*
switch (valor) {
    caso 1:
        console.log("Caso 1");
    caso 2:
        console.log("Caso 2");
    default:
        console.log("Caso por defecto, en caso que no se cumpla ninguno de los casos anteriores");
}
*/

let day = "tuesday";
let dia;

switch (day) {
  case "monday":
    dia = "Es Lunes";
    break;
  case "tuesday":
    dia = "Es Martes";
    break;
  case "wednesday":
    dia = "Es Miércoles";
    break;
  case "thursday":
    dia = "Es Jueves";
    break;
  case "friday":
    dia = "Es Viernes";
    break;
  case "saturday":
    dia = "Es Sábado";
    break;
  case "sunday":
    dia = "Es Domingo";
    break
  default:
    console.log("Ingrese un dia valido");
    break;
}

console.log(`El dia es: ${dia}`);

// el break es necesario para que no se sigan ejecutando los casos siguientes, si no se pone, se ejecutará el caso que cumple la condicion, y luego se ejecutraran todos los casos siguientes al que se cumpla
// el default es opcional, se ejecutará si no se cumple ninguno de los casos anteriores
// se puede omitir el break si se quiere que se ejecuten los casos siguientes al que se cumpla
// Dentro de codigo de cada case, podemos poner cualquier codigo que queramos ejecutar, no solo un console.log

/* SE PUEDE RESUMIR CODIGO JUNTANDO CASOS:
let day2 = "tuesday";

switch (day2) {
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
  case "friday":
    console.log("Es un día laboral");
    break;
  case "saturday":
  case "sunday":
    console.log("Es fin de semana");
    break;
  default:
    console.log("Ingrese un dia valido");
    break;
}
*/