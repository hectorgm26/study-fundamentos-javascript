const title = document.querySelector("h1");

// DOM Token List, que es una especie de array vacio. Es un listado de clases que tiene el elemento
// Classlist es una propiedad que nos permite acceder a la lista de clases de un elemento. Es un objeto que tiene métodos como por ejemplo agregar, eliminar y verificar clases, entre otros.

title.classList.add("main-title", "otra-clase-mas");
console.log(title.classList);
// El metodo add permitira agregar una o varias clases a ese elemento. Se pueden agregar varias clases separadas por comas.
// En este caso, creamos una clase en CSS con estilos, y luego le agregamos la clase al elemento respectivo


//const elemento = document.getElementById('miElemento');
//if (!elemento.classList.contains('activo')) { // si el elemento no tiene la clase activo, se le agrega la clase activo (al anteponer el signo !)
//    elemento.classList.add('activo');
// }

console.log(title.classList.contains("main-title"));
console.log(title.classList.contains("no-existe"));
// El metodo contains permite verificar si el elemento tiene una clase en especifico. Devuelve true o false. Solo admite un argumento.


const paragraphs = document.querySelectorAll(".home-content p")

for (const oneParagraph of paragraphs) {
    oneParagraph.classList.add("cool-paragraph");
    //if (oneParagraph.innerText.length > 500) {
    // }
}

for (const oneParagraph of paragraphs) {
    const lengthParagraph = oneParagraph.innerText.length;
    if (lengthParagraph < 300) {
        oneParagraph.classList.remove("cool-paragraph");
    }
}
console.log(paragraphs);
// El metodo remove permite eliminar una o varias clases a ese elemento. Se pueden agregar varias clases separadas por comas.


const body = document.querySelector("body");
body.classList.toggle("dark");
// El metodo toggle permite agregar una clase, dependiendo si el elemento no tiene esa clase, o eliminar la clase, si el elemento si la tiene.

//  Se le puede pasar un segundo argumento que es un booleano, que indica si se debe agregar o eliminar la clase. Si es true, se agrega la clase, y si es false, se elimina la clase. Es un interrumtor, una funcionalidad dual

// Si la clase en el html existe, se elimina, y si la clase en el html no existe, se agrega.