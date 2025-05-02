
// js posee una api de almacenamiento web, para guardar informacion del lado del cliente

// Son minis bases de datos que tenemos del lado del cliente para guardar datos pequeños como preferencias de usuario, configuraciones, etc. SE GUARDAN TAMBIEN TOKENS DE AUTENTICACION, QUE SON PASES PARA ACCEDER A RECURSOS PROTEGIDOS Y ASI COMPROBAR QUE EL USUARIO SI TIENE ACCESO Y PERMISOS PARA HACER ALGO.

/*
*************** LOCAL STORAGE ******************
// LocalStorage = Conserva los datos incluso cuando el navegador se cierra y se vuelve a abrir. Se queda guardado hasta que lo borremos manualmente o se llene el espacio de almacenamiento. Se puede guardar hasta 5MB por dominio (en la mayoria de los navegadores).

// GUARDAR
localStorage.setItem('nombre', 'Juan'); // El primer parametro es la clave y el segundo el valor. Se guardan como strings, si se quiere guardar un objeto se tiene que convertir a string con JSON.stringify(objeto) y al recuperarlo se convierte de nuevo a objeto con JSON.parse(string).
// RECUPERAR
localStorage.getItem('nombre');
// ELIMINAR
localStorage.removeItem('nombre');
// ELIMINAR TODO
localStorage.clear();

*************** SESSION STORAGE ******************
// SessionStorage = Conserva los datos mientras el navegador este abierto y se pierden cuando el navegador se cierra. Se puede guardar hasta 5MB por dominio (en la mayoria de los navegadores). No se comparte entre pestañas o ventanas, cada pestaña tiene su propio sessionStorage. Se utiliza para guardar datos temporales que solo se necesitan mientras la pestaña esta abierta.

// GUARDAR
sessionStorage.setItem('nombre', 'Juan');
// RECUPERAR
sessionStorage.getItem('nombre');
// ELIMINAR
sessionStorage.removeItem('nombre');
// ELIMINAR TODO
sessionStorage.clear();
*/

localStorage.setItem('darkmode', true);
// PARA VERLA EN EL NAVEGADOR SE DEBE IR A LAS DEVTOOLS, APLICACION, STORAGE, LOCAL STORAGE Y HACER CLIC EN LA URL DEL DOMINIO/SERVIDOR

// tambien se puede actualizar el valor de una clave ya existente, si la clave no existe se crea una nueva
localStorage.setItem('darkmode', false);

const value = localStorage.getItem('darkmode'); // devuelve el valor de la clave 'darkmode'
console.log("El valor es: " + value);

localStorage.removeItem('darkmode');

// LO MEJOR ES NO HARDCODEAR LOS VALORES, SINO QUE SE DEBE HACER UNA CONSTANTE CON EL NOMBRE DE LA CLAVE Y USARLA EN VEZ DE ESCRIBIRLA DIRECTAMENTE, ASI SI CAMBIA EL NOMBRE DE LA CLAVE SOLO SE CAMBIA EN UN LUGAR Y NO EN TODO EL CODIGO.
const ssNameKey = "lightmode"; // nombre de la clave

sessionStorage.setItem(ssNameKey , true); // se guarda en sessionStorage, se pierde al cerrar la pestaña o el navegador
const value2 = sessionStorage.getItem(ssNameKey);
console.log("El valor es: " + value2);


// SI SE VA A GUARDAR UN OBJETO, NO SE PUEDE GUARDAR DIRECTA Y LITERALMENTE, SINO QUE SE DEBE CONVERTIR A STRING CON JSON.STRINGIFY Y AL RECUPERARLO SE DEBE CONVERTIR A OBJETO CON JSON.PARSE. SI SE llega a hacer, se guardara como [object Object]

const person = {
    name: "Juan",
    age: 30
}

const ssPersonKey = "person";

sessionStorage.setItem(ssPersonKey, JSON.stringify(person));

const personFinded = sessionStorage.getItem(ssPersonKey); // Se obtuvo un string de los datos
const personFindenObj = JSON.parse(personFinded);
console.log(personFindenObj); // {name: "Juan", age: 30}
console.log(personFindenObj.name); // Juan
console.log(personFindenObj.age); // 30