// La libreria lodash es una libreria de utilidades para javascript, que nos ayuda a trabajar con arreglos, objetos y otras estructuras de datos, permitiendo hacer operaciones de manera mas sencilla y rapida, como por ejemplo, transformar un arreglo de objetos en un objeto con una clave especifica, o filtrar un arreglo de objetos segun una condicion, entre otras cosas. En este caso, la utilizamos para capitalizar el nombre y apellido de los usuarios (capitalizar es poner la primera letra en mayuscula y el resto en minuscula). Funciona asi: _.upperFirst('nombre') => 'Nombre'

// EJEMPLO BASICO DE USO DE LODASH
import _ from 'lodash';

const users = [
    {id: 1, nombre: 'jUAn', apellido: 'pereZ'},
    {id: 2, nombre: 'peDrO', apellido: 'GoMEZ'},
    {id: 3, nombre: 'maRIA', apellido: 'lOPEZ'}
];

const capitalizados = users.map(user => {
    return {
        nombre: _.upperFirst(_.toLower(user.nombre)),
        apellido: _.upperFirst(_.toLower(user.apellido))
    }
})
console.log(capitalizados);


// EJEMPLO DE OTROS USOS Y METODOS DE LODASH, COMO _.map, _.filter, _.reduce, _.find, _.some, _.every, _.includes, _.sortBy, _.uniqBy, entre otros

const users2 = [
    {id: 1, nombre: 'Juan', apellido: 'Pérez'},
    {id: 2, nombre: 'Pedro', apellido: 'Gómez'},
    {id: 3, nombre: 'María', apellido: 'López'},
    {id: 4, nombre: 'Juan', apellido: 'Pérez'},
    {id: 5, nombre: 'Pedro', apellido: 'Gómez'},
    {id: 6, nombre: 'María', apellido: 'López'}
];


// APLICAR UN FILTRO A UN ARREGLO DE OBJETOS, EN ESTE CASO, FILTRAR LOS USUARIOS QUE TIENEN EL NOMBRE 'JUAN'.
// El primer argumento es el arreglo, el segundo es el objeto que queremos filtrar, en este caso, los usuarios que tienen el nombre 'Juan'
const juanes = _.filter(users2, {nombre: 'Juan'});
console.log(juanes);


// APLICAR UN MAP A UN ARREGLO DE OBJETOS, EN ESTE CASO, TRANSFORMAR LOS USUARIOS A UN NUEVO ARREGLO CON SOLO EL NOMBRE Y APELLIDO
// El primer argumento es el arreglo, el segundo en este caso, es una funcion que se aplica a cada elemento del arreglo, en este caso, transformamos el nombre y apellido a mayusculas y minusculas. Se coloca user, que es el nombre del objeto que se va a .transformar
const nombres = _.map(users2, (user) => {
    return {
        nombre: user.nombre,
        apellido: user.apellido
    }
})
console.log(nombres);


// APLICAR UN REDUCE A UN ARREGLO DE OBJETOS, EN ESTE CASO, Y DISTINTO AL EJEMPLO DEL .MAP, HAREMOS UN REDUCE QUE SIRVA PARA CONTAR LOS USUARIOS QUE TIENEN EL NOMBRE 'JUAN'
// El primer argumento es el arreglo que vamos a transformar, el segundo es una funcion que se aplica a cada elemento del arreglo, en este caso, el if verifica si el nombre es 'Juan', si es asi, se suma 1 al contador. Si no, se devuelve el contador sin cambios. El return es el valor que se devuelve al final de la funcion, en este caso, el contador.
// El tercer argumento es el valor inicial, en este caso, 0.
const juanCount = _.reduce(users2, (count, user) => {
    if (user.nombre === 'Juan') {
        count++;
    }
    return count;
}, 0);
console.log(juanCount);


// APLICAR UN SORTBY A UN ARREGLO DE OBJETOS, EN ESTE CASO, ORDENAR LOS USUARIOS POR APELLIDO y NOMBRE
// En este caso, _.sortBy recibe el arreglo y el segundo argumento es el criterio de ordenamiento, en este caso, el apellido y nombre. El resultado es un nuevo arreglo ordenado por apellido. Se puede ordenar por varios criterios, como nombre y apellido, o por id, etc. En este caso, se ordena por apellido.
const sortedUsers = _.sortBy(users2, ['apellido', 'nombre']);
console.log(sortedUsers);

