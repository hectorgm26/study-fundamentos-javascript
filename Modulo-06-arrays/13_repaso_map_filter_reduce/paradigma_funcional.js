
// El paradigma funcional es un estilo de programación que se basa en el uso de funciones puras y evita el uso de estados mutables y efectos secundarios. En JavaScript, esto se puede lograr utilizando métodos como `map`, `filter` y `reduce` para trabajar con arrays de manera más declarativa y concisa.

// En la programacion funcional los programas comienzan con ciertos datos iniciales, y les vamos aplicando funciones, pero sin cambiar el estado de los datos, sino que generamos nuevos datos a partir de los datos iniciales. Es decir, sin realizar mutaciones.

// El paradigma funcional nos fuerza a crear nuevas variables, teniendo que elegir un nombre apropiado para cada uno de ellas. En la programacion imperativa, una misma variable puede significar diferentes cosas a lo largo del tiempo, y eso puede llevar a confusiones. En la programacion funcional, cada variable tiene un significado claro y no cambia a lo largo del tiempo.

// En el paradigma imperativo, nos preocupamos por como se hacen las cosas, y en el paradigma funcional nos preocupamos por el resultado que esperamos, y promueve el uso de funciones puras, que son aquellas que no tienen efectos secundarios y siempre devuelven el mismo resultado para los mismos argumentos, sin tocar nada externo. Esto facilita la comprensión y el mantenimiento del código, ya que las funciones son más predecibles y fáciles de probar, y menos bugs, con codigo mas predecible.

// Las funciones son ciudadanos de primera clase o primera clase, lo que significa que pueden ser asignadas a variables, pasadas como argumentos a otras funciones y devueltas como valores de otras funciones. Esto permite crear funciones más abstractas y reutilizables, y facilita la creación de funciones de orden superior, que son funciones que toman otras funciones como argumentos o devuelven funciones como resultado.

// Y llamamos funciones de orden superior a aquellas funciones que reciben como argumento otras funciones, o devuelven funciones como resultado. Por ejemplo, la función `map` es una función de orden superior porque recibe una función como argumento y la aplica a cada elemento de un array, devolviendo un nuevo array con los resultados. De esta manera, podemos crear funciones más abstractas y reutilizables, y facilitar la creación de funciones de orden superior.


// TANTO MAP, FILTER Y REDUCE SON FUNCIONES DE ORDEN SUPERIOR, Y RECIBEN COMO PRIMER PARAMETRO UNA FUNCION PRINCIPAL, EN LA CUAL ELEGIREMOS LA LOGICA DE LO QUE QUEREMOS HACER CON CADA UNO DE LOS ELEMENTOS DEL ARRAY.
