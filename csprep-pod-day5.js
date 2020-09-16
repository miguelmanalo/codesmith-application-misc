// POD Day 5: Regular - 2Sum
// Given an array of numbers and a target number, return true if there are two numbers in the array that sum up to the target value; return false otherwise
// BONUS: Get twoSum to work without using nested loops

//No nested loops, recursion
// const sumUp = (arr, num) => {
//     if (arr.length === 0) return false;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[0] + arr[i + 1] === num) {
//             return true;
//         } 
//     }
//     //this recursive call HAS TO be outside the for-loop or it doesn't work right
//     return sumUp(arr.slice(1), num);        
// }

// const arr1 = [1,2,4,3,5,];
// const arr2 = [2,2,2,2,2,];
// const arr3 = [99, 1, 1000, 54, 67, 888, 20545, 5, 11];
// console.log(sumUp(arr1, 9)); // true
// console.log(sumUp(arr2, 10)); // false
// console.log(sumUp(arr3, 55)); // false


// POD Day 5: Advanced - Exclusive Sum
// Given an array of numbers, return an array of sums where the value at each index of the output array is the sum of the the values at all other indices of the input array

// Ex: 
// [1, 3, 4, 2] -> [9, 7, 6, 8], since 9 = 3 + 4 + 2, 7 = 1 + 4 + 2, 6 = 1 + 3 + 2, and 8 = 1 + 3 + 4

// Bonus 1: Get exclusiveSum to work without nested loops
// const exclusiveSum = (numArr) => {
//     const answerArray = [];
//     // only using one loop
//     for (let i = 0; i < numArr.length; i++) {
//         answerArray.push((numArr.reduce((runningTotal, currVal) => runningTotal += currVal, 0)) - numArr[i]);
//     }
//     return answerArray;
// }

// Notes
// use slice to extract one number out of the array
// use reduce to sum the whole array and minus what i took out
// somehow get the index of the number you sliced out
// let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// let citrus = fruits.slice(1, 3)
// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']

// Notes 2
// didn't need slice at all haha

// const arr1 = [1, 3, 4, 2];
// const arr2 = [19, 41, 8, 0];
// console.log(exclusiveSum(arr1)); // [9, 7, 6, 8]
// console.log(exclusiveSum(arr2)); // [49, 27, 60, 68]

//////////////////////////////////////////////////////////////////////

// Bonus 2: Modify this function to be 'exclusive product'
// Ex: [1, 3, 4, 2] -> [24, 8, 6, 12]

// Make sure your solution can handle zeros!
// Used nested loops
const exclusiveProduct = (numArr) => {
    const productArray = [];  
    const answerArray = [];
    for (let i = 0; i < numArr.length; i++) {
        // going left in the array from position array[i]
        for (let j = i - 1; numArr[j] !== undefined; j--) {
            if (productArray[i] === undefined) {
                productArray[i] = [];
                productArray[i].push(numArr[j]);
            } else {
                productArray[i].push(numArr[j]);
            }
        }
        // going right in the array from position array[i]
        for (let k = i + 1; numArr[k] !== undefined; k++) {
            if (productArray[i] === undefined) {
                productArray[i] = [];
                productArray[i].push(numArr[k]);
            } else {
                productArray[i].push(numArr[k]);
            }
        }
    }
    // refactored to use forEach. Maybe map doesn't work how I think it works and what I was looking for is forEach in the final calc.
    productArray.forEach((item) => {
        answerArray.push(item.reduce((runningTotal, currVal) => runningTotal *= currVal, 1));
    });
    return answerArray;
}

// Notes
// radiate out from current Value until you hit undefined
// push valid values into an array

const arr1 = [1, 3, 4, 2];
const arr2 = [19, 41, 8, 0];
console.log(exclusiveProduct(arr1)); // [24, 8, 6, 12]
console.log(exclusiveProduct(arr2)); // [0, 0, 0, 6232]