/*
  Arrays Methods [Search]
  - indexOf(Search Element, From Index [Opt])
  - lastIndexOf(Search Element, From Index [Opt])
  - includes(valueToFind, fromIndex [Opt]) [ES7]
*/

let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];

console.log(myFriends);

console.log(myFriends.indexOf("Ahmed"));
console.log(myFriends.indexOf("Ahmed", 2));

console.log(myFriends.lastIndexOf("Ahmed"));
console.log(myFriends.lastIndexOf("Ahmed", -2));

console.log(myFriends.includes("Ahmed"));
console.log(myFriends.includes("Ahmed", 2));

if (myFriends.lastIndexOf("Osama") === -1) {
  console.log("Not Found");
}

console.log(myFriends.indexOf("Osama"));
console.log(myFriends.lastIndexOf("Osama"));

//---------------------------------------------------------------------------------------------



// ********************** بناء تابع ايجاد موقع العناصر التي اسمها احمد من تصميمي***********
//----------
// let myFriends = ["Ahmed", "Mohamed", "Ahmed", "Sayed", "Alaa", "Ahmed"];

// let newArray = [];
// let a =0;

// for (let index = 0; index < myFriends.length; index++) {
//   if (myFriends[index] === "Ahmed") {
//     newArray[a++] = index;
//   }
// }
// console.log(newArray);
//----------
//*********************************************************************************************
