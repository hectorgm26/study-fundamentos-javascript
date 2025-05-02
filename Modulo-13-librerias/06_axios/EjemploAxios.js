// Primero se usa npm install axios
// Luego se importa la librería - Puede ser por import o require (la diferencia es que import es para ES6 y require es para CommonJS)
import axios from 'axios';

// EJEMPLO CON AXIOS
async function obtenerUsuariosUsandoAxios() {

    const response = await axios.get("https://jsonplaceholder.typicode.com/users");

    return response.data; // o se puede guardar el response.data en una variable y luego retornarla. El response.data es el cuerpo de la respuesta, que contiene los datos que se han solicitado. En este caso, es un array de objetos que representan usuarios.
    // A diferencia fetch, no es necesario response.json() ya que axios lo hace automaticamente
}

const listaDeUsuarios01 = await obtenerUsuariosUsandoAxios();
console.log(listaDeUsuarios01);


// Axios tiene mas facilidades que fetch, como por ejemplo, la posibilidad de cancelar peticiones, interceptar peticiones y respuestas, y manejar errores de manera más sencilla. También es compatible con navegadores más antiguos que fetch.