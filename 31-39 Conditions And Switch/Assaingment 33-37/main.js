//Assignment 01

// Test Case 1
// let num = 9; // "009"
// if (num < 10) {
//     console.log(`00${num}`);
// }
// ---------------------------------------
// Test Case 2
// let num = 20; // "020"
// if (num > 10 && num < 100) {
//     console.log(`0${num}`);
// }
// ---------------------------------------
// // Test Case 3
// let num = 110; // "110"
// if (num >= 100) {
//     console.log(`${num}`);
// }

// ######################################################################

//Assignment 02

// let num1 = 9;
// let str = "9";
// let str2 = "20";

// // Output

// if (num1 == str) {
//    console.log(`${num1} ${typeof num1} Is The Same Value As ${str} ${typeof str}`);
// } 
// if(num1 == str && typeof num1 != typeof str){
//     console.log(`${num1} ${typeof num1} Is The Same Value As ${str} ${typeof str} But Not The Same Type`);
// }
// if(num1 != str2 && typeof num1 != typeof str2){
//     console.log(`${num1} ${typeof num1} Is Not The Same Value Or The Same Type As ${str2} ${typeof str2}`);
// }
// if(typeof str === typeof str2  && str != str2){
//     console.log(`${str} ${typeof str} Is The Same Type As ${str2} ${typeof str2} But Not The Same Value`);
// }
// "{num1} Is The Same Value As {str}"
// "{num1} Is The Same Value As {str} But Not The Same Type"
// "{num1} Is Not The Same Value Or The Same Type As {str2}"
// "{str} Is The Same Type As {str2} But Not The Same Value"


// ######################################################################

//Assignment 03

// let num1 = 10;
// let num2 = 30;
// let num3 = "30";

// if (
//     (num3 > num1 && typeof num3 != typeof num2) &&
//     (num3 > num1 && num3 == num2 && typeof num3 != typeof num2 ) &&
//     (num3 != num1 && typeof num3 != typeof num1 && typeof num3 != typeof num2) 
    
//     ) 
//     {
//     console.log(
//     "30 Is Larger Than 10 And Type string Not The Same Type As number\n"+
//     "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number\n"+
//     `${num3} ['${typeof num3}'] Value And Type Is Not The Same As ${num1} ['${typeof num1}'] And Type Is Not The Same As ${num2}['${typeof num2}']`);
//     }
    

// ######################################################################

//Assignment 04

// Edit What You Want Here


/*
Do Not Edit Below This Line
Needed Output
True 7 Times
*/

let num1 = 10;
let num2 = 1;
let num3 = 10;
let num4 = 40;
// Condition 1

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num1 + num2) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num1 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num1 + num2 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
    
  console.log("True");
} else {
  console.log("False");
}