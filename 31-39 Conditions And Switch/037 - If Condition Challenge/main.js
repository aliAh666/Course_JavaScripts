/*
  If Condition Challenge
*/

let a = 10;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}

// Write Previous Condition With Ternary If Syntax

a < 10 ? console.log(10) :
 a >= 10 && a <= 40 ? console.log("10 To 40") :
 a > 40 ? console.log("> 40") : 
 console.log("Unknown");

// *********************************************************************************************************

let st = "Elzero Web School";

if ((st.length * st.indexOf("z")).toString() === "34") {
  console.log("Good");
}else{
  console.log("Wrong Ali Thinkig More")
}

// *********************************************************************************************************

// let st = "Elzero Web School";

if(st.toLowerCase()[st.indexOf("W")] === "w"){
  console.log("Good");
}else{
    console.log("Wrong Ali Thinkig More");
  }

// ____OR____


// if (st.slice(st.indexOf("W") - 1       , st.indexOf("W") + 1).toLowerCase().trim() === "w") {
//   console.log("Good");
// }else{
//   console.log("Wrong Ali Thinkig More");
// }

// ____OR____

// if (st[st.indexOf("W")] || st[st.indexOf("w")] === "w") {
//   console.log("Good");
// }


// *********************************************************************************************************

// let st = "Elzero Web School";

if (parseInt(st) !== "string") {
  console.log("Good");
}

// *********************************************************************************************************

// let st = "Elzero Web School";

if (typeof parseInt(st) === "number") {
  console.log("Good");
}

// // ____OR____

// if (typeof st.indexOf("E") === "number") {
//   console.log("Good");
// }

// *********************************************************************************************************

// let st = "Elzero Web School";

if ((st.substring(0, 6)).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}

// // ____OR____

// if ((st.slice(0, 6)).repeat(2) === "ElzeroElzero") {
//   console.log("Good");
// }