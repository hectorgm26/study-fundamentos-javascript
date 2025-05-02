// Hay veces donde queremos tener mas de dos caminos a seguir, para ello utilizamos else if

let clima = "soleado";
let horario = 18;
let dia = "domingo";
// let dia = "lunes";

// El else if nos permitira poder preguntar nuevamente por otra condicion
// Podemos anidar varios else if si es necesario, y terminar con un else para el caso en que ninguna de las condiciones anteriores se cumpla

if (clima === "soleado" && horario < 18) {
  let mensaje = "vamos a dar un paseo";
  console.log(`Ya que el clima esta ${clima} y son las ${horario}, entonces: ${mensaje}`);
} else if (dia === "domingo") {
  console.log("Ok, no hace sol y esta algo tarde, pero es Domingo asi que vamos a dar un paseo");
} else {
  console.log("Mejor nos quedamos en casa a estudiar JavaScript");
}

// No es necesario obligatoriamente tener un else al final, pero es recomendable para tener un control de flujo mas claro. Y el else no puede ir solo, siempre debe ir acompañado de un if o un else if, y tampoco debe tener una condicion, ya que el else se ejecutara si ninguna de las condiciones anteriores se cumple