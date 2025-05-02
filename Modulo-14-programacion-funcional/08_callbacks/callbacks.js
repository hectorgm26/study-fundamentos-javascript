
// Los callbacks son funciones que se pasan como argumentos a otras funciones y se ejecutan en un momento posterior, generalmente después de que se completa una operación asíncrona. Se utilizan para manejar el resultado de esa operación o para realizar acciones adicionales una vez que se ha completado, como por ejemplo ordenar el codigo, ya que este no se ejecuta de forma secuencial, sino que se ejecuta de forma asincrona.

// Los callbacks son una forma común de manejar la asincronía en JavaScript, especialmente antes de la introducción de promesas y async/await. Sin embargo, el uso excesivo de callbacks puede llevar al "callback hell", donde las funciones anidadas se vuelven difíciles de leer y mantener.

const fun1 = (callback) => { // como argumento se recibe una funcion, que se llama callback. Se le puede poner cualquier nombre, pero es una convención llamarla callback.
    console.log("Inicio");
    callback(); // se colocan parentesis para indicar que se va a ejecutar la funcion callback
    console.log("Fin");
}

const fun2 = () => {
    console.log("Proceso intermedio");
}

fun1(fun2); // Se pasa la funcion fun2 como argumento a fun1, y se ejecuta dentro de fun1. Esto es un callback, ya que se pasa una funcion como argumento a otra funcion y se ejecuta en un momento posterior.


// ESTA FUNCION SE EJECUTARA RECIEN CUANDO HAYA CARGADO LA PAGINA, PARA ASI REALIZAR LA TOMA DEL ELEMENTO HTML, QUE SE ENCUENTRA DESPUES DEL SCRIPT JS (EN EL DOCUMENTO HTML)
window.addEventListener("load", () => {
    const titulo = document.getElementById("titulo");
    titulo.innerHTML = "ElachehFck"
})
// FUNCIONA BIEN, A PESAR QUE EL SCRIPT ESTE DECLARADO ANTES DEL ELEMENTO HTML (PARA EVITAR QUE LO TOME COMO NULO)


const sumar = (num1, num2, callback) => {
    return callback(num1 + num2);
}

btnSumar = document.getElementById('btnSumar');
btnSumar.addEventListener("click", () => {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
// El parseInt convierte el valor de la caja de texto a un numero entero. Si no se pone, se toma como un string, y al sumarlo con otro string, se concatenan.

    sumar(num1, num2, (resultado) => { // Resultado se obtiene de la suma de num1 y num2, que se pasa como argumento a la funcion callback. resultado no necesita paréntesis (resultado()): ¡no es una función! Es solo una variable que guarda el valor que viene de num1 + num2.
        console.log("El resultado es: " + resultado);
    });

});