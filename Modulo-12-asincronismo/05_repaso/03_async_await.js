
// Async/Await es una forma de trabajar con promesas que permite escribir código asíncrono de manera más legible y fácil de entender.

// Se basa en el uso de la palabra clave async para declarar funciones asíncronas y await para esperar la resolución de promesas.

// Se espera a que se ejecute el codigo asincrono para continuar con el siguiente bloque de código.

async function register() {
    const newUser = await userRegister();
    await sendEmailConfirmation(newUser);
    console.log('User registered!');
}

// Internamente hacen lo mismo que una promesa, pero es más legible y fácil de entender.
// SIEMPRE QUE SE TRABAJA CON ASYNC/AWAIT, SE DEBE PONER EL CODIGO DENTRO DE UNA FUNCION ASYNC
// A LA FUNCION SIEMPRE HAY QUE ANTEPONERLE LA PALABRA ASYNC, Y AL CODIGO QUE SE QUIERE ESPERAR, ANTEPONERLE LA PALABRA AWAIT

function conexionDb() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('2');
            resolve();
        }, 1000);
})
}

async function codigoAsincrono() {
    console.log("1");

    await conexionDb(); // SE LE INDICA QUE SE ESPERE A QUE SE RESUELVA LA PROMESA DE CONEXIONDB Y QUE SE OBTENGA EL RESULTADO, ANTES DE CONTINUAR CON EL CODIGO SIGUIENTE

    console.log("3");
}

codigoAsincrono();

// SIN EMBARGO, NI ASYNC NI AWAIT MANEJAN ERRORES, NI LOS CALLBACKS, POR ENDE, TENEMOS QUE MANEJARLOS CON TRY/CATCH

try {
    const PI = 3.14;
    PI = "UWU";
} catch(e) {
    console.log("Error: " + e.message); // CUANDO SUCEDA UN ERROR, LO ATRAPARA EL CATCH Y LO MANEJARA COMO UN ERROR NORMAL
} finally {
    console.log("Ejecucion finalizada"); // EL BLOQUE FINALLY SE EJECUTARA SIEMPRE TERMINADO EL TRY O EL CATCH, HAYA O NO HAYA ERROR
}


async function codigoAsincrono2() {
    try {
        console.log("1");
        await conexionDb();
        console.log("3");
    } catch(e) {
        console.error("Error: " + e.message);
    }
}
