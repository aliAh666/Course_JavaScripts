/*
  DOM
  - What Is DOM
  - DOM Selectors
  --- Find Element By ID
  --- Find Element By Tag Name
  --- Find Element By Class Name
  --- Find Element By CSS Selectors
  --- Find Element By Collection
  ------ title
  ------ body
  ------ images
  ------ forms
  ------ links
*/

// let myIdElement = document.getElementById("my-div");
// let myTagElements = document.getElementsByTagName("p");
// let myClassElement = document.getElementsByClassName("my-span");
// let myQueryElement = document.querySelector(".my-span");
// let myQueryAllElement = document.querySelectorAll(".my-span");

// console.log(myIdElement);
// console.log(myTagElements[1]);
// console.log(myClassElement[1]);
// console.log(myQueryElement);
// console.log(myQueryAllElement[1]);

// console.log(document.title);
// console.log(document.body);
// console.log(document.forms[0].one.value);
// console.log(document.links[1].href);







// ========================================================

// عم طبق وراه

let myIdElement = document.getElementById("my-div");
console.log(myIdElement);

let myTagElements = document.getElementsByTagName("p");
console.log(myTagElements[1]);
myTagElements[1].innerHTML = "Test";

let myClassElement = document.getElementsByClassName("my-span")
console.log(myClassElement[1]);

// =================تجارب querySelector =================


// let myQueryElement = document.querySelector(".special")
// console.log(myQueryElement);

// ------

// let myQueryElement = document.querySelector("#my-div")
// console.log(myQueryElement);

// ------

let myQueryElement = document.querySelector(".my-span")
console.log(myQueryElement);

// ------

let myQueryAllElement = document.querySelectorAll(".my-span")
// console.log(myQueryAllElement);
console.log(myQueryAllElement[1]);

// ========================================================

console.log(document.title);
console.log(document.body);
console.log(document.forms);
console.log(document.forms[0]);
console.log(document.links);
console.log(document.links[0]);
console.log(document.links[0].href);