
// En JS, use strict es una instruccion dirigida al interprete de JS. Le indica que el codigo que vendra a continuacion esta en modo estricto, cambiando la manera en que se ejecutan algunas instrucciones.

// Por modo estricto, se entiende que el interprete de JS aplicara una serie de restricciones al codigo, lo que ayudara a evitar errores comunes y a escribir un codigo mas limpio y seguro.

// Por ejemplo, en modo estricto no se permite el uso de variables no declaradas, lo que ayudara a evitar errores tipograficos y a mejorar la legibilidad del codigo. Ademas, algunas funciones y metodos que son considerados peligrosos o poco recomendables no estaran disponibles en modo estricto.

// 'use strict'; Se aplica en comillas simples, pero se puede aplicar en comillas dobles o con comillas invertidas. Se recomienda usar comillas simples para evitar confusiones con el uso de comillas dobles en el resto del codigo. Los programas que no tengan esta instruccion al inicio del codigo, seguiran corriendo en modo "descuidado"


function saludar () {
    'use strict'; // Podemos tambien aplicar el use strict solo a una funcion o bloque de codigo. UTIL EN PROGRAMAS ANTIGUOS
    console.log("Hola mundo!")
}


// REGLAS DEL MODO ESTRICTO:

// 1. Arregla la creacion accidental de variables globales, es decir, no podemos asignarle un valor a una variable no declarada con anterioridad


// 2. Atributos de solo lectura: cuando se intenta modificar una propiedad de un objeto que no se puede modificar, se lanzara un error, y sin el modo estricto, simplemente se ignorara el error y no se lanzara ningun mensaje de error. Por ejemplo, si intentamos modificar una propiedad de un objeto que no se puede modificar, como Math.PI, se lanzara un error en modo estricto.
'use strict';
const usuario = {};
Object.defineProperty(usuario, "nombre", {value: "Sacha", writable: false}); // Definimos una propiedad de solo lectura, es decir, no se puede modificar

usuario.nombre = "Pepe"; // Si intentamos modificar la propiedad, se lanzara un error en modo estricto. PERO SIN, NO SE LANZARA NINGUN ERROR Y SOLO SE IGNORARA EL CAMBIO SIN APLICARLO


// 3. Objetos no extensibles: podemos decir que no le agregaremos propiedades a un objeto. Si le intentamos agregar una, se lanzara un error en modo estricto, pero en modo normal, simplemente se ignorara el error y no se lanzara ningun mensaje de error.
const usuario = {nombre: "UWU"};
Object.preventExtensions(usuario); // Evitamos que se le agreguen propiedades al objeto

usuario.edad = 29; // Si intentamos agregar una propiedad, se lanzara un error en modo estricto. PERO SIN, NO SE LANZARA NINGUN ERROR Y SOLO SE IGNORARA EL CAMBIO SIN APLICARLO

// Tampoco podemos asignarle propiedades a valores primitivos
let nombre = "Sacha";
nombre.modificado = false; // Si intentamos asignarle una propiedad a un valor primitivo, se lanzara un error en modo estricto. PERO SIN, SOLO ARROJARA UNDEFINED Y NO SE LANZARA NINGUN ERROR


// 4. No podemos tener parametros duplicados dentro de una funcion
function saludar (nombre, apellido, nombre) {
    console.log(`Hola ${nombre} ${apellido}`); // En modo normal imprimiria Hola undefined apellido, ya que la funcion toma como nombre el ultimo parametro, sobre escribiendolo, pero en modo estricto nisiquiera podremos declaras esa funcion, dando error
}


// 5. El sistema Octal: no se permite el uso de numeros octales, es decir, no se permite el uso de la notacion octal para representar numeros (SISTEMA OCTAL = SISTEMA DE NUMEROS CON BASE 8, Y EN EL PODEMOS REPRESENTAR CUALQUIER NUMERO CON DIGITOS DEL 0 AL 7). Por ejemplo, si intentamos usar la notacion octal para representar el numero 8, se lanzara un error en modo estricto.
//console.log(011); // En modo normal, se imprimira 9, ya que interpretara como 1 + 1 * 8
// console.log(023); // En modo normal, se imprimira 19, ya que interpretara como 2 * 8 + 3

console.log(0o11); // FORMA CORRECTA DE HACERLO EN MODO ESTRICTO, YA QUE SE ESPECIFICA QUE ES UN NUMERO OCTAL CON EL PREFIJO 0o


// 6. Se arreglan errores silenciosos con el operador delete para eliminar propiedades de un objeto. En modo normal, si intentamos eliminar una propiedad de un objeto que no existe, simplemente se ignorara el error y no se lanzara ningun mensaje de error. NO SE PUEDEN ELIMINAR VARIABLES, FUNCIONES, NI EL OBJETO GLOBAL, y al intentar hacerlo, daran error, pero en modo normal no dira nada, pero tampoco se hara nada


// 7. Arguments y eval son keywords en modo estricto es decir, no podemos declarar variables con esos nombres, se vuelven palabras reservadas.


// 8. No se permite la instruccion with. With sirve para extender la cadena de scopes en JS temporalmente. Se usaba cuando teniamos que ponerle varias propiedades en un objeto que estaba muy anidado dentro de otro para no repetir tanto codigo. Con en modo estricto, si una variable no se encuentra dentro del bloque, se ira a buscar primero como propiedad del objeto en parentesis, antes de padar al siguiente scope, y si no la encuentra, se lanzara un error.

with (document.forms[0]) {
    email.value = "";
    password.value = "";
}
/* Esto se hacia para evitar repetir codigo, como por ejemplo:
with (document.forms[0]) {
    document.forms[0].email.value = "";
    document.forms[0].password.value = "";
}
*/


// 9. NUEVAS PALABRAS RESERVADAS, como por ejemplo: implements, package, public, interface, static, private, protected, yield, let, etc.


// 10. FUNCIONES LIBRES Y SIN DUEÑOS. ES DECIR, EJECUTAR UNA FUNCION SIN ESPECIFICAR POR EJEMPLO QUE SEA UN METODO DE UN OBJETO.

const user = {
    nombre: "Sacha",
    saludar: function () {
        console.log(`Hola ${this.nombre}`); // Si no usamos el this, no sabra a que objeto se refiere, y lanzara un error en modo estricto. En modo normal, simplemente no se ejecutara la funcion y no se lanzara ningun mensaje de error.
    }
};

user.saludar(); // Hola Sacha
const saludar = user.saludar; // Asignamos la funcion a una variable, pero al no tener un dueño, no sabra a que objeto se refiere, y lanzara un error en modo estricto. En modo normal, se ejecutara como si estuviese dentro de un objeto global, que en los navegadores en window, y window sera el dueño, pero como window no tiene la propiedad nombre, se imprimira Hola undefined.nombre, pero no se lanzara ningun mensaje de error..

saludar(); // PERO EN LODO ESTRICTO, COMO NO TIENE DUEÑO DEFINIDO, YA NO TENDRA COMO DUEÑO AL OBJETO GLOBAL, SI NO QUE NO TENDRAN DUEÑO PARA NADA, y cuando se quiera obtener el valor de this, dara un error de que no podemos acceder a una propiedad "nombre" sobre el valor undefined


// EN NODEJS NO ESTA APLICADO POR DEFECTO EL MODO ESTRICTO, PERO EN EL NAVEGADOR SI.
function isInStrictMode() {
    return this === undefined
}
console.log(isInStrictMode()); // En modo normal, imprimira false, ya que this sera el objeto global, pero en modo estricto, imprimira true, ya que this sera undefined.