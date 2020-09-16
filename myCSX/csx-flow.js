// Write a function that takes an array of functions and a number that will be piped through all those functions. The input number passes through the first function, whose output is passed as input to the second function, whose output is passed as input to the third function, and so on. Use recursion to return the final output of the last function in the array.

// Input 1: {Number} input - number flowing through all functions
// Input 2: {Array} funcArray - array of functions to pass input through
// Output: {Number} - final output of final function

//The Brute Force Method
// const flow2 = (input, funcArray) => {
//     let answer1 = funcArray[0](input);
//     let answer2 = funcArray[1](answer1);
//     let answer3 = funcArray[2](answer2);
//     return funcArray[3](answer3);
// }

//The Reduce Method
// const flow3 = (input, funcArray) => 
//     funcArray.reduce((runningTotal, currVal) => 
//     currVal(runningTotal), input);

//The Recursive Method: after watching part of the solution
//Passes given CSX test here in VS Code and on repl.it
//Fails on CSX
//I didn't think of mutating things by shifting functiosn off the given array
//So funcArray[0] would always exist... until it doesn't
// const flow = (input, funcArray) => {
//     //base case
//     if (funcArray[0] === undefined) return input;
//     //recursive case: remove one function every call
//     //works better than a for loop because it doesn't like variables in function calls
//     let result = funcArray[0](input);
//     funcArray.shift();
//     return flow(result, funcArray);
// }

//CSX given solution
const flow4 = (input, funcArray) => {
    //base case
    if (funcArray.length === 0) return input;
    //recursive case: remove one function every call
    //works better than a for loop because it doesn't like variables in function calls
    const output = funcArray[0](input);
    return flow4(output, funcArray.slice(1));
}

// To check if you've completed the challenge, uncomment this code!
const multiplyBy2 = num => num * 2;
const add7 = num => num + 7;
const modulo4 = num => num % 4;
const subtract10 = num => num - 10;
const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];

// console.log(flow(2, arrayOfFunctions)); // -> -7
// console.log(flow2(2, arrayOfFunctions)); // -> -7
// console.log(flow3(2, arrayOfFunctions)); // -> -7
console.log(flow4(2, arrayOfFunctions)); // -> -7
