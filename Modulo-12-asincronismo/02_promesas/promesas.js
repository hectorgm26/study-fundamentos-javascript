
// Una promesa permite resolver algo, mientras ese algo se resuelve, pudiendose ejecutar otras cosas al mismo tiempo

const users = [
    { name: "John", email: 'juan@correo.cl' },
    { name: "Jane", email: 'jane@correo.cl' },
    { name: "Javi", email: 'javi@correo.cl' },
    { name: "Caro", email: 'caro@correo.cl' },
];

const getUsers = () => {
    return new Promise ( (resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve(users);
            }, 1500);
        } else {
            reject('No se pudo concretar tu solicitud')
        }
    });
};
// Se agrega dentro de la funcion una promesa, que es un objeto que representa la finalizacion de una operacion asincrona y su resultado
// return new Promise, que tiene como parametro una funcion callback que recibe dos argumentos, resolve y reject. Resolve se ejecuta cuando la promesa se cumple y reject cuando no se cumple
// Por ende en vez de return, se usa resolve(), que es el que se ejecutara cuando la promesa se cumpla
// Set time out hara algo luego de un determinado tiempo, en este caso 1.5 segundos (1500 milisegundos)
// Hay que usar resolve y reject dentro de un if, con el fin de que si se cumple la condicion, se ejecute el resolve y si no, el reject.

getUsers()
    .then(data => console.log(data))
    .catch(error => console.error(error));

// ES LO MISMO QUE HACER LO SIGUIENTE:
getUsers()
    .then((data) => {
        const userDB = data;
        console.log(userDB);
    })
    .catch((error) => {
    console.error(error);
    })
    .finally(() => {
        console.log('Se ha terminado la promesa');
    }); // Finalmente se ejecutara el finally, que es el que se ejecutara cuando la promesa se cumpla o no, es decir, siempre se ejecutara, sin importar si la promesa se cumple o no.

// Para ejecutar una funcion asincrona, se usa el metodo then, que se ejecutara cuando la promesa se cumpla.

// Y then (entonces) cuando se ejecute la funcion, se guardara el resultado en la variable data, que se pasara como argumento a la funcion callback que se ejecutara cuando la promesa se cumpla, ejecutando el console.log(data)

// Si la promesa no se cumple, se ejecutara el catch, que es el que se ejecutara cuando la promesa no se cumpla, y se pasara como argumento a la funcion callback que se ejecutara cuando la promesa no se cumpla, ejecutando el console.error(error)

// console.log(allUsers);
// NO IMPRIMIRA NADA, PORQUE EL RETURN LO PEDIMOS DE UNA FUNCION QUE SE RESOLVERA LUEGO DE 1.5 SEGUNDOS, POR LO QUE NO HABRA NADA QUE IMPRIMIR EN EL MOMENTO EN QUE SE EJECUTA EL CONSOLE.LOG
// Para solucionar esto, se puede usar una promesa, que es un objeto que representa la finalizacion de una operacion asincrona y su resultado

// a getUsers no se le pasa como argumento el array, porque no es necesario, ya que la funcion ya tiene el array definido dentro de ella, es decir, es una variable local, y no es necesario pasarle el array como argumento, ya que la funcion ya tiene acceso a el.


const contar = (palabra) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let nLetras = String(palabra).length;
            if (nLetras < 20) {

                let data = { // JSON simple, que es un objeto de javascript, que se puede convertir a string y viceversa
                    "respuesa": "ok"
                };
                resolve(JSON.stringify(data)); // Stringify convierte un objeto en una cadena de texto, es decir, lo convierte en un string, que es lo que se va a devolver como respuesta de la promesa.

            } else {
                reject("ERROR");
            }
        }, 2000)
    })
};

let respuesta = contar("programacion");

respuesta.then((data) => {
    return data;
})
    .then((data) => {
        const dataR = JSON.parse(data); // Parse convierte un string en un objeto de JS, que es lo que se va a devolver como respuesta de la promesa.
        console.log(dataR);
    })
    .catch( (e) => {
            console.error(e);
})
    .finally(() => {
        console.log("Se ha terminado la promesa");
});