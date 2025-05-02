/* Funcion reducer : const reducer = (acumulador, valorActual) => nuevoAcumulador;
Este nuevoAcumulador en la siguiente iteracion tomara el valor de acumulador y asi sucesivamente hasta llegar al final del array
*/

// Reduce recibe como argumento una funcion reducer, la cual recibe dos argumentos: el acumulador y el elemento que se esta iterando de un array. Y esta funcion tiene que devolver el nuevo acumulador que se va a pasar como argumento, la siguiente vez que se llame la funcion reducer. Ademas, reduce recibe un segundo argumento que sera el valor inicial del acumulador. Si no se le pasa, el primer elemento del array sera utilizado como valor inicial del acumulador.

// Reduce permite hacer reducciones de elementos y transformarlos en un solo elemento o en un nuevo array, o en un objeto, o en cualquier cosa que se necesite. Por ejemplo, podemos sumar todos los elementos de un array, o multiplicarlos, o hacer un objeto a partir de un array de objetos.

const reducido = [1, 2].reduce( (acumulador, eln) => acumulador + eln, 0 );
console.log(reducido);
/*
Esto es lo mismo que:
const reducido = [].reduce( (acumulador, elementoArray ) => {
    return acumulador + elementoArray;
}, 0 );
EXPLICACION = ACA SE LE PASA UN VALOR INICIAL DE 0 AL ACUMULADOR, Y EN CADA ITERACION SE LE SUMA EL ELEMENTO DEL ARRAY AL ACUMULADOR, Y SE DEVUELVE EL NUEVO VALOR DEL ACUMULADOR, QUE EN LA SIGUIENTE ITERACION SERA EL VALOR DEL ACUMULADOR.
*/

const numeros = [1, 2, 3, 4, 5];
const resultado = numeros.reduce( (acc, eln) => acc + eln, 0 );
console.log(resultado);



// REDUCE TAMBIEN PERMITE CREAR OBJETOS A PARTIR DE UN ARRAY, POR MEDIO DE HACER UN ARRAY DE OBJETOS, HACIENDO UN OBJETO CON PROPIEDADES (QUE SON LOS ELEMENTOS DEL ARRAY) Y SUS VALORES QUE SRAN LOS VALORES DE CADA UNO DE LOS OBJETOS DEL ARRAY
const mascotas = [
    { nombre: "Puchini", edad: 12, tipo: "perro" },
    { nombre: "Chanchito", edad: 3, tipo: "perro" },
    { nombre: "Pulga", edad: 10, tipo: "perro" },
    { nombre: "Pelusa", edad: 12, tipo: "gato" },
];

const indexed = mascotas.reduce((acc, eln) => (
    {
        ...acc,
        [eln.nombre]: eln
    }), {});

console.log(indexed);
console.log(indexed["Pelusa"]); // { nombre: 'Pelusa', edad: 12, tipo: 'gato' }

/*
Usamos .reduce() para transformar el array en un objeto.
Parámetros del reduce:
- acc: acumulador (objeto que vamos construyendo)
- eln: elemento actual (una mascota del array)

La función flecha devuelve un nuevo objeto con:
1. Todas las propiedades del acumulador anterior (...acc)
2. Una nueva propiedad con clave dinámica [eln.nombre] y valor el objeto eln

Esto crea un objeto en el que cada clave es el nombre de una mascota, y su valor es el objeto completo.

Por ejemplo, después de procesar todas las mascotas, el objeto `indexed` queda así:
{
  Puchini:   { nombre: 'Puchini', edad: 12, tipo: 'perro' },
  Chanchito: { nombre: 'Chanchito', edad: 3, tipo: 'perro' },
  Pulga:     { nombre: 'Pulga', edad: 10, tipo: 'perro' },
  Pelusa:    { nombre: 'Pelusa', edad: 12, tipo: 'gato' }
}

Eso significa que si hacés:
indexed["Pelusa"]

Te devuelve:
{ nombre: "Pelusa", edad: 12, tipo: "gato" }

¿Por qué funciona eso?

Porque cuando usamos:
[eln.nombre]: eln

Estamos diciendo:
"Creá una propiedad en el objeto cuyo nombre (clave) sea el valor de eln.nombre".

O sea:
- Si eln.nombre es "Pelusa", estás creando una clave "Pelusa" en el objeto acumulador.
- El valor asociado a esa clave es el propio objeto eln: { nombre: "Pelusa", edad: 12, tipo: "gato" }

Además, le podés dar un valor inicial al acumulador (en este caso `{}`), que es obligatorio cuando estás construyendo un objeto nuevo desde cero.

IMPORTANTE:
En este caso usamos paréntesis después de la flecha `=>` así:

(acc, eln) => ( { ... } )
Esto es NECESARIO porque queremos devolver un objeto literal directamente.
Si no usáramos los paréntesis, JavaScript interpretaría las llaves `{}` como el inicio de un bloque de código,
no como un objeto a retornar. Y eso causaría que la función no devuelva lo que esperás.

Por ejemplo:

✅ Correcto:
(acc, eln) => ({ clave: valor }) // devuelve un objeto

❌ Incorrecto:
(acc, eln) => { clave: valor } // esto es un bloque de código, NO devuelve un objeto

Ahora, veamos cómo funciona el proceso de **"las vueltas"** y el orden de la ejecución dentro del `.reduce()`:

1. **Primera iteración**:
   - **`acc = {}`** (el acumulador empieza vacío, ya que es el valor inicial)
   - **`eln = { nombre: "Puchini", edad: 12, tipo: "perro" }`**
   - **El resultado de esta iteración** será:
     { Puchini: { nombre: "Puchini", edad: 12, tipo: "perro" } }
   - El objeto acumulador ahora tiene la propiedad `Puchini` con su valor correspondiente.

2. **Segunda iteración**:
   - **`acc = { Puchini: { nombre: "Puchini", edad: 12, tipo: "perro" } }`** (acumulador con la primera mascota)
   - **`eln = { nombre: "Chanchito", edad: 3, tipo: "perro" }`**
   - **El resultado de esta iteración** será:
     { 
       Puchini: { nombre: "Puchini", edad: 12, tipo: "perro" },
       Chanchito: { nombre: "Chanchito", edad: 3, tipo: "perro" }
     }
   - En esta iteración, se **conserva** lo que había antes en el acumulador (`Puchini`), y se **añade** `Chanchito`.

3. **Tercera iteración**:
   - **`acc = { Puchini: { nombre: "Puchini", edad: 12, tipo: "perro" }, Chanchito: { nombre: "Chanchito", edad: 3, tipo: "perro" } }`**
   - **`eln = { nombre: "Pulga", edad: 10, tipo: "perro" }`**
   - **El resultado de esta iteración** será:
     { 
       Puchini: { nombre: "Puchini", edad: 12, tipo: "perro" },
       Chanchito: { nombre: "Chanchito", edad: 3, tipo: "perro" },
       Pulga: { nombre: "Pulga", edad: 10, tipo: "perro" }
     }

4. **Cuarta iteración**:
   - **`acc = { Puchini: { nombre: "Puchini", edad: 12, tipo: "perro" }, Chanchito: { nombre: "Chanchito", edad: 3, tipo: "perro" }, Pulga: { nombre: "Pulga", edad: 10, tipo: "perro" } }`**
   - **`eln = { nombre: "Pelusa", edad: 12, tipo: "gato" }`**
   - **El resultado final será**:
     { 
       Puchini: { nombre: "Puchini", edad: 12, tipo: "perro" },
       Chanchito: { nombre: "Chanchito", edad: 3, tipo: "perro" },
       Pulga: { nombre: "Pulga", edad: 10, tipo: "perro" },
       Pelusa: { nombre: "Pelusa", edad: 12, tipo: "gato" }
     }

En resumen, el `[eln.nombre]: eln` utiliza el valor de `eln.nombre` para definir el nombre de la propiedad (por ejemplo, "Puchini", "Chanchito", etc.), y el valor asociado a esa propiedad es el objeto completo `eln`.

Al final de las iteraciones, `acc` tiene todos los objetos de las mascotas, y hemos construido un objeto donde las claves son los nombres de las mascotas y los valores son sus respectivos objetos.
*/



// REDUCE TAMBIEN SE PUEDE HACER PARA APLANAR UN ARRAY ANIDADO, O SEA, HACER UN ARRAY DE UN SOLO NIVEL A PARTIR DE UN ARRAY ANIDADO.
const anidado = [1, [2, 3], 4, [5]];
// Quiero transformarlo a [1, 2, 3, 4, 5]

const plano = anidado.reduce( (acc, eln) => acc.concat(eln), [] );
console.log(plano);
// El metodo concat() une dos o mas arrays, y devuelve un nuevo array. No modifica los arrays existentes. Por lo tanto, el resultado de la concatenacion es un nuevo array que contiene todos los elementos de los arrays originales. Se le pasan como argumentos: los arrays que se quieren concatenar.

// Aqui el metodo reduce parte con un arreglo vacio (acc), el cual concatenaremos con el primer elemento (1)
// luego acc vale 1, y lo concatenamos con el segundo elemento ([2, 3]), y asi sucesivamente hasta llegar al final del array anidado

// Si se le pasa un elemento que no es un array, lo convierte en un array y lo concatena. Por eso funciona con el primer elemento (1) y el segundo ([2, 3]).