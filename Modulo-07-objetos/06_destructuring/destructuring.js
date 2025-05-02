
const celularDos = {
    marca: "Samsung",
    modelo: "Galaxy S22",
    precio: 345
};

const mascotasJavi = ["Koen", "Puchi"];
const mascotasCaro = [... mascotasJavi];
mascotasCaro.push("Toto");

// DESTRUCTURACION DE OBJETOS (desarmar un objeto en partes más pequeñas, sin modificar el objeto original)
// La desestructuración de objetos es una forma de extraer y acceder a propiedades de un objeto y asignarlas a variables individuales

// FORMA INCORRECTA DE ACCEDER A PROPIEDADES DE UN OBJETO - const modelo = celularDos.modelo;

// FORMA CORRECTA
const { modelo, precio: price } = celularDos;
console.log(modelo);
console.log(price);
// SE USA LLAVES PARA IDENTIFICAR CUALES PROPIEDADES DEL OBJETO QUEREMOS EXTRAER, EN ESTE CASO, EL MODELO Y EL PRECIO
// E INCLUSO PODEMOS CAMBIAR EL NOMBRE DE LA VARIABLE A LA QUE ASIGNAMOS EL VALOR DE LA PROPIEDAD DEL OBJETO
// MEDIANTE EL USO DE DOS PUNTOS (:) DESPUES DEL NOMBRE DE LA PROPIEDAD DEL OBJETO Y EL NOMBRE DE LA VARIABLE A LA QUE QUEREMOS ASIGNAR EL VALOR


const [mascotaUno, mascotaDos, mascotaTres] = mascotasCaro;
// Esto extrae el primer elemento del array mascotasCaro y lo asigna a la variable mascotaUno
// A DIFERENCIA DE LOS OBJETOS, EN ARRAYS SE DEBE HACER LA REFERENCIA EN ORDEN A LOS ELEMENTOS DE ESTE
console.log(mascotaTres); // ESTO SERIA LO MISMO QUE console.log(mascotasCaro[2]);

// y en el caso que no se quieran las primeras mascotas, se pueden omitir con comas y dejar el espacio vacío
// const [, , mascotaTres] = mascotasCaro; Esto extrae el tercer elemento del array mascotasCaro y lo asigna a la variable mascotaTres