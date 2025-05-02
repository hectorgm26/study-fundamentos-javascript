// Un selector es una herramienta del DOM que nos permitira captutar elementos del documento HTML
// Los selectores son metodos del objeto document que nos permiten acceder a los elementos del DOM

// Un selector se escribe: document.SELECTOR("nombreEtiqueta" || ".class" || "#id");

// Hay diferentes tipos de selectores:
// - Por querySelector: document.querySelector("nombreEtiqueta" || ".class" || "#id");
// - Por querySelectorAll: document.querySelectorAll("nombreEtiqueta" || ".class" || "#id");

// - Por etiqueta: document.getElementsByTagName("nombreEtiqueta");
// - Por id: document.getElementById("#id");
// - Por clase: document.getElementsByClassName(".nombreClase");


// QuerySelector es un selector que nos permite acceder al primer elemento que coincida con el selector, y lo devolvera como un objeto del DOM
const h1Tag = document.querySelector("h1");
console.log(h1Tag);

const h2Tag = document.querySelector("h2");
console.log(h2Tag); // Cuando el elemento no existe, el resultado es null, porque no hay ningun elemento que coincida con el selector

// QuerySelectorAll es un selector que nos permite acceder a todos los elementos que coincidan con el selector, y los devolvera como un objeto del DOM
// Al hacer esto tendremos un nodeList, que es un listado de nodos (parecido a un array), pero no es un array (tiene metodos similares, pero no todos)
const pTags = document.querySelectorAll("p");
console.log(pTags);
console.log(pTags.length); // Funciona
console.log(pTags.pop); // DARA ERROR PORQUE AL NO SER ARRAY, NO TIENE EL METODO POP

const sub01 = document.querySelector("#sub01"); // en queryselector si es por id, se pone # antes del id
console.log(sub01);

const specialParagraphs = document.querySelectorAll(".special-paragraph"); // en queryselector si es por clase, se pone . antes del nombre de la clase
console.log(specialParagraphs);