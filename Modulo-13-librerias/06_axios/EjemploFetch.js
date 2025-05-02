// Axios es una librería de JavaScript que permite hacer peticiones HTTP desde el navegador o desde Node.js. Es muy popular por su simplicidad y facilidad de uso.

// Es distinta a la libreria nativa fetch, ya que fetch es una API nativa de JavaScript para hacer peticiones HTTP, mientras que Axios es una librería de terceros que proporciona una interfaz más sencilla y amigable para realizar estas peticiones.

// EJEMPLO CON FETCH
async function obtenerUsuariosUsandoFetch() {

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await response.json();

    return json;
}

const listaDeUsuarios01 = await obtenerUsuariosUsandoFetch();
console.log(listaDeUsuarios01);