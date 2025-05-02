
// En arrays el metodo includes permite saber si un elemento existe dentro de un array, devolviendo true o false. Este metodo es muy util para verificar si un elemento ya existe en un array antes de agregarlo, evitando duplicados. Por ejemplo, si tenemos un array de numeros y queremos

// Includes recibe un argumento, el elemento que queremos buscar dentro del array. Si el elemento existe, devuelve true, de lo contrario devuelve false. Este metodo es sensible a mayusculas y minusculas, por lo que si buscamos un string con una letra en mayuscula y el array tiene la letra en minuscula, devolvera false.


// Ejemplo de uso del metodo includes en arrays
const numeros = [1, 2, 3, 4, 5];

const existe = numeros.includes(3); // true
const noExiste = numeros.includes(6); // false


// Ejemplo aplicando una funcion que verifica si un elemento existe en un array
const verificarExistencia = (array, elemento) => {
    if (array.includes(elemento)) {
        return `${elemento} existe en el array`;
    }
    return `${elemento} no existe en el array`;
}

console.log(verificarExistencia(numeros, 3)); // 3 existe en el array