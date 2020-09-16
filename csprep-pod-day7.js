// POD Day 7: Check if Sorted 
// Given an array of integers, check to see if the array is already sorted (return true or false)

// Once you've solved it iteratively, try to solve it recursively or using functional programming

// If you have time, write and walk through some test cases for your code.

// What's the time complexity of your solution?

// EX: 
// [1, 2, 3, 4, 5] --> [1, 5]
// [90, 30, 44, 66, 10] --> [10, 90]
// [16, -70, 122] --> [-70, 122]

// Iterative Method
// const checkSorted = (arr) => {
//     let sorted = true;
//     // sorted from least to greatest
//     if (arr[0] < arr[arr.length - 1]) {
//         for (let i = 0; i < arr.length - 1; i++) {
//             if (arr[i] < arr[i + 1] && arr[i + 1] !== undefined) {
//                 sorted = true;
//             } else {
//                 sorted = false;
//                 return sorted;
//             }
//         }
//         return sorted;
//     }
// 
//     // sorted from greatest to least
//     if (arr[0] > arr[arr.length - 1]) {
//         for (let i = 0; i < arr.length - 1; i++) {
//             if (arr[i] > arr[i + 1] && arr[i + 1] !== undefined) {
//                 sorted = true;
//             } else {
//                 sorted = false;
//                 return sorted;
//             }
//         }
//         return sorted;
//     }
// }

// console.log(checkSorted([1, 2, 3, 4, 5]));  // true
// console.log(checkSorted([90, 80, 74, 66, 10]));  // true
// console.log(checkSorted([90, 130, 44, 66, 10]));  // false
// console.log(checkSorted([16, -70, 122]));  // false
// console.log(checkSorted([-916, -70, -1]));  // true

////////////////////////////////////////////////////////////////

// Recursive Method
const checkSortedRecursive = (arr, i = 0) => {
    // base case
    if (arr[i + 1] === undefined) return true;
    if (arr[i] > arr[i + 1] && arr[0] < arr[arr.length - 1] || arr[i] < arr[i + 1] && arr[0] > arr[arr.length - 1]) return false;
    return checkSortedRecursive(arr,  i+ 1);
}

console.log(checkSortedRecursive([1, 2, 3, 4, 5]));  // true
console.log(checkSortedRecursive([90, 80, 74, 66, 10]));  // true
console.log(checkSortedRecursive([90, 130, 44, 66, 10]));  // false
console.log(checkSortedRecursive([16, -70, 122]));  // false
console.log(checkSortedRecursive([-916, -70, -1]));  // true

  // SOLVED WITH RECURSION (not Miguel's)
  // =====================
  // const isSorted = function (arr, i = 0) {
  //   //base case - reached the end of the array
  //   if (arr[i + 1] === undefined) return true;
  //   if (arr[i] > arr[i + 1] && arr[0] <= arr[arr.length - 1] || arr[i] < arr[i + 1] && arr[0] > arr[arr.length - 1]) return false;
    
  //   return isSorted(arr, i + 1)
  // }

////////////////////////////////////////////////////////////////

// Functional Method
const checkSortedFunctional = (arr) => {
    const origArr = arr.slice(0, arr.length);
    // sorted from least to greatest
    if (arr[0] < arr[arr.length - 1]) {
        return origArr.every((value, index) => value === arr.sort((a, b) => a - b)[index]);
    }

    // sorted from greatest to least
    return origArr.every((value, index) => value === arr.sort((a, b) => b - a)[index]);
}

console.log(checkSortedFunctional([1, 2, 3, 4, 5]));  // true
console.log(checkSortedFunctional([90, 80, 74, 66, 10]));  // true
console.log(checkSortedFunctional([90, 130, 44, 66, 10]));  // false
console.log(checkSortedFunctional([16, -70, 122]));  // false
console.log(checkSortedFunctional([-916, -70, -1]));  // true