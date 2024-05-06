import "./style.css";

// LISTAS DE PALABRAS
// Se definen constantes que contienen listas de
// palabras para generar excusas. Estas listas se
// mantienen constantes durante la ejecución del programa.

const WHO = [
  "The dog",
  "My grandma",
  "His turtle",
  "My bird",
  "My father",
  "My cat",
  "His parrot",
];
const ACTION = ["ate", "peed", "crushed", "broke", "kicked", "pulled"];

const WHAT = [
  "my homework",
  "the keys",
  "the car",
  "the server",
  "the page",
  "the book",
  "the bill",
  "the archive",
];
const WHEN = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying",
  "before the test",
  "during a deploy",
  "when you called me",
];

// FUNCION PARA GENERAR NUMEROS RANDOM
// Se define una función getRandomNumber que genera
// un número aleatorio entre un rango dado.

function getRandomNumber(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}

// FUNCION QUE GENERA LAS ESCUSAS
// Se define una función generateExcuse
// que genera una excusa combinando palabras
// aleatorias de las listas definidas anteriormente.

function generateExcuse() {
  //Se eligen aleatoriamente elementos de las listas
  // para formar la excusa.
  const who = WHO[getRandomNumber(0, WHO.length)];
  const action = ACTION[getRandomNumber(0, ACTION.length)];
  const what = WHAT[getRandomNumber(0, WHAT.length)];
  const when = WHEN[getRandomNumber(0, WHEN.length)];

  // Se concatena las palabras elegidas para formar
  // la excusa.
  const result = `${who} ${action} ${what} ${when}`;
  const p = document.getElementById("excuse");

  //Se obtiene el elemento HTML con el id "excuse".
  p.innerHTML = result;
}

// Llamada a la funcion cuando carga el evento 'DOMContentLoaded'
document.addEventListener("DOMContentLoaded", generateExcuse);
