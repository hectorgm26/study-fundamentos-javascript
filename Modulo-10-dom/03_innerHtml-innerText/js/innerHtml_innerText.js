// MODIFICAR EL CONTENIDO DEL HTML

const h1Tag = document.querySelector("h1");
console.log(h1Tag);

// Con la propiedad, atributo o key value innerText que es de lectura y de escritura, podemos obtener el texto que hay dentro de un elemento HTML
// Con ello podemos modificar o reconocer el contenido de un elemento HTML, capturando el elemento con los selectores

// Se accede al innerText mediante una variable que contiene el elemento HTML, en este caso h1Tag. Se accede a la propiedad innerText y se guarda en una variable llamada h1Text.
// El innerText es un string que contiene el texto que hay dentro del elemento HTML. En este caso, el innerText es "Hola Mundo".
const h1Text = h1Tag.innerText;
console.log(h1Text);

const firstP = document.querySelector("p");
// tambien podemos acceder al innerText directamente desde el selector, sin necesidad de guardar el elemento en una variable.
console.log(firstP.innerText.length);

// PERO VERLO EN LA CONSOLA NO ES FUNCIONAL, YA QUE EL USUARIO PROMEDIO NO USA LA TERMINAL, POR ENDE, SE DEBE "PISAR" EL TEXTO CON CONTENIDO NUEVO
// Desde JS se captura la etiqueta, y con el atributo innerText se le asigno un nuevo valor

firstP.innerText = firstP.innerText.toUpperCase(); // Se asigna el mismo texto a si mismo, pero con una modificacion en mayusculas
// firstP.innerText = "Lo que sea!"; Se asigna un nuevo valor al innerText del primer parrafo



// ¿Como cambiar el texto pero con estructura HTML?
// Al aplicar innertext, se eliminan todas las etiquetas HTML que haya dentro del elemento, y se deja todo como texto. Por lo tanto, para cambiar el texto por un nuevo texto con estructura HTML, se usa innerHTML, que devuelve el contenido html completo, no solo el texto
h1Tag.innerHTML = `${h1Tag.innerText} <em>es lo mejor</em>`; // De esta forma las etiquetas html si las interpreta y las muestra como tal
console.log(h1Tag.innerHTML);
console.log(h1Tag.innerText);


const bodyTag = document.querySelector("body");
const bodyContent = bodyTag.innerHTML;
console.log(bodyContent);


// IMPORTANTE
// Hay diferencias entre aplicar para obtener el valor innerText o value, ya que el innerText devuelve el texto que hay dentro del elemento, y el value devuelve el valor del atributo value de un input. Por lo tanto, si se quiere obtener el valor de un input, se debe usar value, no innerText. En este caso, se usa innerText para obtener el texto que hay dentro del elemento bodyTag, que es todo el contenido html que hay dentro del body.