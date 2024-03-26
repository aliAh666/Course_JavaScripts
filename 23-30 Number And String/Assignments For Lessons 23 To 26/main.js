//Assignment 01

// Examples
// console.log(100_000); // 100000
// console.log(100000); // 100000
// console.log(5e4 + 5e4); // 100000

// // Your Solutions
// console.log(1000000/10); // 100000
// console.log(100*1000); // 100000
// console.log(90000+10000); // 100000
// console.log(200000-100000); // 100000
// console.log(10**5); // 100000
// console.log(100000.0); // 100000
// console.log(+"100000"); // 100000
// console.log(-(-100000)); // 100000
// console.log(parseInt("100000 Ali")); // 100000
// console.log(Math.ceil(99999.2)); // 100000
// console.log(Math.floor(100000.2)); // 100000
// console.log(Math.pow(10, 5)); // 100000
// console.log(Math.max(100000,100)); // 100000


// **************************************************************
//Assignment 02


// console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991


// **************************************************************
//Assignment 03


// console.log((Number.MAX_SAFE_INTEGER) - (-Number.MIN_SAFE_INTEGER) + (true+true) ** (true+true+true)*(true+true));


// **************************************************************
//Assignment 04


// let myVar = "100.56789 Views";

// console.log(Number.parseInt(myVar)); // 100
// console.log(typeof Number.parseInt(myVar)); // number
// console.log(+(Number.parseFloat(myVar).toFixed(2))); // 100.57
// console.log(typeof +(Number.parseFloat(myVar).toFixed(2))); // number


// **************************************************************
//Assignment 05


// let num = 10;

// console.log(Number.isInteger(num) + Number.isInteger(num)); // 2


// **************************************************************
//Assignment 06

// let flt = 10.4;

// console.log(Math.floor(flt)); // 10
// console.log(Math.trunc(flt)); // 10
// console.log(Number.parseInt(flt)); // 10
// console.log(+flt.toFixed()); // 10
// console.log(Math.round(flt)); // 10


// **************************************************************
//Assignment 07

console.log(Math.trunc(Math.random() + Math.random() + Math.random() + Math.random() + Math.random(),0)); // 0 || 1 || 2 || 3 || 4
console.log(Math.trunc(Math.random()*4,0)); // 0 || 1 || 2 || 3 || 4