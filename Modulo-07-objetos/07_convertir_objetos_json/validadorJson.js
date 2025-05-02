
let jsonData = '{"name":"John","age":30,"city":"New York"}';

try {
    let jsonParse = JSON.parse(jsonData); // el Json.parse() convierte un JSON en un objeto JavaScript;
    console.log("JSON valido: " + jsonParse); // si el JSON es valido, se imprime el objeto JavaScript
} catch (error) {
    console.error("JSON invalido: " + error); // si el JSON no es valido, se imprime el error
}


// Para validaciones mas avancadas de json, podemos usar la libreria Ajv, que es una libreria de validacion de JSON Schema. Esta libreria permite validar un JSON contra un esquema definido, lo que permite validar la estructura y los tipos de datos del JSON. Para usar esta libreria, primero debemos instalarla con el siguiente comando:
//  npm install ajv
// Luego, podemos usarla de la siguiente manera:
const Ajv = require("ajv"); // importamos la libreria Ajv
const ajv = new Ajv(); // creamos una instancia de la libreria Ajv

// Un schema o esquema es una especificacion que permite definir una estructura, restriccciones, validaciones y reglas para describir la manera en que los datos y su contenido deben organizarse.

const schema = { // definimos el esquema de validacion
    type: "object", // el tipo de dato es un objeto
    properties: { // definimos las propiedades del objeto
        name: { type: "string" }, // la propiedad name es un string
        age: { type: "number", "minimun": 1900, "maximum": 2023}, // la propiedad age es un numero, y ademas podemos definir un rango de valores validos
        city: { type: "string" } // la propiedad city es un string
    },
    required: ["name", "age", "city"], // las propiedades name, age y city son requeridas
};

// Las propiedades definen claves o nombres de propieades que deben de estar presentes en el objeto JSON, pudiendo especificar igualmente el tipo de dato que debe de tener cada propiedad.
// Required es una propiedad que define un array de propiedades deben de estar presentes SI O SI en el objeto JSON. Si alguna de las propiedades definidas en el array no se encuentra presente, la validacion fallara y se lanzara un error indicando que la propiedad es requerida.


// Luego, podemos validar el JSON contra el esquema definido de la siguiente manera:
const validate = ajv.compile(schema); // compilamos el esquema

const valid = validate(jsonParse); // validamos el JSON contra el esquema

if (valid) {
    console.log("JSON valido: " + jsonParse); // si el JSON es valido, se imprime el objeto JavaScript
}
else {
    console.error("JSON invalido: " + validate.errors); // si el JSON no es valido, se imprime el error
}
// En este caso, el JSON es valido, por lo que se imprime el objeto JavaScript. Si el JSON no es valido, se imprime el error de validacion.

// Esta libreria es muy util para validar JSONs complejos y asegurarse de que cumplen con la estructura y los tipos de datos definidos en el esquema. Ademas, permite validar JSONs anidados y arrays, lo que la hace muy versatil. Es importante mencionar que esta libreria es muy popular y es utilizada por muchas empresas y proyectos open source.