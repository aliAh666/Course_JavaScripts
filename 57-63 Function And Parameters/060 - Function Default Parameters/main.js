/*
  Function
  - Default Function Parameters
  - Function Parameters Default [Undefined]
  - Old Strategies [Condition + Logical Or]
  - ES6 Method
*/

// وضع قيمة افتراضية للبراميتر في حالة ان المستخدم لم يضع قيمة للبرمترات 

// ------------------- طريقة اولى-------------------

// function sayHello(username, age) {
//     if (age === undefined) {
//       age = "Unknown";
//     }
//     if (username === undefined) {
//       username = "Unknown";
//     }
//     return `Hello ${username} Your Age Is ${age}`;
//   }
  
//   console.log(sayHello());


//  -------------------طريقة ثانية-------------------

// function sayHello(username, age) {

//   age = age || "Unknown";

//   return `Hello ${username} Your Age Is ${age}`;
// }

// console.log(sayHello("ALi"));

//  ------------------- طريقة ثالثة ------------------

function sayHello(username = "Unknown", age = "Unknown") {
  return `Hello ${username} Your Age Is ${age}`;
}

console.log(sayHello("Ali",27));