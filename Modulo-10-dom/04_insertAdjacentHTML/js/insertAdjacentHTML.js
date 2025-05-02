/*
const h1Tag = document.querySelector("h1");
h1Tag.innerHTML = `${h1Tag.innerText} <em>es lo mejor!!!</em>`;
console.log(h1Tag.innerHTML);
console.log(h1Tag.innerText);

const firstP = document.querySelector("p");
firstP.innerText = firstP.innerText.toUpperCase();
*/

// Insersicion de con contenido dinamico dentro de HTML, pero de manera controlada y profesional
// Con el fin de tener control sobre en que lugar especifico se deben insertar los elementos, obsevando valores cartesianos en el espacio del DOM

const dynamicContentTag = document.querySelector("#dynamicContent");

dynamicContentTag.insertAdjacentHTML("beforebegin", "<strong>HOLAAAA!!!!</strong>");

dynamicContentTag.insertAdjacentHTML("afterend", "<strong>1!</strong>"); // Se posicionan en sentido inverso ya que se van apilando cada uno desues de la etiqueta de cierre
dynamicContentTag.insertAdjacentHTML("afterend", "<strong>2!</strong>");
dynamicContentTag.insertAdjacentHTML("afterend", "<strong>3!</strong>");
dynamicContentTag.insertAdjacentHTML("afterend", "<strong>4!</strong>");
dynamicContentTag.insertAdjacentHTML("afterend", "<strong>5!</strong>");
dynamicContentTag.insertAdjacentHTML("afterend", "<strong>6!</strong>");

dynamicContentTag.insertAdjacentHTML("beforeend", "<strong>1!</strong>"); // se apilan en orden, ya que se van sin problemas apilando uno tras otro
dynamicContentTag.insertAdjacentHTML("beforeend", "<strong>2!</strong>");
dynamicContentTag.insertAdjacentHTML("beforeend", "<strong>3!</strong>");
dynamicContentTag.insertAdjacentHTML("beforeend", "<strong>4!</strong>");
dynamicContentTag.insertAdjacentHTML("beforeend", "<strong>5!</strong>");
dynamicContentTag.insertAdjacentHTML("beforeend", "<strong>6!</strong>");

// El insertAdjacentHTML es un Metodo que se ejecuta sobre el/los elementos del DOM, y no sobre un array o string u objeto
// Se le pasan dos argumentos:
// 1. Posicion en la que se va a insertar el contenido.
// 2. El contenido dinamico de html que se quiere insertar

// Posibilidades del primero argumento:
// 1. beforebegin: Antes del elemento y de su etiqueta de apertura (hermano anterior)
// 2. afterbegin: Dentro del elemento, innmediatamante despues de abrirse su etiqueta, y antes de su primer hijo (hijo primero)
// 3. beforeend: Dentro del elemento, antes que la etiqueta se cierre, es decir, después de su último hijo (hijo ultimo) (IDEAL PARA ENCOLAR EN ORDEN)
// 4. afterend: Después del elemento y de su etiqueta de cierre (hermano siguiente)


// USO COMUN - INSERTAR ELEMENTOS NUEVOS EN EL DOM DEL HTML
const students = [
    {
        name: "Caro",
        lastName: "TFSD",
        email: "caro@email.com",
        avatar: "https://i.pravatar.cc/150?img=3"
    },
    {
        name: "John",
        lastName: "Doe",
        email: "john@email.com",
        avatar: "https://i.pravatar.cc/150?img=4"
    },
    {
        name: "Javi",
        lastName: "Script",
        email: "javi@email.com",
        avatar: "https://i.pravatar.cc/150?img=5"
    },
    {
        name: "Jane",
        lastName: "Smith",
        email: "jane@email.com",
        avatar: "https://i.pravatar.cc/150?img=6"
    },
    {
        name: "Peter",
        lastName: "Smithers",
        email: "peter@email.com",
        avatar: "https://i.pravatar.cc/150?img=7"
    },
];

for (const oneStudent of students) {
    dynamicContentTag.insertAdjacentHTML("beforeend",
        `
        <img src="${oneStudent.avatar}"/>
        <p class="special">${oneStudent.name} ${oneStudent.lastName}</p>
        <a href="mailto:${oneStudent.email}">${oneStudent.email}</a>
        <br>
        <hr>
        `
    );
// No se puede directamente poner oneStudent ya que es un objeto con key y value, y no un string, por lo que se debe acceder a su propiedad name para que se convierta en un string
}


// Tambien existe el insertAdjacentElement(), que es lo mismo pero para elementos del DOM, y no para HTML, pero no se usa mucho ya que el insertAdjacentHTML es mas versatil y potente, ya que puede insertar cualquier tipo de contenido, no solo elementos del DOM