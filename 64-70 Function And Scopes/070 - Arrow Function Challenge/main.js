/*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]


// ========* Regular Function *========
// let names = function (...params) {
//   return `String [${params.join("], [") + "]" + "=> Done !"} `;
// };
// console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// // String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

// // ========* To Arrow Function *========

// let passs = (...params) => `String [${params.join("], [") + "]" + "=> Done !"} `;
// console.log(passs("Osama", "Mohamed", "Ali", "Ibrahim"));
// // // String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !


/* ============================================================================== */


// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output


// ========* Arrow Function *========
// let myNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) => `${ one + two + parseInt(nums)}`;

// console.log(calc(10, myNumbers[myNumbers.length - myNumbers.length], myNumbers[myNumbers.length / myNumbers.length])); // 80

// ========* To Regular Function *========

// let myNumbers = [20, 50, 10, 60];

// let calc = function (one, two, ...nums){
//   return `${ one + two + parseInt(nums)}`;
// }
// console.log(calc(10, myNumbers[myNumbers.length - myNumbers.length], myNumbers[myNumbers.length / myNumbers.length])); // 80

