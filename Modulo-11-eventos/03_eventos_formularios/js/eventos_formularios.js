const fullName = document.querySelector("#fullName");

// EVENTOS DE FORMULARIOS

// Focus - Permite controlar lo que le sucede a un campo de un formulario, cuando pongo el mouse sobre él haciendo click
fullName.addEventListener("focus", () => {
    console.log("Hiciste foco sobre el full Name");
});

// Blur - Permite controlar lo que le sucede a un campo de un formulario, cuando saco el mouse del focus
fullName.addEventListener("blur", () => {
    console.log("Sacaste el foco sobre el full Name");
});


// Input - Permite controlar lo que le sucede a un campo de un formulario, cuando escribo dentro de el
fullName.addEventListener("input", (event) => {

    console.log(event.target.value); // Indicara el valor actual completo que hay dentro del campo

    console.log(event.data); // event.data contiene el último carácter ingresado (o null si borraste con backspace, por ejemplo). Es útil cuando quieres reaccionar a lo que acaba de escribirse, pero no al contenido completo.

    console.log("Esto aparece cuando se escribe algo en el campo de texto");
});


// Change - Permite controlar lo que le sucede a un campo de un formulario, cuando cambio el valor de un input. Se utiliza mucho en selects, checkboxes y radio buttons.
// El valor del campo lo toma cuando se cambia el valor ingresado, y cuando se hace el blur, es decir, cuando se saca el foco del campo
fullName.addEventListener("change", () => {
    console.log("El valor del campo cambió a ");
});

const countries = document.querySelector("#countries")
countries.addEventListener("change", (event) => {
    console.log(event);
    console.log("Cambio la elección de pais");
});


// Submit - Se implementa sobre el formulario y no sobre el boton de submit, por mas que este tenga el type submit, porque es el formulario completo quien envia los datos al servidor
// Los form son los unicos que pueden usar el evento submit, no los inputs ni los selects ni los textareas
const contactForm = document.querySelector("#contactForm");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event);
    console.log("Se va a enviar la información a algun lugar");
});
// El formulario de un html siempre va a recargar la pagina, porque el objetivo de un formulario es enviar la informacion a algun lugar, y si no esta especificado a donde, esta ira a la misma pagina, haciendo un refresh de la misma
// y cuando queremos evitar que el formulario recargue la pagina, tenemos que usar un parametro event que se puede llamar como queramos, y luego usar el metodo preventDefault(), para evitar que el formulario recargue la pagina y use su comportamiento por defecto
// Un event es un objeto que contiene toda la información del evento que se esta ejecutando, y se puede agregar como parametro en cualquier funcion de eventListener