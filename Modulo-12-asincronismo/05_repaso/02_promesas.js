
// Una promesa representa un valor que puede estar disponible ahora, o en el futuro, o nunca. Puede que la promesa se resuelva o se rechace.

new Promise( (resolve, reject) => {
    if (true) {
        resolve('Todo bien');
    } else {
        reject('ERROR');
    }
});

// Las promesas son objetos que representan la eventual finalización (o falla) de una operación asincrónica y su valor resultante. SIEMPRE A UNA PROMESA SE LA PASA UN CODIGO ASINCRONO.

// A una promesa se le pasa una fn que recibe dos parámetros: resolve y reject.
// resolve se llama cuando la operación asincrónica se completa con éxito, y reject se llama cuando la operación falla.
// Dentro del cuerpo de la promesa se coloca el codigo ascincrono. Y la promesa para ejecutarla y resolverla se ejecuta con el metodo .then(), CUANDO DENTRO SE COLOCA UN CODIGO RESOLVE, y el metodo .catch() CUANDO DENTRO SE COLOCA UN CODIGO REJECT.
// El metodo .then() significa entonces, es decir, si la promesa se resuelve, entonces ejecuta el siguiente bloque de codigo.
// El metodo .catch() significa atrapar, es decir, si la promesa falla, entonces ejecuta el siguiente bloque de codigo.

// En el resolve o reject podemos pasarle un valor, que luego podemos usar en el .then() o .catch() respectivamente.

console.log("1");

const miPromesa = new Promise( (resolve, reject) => {
    setTimeout( () => {
        // Crear error (sirve en casos de errores no esperados). LOS THROW PARAN EL FLUJO DE EJECUCION, por lo que no se ejecuta el resto del codigo:
        // throw new Error("Error personalizado");

        console.log("2");
        resolve("HOLA"); // Esto manda a resolver la promesa, ejecutando el bloque de codigo que se encuentra en el .then() de la promesa.
//      reject("Error"); // Esto manda a rechazar la promesa, ejecutando el bloque de codigo que se encuentra en el .catch() de la promesa.

//      console.log("Segui con el programa"); // Ni resolve ni reject para el flujo de ejecucion de la promesa, PERO LO QUE SI LO PARA, ES ANTEPONER UN RETURN AL RESOLVE O REJECT, ya que el return detiene la ejecucion de la funcion y no ejecuta el resto del codigo. ES LO CORRECTO ANTEPONERLO.
    }, 1000);
})

miPromesa.then( (msj) => {
    console.log("3 " + msj); // ESTO PARA QUE UNA VEZ RESUELTA LA PROMESA E IMPRESO "2", RECIEN SE IMPRIMA "3" Y NO ANTES, YA QUE SE ESPERA QUE TERMINE EL CODIGO ASINCRONO DE LA PROMESA.
}).catch((e)=> {
    console.log("La promesa ha fallado, ocurrio un error: " + e);
})


/* EJEMPLO DE UNA PROMESA REAL

function register() {
    userRegister().then((newUser) => {
        return sendEmailConfirmation(newUser)
}).then((ok) => {
        console.log("USER CREADO EXITOSAMENTE")
}).catch((e) => {
        console.log("ERROR: " + e);
})
}

// register(); // Esto ejecuta la funcion register, que a su vez ejecuta la promesa userRegister, y luego la promesa sendEmailConfirmation. Si ambas se resuelven, se imprime el mensaje de exito. Si alguna falla, se imprime el mensaje de error.

// userRegister es una promesa que simula el registro de un usuario en una base de datos. Si el registro es exitoso, se resuelve la promesa con el nuevo usuario. Si falla, se rechaza la promesa con un error.
*/