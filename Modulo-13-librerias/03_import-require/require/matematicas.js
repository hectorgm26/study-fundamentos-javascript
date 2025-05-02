function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

// Exportamos las funciones para poder usarlas en otro archivo con require
module.exports = {
    sumar,
    restar,
    multiplicar
};