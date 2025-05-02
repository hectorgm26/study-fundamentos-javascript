
// Obtener todos los elementos th
let obtenerDato = document.getElementsByTagName("th"); // getElementsByTagName devuelve una colección de nodos HTML que contiene todos los elementos <th> de la tabla
console.log(obtenerDato[5].innerHTML); // Obteniendo los datos de esa celda

let ObtenerDatoTD = document.getElementsByTagName("td");

console.log(ObtenerDatoTD); // Obteniendo el total de celdas de la tabla, y asi con las toolsdev verificar a cual queremos acceder realmente
console.log(ObtenerDatoTD[13].innerHTML); // Obteniendo los datos de esa celda


// ITERAR UNA FILA ENTERA
let obtenerFilas = document.getElementById("fila2");

// Obtener los td de esa fila
let elementosFila = obtenerFilas.getElementsByTagName("td");
// Aqui nos devuelve la coleccion de td de la fila 2
console.log(elementosFila);

// Obtener cada uno de los strings de los datos que contienen estas celdas, a traves de un bucle que itere cada uno de las celdas y obtengamos el valor con innerhtml

for (let i = 0; i <= 4; i++) {
    console.log(elementosFila[i].innerHTML); // Obteniendo los datos de esa celda
}
// Se usa innerHtml YA QUE el valor que contiene es un string, y no un numero, por lo que no se puede usar innerText, ya que este devuelve el valor numerico de la celda, y no el string que contiene
