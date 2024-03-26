// Assingment 1

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(num - num, num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];


// ######################################################################

//Assignment 02

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.pop();
friends.shift();

console.log(friends); // ["Eman", "Osama"]

// ######################################################################

//Assignment 03

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

console.log(finalArr.concat(arrTwo,arrOne).sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]

// ######################################################################

//Assignment 04

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[true+true][0].slice(true+true).toUpperCase()); // ZERO

// ######################################################################

//Assignment 05

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

// ----- Solutions One -----
if (haystack.includes(needle)) {
    console.log("Found");
}

// ----- Solutions Tow -----
switch (needle) {
  case haystack[0]:
    console.log("Found");
    break;

  case haystack[1]:
    console.log("Found");
    break;

  case haystack[2]:
    console.log("Found");
    break;
  }

  // ----- Solutions Three -----
  
  if (needle === haystack[0] || haystack[1] || haystack[2]) {
  console.log("Found");
}

// ######################################################################

//Assignment 06

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs =arr2.concat(arr1).sort().join("").toLowerCase().slice(4);
console.log(allArrs); // fxy