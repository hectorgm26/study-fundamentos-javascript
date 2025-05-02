
// FUNCIONES PARA ITERAR TABLAS

// Usaremos la propiedad de table del objeto tabla (etiqueta html table) llamada rows (filas). Esta propiedad devuelve la coleccion de todos los elementos tr (table row), devolviendo una fila en forma de coleccion, la cual podemos iterar

// Tambien usaremos la propiedad cell, que es una propiedad de tabla que devuelve una coleccion de todos los elementos td (table head) y td (table data), es decir, obtendremos colecciones de solo td o th o las dos mezcladas

// Solo necesitamos un id para cualquier tabla, y mediante ese id de la etiqueta table, tendremos toda la tabla y no necesitaremos identificar dentro de ella nada mas

let tabla = document.getElementById("tablaPaises");

console.log(tabla.rows); // Devuelve una coleccion de todas las filas de la tabla, es decir, todos los elementos tr (table row) que hay dentro de la tabla
// Dentro de las opciones de desarrollador, podemos buscar la propiedad cells: obteniendo cada una de las celdas (td o th) que hay dentro de cada fila (tr).

console.log(tabla.rows[4].cells[1].innerHTML); // Devuelve la celda (td o th) que hay en la fila 1 y columna 1 de la tabla, es decir, el elemento td que hay dentro de la fila tr. En este caso, devuelve el elemento td con el texto "España".
console.log(tabla.rows[1].cells[1].innerHTML);
// Se usa el innerHTML ya que es un elemento html, y no un texto plano. Si no se usara el innerHTML, se devolveria el objeto html, y no el texto que contiene. Por lo tanto, si queremos obtener el texto que hay dentro de una celda, debemos usar el innerHTML.
console.log("");


// CREACION DE FUNCION

let tablaPaises = document.getElementById("tablaPaises");
let tablaCiudad = document.getElementById("tablaCiudades");
let tablaPueblos = document.getElementById("tablaPueblos");

const muestraFila = (tabla, numFila) => {
    let fila = tabla.rows[numFila].cells; // Obtendremos las celdas de la fila que le pasemos por parametro

    for (const celda of fila) {
        console.log(celda.innerHTML); // iteramos la coleccion para mostrar todas las celdas de la fila
    }
/* Con un foreach seria:
    fila.forEach((celda) => {
        console.log(celda.innerHTML);
    });
*/
}
muestraFila(tablaPaises, 2); // Muestra la fila 1 de la tabla de paises
console.log("");
muestraFila(tablaPaises, 0);
console.log("");

// PERO, Si no queremos los th de la izquierda (que son los encabezados de la tabla), podemos realizar otra funcion que obtenga solo los elementos td (table data) de la fila

const muestraFilaTd = (tabla, numFila) => {
    let fila = tabla.rows[numFila].getElementsByTagName("td"); // Obtendremos las celdas de la fila que le pasemos por parametro, pero solo los elementos td (table data)

    for (const celda of fila) {
        console.log(celda.innerHTML);
    }
}
muestraFilaTd(tablaPaises, 1); // Muestra la fila 1 de la tabla de paises
console.log("");


// FUNCIONES ITERADORAS DE COLUMNAS EN TABLAS
const muestraColumna = (tabla, numColumna, inicio) => {

    for (let i = inicio, celda; i < tabla.rows.length; i++) {
        celda = tabla.rows[i].cells[numColumna]; // eL cells[numColumna] siempre sera el mismo, y sera el numero de columna que le pasemos por parametro, asi recorriendo todas las fulas, pero siempre guardando la columna que le pasamos por parametro
        console.log(celda.innerHTML);
    }
}
// el let i = 0, celda; i es una forma de declarar varias variables en una sentencia, como let a, b, c, que es lo muismo que let a = 10, b = 20, c = 30;
muestraColumna(tablaPaises, 4, 1);
// Con el tercer parametro, podemos evitar que se muestre el encabezado de la columna, ya que este sera 0, y si no lo queremos, podemos cambiarlo a 1, o al valor que deseemos, y se mostrara desde la fila que le pasemos por parametro, en este caso, 1, que es la segunda fila de la tabla, ya que la primera es el encabezado.