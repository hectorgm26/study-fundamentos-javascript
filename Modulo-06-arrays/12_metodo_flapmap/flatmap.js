
// El metodo flatmap() es una combinacion de map() y flat() en un solo paso.
// Se utiliza para aplicar una funcion a cada elemento de un array y luego aplanar el resultado en un nuevo array.

[1, 2, 3, 4, 5, 6].flatMap( (n) => n * 2);
// [2, 4, 6, 8, 10, 12]
// En este caso, se multiplica cada elemento por 2 y se devuelve un nuevo array con los resultados aplanados, es decir, sin subarrays.

[1, 2, 3, 4, 5, 6].flatMap( (n) => n % 2 == 0 ? []: n * 2 );
// [2, 6, 10]
// En este caso, se multiplica cada elemento por 2 y se devuelve un nuevo array con los resultados aplanados, es decir, sin subarrays.
// DE ESTA FORMA SE FILTRA Y SE REALIZA UN MAP AL MISMO TIEMPO