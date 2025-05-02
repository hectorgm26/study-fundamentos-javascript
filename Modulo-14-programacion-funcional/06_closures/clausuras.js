
// Los closures o clausuras son funciones que tienen acceso a su propio ámbito, al ámbito externo y al ámbito global. Por clousure se entiende que una fn puede acceder a constantes que se encuentran dentro de esta fn, y tambiena variables que se encuentren fuera de la fn

// En otras palabra, son funciones anidadas que recuerdan el conjunto de variables a las que podian acceder, por mas que se invoquen desde otro lugar o desde otro scope.

// Para crear una clausura requerimos 3 ingredientes:
// 1. Una función que se encuentre escrita dentro de otra función (una funcion anidada)

// 2. Alguna variable que se encuentre dentro de la función padre, y que la funcion de adentro la utilice de alguna manera

// 3. Invocar a la funcion interna pero no desde el scope donde esta escrita, si no desde otro scope, o desde el scope global. ESTO SE PUEDE HACER ASIGNANDO UNA FUNCION A UNA VARIABLE, O RETORNANDO LA FN INTERNA DESDE LA FN PADRE: ejemplo: const saludar = fuction saludar() { console.log("Hola"); } saludar();

function crearContador() {
    let contador = 0;

    setTimeout(function () { // Otra clousure, ya que la fn interna tiene acceso a la variable contador, que se encuentra en el scope superior.
        contador = 100;
    }, 5000); // Se ejecuta recien pasado 5 segundos, y cambia el valor de la variable contador a 100.

    return function incrementar() {
        contador = contador + 1;
        return contador;
    };
};

const contador1 = crearContador(); // Cuando llamemos a la fn grande, que engloba a la de adentro, esta devolvera la fn interna que podemos guardar en una variable para llamarla mas tarde. AHORA LA FN INTERNA SE CONVIRTIO EN UNA CLOSURE, YA QUE CONTIENE UNA REFERENCIA A UNA VARIABLE DECLARADA EN UN SCOPE SUPERIOR, ES COMO SI LA FN ENCERRARA A LA VARIABLE Y SE GENERARA UN VINCULO ENTRE ELLAS. De hecho siempre que retornemos, retornaremos el vinculo VIVO (se acceden a los variables y sus valores en ese momento, no genera copias) entre la fn interna y la variable que se encuentra en el scope superior.
console.log(contador1()); // 1
console.log(contador1()); // 2
console.log(contador1()); // 3
const contador2 = crearContador(); // Creamos una nueva fn, que tiene su propio scope y su propia variable contador, que empieza en 0.

// POEMOS INVOCARLA TODAS LAS VECES QUE QUERAMOS, Y SIEMPRE SE VA A ACORDAR DEL VALOR QUE TENIA LA VARIABLE CONTADOR EN EL MOMENTO EN QUE SE CREO LA CLOSURE. 

// Si bien desde el scope global no podemos acceder a la variable contador, por ser una varible local de la fn crearContador, COMO SACAMOS A LA FN INTERNA Y LA GUARDAMOS EN LA VARIABLE LOCAL CONTADOR1, CUANDO LA INVOCEMOS, ESTA SEGUIRA VINCULADA A LA VARIABLE LOCAL Y VA A PODER UTILIZARLA NORMALMENTE.

// ¿QUE PASA SI LLAMAMOS DENUEVO CON UNA NUEVA VARIABLE A LA FN CREADOR DE CLOSURES, TOMARA UN NUEVO VALOR DE CONTADOR? O TOMARA EL VALOR DEL CONTADOR QUE YA TENIA LA FN CLOSURE?. PARA ESTO, HAY QUE TENER EN CUENTA EL CONTEXTO LEXICO Y LA PILA DE EJECUCION. CUANDO JS EJECUTA EL PROGRAMA, CREA EL PRIMER CONTEXTO LEXICO, CARGANDO EN MEMORIA LO NECESARIO PARA EJECUTAR LA FUNCION. SE INICIALIZA EL REGISTRO, LOS PUNTEROS DE LINEAS A EJECUTAR, SE CREA EL OBJETO GLOBAL WINDOW, SE ASOCIA EL CONTEXTO DE EJECUCION CON EL CODIGO JS DE NOSOSTROS Y SE CREA EL ENTORNO LEXICO, QUE ES ES UN OBJETO DONDE SE ALMACENAN LOS NOMBRES DE LAS VARIABLES QUE EXISTEN DENTRO DE UNA FUNCION Y LOS VALORES ACTUALES QUE TIENEN, SIENDO COMO UN DICCIONARIO CLAVE-VALOR, DONDE LA CLAVE SON LOS NOMBRES DE LAS VARIABLES QUE RECIBEN LAS FUNCIONES O DECLARADAS DENTRO DE ELLAS, Y LOS VALORES SON LOS VALORES ACTUALES DE ESTAS CUANDO UNA FUNCION SE EJECUTA.

// CADA VEZ QUE SE EJECUTA UNA FN SE CREA UN NUEVO CONTEXTO LEXICO, POR ENDE, EL CONTADOR LLAMADO POR SEGUNDA VEZ CON contador2, NO TOMARIA EN CUENTA LOS CAMBIOS QUE SE HICIERON EN EL CONTADOR DE LA FN CLOSURE QUE SE CREO ANTES EN contador1

// DENTRO DE UN ENTORNO LEXICO, LAS CLAVES SON UNICAS, PORQUE NO PODEMOS TENER DOS VARIABLES CON EL MISMO NOMBRE EN UN MISMO SCOPE O FN. Y ADEMAS, CADA ENTORNO LEXICO TIENE UN PUNTERO A SU ENTORNO LEXICO EXTERIOR, QUE ES EL ENTORNO DONDE FUE CREADO. PERO EN EL CASO DE LA FN GLOBAL, ESE PUNTERO ESTARA VACIO POR EL SER PRIMER ENTONRO CREADO

// EL SCOPE DE LAS FN ES EL ENTORNO LEXICO. EN ESTE CASO, PARA LA FN GLOBAL, EXISTEN 3 IDENTIFICADORES DE VARIABLES, Y COMO ES UNA FN QUE ESTA DECLARADA, SE CARGA EN MEMORIA CUANDO SE CREA EL ENTORNO LEXICO, Y CADA VEZ QUE JS CREA UNA NUEVA FN EN MEMORIA, LA VINCULA AL ENTORNO LEXICO DONDE LA CREO, Y POR ESO AQUI crearContador() SE VINCULA AL ENTORNO LEXICO GLOBAL.


// USOS PRINCIPALES DE CLOSURES:
// 1. PROTEGER EL ACCESO A LAS VARIABLES

// la unica forma de acceder a las variables es a traves de la fn interna, pero no podemos acceder al valor directo de esa variable de la fn padre. Lo que podriamos hacer es agregar funcionalidades, como devolver un objeto, o un getter y un setter, para poder acceder a la variable de la fn padre, o crear fn especificas, las cuales igualmente seran closures, ya que estaran vinculadas a la fn padre y a su variable local


function crearContador2() {
    let contador = 0;

    return {
        incrementar: function () {
            contador = contador + 1;
            return contador;
        },
        decrementar: function () {
            contador = contador - 1;
            return contador;
        },
        obtenerValor: function () {
            return contador;
        }
    }
};

const contador3 = crearContador2();
contador3.incrementar();
contador3.incrementar();
contador3.decrementar();
console.log(contador3.obtenerValor()); // 1, ya que se incrementa 2 veces y se decrementa una vez. La fn obtenerValor es una closure, ya que tiene acceso a la variable contador, que se encuentra en el scope superior.

// 2. CREAR FABRICA DE FUNCIONES (FUNCIONES QUE DEVUELVEN OTRA FUNCION)

// El model que le agregamos mas fns a la fn que devuelve el objeto, es una forma de crear una fabrica de fn, ya que podemos crear fn que devuelvan otras fn, y esas fn internas pueden acceder a las variables del scope superior. Por ejemplo, si queremos crear una fn que devuelva una fn que sume un numero determinado, podemos hacer lo siguiente: EN VEZ DE INICIAR UNA VARIABLE LOCAL PARA EL CONTADOR, PODEMOS USAR UN PARAMETRO, QUE ACTUARA COMO VARIABLES LOCALES DE LA FN, Y LAS CLAUSURAS SEGUIRAN PODER ACCEDIENDO A ELLAS.

function crearContador3(contador = 0) {

    return {
        incrementar: function () {
            contador = contador + 1;
            return contador;
        },
        decrementar: function () {
            contador = contador - 1;
            return contador;
        },
        obtenerValor: function () {
            return contador;
        }
    }
};

const contador4 = crearContador3(10); // Creamos un contador que empieza en 10, y podemos usarlo como un contador normal, pero con el valor inicial que le pasamos por parametro. La fn incrementar es una closure, ya que tiene acceso a la variable contador, que se encuentra en el scope superior. AUQUE PODREMOS POR DEFECTO ENVIARLA SIN NINGUN VALOR, Y EN ESE CASO SE INICIALIZARA EN 0.
contador4.incrementar(); // 11
contador4.incrementar(); // 12


// EJEMPLO AVANZADO

function crearImpresoraMensajes(tipoMensaje, estilos) {

    return function mensaje(str) {
        console.log(`%c ${tipoMensaje}: ${str} `, estilos);
    }
};

const error = crearImpresoraMensajes('Error', 'background: red, color: white;');
const warning = crearImpresoraMensajes('Warning', 'background: orange, color: white;');
const exito = crearImpresoraMensajes('Exito', 'background: green, color: white;');
const info = crearImpresoraMensajes('Info', 'background: blue, color: white;');

error('No se pudo conectar a la base de datos'); // %c Error: No se pudo conectar a la base de datos
warning('El usuario no tiene permisos para acceder a esta seccion'); // %c Warning: El usuario no tiene permisos para acceder a esta seccion
exito('La operacion se realizo con exito'); // %c Exito: La operacion se realizo con exito


// Se le puede agregar un strings a estas llamadas, pese a que no estemos llamando directamente a la fn mensaje, ya que la fn mensaje es una closure, y tiene acceso a las variables tipoMensaje y estilos, que se encuentran en el scope superior. Por lo tanto, podemos crear una fn que devuelva otra fn, y esa fn interna puede acceder a las variables del scope superior.