// Las funciones flechas son una implementacion de ES6 que nos permite escribir funciones de una manera mas corta y legible.

// Las funciones flechas son funciones expresadas, es decir, necesitan estar asignadas a una variable o constante para poder ser utilizadas.
// Estas funciones son especialmente útiles para funciones que no son métodos, y no deben ser usadas como métodos.
// SON LLAMADAS MEDIANTE EL NOMBRE DE LA VARIABLE O CONSTANTE A LA QUE ESTAN ASIGNADAS.


// En su sintaxis no se necesita la palabra function, y tienen como orden de escritura los siguientes elementos:
// 1. La asignacion de la funcion a una variable o constante
// 2. Los parametros de la funcion (si los tiene, porque pueden ser funciones sin parametros, dejando los parentesis vacios)
// 3. La flecha (=>)
// 4. Las llaves que contienen el cuerpo de la funcion
// 5. El return de la funcion

const sumar = (n1, n2) => {
  return n1 + n2;
}
console.log(sumar(5, 3));

// PERO, si la funcion solo tiene una linea de codigo, se puede omitir las llaves y el return, y quedaría de la siguiente manera:
// const sumar = (n1, n2) => n1 + n2;
// ESTO SE LLAMA RETURN IMPLICITO


// EN CASOS DONDE LA FUNCION SOLO RECIBE UN PARAMETRO, SE PUEDEN OMITIR LOS PARENTESIS, siendo en ese caso opcionales.
const multiplicarPor5 = n => {
  return n * 5;
}
console.log(multiplicarPor5(5));


// OTRO EJEMPLO
let contador = 0;
const aumenta1 = () => contador++;

aumenta1();
console.log(contador);


// ACLRACION = SI LUEGO DE LA LLAVE => SE USAN LLAVES, SE DEBE USAR EL RETURN, O SINO NO DEVUELVE NADA, PERO SI SE USAN PARENTESIS, NO SE DEBE USAR EL RETURN, O SINO DEVUELVE UN ERROR DE SINTAXIS.

// ❌ No devuelve nada porque se usan llaves {} sin return
const sinReturn = () => {
  5 + 5; // Esta línea se ejecuta, pero el valor no se retorna → devuelve undefined
};

// ✅ Devuelve el valor porque se usa return explícito dentro de las llaves {}
const conReturn = () => {
  return 5 + 5; // Se devuelve 10
};

// ✅ Devuelve el valor automáticamente porque se usan paréntesis () en lugar de llaves {}
const conParentesis = () => (
  5 + 5 // Paréntesis indican que esta expresión se va a retornar directamente → devuelve 10
);

console.log(sinReturn());       // undefined
console.log(conReturn());       // 10
console.log(conParentesis());   // 10
