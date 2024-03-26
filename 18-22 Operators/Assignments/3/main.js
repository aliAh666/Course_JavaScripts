let num = "10";

// Solution One
console.log(+num + (+num)); // 20

// Solution Two
console.log(-num*-(true+true)); // 20

// Solution Three
console.log(+num + +(+num/(num.length)) + +(+num/(true+true))); // 20

// Solution Four
console.log(num.length * +num); // 20

// Solution Five
console.log( (+num * +num) / (num.length + num.length + true)); // 20
