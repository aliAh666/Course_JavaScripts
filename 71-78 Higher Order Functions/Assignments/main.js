//Assignment 01

// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
// let string_arr = mix.map(function (param){
//     return typeof param === "string" ? param :"" ; 
// }).reduce(function (acc,current) {
//     return `${acc}${current}`
// })
// console.log(string_arr);
// Elzero


// **************************************************************
//Assignment 02


// let myString = "EElllzzzzzzzeroo";

// let no_reppet = myString.split("").filter(function (param,i){
//     return param !== myString[i+1];
// }).join("");
// console.log(no_reppet);
// Elzero


// **************************************************************
//Assignment 03


// let myArray = [["E"], "l", "z", "e", ["r", "o"]];

// let flat_arr = myArray.reduce(function (acc, current) {
//     if (typeof acc === "object" && typeof current !== "object") {
//         return `${acc.join("")}${current}`;
//     }else if(typeof current === "object" && typeof acc !== "object"){
//         return `${acc}${current.join("")}`;
//     }else if(typeof acc === "object" && typeof current === "object"){
//         return `${acc.join("")}${current.join("")}`;
//     }else if(typeof acc !== "object" && typeof current !== "object"){
//         return `${acc}${current}`;
//     }else{
//         return `${myArray.join("")}`;
//     }
// });

// console.log(flat_arr);


// **************************************************************
//Assignment 04


// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// let numsRevers = numsAndStrings.filter(function (params) {
//     return parseInt(params);
// }).map(function (params) {
//     return -params;
// });

// console.log(numsRevers);
// [-1, -10, 10, 20, -5, -3]


// **************************************************************
//Assignment 05

let nums = [2, 12, 11, 5, 10, 1, 99];

let check = nums.reduce(function (acc, current) {
    if (current % 2 !== 0) {
        return acc + current;
    }else{
        return acc * current;
    }
});

console.log(check);
// 500