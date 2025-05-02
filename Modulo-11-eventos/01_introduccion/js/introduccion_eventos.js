// Los eventos es algo que se genera en base a un determinado comportamiento e interaccion del usuario
// Ejemplo: click, scroll, keydown, keyup, mouseover, mouseout, etc. CASI SIEMPRE TIENEN LA PALABRA ON ANTES DEL NOMBRE DEL EVENTO

// Los eventos son definidos y disparados por una funcion que administra comportamientos, conocidas como manejador de eventos o event handler
// Tipos de eventos:
// 1. Eventos de mouse: click, dblclick, mouseover, mouseout, mousedown, mouseup, mousemove
// 2. Eventos de teclado: keydown, keyup, keypress
// 3. Eventos de formulario: submit, change, focus, blur, input, select
// 4. Eventos de ventana: load, resize, scroll, unload, error
// 5. Eventos de arrastre: drag, dragstart, dragend, dragenter, dragleave, dragover, drop
// 6. Eventos de multimedia: play, pause, ended, volumechange, timeupdate, seeking, seeked
// 8. Eventos de animacion: animationstart, animationend, animationiteration
// 9. Eventos de transicion: transitionstart, transitionend, transitioncancel
// 12. Eventos de clipboard: copy, cut, paste, beforecopy, beforecut, beforepaste
// 13. Eventos de foco: focus, blur, focusin, focusout
// 15. Eventos de visibilidad: visibilitychange, pagehide, pageshow
// 18. Eventos de web socket: open, message, close, error


// Se pueden agregar eventos a los elementos HTML, y se pueden agregar varios eventos a un mismo elemento


// El metodo onload se ejecuta cuando la pagina ha terminado de cargar
// En este caso, el archivo js fue vinculado en el head y no en el body, y por tanto, se carga antes que el documento html pueda ser procesado
// Por lo que en este caso, el evento onload se ejecuta cuando el documento html ha terminado de cargar, y alli recien puedo acceder a los elementos del DOM

// SIN EMBARGO, ESTA FORMA DE ASIGNAR UN EVENTO NO ES LA MEJOR PRACTICA, YA QUE NO SEPARA EL HTML DEL JS, Y NO PERMITE REUTILIZAR ESE EVENTO SI LO NECESITAMOS EN OTRO LUGAR
window.onload = function() {
    const h1 = document.querySelector('h1');
    console.log(h1);
}

window.onload = function() {
    const allParagraphs = document.querySelectorAll('p');
    console.log(allParagraphs);
}
// AL HACER ESTO, SOLO SE IMPLEMENTARA LA ULTIMA FUNCION, YA QUE SE PISAN UNA A OTRA, YA QUE ASIGNAMOS TODO A TRAVES DEL ATIBUTO ONLOAD COMO EVENTO


// LA FORMA CORRECTA DE HACERLO ES LA SIGUIENTE:
// 1. SELECCIONAR EL ELEMENTO previamente capturado en el dom, al que le queremos asignar el evento.
// 2. ASIGNARLE UN EVENTO MEDIANTE EL METODO ADD EVENT LISTENER - permite agregar handlers de eventos a un elemento HTML, sin que se pisen unos a otros. Se le dice que escuche el evento y que ejecute una funcion cuando el evento ocurra

// EL METODO ADD EVENT LISTENER Recibe dos argumentos: 1) String que representara el nombre del evento, SIN LA PALABRA ON
//                                                     2) Callback funcion que sera el event handler, que se ejecutara cuando el evento ocurra, administrando lo que pasara. Puede ser una funcion normal, una arrow function o una funcion ya definida previamente
// 3. DEFINIR EL COMPORTAMIENTO DEL EVENTO


/*
1.- EXPRESANDO LA ARROW FUNCION DIRECTAMENTE EN EL ARGUMENTO DEL EVENTO. De esta forma, no es necesario definir la funcion antes de asignarla como evento,ya que esta se definira directamente en el argumento del evento.
window.addEventListener("load", () => {
});

2.- EXPRESANDO UNA FUNCION NORMAL COMO PARAMETRO
window.addEventListener("load", function() {
});

3.- USANDO UNA FUNCION DECLARADA
fucntion miFuncion() {
    // Hacer algo
}
window.addEventListener("load", miFuncion);

4- USANDO UNA ARROW FUNCTION DECLARADA
const miFuncion = () => {
    // Hacer algo
}
window.addEventListener("load", miFuncion);

// OJO: NO SE PUEDE HACER LO SIGUIENTE, YA QUE NO SE PUEDE HACER UN EVENTO DE CARGA DE UNA FUNCION, SINO QUE DE UN ELEMENTO HTML
// window.addEventListener("load", miFuncion());
*/

window.addEventListener("load", () => {
    const allParagraphs = document.querySelectorAll('p');
    for (const oneParagraph of allParagraphs) {
        oneParagraph.style.backgroundColor = "salmon";
    }
});

window.addEventListener("load", () => {
    const h1 = document.querySelector('h1');
    h1.style.color = "purple";
});

// EL EVENTO QUE SE ASIGNE HAY QUE FIJARNOS QUE SIEMPRE SEA ASIGNADO A UN SOLO ELEMENTO INDIVIDUAL DEL DOM, Y NO A UN GRUPO DE ELEMENTOS, YA QUE EN ESE CASO DARA ERROR

// window.addEventListener("load", () => {
// EN LOS () luego del metodo addEventListener, se puede agregar un argumento que sera el evento que se dispara, que sera un objeto que contiene toda la info del evento que se disparo, y que se puede usar para obtener info de ese evento, como el tipo de evento, el elemento que lo disparo, etc.
//     const allParagraphs = document.querySelectorAll('p');
//     for (const oneParagraph of allParagraphs) {
//         oneParagraph.style.backgroundColor = "salmon";
//         oneParagraph.addEventListener("click", (event) => {
//             console.log(event);
//             console.log(event.target);
//             console.log(event.type);
//             console.log(event.currentTarget);
//             console.log(event.timeStamp);
//             console.log(event.isTrusted);
//             console.log(event.detail);
//             console.log(event.button);
//             console.log(event.buttons);

