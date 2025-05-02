
// EXISTEN CASOS DONDE LOS IF NO REQUIEREN {}, YA QUE Si un bloque if tiene una sola instrucción, podés escribirlo sin llaves. Es válido y se llama "single-line if statement".

// EJEMPLO 1:
const clima = "soleado";
if (clima === "soleado") console.log("EXCELENTE! Es un buen momento para salir a correr");
// Si el clima no es soleado, no se imprime nada. No hay un bloque else, por lo que no se hace nada en caso contrario.


// EJEMPLO 2: APLICANDO FUNCIONES CON ELSE Y ELSE IF
const esPositivo = (num) => num > 0;
const esNegativo = (num) => num < 0;
const numero3 = 0;
if (esPositivo(numero3)) console.log("El número es positivo");
else if (esNegativo(numero3)) console.log("El número es negativo");
else console.log("El número es cero");


// EJEMPLO 3: APLICANDO FUNCIONES CON RETURN VACIO PARA CORTAR EJECUCION
const esCero = (num) => num === 0;
const numero4 = 0;
if (esCero(numero4)) return; // Si el número es cero, se termina la función sin hacer nada en especifico, es decir, no se imprime nada, ni se hace nada
else console.log("El número no es cero");