
// Las promesas son objetos que representan la finalización o el fracaso de una operación asíncrona, y su valor resultante. Se utilizan para manejar operaciones asíncronas de manera más legible y estructurada. Es decir, representan un valor que eventualmente se conocerá en el futuro, pero que aún no está disponible. Esto es especialmente útil en JavaScript, donde muchas operaciones (como las solicitudes de red) son asíncronas por naturaleza.

// Las promesas tienen tres estados: pendiente (pending), cumplida (fulfilled) y rechazada (rejected).

// Una ventajas de usar promesas con los metodos nativos, por sobre async/await, es que estan podran ser mas componibles, es decir, que se pueden encadenar promesas y manejar errores de manera más sencilla, permitiendo reutilizar cada vez mas y mas nuestro codigo.

// Además, las promesas son más fáciles de leer y entender en comparación con los callbacks anidados, lo que ayuda a evitar el "callback hell".

// Se pueden resolver inmediatamente o en un futuro, y pueden fallar inmmediatamente o a futuro. Y se pueden ir encadenando, es decir, que una promesa puede devolver otra promesa, lo que permite crear cadenas de promesas.

const p1 = Promise.resolve(1);
console.log(p1);

// No podemos acceder al valor de la promesa directamente, ya que es asíncrono. Debemos usar el método .then() para acceder al valor una vez que la promesa se haya resuelto.

p1.then(x => x + 5) // De esta forma podemos acceder al valor de la promesa una vez que se haya resuelto. Cuando se obtiene el valor del primer then, inmediatamente se inyecta en el segundo then, y así sucesivamente.
  .then(x => Promise.resolve(x + 5)) // En este caso, el segundo then devuelve otra promesa
  .then(x => Promise.reject("Error! algo sucedó mal"))
  .then(x => console.log("Esto nos e va a llamar")) // La razon de por que no se ejecutara, es es cuando rechazamos dentro de la cadena con un error, se saltara todos los siguientes then e ira al catch
  .catch(e => console.log(e)) //  Si no hubiera un catch, el error se propagaría y podría causar un fallo en la aplicación.


// Las promesas tambien se pueden comportar como una clase
const delayed = (x) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x), 900
        })
    })
}

delayed(7)
    .then(x => {
        console.log(x)
        return delayed(x + 7)
    })
    .then(x => console.log(x))
    .then(x => Promise.reject("Error! algo sucedó mal"))
    .catch(e => console.log(e))