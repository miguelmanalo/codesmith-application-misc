// POD Day 3: Regular - addingToX & arrayToX
// Challenge Part 1
// Create a function called addingToX that accepts a number as an argument.
// It will return the sum of every integer from 1 up to and including the input number.

// Recursive Method
const addingToX = num => num === 0 ? num : num + addingToX(num - 1);

// Iterative Method
// const addingToX = (num) => {
//     let answer = 0;
//     for (let i = 0; i <= num; i++) {
//         answer += i;
//     }
//     return answer;
// }

console.log(addingToX(0)); // will return 0
console.log(addingToX(1)); // will return 1
console.log(addingToX(2)); // will return 3
console.log(addingToX(3)); // will return 6
console.log(addingToX(4)); // will return 10
console.log(addingToX(5)); // will return 15
console.log(addingToX(10)); // will return 55

// Challenge Part 2
// Write a function arrayToX that accepts a number as an argument.
// It will return an array where each element is the return value of calling addingToX on each integer from 1 up to and including the input number.

// Iterative Method
// const arrayToX = (num) => {
//     const answerArray = [];
//     for (let i = 1; i <= num; i++) {
//         answerArray.push(addingToX(i));
//     }
//     return answerArray;
// }

// Recursive 
const answerArrayToX = [];

const arrayToX = num => {
    if (num === 0) {
        return answerArrayToX;
    } else if (answerArrayToX.length <= num) {
    answerArrayToX.push(addingToX(num));
    }
    return arrayToX(num - 1);
}

console.log(arrayToX(1)); // will return [1]
console.log(arrayToX(2)); // will return [1, 3]
console.log(arrayToX(3)); // will return [1, 3, 6]
console.log(arrayToX(4)); // will return [1, 3, 6, 10]
console.log(arrayToX(5)); // will return [1, 3, 6, 10, 15]

////////////////////////////////////////////////////////////////////////////////////////////////////

// POD Day 3: Advanced - Modemean
// Given an array of numbers, determine if the mode and mean of the array are equivalent

//  Caveats:
//  Math.floor the mean
//  If there are multiple modes, use the max of the modes
//  Return true or false

const modeMean = arr => Number(mode(arr)) === mean(arr) ? true : false;

const mode = arr => {
    const numHolder = {};
    let modeChecker = 0;
    let modeLabel;

    arr.forEach(item => numHolder[item] === undefined ? numHolder[item] = 1 : numHolder[item]++);
    for (const property in numHolder) {
        if (numHolder[property] >= modeChecker) {
            modeChecker = numHolder[property];
            modeLabel = property;
        }
    }
    return modeLabel;
}

const mean = arr => Math.floor((arr.reduce((runningTotal, currVal) => runningTotal += currVal, 0)) / arr.length);

const arr1 = [1,2,3,4,5,]; // mode = 5, mean = 3
const arr2 = [20, 4, 99, 4, 8, 8, 4, 999]; // mode = 4, mean = 143.25
const arr3 = [5,5,5,5,5,] // mode = 5, mean = 5

console.log(mode(arr1), mean(arr1), modeMean(arr1));
console.log(mode(arr2), mean(arr2), modeMean(arr2));
console.log(mode(arr3), mean(arr3), modeMean(arr3));