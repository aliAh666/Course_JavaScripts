//Assignment 01

// function getDetails(zName, zAge, zCountry) {

//   function namePattern(zName) {
//     return `${zName[0].toUpperCase() + zName.slice(1, zName.indexOf(" ")) + zName.slice(zName.indexOf(" "), zName.indexOf(" ") + 2).toUpperCase() + "."}`;
//   }

//   // ===============================================

//   function ageWithMessage(zAge) {
//     return `Your Age Is ${parseInt(zAge)}`;
//   }

//   // ===============================================

//   function countryTwoLetters(zCountry) {
//     return `You Live In ${zCountry.slice(0, 2).toUpperCase()}`;
//   }

//   // ===============================================

//   function fullDetails() {
//     return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`;
//   }
//   return fullDetails(); // Do Not Edit This
// }

// console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// // Hello Osama M., Your Age Is 38, You Live In EG

// console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// // Hello Ahmed A., Your Age Is 32, You Live In SY



// **************************************************************
//Assignment 02

// ===== Regular Function =====

// function itsMe() {
//   return `Iam A Normal Function`;
// }
// console.log(itsMe()); // Iam A Normal Function

// ===== Arrow Function =====

// itsMe = () => `Iam A Normal Function`;
// console.log(itsMe()); // Iam A Normal Function

// ==============================================

// ===== Regular Function =====

// function urlCreate(protocol, web, tld) {
//   return `${protocol}://www.${web}.${tld}`;
// }
// console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

// ===== Arrow Function =====

// urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
// console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org


// **************************************************************
//Assignment 03

// ===== Regular Function =====
// function checker(zName) {
//   return function (status) {
//     return function (salary) {
//       return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//     };
//   };
// }

// console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
// console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

// ==============================================

// ===== Arrow Function =====
// checker = (zName) => (status) => (salary) => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
// console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
// console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble


// **************************************************************
//Assignment 04



function specialMix(...params) {
  let x;
  let y = 0;

  for (let index = 0; index < params.length; index++) {
    if (typeof params[index] === "number") {
      y = y + params[index];

    } else if (typeof params[index] === "string" && params[index].includes(parseInt(params[index]))) {
      x = parseInt(params[index]);
      y = y + x;
    }
  }

  if (y === 0) {
    y = "All Is Strings"
  }
  return y;
}
console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Testing", "10", "40Cool", 10)); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings


























// console.log(specialMix("Test", "Cool", "Test", "Test")); // All Is Strings


// data[index].includes(parseInt(data[index])) === false

// data[index].startsWith(parseInt(data[index]), 0



// const str = "10Testing";
// const str = "Testing";
// const result = parseInt(str.slice(0, 2));
// console.log(result); // "500"

// console.log(parseInt("15.5"));
// console.log(+"15.5");