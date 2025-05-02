// Podemos aplicar los mismos selectores que en CSS - ("#id, .clase, etiqueta ELEMENTO QUE SE QUIERE SELECCIONAR")

const paragraphs = document.querySelectorAll(".home-content p") // Se eligen los elementos p dentro de la clase home-content (elemento padre)

for (const oneParagraph of paragraphs) {
    oneParagraph.style.backgroundColor = "#222";
    oneParagraph.style.padding = "15px";
    oneParagraph.style.color = "#fff";
    oneParagraph.style.lineHeight = "20px";
    oneParagraph.style.fontFamily = "Verdana";
}

const title = document.querySelector("h1");
title.style.textAlign = "center";
title.style.backgroundColor = "yellow";
title.style.padding = "10px";

// El objetivo del objeto style es poder modificar el CSS directamente desde JavaScript. JS inyecta en el html la etiqueta style y aplica los estilos
// El objeto style contiene todas las propiedades CSS que se pueden modificar desde JavaScript. Aplica en un solo elemento del DOM, no en un nodelist, ni array, ni a un objeto. Se usa style.propertyName = "value" (ejemplo: oneParagraph.style.color = "green")

// En CSS las propiedades se escriben en kebada-case (ejemplo: background-color), pero en JavaScript se escriben en camelCase (ejemplo: backgroundColor) porque en JS NO SE PUEDEN UTILIZAR GUIONES


// SU APLICACION PRACTICA ES MUY UTIL EN ANIMACIONES, EFECTOS Y TRANSICIONES, Y CUANDO SE QUIERE IMPLEMENTAR ESTILOS DINAMICAMENTE (ejemplo: al hacer click en un boton, al pasar el mouse por encima de un elemento, etc).