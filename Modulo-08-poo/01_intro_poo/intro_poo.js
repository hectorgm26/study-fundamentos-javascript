// La POO es un paradigma de programación que se basa en la utilización de objetos. Un objeto es una instancia de una clase, que es una plantilla o modelo que define las propiedades y comportamientos de los objetos. La POO permite organizar el código de manera más eficiente y reutilizable, facilitando la creación de aplicaciones complejas.

// JS no es puntualmente orientado a objetos, pero si es basado en objetos. Esto significa que todo en JS es un objeto, incluyendo funciones y arrays. La POO en JS se basa en la creación de objetos y la utilización de prototipos para definir propiedades y métodos.

const personaUno = {
    nombre: "Hector",
    edad: 27,
    email: "hhector.agm@gmail.com",
    materias: ["JavaScript", "Python", "Java"],
    decirEdad: function() {
        if (edad < 18) {
            return "Lo siento, no puedo decir la edad";
        }
        return this.edad;
    }
};

const personaDos = {
    nombre: "Yanira",
    edad: 26,
    email: "yani@uwu.cl",
    materias: ["JavaScript", "Python", "Java"],
    decirEdad: function() {
        if (edad < 18) {
            return "Lo siento, no puedo decir la edad";
        }
        return this.edad;
    }
};

const personaTres = {
    nombre: "Joaquin",
    edad: 27,
    email: "uwu@xd.cl",
    decirEdad: function() {
        if (edad < 18) {
            return "Lo siento, no puedo decir la edad";
        }
        return this.edad;
    }
};

// ES ENGORROSO COPIAR Y PEGAR EL MISMO CODIGO UNA Y OTRA VEZ. NO ES ESCALABLE NI REUTILIZABLE
// POR ESO LA POO TIENE COMO OBJETIVO CREAR MOLDES O MODELOS QUE NOS PERMITAN CREAR OBJETOS DE UNA MANERA MÁS EFICIENTE Y REUTILIZABLE

// Un molde permite crear un objeto con las mismas propiedades y métodos (funcionalidades), pero con valores diferentes.

// PILARES DE LA POO QUE APLICAN EN JS:
// 1. Abstracción: Permite ocultar los detalles que no sirven para el problema, y mostrar solo las características relevantes del objeto.
// 2. Polimorfismo: Permite utilizar un mismo método en diferentes clases, adaptando su comportamiento según la clase que lo utilice.
//     - AVE - puede volar con sus alas
//     - AVION - puede volar con su motor
//     - SUPERMAN - puede volar con sus superpoderes
// 3. Herencia: Permite crear una nueva clase a partir de una clase existente, heredando sus propiedades y métodos. Esto permite reutilizar código y crear jerarquías de clases.
//     - Persona - clase padre, con propiedades y métodos comunes a todas las personas
//     - Estudiante - clase hija (hereda de Persona)
//     - Profesor - clase hija (hereda de Persona)
// 4. Encapsulamiento: Permite ocultar los detalles internos de un objeto y exponer solo lo necesario para su uso. Esto permite proteger los datos y evitar que sean modificados directamente desde fuera del objeto.