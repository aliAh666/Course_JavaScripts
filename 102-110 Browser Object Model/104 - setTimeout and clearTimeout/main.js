/*
  BOM [Browser Object Model]
  - setTimeout(Function, Timeout, Additional Params)
  - clearTimeout(Identifier)
*/

// setTimeout(function () {
//   console.log("Msg");
// }, 3000);

// setTimeout(sayMsg, 3000);

// function sayMsg() {
//   console.log(`Iam Message`);
// }

// setTimeout(sayMsg, 3000, "Osama", 38);

// function sayMsg(user, age) {
//   console.log(`Iam Message For ${user} Age Is : ${age}`);
// }

// let btn = document.querySelector("button");

// btn.onclick = function () {
//   clearTimeout(counter);
// };

// function sayMsg(user, age) {
//   console.log(`Iam Message For ${user} Age Is : ${age}`);
// }

// let counter = setTimeout(sayMsg, 3000, "Osama", 38);

// ---------------------------------------------------------------------

let counter = setTimeout(sayMsg, 4000, "Ali", 27);


function sayMsg(user, age) {
  console.log(`Iam Message For ${user} Age Is : ${age}`);
}



document.addEventListener('click',function (e) {
  // console.log(e.target.nodeName === "BUTTON");
  if (e.target.nodeName === "BUTTON") {
    clearTimeout(counter);
  }
 
});