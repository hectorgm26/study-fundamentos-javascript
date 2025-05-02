
// USANDO REQUIRE Y QUERIENDO GUARDAR EL RESULTADO DE LA FUNCION ASYNC EN UNA VARIABLE, Puede darse el error: await is only valid in async functions and the top level bodies of modules

// Esto pasa por estar utilizando await directamente en el nivel superior (top-level) de tu archivo, sin que sea un módulo ES (ECMAScript module).

// Solucion 1 = Cambiar a import, y en el paquete.json añadir "type": "module"
// Solucion 2 = Cambiar a un modulo ES (ECMAScript module) y usar import en lugar de require. Para esto, debes cambiar la extensión del archivo a .mjs o agregar "type": "module" en tu package.json. Esto le indica a Node.js que trate el archivo como un módulo ES.

// Solucion 3 = Usar una función main async
const axios = require("axios");

const llamarApi = async (URL, llamados = 0) => {
    try {
        const result = await axios.get(URL);
        console.log(result.data);
        return result.data;

    } catch (e) {
        if (llamados > 5) {
            return "";
        }
        console.log(e);
        return llamarApi(URL, llamados + 1);
    }
};

const main = async () => {
    const resultado = await llamarApi("https://jsonplaceholder.typicode.com/users");
    console.log(resultado);
};

main();


/* ESTE ERROR DA EN CASOS DONDE SE USA REQUIRE, Y SE QUIERE GUARDAR EL RESULTADO DE UNA FUNCION ASYNC EN UNA VARIABLE

const axios = require("axios"); // CON ESTO EVITAMOS CAMBIAR EL PACKAGE.JSON A TYPE MODULE, NI CAMBIAR A .MJS

const llamarApi = async (URL, llamados = 0) => {
    try {
        const result = await axios.get(URL);
        console.log(result.data);
        return result.data;

    } catch (e) {
        if (llamados > 5) {
            return "";
        }
        console.log(e);
        return llamarApi(URL, llamados + 1);
    }
}

const resultado = await llamarApi("https://jsonplaceholder.typicode.com/users");
console.log(resultado);
*/