/*
  Switch Statement
  switch(expression) {
    Case 1:
      // Code Block
      break;
    Case 2:
      // Code Block
      break;
    Default:
      // Code Block
  }
  - Default Ordering
  - Multiple Match
  - ===
*/

// let day = "A";

// switch (day) {
//   default:
//     console.log("Unknown Day");
//     break;
//   case 0:
//     console.log("Saturday");
//     break;
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//   case 3:
//     console.log("Monday");
//     break;
// }

let day = 1;

switch (day) {
  case 0:
    console.log("Saturday");
    break;
  case 1:  
    console.log("Sunday")
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tusday");
  default :
    console.log("Unknown Day");
}