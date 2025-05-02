const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const countries = document.querySelector("#countries");
const message = document.querySelector("#message");
const contactForm = document.querySelector("#contactForm");
const alertDiv = document.querySelector("#alertDiv");

const fieldValidate = (event) => {
    const field = event.target; // Obtenemos el campo que disparó el evento, es decir, el campo que se está validando que es el que tiene el foco

    const fieldValue = field.value.trim(); // Obtenemos el valor del campo que se está validando, eliminando con trim los espacios antes y despues, no los espacios entremedio del texto
    console.log(fieldValue);

    const spanTag = field.nextElementSibling; // Obtenemos el siguiente elemento hermano del campo que se está validando, que es el span vacio donde se mostrará el mensaje de error. Por elemento hermano se entiende el siguiente elemento que está en el mismo nivel del DOM, es decir, que tiene el mismo padre.

    if (fieldValue === "") {
        spanTag.innerText = ("El campo " + field.name + " es Obligatorio"); // Name solo funciona si el campo tiene el atributo name, si no lo tiene, esta vacio, PERO se puede usar el id o el class asi: field.id o field.className

    } else if (field.type === "email") { // type imprime el tipo de campo que se está validando, para saber si es un input, un select, etc.
        const emailIsValid = isValidateEmail(fieldValue);

        if (!emailIsValid) {
            spanTag.innerText = "Formato de correo invalido"; // Si el correo no es valido, se muestra el mensaje de error
        } else {
            spanTag.innerText = ""; // Si el correo es valido, se limpia el mensaje de error, ya que el campo es valido.
        }

    } else {
        spanTag.innerText = ""; // Si no entro al type email, se limpia el mensaje de error, ya que el campo es valido. Se limpia el mensaje de error, ya que el campo es valido.
    }
};


const isValidateEmail = (string) => {

    const regex =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    // Las regex tienen un metodo test que devuelve true o false, si el valor del campo cumple con la regex, devuelve true, si no, devuelve false.

    return regex.test(string); // Se devuelve el resultado de la validacion, si es true o false. Si es true, el correo es valido, si es false, el correo no es valido.
};


fullName.addEventListener("blur", fieldValidate);
message.addEventListener("blur", fieldValidate);
email.addEventListener("blur", fieldValidate);
countries.addEventListener("change", fieldValidate); // Se usa el change, ya que el campo es un select y no tiene el foco, por lo que no se puede usar el blur. El change se usa para los campos que no tienen el foco, como los select o los radio buttons.


contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const fullNameValue = fullName.value.trim(); // Se usa value ya que es un input, y no innerText, ya que no es un elemento HTML, es un input.
    const emailValue = email.value.trim(); // Se usa value ya que es un input, y no innerText, ya que no es un elemento HTML, es un input.

    if (fullNameValue === "" || emailValue === "") {
        alertDiv.insertAdjacentHTML("beforeend", "<strong>Revisa el formulario, hay campos vacios</strong>");
        return; // Se usa return para detener la ejecucion del formulario, ya que si no se envia el formulario, se ejecuta el resto del codigo.
    }

    alertDiv.innerHTML = "";
    contactForm.reset(); // Se limpia el formulario, eliminando los valores de los campos, para que queden vacios. Se usa reset ya que es un formulario y no se puede usar innerHTML o innerText, ya que no es un elemento HTML, es un formulario.
    console.log("Formulario enviado exitosamente");
});