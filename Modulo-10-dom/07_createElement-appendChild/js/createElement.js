// El metodo createElement() crea un elemento HTML, pero no lo añade al DOM, solo lo crea en memoria.
// PARA AGREGARLO AL DOM HAY QUE HACER UN appendChild() O UN insertAdjacentHTML()

const divJs = document.querySelector('#logo-js');
console.log(divJs);

const info = document.createElement("h2");

info.innerHTML = "Este es el Logo de JavaScript";

divJs.appendChild(info); // Añade el elemento al DOM, pero no lo añade al HTML directamente, solo lo crea en memoria.
// AppendChild() añade el elemento al final del padre, pero no lo añade al HTML, solo lo crea en memoria.


// Si lo queremos agregar arriba del ultimo elemento o en otra posicion, se le debe indicar especificamente que este antes del elemento que se quiere agregar
const imgjS = document.querySelector('.logo-js__img');

const mensaje = document.createElement("h2");
mensaje.innerHTML = "Bienvenidos a...";

divJs.insertBefore(mensaje, imgjS); // Añade el elemento antes del elemento que se le indica
// Primer parametro es el elemento que se quiere agregar y el segundo es el elemento antes del cual se quiere agregar

// Y puede ser tambien insertAfter, que es el mismo pero al reves, o sea, agrega el elemento despues del elemento que se le indica