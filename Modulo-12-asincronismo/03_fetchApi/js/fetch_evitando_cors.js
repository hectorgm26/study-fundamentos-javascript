const getData = () => {
    const url = "https://clinicatecnologica.cl/ipss/api/mercadoPublico/resultado.json";

    return fetch(`https://corsproxy.io/?${encodeURIComponent(url)}`) // Usamos un proxy CORS para evitar problemas de CORS
        .then(res => res.text()) // Convertimos la respuesta a texto, y no a JSON PARA EVITAR ERRORES DE PARSEO
        .then(textData => {
            try {
                // Inicializamos variables para analizar el texto como si fuera JSON manualmente
                let jsonEndIndex = -1;   // Guardará el índice final del JSON válido
                let braceCount = 0;      // Cuenta de llaves abiertas/cerradas
                let inString = false;    // Detecta si estamos dentro de un string
                let escaped = false;     // Maneja caracteres escapados como \"

                // Esto porque el servidor no responde con un JSON limpio, entonces hay que recorrer el texto recibido carácter por carácter
                // para identificar dónde empieza y termina el JSON válido
                for (let i = 0; i < textData.length; i++) {
                    const char = textData[i];

                    // Si venimos de un carácter escapado, lo ignoramos
                    if (escaped) {
                        escaped = false;
                        continue;
                    }

                    // Si encontramos una barra invertida, el siguiente carácter será escapado
                    if (char === '\\') {
                        escaped = true;
                        continue;
                    }

                    // Si encontramos una comilla doble, alternamos el estado de "inString"
                    if (char === '"') {
                        inString = !inString;
                        continue;
                    }

                    // Si no estamos dentro de un string, contamos llaves para saber si el JSON terminó
                    if (!inString) {
                        if (char === '{') {
                            braceCount++; // Abrimos una llave
                        } else if (char === '}') {
                            braceCount--; // Cerramos una llave

                            // Si ya no quedan llaves abiertas, llegamos al final del objeto JSON principal
                            if (braceCount === 0) {
                                jsonEndIndex = i + 1; // Guardamos el índice final del JSON
                                break;
                            }
                        }
                    }
                }

                // Si encontramos un JSON válido
                if (jsonEndIndex > 0) {
                    const cleanJson = textData.substring(0, jsonEndIndex); // Extraemos el JSON limpio
                    const jsonData = JSON.parse(cleanJson); // Lo convertimos en objeto

                    // Mostramos en consola el JSON completo y el listado
                    console.log("JSON completo:", jsonData);
                    console.log("Listado:", jsonData.Listado);

                    // Retornamos el JSON para poder usarlo posteriormente
                    return jsonData;

                } else {
                    // Si no encontramos cierre de JSON, lanzamos error
                    throw new Error("No se pudo encontrar JSON válido");
                }

            } catch (parseError) {
                console.error("Error al procesar:", parseError);
            }
        })
        .catch(err => console.error("Error en fetch:", err));
};

getData();
