
// El metodo flat() se utiliza para aplanar un array multidimensional en un solo nivel de profundidad.
// Es decir, si un array dentro tiene otros arrays, el metodo flat() los aplanara en un solo array.

const array = [1, 2, 3, [4, 5, 6], [7, 8, 9]];
const array2 = array.flat();
console.log(array2);
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

// NO OBSTANTE, EL METODO FLAT() SOLO APLANA UNA VEZ, ES DECIR, A UN NIVEL DE PROFUNDIDAD, POR LO QUE SI SE TIENE UN ARRAY DENTRO DE OTRO ARRAY, DENTRO DE OTRO ARRAY, NO SE APLANARA DEL TODO.

const array3 = [1, 2, 3, [4, 5, 6], [7, 8, 9, [10, 11]]];
const array4 = array3.flat();
console.log(array4);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, [10, 11]]

// los niveles se toman desde el los corchetes de afuera hacia adentro, es decir, el primer array es el nivel 0, el segundo array es el nivel 1, y asi sucesivamente. En este caso, el array [10, 11] es de nivel 1, por lo que no se aplana, ya que el metodo flat() solo aplana un nivel de profundidad, es decir, solo el nivel 0.

// SIN EMBARGO ESO ES POR DEFECTO, el metodo flat() puede recibir como argumento un numero que represente el nivel de aplanamiento que se desea realizar, por lo que si se le pasa un 2, se aplanara el array hasta el nivel 2, es decir, se aplanara el array [10, 11] y quedara como un array de un solo nivel.

//  SIEMPRE EL APLANAMIENTO SERA UN NUMERO MENOS QUE EL NIVEL DE PROFUNDIDAD DEL ARRAY, YA QUE EL NIVEL 0 ES EL ARRAY EN SI MISMO, Y EL NIVEL 1 ES EL PRIMER ARRAY DENTRO DEL ARRAY, Y ASI SUCESIVAMENTE.

const array5 = [1, 2, 3, [4, 5, 6], [7, 8, 9, [10, 11]]];
const array6 = array5.flat(2);
console.log(array6);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]