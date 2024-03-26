//Assignment 01

function sayHello(theName, theGender) {
  if (theGender === "Male") {
    console.log(`Hello Mr ${theName}`);
  } else if(theGender === "Female"){
    console.log(`Hello Miss ${theName}`);
  }else{
    console.log(`Hello ${theName}`);
  }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"


// **************************************************************
//Assignment 02

// function calculate(firstNum, secondNum, operation) {

//   if (typeof firstNum === "number" && typeof secondNum === "number") { 
//     if (operation === "add") {
//       console.log(`${firstNum + secondNum}`);
//     }else if(operation === "subtract"){
//       console.log(`${firstNum - secondNum}`);
//     }else if (operation === "multiply") {
//       console.log(`${firstNum * secondNum}`);
//     }else{
//       console.log(`${firstNum + secondNum}`);
//     }

//   }else if(typeof firstNum === "number" && typeof secondNum == "undefined"){
//    console.log("Second Number Not Found");
//   }else if(typeof firstNum !== "number" && typeof secondNum == "undefined")
//   console.log("Error");
// }

// // Needed Output
// calculate(20); // Second Number Not Found
// calculate("20"); // Second Number Not Found
// calculate(20, 30); // 50
// calculate(20, 30, 'add'); // 50
// calculate(20, 30, 'subtract'); // -10
// calculate(20, 30, 'multiply'); // 600



// **************************************************************
//Assignment 03

// function ageInTime(theAge) {
//     if (theAge > 0 && theAge < 100) {
//       let month = parseInt(theAge*12);
//       let week = month*4;
//       let day = parseInt(theAge*365);
//       let hour = parseInt(day * 24);
//       let minute = 60*hour;
//       let second = 60*60*minute;

//         console.log(`Your Age In Month Is: ${month} Month's`);
//         console.log(`Your Age In Week Is: ${week} Week's`);
//         console.log(`Your Age In Day Is: ${day} Day's`);
//         console.log(`Your Age In Hour Is: ${day} Hour's`);
//         console.log(`Your Age In Minute Is: ${minute} Minute's`);
//         console.log(`Your Age In Second Is: ${second} Second's`);
//     }else{
//       console.log("Age Out Of Range");
//     }
//     console.log("------------------------");
//   }
  
//   // Needed Output
//   ageInTime(110); // Age Out Of Range
//   ageInTime(38); // Months Example => 456 Months
//   ageInTime(26); 


// **************************************************************
//Assignment 04

// function checkStatus(a, b, c) {
//   let user_name;
//   let user_age;
//   let user_status;
  
//   let arr = [a,b,c]
//   for (let i = 0; i < arr.length; i++) {
    
//     if (typeof arr[i] === "string") {
//       user_name = arr[i];
//     }else if(typeof arr[i] === "number"){
//       user_age = arr[i];
//     }else if(arr[i] === true){
//       user_status = "You Are Available For Hire";
//     }else if(arr[i] === false){
//       user_status ="You Are Not Available For Hire";
//     }
    
//   }
//   console.log(`Hello ${user_name}, Your Age Is ${user_age}, ${user_status}`);
//   console.log("-------------------------------");
// }

// // Needed Output
// checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"


// **************************************************************
//Assignment 05

// function createSelectBox(startYear, endYear) {

//   document.write(`<div>`);
// // -----------------------------------------------------
//   document.write(`<select>`);
//   for (let i = startYear; i <= endYear; i++) {
//     document.write(`<option value="${i}">${i}</option>`);
//     }
//   document.write(`</select>`);
// // -----------------------------------------------------
//   document.write(`</div>`);
// }

// createSelectBox(1996, 2023);


// **************************************************************
//Assignment 05

// function multiply(...params){
//   let y = 1;
//   let x;
  
//   for (let index = 0; index < params.length; index++) {

//     if (typeof params[index] === "number") {
//       x = parseInt(params[index]);
//       y = y*x;
//     }
//   }
//   console.log(y);
// }
  
// multiply(10, 20); // 200
// multiply("A", 10, 30); // 300
// multiply(100.5, 10, "B"); // 1000