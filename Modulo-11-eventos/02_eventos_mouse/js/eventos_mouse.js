// EL METODO ADD EVENT LISTENER Recibe dos argumentos: 1) String que representara el nombre del evento, SIN LA PALABRA ON
//                                                     2) Callback funcion que sera el event handler, que se ejecutara cuando el evento ocurra

const btn01 = document.querySelector("#btn01");

const colors = ["yellow", "orange", "green", "red", "pink", "olive", "salmon"];

const body = document.querySelector("body");

const btn02 = document.querySelector("#btn02");

// dblclick es el evento que se ejecutara al hacer doble click
btn01.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * colors.length); // Genera un numero aleatorio entre 0 y el numero del tamaño del array de colors
    console.log(randomNumber);

    const chosenColor = colors[randomNumber];
    console.log(chosenColor);

    body.style.backgroundColor = chosenColor;
});


const cssClasses = ["dark", "cream", "mistery"];

// evento click, se ejecutara al hacer click
btn02.addEventListener("click", () => {

    const randomNumber = Math.floor(Math.random() * cssClasses.length);
    const chosenClass = cssClasses[randomNumber];

    body.classList.remove(...cssClasses); // EL SPREAD OPERATOR HACE QUE SE CONSIDERE CADA ELEMENTO DEL ARRAY COMO UN ARGUMENTO DISTINTO, EN VEZ DE UN SOLO ARGUMENTO QUE ES EL ARRAY ENTERO, es decir, se le pasara todos los selectores dentro del array como argumentos separados

    body.classList.add(chosenClass);
    // AL HACER ESTO HAY UN PROBLEMA, COMO SON 3 CLASES, CADA VEZ QUE SE HAGA CLIC, SE INYECTARA UNA CLASE DE ESAS, HASTA QUE EL BODY TENGA 3 CLASES, PERO NO SE QUITARA NINGUNA, YA QUE NO HEMOS PROGRAMADO NINGUN EVENTO QUE LO HAGA. POR ESO ANTES SE HACE UN REMOVE DE LAS CLASES QUE SE TIENEN, PARA QUE NO SE QUEDEN EN EL BODY

});