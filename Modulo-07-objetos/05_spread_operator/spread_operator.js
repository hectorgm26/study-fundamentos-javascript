// Podemos crear copias de los objetos y arrays con el operador spread (...) propio de las ultimas versiones de JavaScript
const celularUno = {
    marca: "Samsung",
    modelo: "Galaxy S22",
    precio: 345
};

// FORMA INCORRECTA DE COPIAR
const celularDos = celularUno; // Esto no es una copia, es una referencia al mismo objeto en memoria, por ende, si modificamos celularDos, también se modifica celularUno
celularDos.precio = 578; // Esto afecta a celularUno también, ya que ambos apuntan al mismo objeto en memoria
console.log(celularUno);
console.log(celularDos);

// FORMA CORRECTA DE COPIAR, usando el operador spread (... y con llaves para definir un objeto),
// es decir, copiar el objeto con una variable nueva e independiente de la referencia en memoria de la variable original
// SPREAD VIENE DE ESPARCIR, es decir, tomar los elementos de un objeto o array y esparcirlos en otro objeto o array
const celularTres = { ...celularUno };
celularTres.precio = 678; // Esto no afecta a celularUno, ya que celularTres es una copia independiente
console.log(celularTres);


const mascotasJavi = ["Koen", "Puchi"];
const mascotasCaro = [... mascotasJavi];
// Esto crea una copia del array mascotasJavi, es decir, un nuevo array en memoria con los mismos elementos que mascotasJavi

mascotasCaro.push("Toto"); // Esto afecta a mascotasJavi también, ya que ambos apuntan al mismo array en memoria
console.log(mascotasJavi);
console.log(mascotasCaro);