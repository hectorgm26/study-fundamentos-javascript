
// En js se puede convertir un objeto a string y viceversa. Se usan los siguientes metodos:
// 1 - Convertir un objeto a string: JSON.stringify(objeto)

const person = {
    name: "Juan",
    age: 30,
    isMarried: false,
    hobbies: ["futbol", "musica", "cine"],
    address: {
        city: "Madrid",
        country: "España"
    }
}
const personString = JSON.stringify(person); // convierte el objeto a string
console.log(personString); // {"name":"Juan","age":30,"isMarried":false,"hobbies":["futbol","musica","cine"],"address":{"city":"Madrid","country":"España"}}
console.log(typeof personString); // string


// 2 - Convertir un string a objeto: JSON.parse(string)
const personObj = JSON.parse(personString); // convierte el string a objeto
console.log(personObj); // {name: "Juan", age: 30, isMarried: false, hobbies: Array(3), address: {…}}
console.log(typeof personObj); // object

console.log(personObj.name); // Juan
console.log(personObj.age); // 30
console.log(personObj.isMarried); // false
