// Assingment 1

// let start = 10;
// let end = 100;
// let exclude = 40;

// for(let i = start; i <= end; i+=start){

//   if (i === exclude) {
//      i+start;
//     }else{
//       console.log(i);
//     }
// }


// ######################################################################

//Assignment 02

// let start = 10;
// let end = 0;
// let stop = 3;

// for (let i = start; i >= stop; i--) {
//   if (i != start) {
//     console.log("0"+i);   
//   }else{
//     console.log(i);
//   }
// }

// -----OR-----

// console.log("###############################");

// for (let i = start; i >= stop; i--) {
//   if (i != start) {
//     let number = i.toString().padStart(stop-true, `${end}`);
//     console.log(number);   
//   }else{
//     console.log(i);
//   }
// }

// ######################################################################

//Assignment 03

// let start = 1;
// let end = 6;
// let breaker = 2;


// for (let i = start; i <= end; i++) {
//   console.log(i);
//   console.log("-- " + `${ breaker }`);
//   console.log("-- " + `${breaker*breaker}`);

// }

// ######################################################################

//Assignment 04

// let index = 10;
// let jump = 2;

// for (;;) {
//   if (index < jump*jump) {
//     break;
//   }else{
//     console.log(index);
//     index-=jump;
//     // console.log(index);
//   }
// }


// ######################################################################

//Assignment 05

// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";
// let c = letter.length;

// for (let i = (letter.length - true); i < friends.length; i++) {
//   if (friends[i][letter.length - true] !== letter.toUpperCase()) {
//     console.log(`"${c} => ` + `${friends[i]}"`);
//     c++;
//   }
// }

// ######################################################################

//Assignment 06
// let start = 0;
// let swappedName = "elZerO";
// let swap = []; // هالمصفوفة انا فرضتها من عندي



// // ----- Solutions One -----
// for (let i = start; i < swappedName.length; i++) {
//   if (swappedName[i] === swappedName[i].toUpperCase()) {
//     swap.push(swappedName[i].toLowerCase());

//   } else {
//     swap.push(swappedName[i].toUpperCase())
//   }
// }
// console.log(swap.join(""));

// بطريقة اخرى لكنها لا تجاوب على المطلوب بالزبط
// ----- Solutions Tow -----

// for (let i = start; i < swappedName.length; i++) {
//   if(swappedName[i] === swappedName[i].toUpperCase()){
//     console.log(swappedName[i].toLowerCase());
//   }else{
//     console.log(swappedName[i].toUpperCase());
//   }  
// }


// ######################################################################

//Assignment 07

// let start = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];


// for (let i = start; i < mix.length; i++) {
//   if (typeof mix[i] === "number" && mix[i] != 1) {
//     console.log(mix[i]); 
//   }
  
// }


// let s = 'helloworld';
// let x = [];
// for (let i = 0; i < s.length; i++) {
//     x[i] = s[i]
// }

// for (let index = 0; index < x.length; index++) {
//     if (x[index] === sd) {
        
//     }
    
// }
// console.log(x);


array = ['eye','hasan' ,'california' ,'12321' ,'Was it a cat I saw' ,'ali' ,'mohom'];

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        for (let k = 0; k < array[i].length; k++) {
            let x = array[i].split('').reverse();
            if (array[i][i] === x[i][j]) {
                console.log(array[i]);
                // console.log("yes");
            }
        }
    }   
}

// Given an array of strings, return the longest palindrom String.
// Each string may contain only alphanumeric characters in addition to spaces.