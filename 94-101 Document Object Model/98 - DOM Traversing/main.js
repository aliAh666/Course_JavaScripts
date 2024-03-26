/*
  DOM [Traversing]
  - nextSibling
  - previousSibling
  - nextElementSibling
  - previousElementSibling
  - parentElement
*/

let span = document.querySelector(".two");

// console.log(span.nextSibling); //  يعني جيب الشقيق التالي بعد العنصر سبان حتى لو كان تعليق او نص
// console.log(span.nextElementSibling); // يعني جيب الشقيق التالي بعد العنصر سبان رح بتجاوز النص والتعليق

// console.log(span.previousSibling); // يعني جيب الشقيق السابق بعد العنصر سبان حتى لو كان تعليق
// console.log(span.previousElementSibling); // يعني جيب الشقيق السابق بعد العنصر سبان رح بتجاوز النص والتعليق


console.log(span.parentElement);


// span.onclick = function () {
//   span.parentElement.style.opacity = '0';
// }

// --OR--

span.onclick = function () {
  span.parentElement.remove();
}