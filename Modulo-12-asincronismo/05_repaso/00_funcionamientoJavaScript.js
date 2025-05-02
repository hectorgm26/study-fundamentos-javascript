
// En JS existen dos tipos de ejecución:

// 1. Ejecución síncrona: el código se ejecuta de forma secuencial, línea por línea, bloqueando la ejecución hasta que cada línea se complete. Las tareas no llvean mucho tiempo, por lo que se ejecutan unas tras otras (asignación de variables, operaciones matemáticas, etc.).

// 2. Ejecución asíncrona: el código se ejecuta de forma no secuencial, permitiendo que algunas tareas se realicen en segundo plano mientras otras continúan ejecutándose. En este caso, las tareas llevan tiempo y muchas veces no sabemos cuando terminaran, asi que esperamos por una respuesta (retardos, esperar click en boton, llamadas a APIs, conexiones a bases de datos, etc).


// En js en el callstack se iran apilando las lineas de codigo a medida que se vayan ejecutando. Cuando una funcion termina de ejecutarse, se elimina del callstack y se pasa a la siguiente. PERO SOLO EJECUTA TAREAS SINCRONAS, las tareas asincronas lo manda a segundo plano y ahi deja que se resuelva, pero mientras ejecuta lo sincrono. Y una vez termina lo asincrono, se mandara al callback queue (lista de cosas asincronas ya resueltas). Y UNA VEZ TERMINADO EL CALLSTACK DE EJECUTAR, el event loop revisa si hay algo en el callback queue, y lo manda al callstack para que ahora se ejecute. Por eso es que a veces parece que el asincrono se ejecuta antes que el sincrono, porque el asincrono se queda esperando a que termine el sincrono para ejecutarse

// Callstack = Es una lista de tareas a realizar, que se ejecutan de forma secuencial. Cuando una tarea termina, se elimina de la lista y se pasa a la siguiente. Lo ultimo que entra a la fila es lo primero que sale (LIFO).

// Stack overflow = Cuando se apilan muchas tareas en el callstack y no se pueden ejecutar, se produce un error de desbordamiento de pila. Esto puede suceder si hay una recursión infinita o si se están ejecutando demasiadas tareas al mismo tiempo.

// Event loop = Es el encargado de revisar si hay tareas en el callback queue y pasarlas al callstack para que se ejecuten. Si el callstack esta vacio, el event loop revisa el callback queue y pasa la primera tarea a la lista de tareas a realizar. Si no hay nada en el callback queue, el event loop espera a que haya algo para pasarlo al callstack. Esto permite que las tareas asincronas se ejecuten una vez que se han resuelto, sin bloquear la ejecucion del codigo sincrono.

// Callback queue = Es una lista de tareas asincronas que ya se han resuelto y que esperan a ser ejecutadas. Es un fifo (first in first out), lo primero que entra es lo primero que sale. Cuando una tarea asincrona se resuelve, se pasa al callback queue para que el event loop la pase al callstack cuando este vacio. Esto permite que las tareas asincronas se ejecuten una vez que se han resuelto, sin bloquear la ejecucion del codigo sincrono.

// Memory Heap = Es un espacio de memoria donde se almacenan los datos y objetos que se crean en el codigo. Cuando se crea un objeto o una variable, se almacena en la memoria heap. Cuando ya no se necesita, se elimina de la memoria heap. Esto permite que el codigo sea mas eficiente y no consuma demasiada memoria. La memoria heap es un espacio de memoria dinamico, lo que significa que puede crecer o decrecer segun sea necesario. Cuando llamamos a una fn, llamamos a la referencia en memoria.

// Garbage collector = Es un proceso que se encarga de eliminar los objetos y variables que ya no se necesitan en la memoria heap. El garbage collector revisa la memoria heap y elimina los objetos y variables que ya no se necesitan, liberando espacio en la memoria. El garbage collector se ejecuta de forma automatica, por lo que no es necesario preocuparse por ello. Sin embargo, es importante tener en cuenta que el garbage collector puede afectar el rendimiento del codigo si se ejecuta con demasiada frecuencia o si hay demasiados objetos y variables en la memoria heap.


// latenflip.com/loupe Es una pagina que explica el funcionamiento de js, el event loop y el callstack. Es muy buena para entender como funciona js y como se ejecuta el codigo.