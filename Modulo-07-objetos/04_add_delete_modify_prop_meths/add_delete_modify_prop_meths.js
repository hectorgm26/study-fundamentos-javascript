
let usuario = {
    nombre_completo: ["Hector", "Gonzalez", "Mora"],
    edad: 27,
    telefonos: {
        telefono1: 123456789,
        telefono2: 987654321,
    },
    pais_residencia: "Chile",
    idiomas: ["español", "ingles", "Java", "JavaScript", "PHP"],

    saludar: function () {
        console.log("Hola, soy " + this.nombre_completo[0] + " y tengo " + this.edad + " años.");
    }
};

// Modificar valores de las propieades de objetos ya declarados desde afuera

usuario.edad = 30; // Simplemente se accede a la propiedad y se le asigna un nuevo valor, que hara que se modifique el valor de la propiedad
console.log(usuario.edad);

if (usuario.edad != 27) {
    console.log(`Se ha modifcado la edad de: ${usuario.nombre_completo[0]}`);
    console.log("El nuevo valor de edad es ahora: " + usuario.edad + " y antes era 27");
}


// Añadir nuevas propiedades a un objeto ya declarado desde afuera
// Simplemente se llama al objeto, le ponemos un punto y especificamos el nombre de la nueva propiedad, y como no existe, se creara una nueva propiedad con el valor que le asignemos

usuario.direccion = "Santiago, Chile";
console.log(usuario.direccion);


// Para eliminar una propiedad o un metodo de un objeto, tenemos que usar el operador delete, seguido de un espacio y el nombre del objeto, seguido de un punto y el nombre de la propiedad o metodo que queremos eliminar

delete usuario.idiomas; // Elimina la propiedad idiomas del objeto usuario
delete usuario.saludar; // Elimina el metodo saludar del objeto usuario
console.log(usuario);


// Almacenar el valor de un objeto en una variable (con el fin de poder utilizarse en otro lugar del código más adelante)
let edad_usuario = usuario.edad;
console.log(edad_usuario);