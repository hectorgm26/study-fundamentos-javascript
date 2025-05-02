// Post se utiliza para crear un nuevo recurso en el servidor, pero tambien para realizar consultas a la API. El status seria 201, que significa que se ha creado un nuevo recurso, y el statusText es Created.
async function crearComentario (postId, name, email, body) {

// Se debe crear un objeto con los datos que se van a enviar al servidor. Los atributos del objeto deben coincidir con la función que se va a utilizar para crear el comentario.
    const comentario = {
        postId: postId,
        name: name,
        email: email,
        body: body
    };

    try {
        const response = await axios.post("https://jsonplaceholder.typicode.com/comments", comentario);
        // El axios.post() se utiliza para enviar datos al servidor, y recibe dos parámetros: la URL y el objeto que se va a enviar.

        return response.data; // Podemos cambiar el response al . y a la propiedad que queramos, que en la documentacion de la api obtendremos. Pero en data se obtiene la respuesta del servidor. Si ponemos solo response, obtendremos toda la respuesta del servidor, que es un objeto con muchas propiedades.

    } catch (error) {
        console.error("Error (Axios): ", error);
        return [];
    }
}

const comentario = await crearComentario(1, "Mi comentario", "uwu@gmail.com", "Hola mundo, este es mi primer comentario");
console.log(comentario);