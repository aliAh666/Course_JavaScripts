/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

// ------------------------------- With if else Condition -------------------------------//

// function showDetails(...params) {
//   let user_name;
//   let user_age;
//   let user_status;
//   for (let index = 0; index < params.length; index++) {

//     if (typeof params[index] === "string") {
//       user_name = params[index];

//     } else if (typeof params[index] === "number") {
//       user_age = params[index];

//     } else if (params[index] === true) {
//         user_status = "You Are Not Available For Hire";

//     } else if (params[index] === false) {
//         user_status = "You Are Available For Hire";
//     }

//   }
//   console.log(`Hello ${user_name}, Your Age Is ${user_age}, ${user_status}`);
// }



// showDetails("Ali", 26, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(40, "Youssef", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(true, 25, "Mazen"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(false, "Mohamed", 29); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"


// #####################################################################################################################


// ------------------------------- Conditional Ternary Operator -------------------------------//

function showDetails(...params) {

  let user_name;
  let user_age;
  let user_status;
  for (let index = 0; index < params.length; index++) {
    typeof params[index] === "string" ? user_name = params[index]
      : typeof params[index] === "number" ? user_age = params[index]
        : params[index] === true ? user_status = "You Are Available For Hire"
          : params[index] === false ? user_status = "You Are Not Available For Hire"
            : "Undifiend"
  }
  console.log(`Hello ${user_name}, Your Age Is ${user_age}, ${user_status}`);
};


showDetails("Ali", 26, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(40, "Youssef", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 25, "Mazen"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Mohamed", 29); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"



