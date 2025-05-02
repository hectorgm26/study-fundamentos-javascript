// La clase es nuestra plantilla para crear objetos
// Se utiliza la palabra reservada class para definir una clase, y el nombre de la clase debe comenzar con mayúscula y en singular
// No se necesitan poner parentesis, ya que de hacerlo se crearia una funcion

class Persona {
    // Atributos de la clase
    // Constructor de la clase
    // Metodos de la clase
};

class Mascota {
    // Atributos de la clase
    // Constructor de la clase
    // Metodos de la clase
};


// Una instancia es la creacion de un objeto a partir de una clase, y se guarda en variables para poder acceder a sus atributos y metodos
// Se utiliza la palabra reservada new para crear una instancia de una clase
const personaUno = new Persona(); // OBJETO
const personaDos = new Persona(); // OBJETO
const personaTres = {}; // Cuando se crea un objeto a traves de new, ese objeto para a ser un objeto particular definido por su clase, y aqui como es un objeto literal, solo se define un objeto vacio, sin un molde

// LA instancia se puede hacer con () o sin (), pero es recomendable hacerlo con () para evitar confusiones

console.log(personaUno);
console.log(personaDos);
console.log(personaTres); // {}

const mascotaUno = new Mascota();
console.log(mascotaUno);

// Si quiero modificar algo de la personaUno, lo hago de la siguiente manera
personaUno.nombre = "Juanito";
// Y si se quiere modificar algo a nivel de clase, se hace en el mismo molde