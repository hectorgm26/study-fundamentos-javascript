
// CON LOS CLOUSURES PODEMOS HACER COMPOSICION, YA SEA DE OBJETOS O FUNCIONES PARA IR MODIFICANDO EL COMPORTAMIENTO DE UNA FUNCION, O DE UN OBJETO EN ESPECIFICO.

// EN EL SIGUIENTE EJEMPLO, SE CREARA UN CRUD DE CONEXION A API mediante una fn que me permita recibir el dominio al cual yo quiero ir a realizar consultas con una api, y tambien quiero que este reciba el recurso o ruta a la cual yo quiero ir a consumir estos recursos

// Instalamos la dependencia para poder usar 'fetch' en entornos como Node.js
// npm install isomorphic-fetch
import fetch from 'isomorphic-fetch';

// Aquí definimos una función que hace uso de *closures* (clausuras)
// Esta función está escrita en un estilo conocido como *currying*, es decir,
// en vez de recibir múltiples parámetros al mismo tiempo, recibe uno por uno,
// devolviendo funciones intermedias que se acuerdan del valor anterior gracias al closure.

// Esta es una función que recibe un primer parámetro: el 'dominio' (por ejemplo, una URL base)
const crudder = dominio =>
    // Esta función que retornamos, recibe el segundo parámetro: el 'recurso' o endpoint
    recurso => {
        // Componemos la URL completa uniendo el dominio con el recurso
        const url = `${dominio}/${recurso}`;

        // Retornamos un objeto con métodos para hacer operaciones CRUD (solo 'create' y 'get' en este ejemplo)
        return ({
            // Método para crear (POST). Aquí falta definir el objeto 'response', lo explicamos más abajo.
            create: (response) => fetch(url, {
                method: 'POST',
                body: JSON.stringify(response), // stringify convierte el objeto a JSON
            }).then(response => response.json()),

            // Método para obtener datos (GET)
            get: () => fetch(url).then(response => response.json()),
        });
    }

// Usamos la función 'crudder' pasando primero el dominio.
// Esto devuelve una nueva función que recibe un recurso.
const Base = crudder('https://jsonplaceholder.typicode.com')

// Llamamos a esa función con el recurso específico que queremos (en este caso, 'todos' o 'users')
const Todos = Base('todos') // Ahora `Todos` tiene métodos: Todos.get(), Todos.create(), etc.
const Users = Base('users') // Igual que arriba, pero con otro recurso

// Podemos hacer una petición GET a la API para obtener datos de usuarios
Users.get().then(x => console.log(x[0])); // Muestra el primer usuario en consola

// También podríamos crear un nuevo 'todo' así:
// Todos.create({ title: 'Nuevo TODO', completed: false, userId: 1 }).then(console.log);

// ---------------------------------------------
// RESUMEN EXPLICATIVO DEL USO DE CLOSURES Y FUNCIÓN CURRIFICADA:

// - La función `crudder` es una función que retorna otra función. Por eso ves dos `=>`.
// - Primero se pasa el dominio (URL base), eso se guarda gracias al closure.
// - Luego se pasa el recurso ('todos', 'users', etc.), y se genera un objeto con funciones para trabajar con ese endpoint.
// - Esto permite crear una función reutilizable para cualquier recurso de una misma API, sin repetir código.

// Es como decir:
// crudder('https://api.com') -> devuelve una función para trabajar con recursos de ese dominio.
// Luego:
// const Productos = Base('productos') -> ya tengo funciones para trabajar con '/productos'.

// Esto es súper útil para modularizar y reutilizar lógica cuando trabajás con APIs diferentes o recursos variados.

// Explicacion = Se hi<o uso de clousures creando un objeto el cual permite crear una interfazd donde puedo buscar todos, crear todos y lo mismo con usuarios. Y con la ayuda de la Base creada en conjunto con los closures donde la url esta viva siempre para base (dominio siempre sera la url pasada), y eso devolvera una funcion, que en este caso la fn tendra el valor del dominio (la url), por lo que podemos despues ir asignandole el parametro al recurso de todos, y tambien podemos llamar a user, pero el dominio siempre sera el mismo

// Con esto podemos realizar una generalizacion, donde escribiendo solamente una vez este codigo, podemos ir reutilizandolo