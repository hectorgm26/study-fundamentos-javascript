const usersList = document.querySelector("#usersList");

// El consumo de apis es una de las tareas más comunes en el desarrollo web.
// Consiste en realizar peticiones a un servidor para obtener o enviar datos.

// Fetch es una API nativa de JavaScript que permite realizar peticiones HTTP de manera sencilla y moderna.
// Se basa en Promesas, lo que facilita el manejo de respuestas asíncronas y errores, en caso de rechazo de la promesa.

// La función fetch() recibe como argumento la URL del recurso al que se desea acceder y devuelve una promesa que se resuelve con la respuesta de la petición.

fetch("https://reqres.in/api/users?page=1")
    .then((response) => {                   // Then Para cuando la promesa se resuelve
        return response.json()
    })
    .then((info) => {                       // Then Para cuando la informacion llegue
        const users = info.data // se usa .data, porque la key de la api es data, el nombre que le pusimos la funcion no importa. Lo importante es entender que la variable que usamos en la funcion representa toda la respuesta en formato json que llega de la api, y que si quiero acceder a algo en especifico, debo revisar la key en la documentacion de la api
        for (const user of users) {
            usersList.insertAdjacentHTML("beforeend", `
                <div>
                    <br>
                    <img src="${user.avatar}" alt=""></img>
                    <h2>${user.first_name} ${user.last_name}</h2>
                    <a href="mailto${user.email}">${user.email}</a>
                    <hr>
                </div>`)
        } // Accedemos a las key de la respuesta interpolando las variables dentro de las comillas invertidas, y usando el signo de dolar y el nombre de la variable donde guardamos la data, que sera un array de objetos, y lueggo . y la llave para acceder a cada uno de los objetos dentro del array,
    })
    .catch((error) => {
        console.error(error)
    });

// Fetch en su primera implementacion retorna otra promesa adicional, y por eso tenemos que usar dos then. El primero es para resolver la informacion y traerla en un formato que nos interese utilizar, y luego trabajar con la informacion y tenerla a mano

// TODOS LOS THEN (en especial el primero) DEBEN SIEMPRE DEBE TENER UN RETURN, por ende si es arrow function puede ser con retorno implicito en una linea, o con return explicito en varias lineas

// Esto similar a una receta, en el primer then ponemos un callback que recibira la respuesta, y esa respuesta la tomara y la convertira del formato json a un formato objeto que podamos trabajar.

// Una vez listo, tendremos otro callback con la data que nos interesa, y podremos trabajar con ella de la manera que queramos. En este caso, solo la estamos imprimiendo en consola, pero podemos hacer lo que queramos con ella, como por ejemplo, mostrarla en el DOM o guardarla en una variable para usarla mas adelante.

// Y el catch es para manejar errores, en caso de que la promesa se rechace por alguna razon.

// PARA LAS APIS PRIVADAS NECESITAMOS UN TOKEN QUE SE SUMA A LA URL, Y SE MANDA EN EL HEADER DE LA PETICION, ESCRIBIENDO POR EJEMPLO TOKEN="1234567890" EN EL HEADER DE LA PETICION, O EN EL BODY DE LA PETICION, DEPENDIENDO DE CADA API