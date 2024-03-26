/*
  Nested If
*/

let price = 100;
let discount = true;
let discountAmount = 30;
let country = "Egypt";
let student = true;


if (discount == true) {
  
  if (student == true) {
    if (country == "Egypt") {
        price -= (discountAmount - 10);
        }
    }
}


console.log(price);





// if (discount === true) {

//   price -= discountAmount;

// } else if (country === "Egypt") {

//   if (student === true) {

//     price -= discountAmount + 30;

//   } else {

//     price -= discountAmount + 10;

//   }

// } else {

//   price -= 10;

// }

// console.log(price);