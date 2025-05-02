
let persona = {
    "nombre": "Hector",
    "edad": 27,
    "ciudad": "Santiago",
    "colores": ["rojo", "verde", "azul"],
    "equipos electronicos": [
        {
            "nombre": "televisor",
            "peso": "1kg"
        },
        {
            "nombre": "computador",
            "peso": "2kg"
        },
    ]
}

console.log(persona); // SE IMPRIME EL OBJETO COMPLETO

let nombre = persona.nombre; // SE ACCEDE AL NOMBRE DEL OBJETO
console.log(nombre);

let edad = persona.edad;
console.log(edad);

for (const color of persona.colores) { // COMO EL VALOR DE COLORES ES UN ARRAY, SE PUEDE HACER UN FOR OF PARA ACCEDER A CADA UNO DE LOS ELEMENTOS DEL ARRAY
    console.log(color);
}

console.log(persona["equipos electronicos"][0]);
// COMO EL VALOR DE "equipos electronicos" ES UN ARRAY, Y DENTRO DE ESTE HAY UN OBJETO, SE ACCEDE A CADA UNO DE LOS ELEMENTOS DEL ARRAY Y LUEGO AL NOMBRE DEL OBJETO
let tv = persona["equipos electronicos"][0].nombre;
console.log(tv);

let radio = persona["equipos electronicos"][3]?.nombre; // el signo de interrogación es para evitar que se rompa el programa si no existe el elemento, esto se llama optional chaining, que significa que si el elemento no existe, no se ejecuta el código y no se rompe el programa.