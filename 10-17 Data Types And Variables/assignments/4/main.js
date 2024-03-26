let a = 21;
let b = 20;

let c = `${b}${a}`;
let d = `${c}`;
let e = `${d}`;

console.log(`_${a}_${c}_${d}_${c}_${b}`); // _21_2021_2021_2021_20_