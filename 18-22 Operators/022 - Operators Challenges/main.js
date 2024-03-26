/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

console.log(++a    +    +b++    +    +c++    -    +a++);
//             (11)+ 20   + 80   - 11
/*
  [++a] [+]       -> [Pre increment => a = 11] [Addition Operator] 
  [+] [b++] [+]   -> [Unary Plus] [Post increment => b = 20] [Addition Operator]
  [+] [c++] [-]   -> [Unary Plus] [Post increment => c = 80] [Subtraction Operator]
  [+] [a++]       -> [Unary Plus] [Post increment => a = 11]
*/

// ------------------------------------------------------------

//  a = 12;
//  b = 21;
//  c = 81;

console.log(++a    +    -b    +    +c++    -    -a++    +    +a);
//         (13)    +   (-21)  +    +(81)   -   (-13)    +    +14
/*
  [++a] [+]       -> [Pre increment => a = 13] [Addition Operator] 
  [-b] [+]        -> [Unary Negation] [b = -21] [Addition Operator]
  [+] [c++] [-]   -> [Unary Plus] [Post increment => c = 81] [Subtraction Operator]
  [-] [a++] [+]   -> [Unary Negation] [Post increment => a = 13] [Addition Operator]
  [+a]            -> [Unary Plus a = 14]
*/

// ------------------------------------------------------------

//  a = 14;
//  b = 21;
//  c = 82;

console.log(--c    +    +b    +   ( --a    *    +b++)    -    (+b    *    a )   +    --a    -    +true);
//         (81)    +   (+21)  +   ((13)   *   (+21) )    -    (+22   *    13)   +     12    -     1
/*
  [--c] [+]       -> [Pre Decrement => c = 81] [Addition Operator] 
  [+b] [+]        -> [Unary Plus -> b = +21] [Addition Operator]
  [--a] [*]       -> [Pre increment => a = 13] [Multiplication Operator]
  [+] [b++] [-]   -> [Unary Plus] [Post increment => b = 21] [Subtraction Operator]
  [+] [b] [*]     -> [Unary Plus] [b = 22] [Multiplication Operator]
  [a] [+]         -> [a = 13] [Addition Operator]
  [--a] [-]       -> [Pre Decrement => a = 12] [Subtraction Operator]
  [+] [true]      -> [Unary Plus] [Boolean Value & True == 1 ]
*/


// ****************************************************************************************************

/*
  Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * +e); // 2000

// ------------------------------------------------------------

console.log((-d)   +   (+e)   +   (f)   +   (f%e)   +   (-d%(+f))   +   (g + +e[0]));
// -----OR-----
console.log(++e * ++g + ++f + -d);