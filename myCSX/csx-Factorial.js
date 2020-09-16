// Write a function that returns the factorial of a number.

// EXAMPLE4! = 4 * 3 * 2 * 1 = 24, so calling factorial(4) should return 24.

// Input: {Number} num - number whose factorial is sought
// Output: {Number}


// const factorial = (n) => {
//     if (n === 0) return 1;
//     if (n === 1) return n;
//     else {
//         return n * factorial(n - 1);
//     }
// }

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(factorial(4)); // -> 24
// console.log(factorial(6)); // -> 720
// console.log(factorial(0)); // -> 1

//CSX Video Solution
// function factorialCSX(num, product = 1) {
//     // base case: when num is 1, return product
//     if (num === 1) return product;
//     // recurse with updated inputs
//     return factorialCSX(num - 1, product * num);
// }

//CSX Video Solution Refactor - arrow function one-line
const factorialCSX = (num, product = 1) => (num === 0 ? product : factorialCSX(num - 1, product * num));

console.log(factorialCSX(4)); // -> 24
// console.log(factorialCSX(6)); // -> 720
// console.log(factorialCSX(0)); // -> 1
