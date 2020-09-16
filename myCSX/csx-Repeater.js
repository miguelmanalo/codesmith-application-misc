// Write a function that takes an input character and returns that character repeated 5 times using recursion. For example, if the input is 'g', then the output should be 'ggggg'.

// Input: {String} char
// Output: {String}

// //The Iterative way
// const repeater = (char) => {
//     let additive = char;
//     for (let i = 0; i < 4; i++) {
//         char += additive;
//     }
//     return char;
// }

// The Recursive Way
// const repeater = (char) => {
//     //termination
//     if (char.length >= 8) {
//         return `too long ${char}`;
//     }
//     //base
//     if (char.length === 5) {
//         return char;
//     //recursion
//     } else {
//         return repeater(char + char[0]);
//     }
// }

// The Recursive Way - refactored to use any number of repeats
// const repeater = (char, n = 1) => {
//     //base case
//     if (char.length === n) {
//         return char;

//     //recursion
//     } else {
//         return repeater(char + char[0], n);
//     }
// }

// Recursion Refactor
const repeater = (char, n = 1) => char.length === n ? char : repeater(char + char[0], n);

// // To check if you've completed the challenge, uncomment these console.logs!
console.log(repeater('g', 5)); // ggggg
console.log(repeater('j', 10)); // jjjjjjjjjj

//Notes
// The website that gave me the char[0] idea: https://www.javascripttutorial.net/javascript-recursive-function/


// function pow(x, n) {
//     if (n == 1) {
//       return x;
//     } else {
//       return x * pow(x, n - 1);
//     }
//   }
  
//   console.log( pow(2, 3) ); // 8

//   function pow(x, n) {
//     return (n == 1) ? x : (x * pow(x, n - 1));
//   }