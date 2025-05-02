const usersList = document.querySelector("#usersList");
const boton = document.querySelector("#btn");
let number = 1;

const getData = (number) => {
    return fetch(`https://reqres.in/api/users?page=${number}`)
        .then((response) => response.json())
        .then((info) => {

            const users = info.data;
            for (const user of users) {
                usersList.insertAdjacentHTML("beforeend", `
                    <div>
                        <br>
                        <img src="${user.avatar}" alt=""></img>
                        <h2>${user.first_name} ${user.last_name}</h2>
                        <a href="mailto${user.email}">${user.email}</a>
                        <hr>
                    </div>`)
            }
        })
        .catch((error) => {
            console.error(error)
        });
}

getData(number); // PARA CARGAR UNA LISTA INICIAL DE USUARIOS AL CARGAR LA PAGINA

boton.addEventListener("click", () => {
    number++;
    getData(number);
});
