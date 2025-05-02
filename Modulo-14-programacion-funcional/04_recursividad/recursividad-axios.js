const axios = require("axios"); // CON ESTO EVITAMOS CAMBIAR EL PACKAGE.JSON A TYPE MODULE, NI CAMBIAR A .MJS

const llamarApi = async (URL, llamados = 0) => {
    try {
        const result = await axios.get(URL);
        console.log(result.data);
        return result.data;

    } catch (e) {
        if (llamados > 5) {
            return "";
        }
        console.log(e);
        return llamarApi(URL, llamados + 1);
    }
}

llamarApi("https://jsonplaceholder.typicode.com/users");

// SI POR X MOTIVO LA FUNCION FALLA, CAE EN EL CATCH, Y CATCH PREGUNTRA SI LLAMADOS EN MAYOR A 5, Y SI NO LO ES, SE SEGUIRA CON EL RESTO DEL CATCH
// LUEGO DE ESO, IMPRIMIREMOS EL ERROR, Y VOLVEREMOS A LLAMAR A LA FUNCION CON LA MISMA URL, PERO LLAMADOS INCREMENTARA EN 1, PERMITIENDO REINTENTAR EL LLAMADO A LA API HASTA 6 VECES, Y LUEGO, UNA VEZ QUE SE CUMPLA LA CONDICION DEL IF, SE IMPRIMIRA EL STRING VACIO