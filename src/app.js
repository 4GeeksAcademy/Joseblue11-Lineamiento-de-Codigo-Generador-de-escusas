import "./style.css";

// Listas de palabras

let who = ["The dog", "My grandma", "His turtle", "My bird", "My father", "My cat", "His parrot"];
let action = ["ate", "peed", "crushed", "broke", "kick", "pull"];
let what = ["my homework", "the keys", "the car", "the server", "the page", "the book", "the bill", "the archive"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying",
  "before the test",
  "during a deploy",
  "when you called me"
];

// Funcion para generar un numero random
function random(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}

// Funcion que genera la excusa

function generatorExcuse() {

  // Variable con las palabras concatenada 

  let result =
    who[random(0, who.length)] +
    " " +
    action[random(0, action.length)] +
    " " +
    what[random(0, what.length)] +
    " " +
    when[random(0, when.length)];
  const p = document.getElementById("excuse");
  p.innerHTML = result;
}

// Llamada a la funcion cuando carga el evento 'onload'

generatorExcuse();

document.addEventListener("onload", generatorExcuse);
