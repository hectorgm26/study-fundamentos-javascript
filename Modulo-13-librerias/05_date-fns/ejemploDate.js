const fecha = new Date(); // fecha actual

// Agregar 5 dias a la fecha actual, modificando el objeto original
fecha.setDate(fecha.getDate() + 5);

// Solo mostrar año, mes y dia
const fechaFormateada = fecha.getFullYear() + "-" +
                        String(fecha.getMonth() + 1).padStart(2, "0") + "-" +
                        String(fecha.getDate()).padStart(2, "0");

console.log(fecha);
console.log(fechaFormateada);
