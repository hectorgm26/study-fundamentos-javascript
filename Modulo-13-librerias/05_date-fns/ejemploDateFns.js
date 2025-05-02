import { addDays, format } from 'date-fns'; // los import de librerias siempre van al principio del archivo, y deben ir con comillas simples o dobles, no con comillas invertidas

const fecha = new Date();

const nuevaFecha = addDays(fecha, 5); // El metodo addDays recibe dos argumentos, la fecha y el número de días a sumar

console.log(fecha); // Muestra la fecha actual
console.log(nuevaFecha); // Muestra la fecha actual más 5 días


// Dentro del date-fns hay muchos métodos para trabajar con fechas, como por ejemplo:
// addHours, addMinutes, addSeconds, addMonths, addYears, etc.

// También hay métodos para restar días, horas, minutos, segundos, meses, años, etc. como por ejemplo:
// subDays, subHours, subMinutes, subSeconds, subMonths, subYears, etc.

// También hay métodos para formatear fechas, como por ejemplo:
// format, formatDistance, formatRelative, etc.

const fechaFormateada = format(nuevaFecha, 'yyyy-MM-dd');
// Formatea la fecha en el formato 'yyyy-MM-dd'. El formato se puede cambiar a gusto, y debe ir con comillas simples o dobles, no con comillas invertidas
console.log(fechaFormateada); // Muestra la fecha formateada