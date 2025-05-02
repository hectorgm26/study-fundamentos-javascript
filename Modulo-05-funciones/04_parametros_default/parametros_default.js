const saludar = (nombrePersona = "Persona Desconocida") => `Hola ${nombrePersona}`;

console.log(saludar("Hector"));

// ¿que pasa si no le pasamos el argumento - PUES DIRA Hola undefined

// SIN EMBARGO, ACTUALMENTE JS PERMITE DIRECTAMENTE EN EL MOMENTO QUE ESTAMOS ESCRIBIENDO EL PARAMETRO, ASIGNARLE UN VALOR POR DEFECTO en caso que no se le pase ningun argumento
// ESTOS SE LLAMAN PARAMETROS DEFAULT, y se asignan con el signo de igualdad, luego del nombre del parametro, y pueden ser cualquier tipo de dato, incluso una funcion
// Permiten que la funcion sea mas robusta, y no se rompa si no se le pasa un argumento, y permiten no tener que implementar validaciones innecesarias

const decirEdadUsuario = (nombre, anioNacimiento) => {
    const edad = new Date().getFullYear() - anioNacimiento;
    return `Hola ${nombre}, tienes actualmente ${edad} años`;
}

console.log(decirEdadUsuario("Hector", 1997));

console.log(decirEdadUsuario(1997));
// ACLARACION = SI POR EJEMPLO LA FUNCION TIENE DOS PARAMETROS, Y SOLO SE LE PASA EL SEGUNDO,
// LA FUNCION TOMARA EL SEGUNDO ARGUMENTO COMO EL PRIMERO, Y EL SEGUNDO SERA UNDEFINED o NaN, que es el resultado de hacer una operacion con un undefined (año actual - undefined) = NaN (Not a Number)


const decirEdadUsuario2 = (anioNacimiento, nombre = "Persona Desconocida") => {
  const edad = new Date().getFullYear() - anioNacimiento;
  return `Hola ${nombre}, tienes actualmente ${edad} años`;
}

console.log(decirEdadUsuario2(1997));
// A PESAR DE TENER UN VALOR POR DEFECTO, JS SEGUIRA TOMANDO EL SEGUNDO ARGUMENTO COMO EL PRIMERO

// RECOMENDACION = siempre que tengamos mas de un parametro, los PARAMETROS DEFAULT DEBEN IR PREFERENTEMENTE AL FINAL DE LA LISTA DE PARAMETROS
// para que asi sean parametros optativos, es decir, que si yo no los paso, no pasa nada
// y los parametros que queremos que sean si o si obligatorios, ponerlos al principio