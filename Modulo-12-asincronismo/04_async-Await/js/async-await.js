// Hay veces que vamos a querer hacer por fuera del then, pero con informacion que obtenemos como resultado del llamado a la api
// Necesitamos un formato para que la info del then este por fuera.

// Cuando tenemos el fetch todo lo que sucede adentro del then es asincronico, es decir, no sabemos cuando se obtendra la respuesta. Por ende el codigo se puede seguir ejecutando, pero todo lo que esta debajo del catch y then, no tendra acceso a la info que se obtiene del fetch.

// El await va directo en la promesa que queremos resolver, y se implementa dentro de una funcion async. Estas funciones no tienen un retorno, sino que devuelven una promesa.

// Por eso se utiliza el async await, para que el codigo espere a que la respuesta llegue y luego se ejecute el resto del codigo. Es decir, permite que los pedidos asincronicos sean ejecutados de forma sincronica, y que se espere a que se resuelva para que se obtenga la info y se pueda utilizar por fuera del then.

// Para implementarlo, en una arrow fuction se agrega la palabra async antes de los argumentos, y luego se utiliza await antes del fetch.

const usersList = document.querySelector("#usersList");

const generateUsersHTML = (users) => {
    for (const user of users) {
        usersList.insertAdjacentHTML("beforeend", `
            <div>
                <br>
                <img src="${user.avatar}" alt=""></img>
                <h2>${user.first_name} ${user.last_name}</h2>
                <a href="mailto${user.email}">${user.email}</a>
                <hr>
            </div>`);
    }
}

const getUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1")
    .then((response) => response.json()) // este then espera a que la informacion llegue
    // ES LO MISMO QUE: const json = await response.json(). CON ASYNC AWAIT NO SE NECESITA USAR EL THEN, YA QUE EL AWAIT ESPERA A QUE LA RESPUESTA LLEGUE, Y LUEGO SE EJECUTA EL RESTO DEL CODIGO.

    const users = response.data;
    generateUsersHTML(users); // la info que se obtiene del fetch, es la que se guarda en la variable users, y es la que se pasa como argumento a la funcion generateUsersHTML
};

getUsers(); // Ya no se necesita poner el then, ya que el await espera a que la respuesta llegue, pero mientras se espera, se sigue ejecutando el resto del codigo.
// Y SI SE QUIERE GUARDAR LA FUNCION EN UNA VARIABLE, SE USA EL AWAIT ANTES DE LA FUNCION, ES DECIR: const users = await getUsers(); o console.log(await getUsers());

// Toda la logica propia del async funciona solo dentro de la funcion, por ende, si la funcion getUsers se intenta guardar en una variable, no se podra acceder a la info que devuelve, ya que es asincronica. Por lo tanto, no se puede guardar en una variable, ya que no se sabe cuando se ejecutara la funcion, y puede que mientras se ejecuta el resto el codigo, la funcion async todavia no se haya terminado de resolver. Por eso, se recomienda usar el async await dentro de una funcion, y no fuera de ella.

// De esta manera, el codigo esperara a que la respuesta llegue y luego se ejecutara el resto del codigo. En otras palabras, se esperara al fetch que termine de hacer el llamado a la api, y luego se ejecutara el resto del codigo. Por lo tanto, no es necesario usar el then para obtener la respuesta, ya que el await lo hace por nosotros.
