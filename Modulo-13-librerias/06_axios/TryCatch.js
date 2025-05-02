import axios from 'axios';

// EJEMPLO CON FETCH
async function obtenerUsuariosUsandoFetch() {

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/usersXYZ");
        const json = await response.json();

        // Para validar si la respuesta fue exitosa (YA QUE FETCH NO LO HACE AUTOMATICAMENTE), SE debe usar el .ok
        if (!response.ok) {
            throw new Error(`Error en la petición (Fetch): ${response.status} - ${response.statusText}`);
        }

        return json;

    } catch (error) {
        console.error("Error (Fetch): ", error);
        return []; // Retorna un array vacío en caso de error
    }
}
const listaDeUsuarios01 = await obtenerUsuariosUsandoFetch();
console.log(listaDeUsuarios01);


// EJEMPLO CON AXIOS
async function obtenerUsuariosUsandoAxios() {

    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/usersZYZ");
        return response.data;

    } catch (error) {
        console.error("Error (Axios): ", error);
        return [];
    }
}
const listaDeUsuarios02 = await obtenerUsuariosUsandoAxios();
console.log(listaDeUsuarios02);


// EJEMPLO CON URL DINAMICA Y FUNCION FLECHA
const usuarioPorID = async (id) => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error (Axios): ", error);
        return [];
    }
}

const usuario = await usuarioPorID(3); // tambien puede ser console.log(await usuarioPorID(3));
console.log(usuario.name); // el name se obtiene de la documentacion de la API

// Solo da error Axios, el fetch devolvera solo un array vacio, ya que fetch no controla el error en si mimso, si no que necesita otro paso adicional para controlar el error, como el .catch() o el try/catch.

// Sin embargo axios ya maneja el error de forma nativa, por lo que no es necesario agregar un .catch() o un try/catch adicional para manejar el error. Axios lanza una excepción si la respuesta HTTP tiene un código de estado que indica un error (por ejemplo, 4xx o 5xx). Esto significa que puedes manejar los errores de manera más sencilla y directa al usar Axios.