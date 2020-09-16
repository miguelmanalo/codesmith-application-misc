// Write a function that takes two inputs, a base and an exponent, and returns the expected value of base ^ exponent. For instance, if our base is 2 and our exponent is 3, then return 8 because 2^3 = 2*2*2 = 8.

// Input 1: {Number} base - base number raised to the exponent
// Input 2: {Number} exponent - exponent the base is raised to
// Output: {Number} - expected value of base raised to exponen

//The Recursive Method
// const pow = (base, exponent) => {
//     if (exponent === 1) return base;
//     return base * pow(base, exponent - 1);
// }

//The Recursive Method - Refactored
const pow = (base, exponent) => 
    exponent === 1 ? 
    base : 
    base * pow(base, exponent - 1);
//once your countdown reaches the base case, regular old, not mutate base gets shot up through the returns of all the previous calls

//The Iterative Method
// const pow2 = (base, exponent) => {
//     let baseOrig = base;
//     for (let i = 1; i < exponent; i++) {
//         baseOrig *= base;
//     }
//     return baseOrig;
// }

// To check if you've completed the challenge, uncomment these console.logs!
console.log(pow(2, 3)); // -> 8
console.log(pow(3, 5)); // -> 243
// console.log(pow2(2, 3)); // -> 8
// console.log(pow2(3, 5)); // -> 243