import "./style.css";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function random(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}

function generatorExcuse() {
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

generatorExcuse();

document.addEventListener("onload", generatorExcuse);
