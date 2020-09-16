// Create a function multiplyAll that takes an unknown number of integer arguments, multiplies them all together, and returns the result.

const multiplyAll = (...num) => num.reduce((runningTotal, currVal) => runningTotal *= currVal, 1);

// Uncomment these to check your work!
console.log(multiplyAll(9, 4, 5, 6, 7, 2, 1, 8, 3)) // should log: 362880
console.log(multiplyAll(5, 5, 5, 3)) // should log: 375