/*
  BOM [Browser Object Model]
  - setInterval(Function, Millseconds, Additional Params)
  - clearInterval(Identifier)
*/

// ------- With Anonymous Function -------

// setInterval(function () {
//   console.log(`Msg`);
// }, 1000);

// ------- With Regular Function -------
// setInterval(sayMsg, 1000);

// function sayMsg() {
//   console.log(`Iam Message`);
// }

// ------- Regular Function With Parameters -------

// setInterval(sayMsg, 1000, "Osama", 38);

// function sayMsg(user, age) {
//   console.log(`Iam Message For ${user} His Age Is: ${age}`);
// }

// -------------------------------------

let div = document.querySelector("div");

function countdown() {
  div.innerHTML -= 1;
  if (div.innerHTML === "0") {
    clearInterval(counter);
    div.textContent = "Your Link Is Ready";
  }
}
let counter = setInterval(countdown, 1000);

