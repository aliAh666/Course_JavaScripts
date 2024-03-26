/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here


// --------------------------------- One --------------------------------- //

x_one = my.slice(zero, my.indexOf("Gamal")).reverse();
console.log(x_one); // ["Osama", "Elham", "Mazero", "Ahmed"];

// --------------------------------- Tow --------------------------------- //

// x1 = my.slice(zero,4).reverse();
console.log(x_one.slice(zero + true, counter)); // ["Elham", "Mazero"]

// --------------------------------- Three --------------------------------- //

let x_tow = x_one.slice(zero + true,counter);
console.log(x_tow.join("").substring(zero,counter - true) + x_tow.join("").substring(counter + my.indexOf("Gamal"))); // "Elzero"

// --------------------------------- Four --------------------------------- //

let x_three = x_tow.join("").substring(zero, counter - true) + x_tow.join("").substring(counter + my.indexOf("Gamal"));
console.log(x_three.slice(-counter + true,-true) + x_three.slice(-true).toUpperCase()); // "rO"
