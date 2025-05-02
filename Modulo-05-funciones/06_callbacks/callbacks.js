
// Un callback es una funcion que se pasa como parametro de otra funcion
// Es decir, Como parametros podemos pasar otras funciones

const saludar = (nombre) => `Hola ${nombre}`;

const saludarEnEspaniol = (callback) => {
  return callback("Hector");
};
// Los callback se identifican porque ese parametro se estara UTILIZANDO en el return como si fuese una funcion, dentro del cuerpo de esta misma

const resultado = saludarEnEspaniol(saludar); // la funcion saludarEnEspaniol esta pidiendo que por argumento le pasemos otra funcion
console.log(resultado);


// EJEMPLO 2

const operacionMatematica = (operacion, valor1, valor2) => {
  return operacion(valor1, valor2);
};

const sumar = (n1, n2) => n1 + n2;
const restar = (n1, n2) => n1 - n2;
const multiplicar = (n1, n2) => n1 * n2;
const dividir = (n1, n2) => n1 / n2;

const resultadoSuma = operacionMatematica(sumar, 45, 50);
console.log(resultadoSuma);

const resultadoResta = operacionMatematica(restar, 45, 50);
console.log(resultadoResta);

const resultadoMultiplicacion = operacionMatematica(multiplicar, 45, 50);
console.log(resultadoMultiplicacion);

const resultadoDivision = operacionMatematica(dividir, 45, 50);
console.log(resultadoDivision);