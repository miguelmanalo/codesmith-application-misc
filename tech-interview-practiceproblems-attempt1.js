/*
// Problem 1: Create a function runningAverage() that returns a callable function object. Update the series with each given value and calculate the current average.
// rAvg = runningAverage();
// rAvg(10) // should log: 10.0;
// rAvg(11) // should log: 10.5;
// rAvg(12) // should log: 11;
// */

// function runningAverage() {
//   let runAvg = 0;
//   let counter = 0;
//   let runSum = 0;
//   const calcAvg = function(num) {
//     counter += 1;
//     runSum = runSum + num;
//     console.log(runSum, `runSum`);    
//     runAvg = runSum / counter;
//     console.log(runAvg, `runAvg`);    
//     return runAvg;
//   }
//   return calcAvg;
// }

// rAvg = runningAverage();
// rAvg(10) // should log: 10.0;
// rAvg(11) // should log: 10.5;
// rAvg(12) // should log: 11;
  

/* 
Problem 2: Intersection
Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. 
*/

// const arr1 = [5, 10, 15, 20];
// const arr2 = [15, 88, 1, 5, 7];
// const arr3 = [1, 10, 15, 5, 20];
// intersection([arr1, arr2, arr3]); // should log: [5, 15]


// //task: take all the arrays together and compare them
// //you want to return a brand new array only with common elements from the given array
//   //return brandNew Array = [onlyCommonNums]

// //use for...of to iterate through each array
// //and put everything into an object and count
// //then anything with a key:value pair of 3 gets pushed to my result array
// //can use for...in to iterate through the object
// //and find the needed value

// function intersection(arr) {
//   //create the empty object to hold my count
//   const holdingObj = {};
//   //create array to put result into
//   const resultArray = [];
//   //use for...of to iterate thru each array since they're of diff lengths
//   for (let item of arr1) {
//     //if the key value pair doesn't exist make it and set it to 1
//     if (holdingObj[item] === undefined) {
//       holdingObj[item] = 1;
//     //if the pair does exist increase by 1  
//     } else if (holdingObj[item] !== undefined) {
//       holdingObj[item] += 1;
//     }
//   }
//   for (let item of arr2) {
//     if (holdingObj[item] === undefined) {
//       holdingObj[item] = 1;
//     } else if (holdingObj[item] !== undefined) {
//       holdingObj[item] += 1;
//     }
//   }
//   for (let item of arr3) {
//     if (holdingObj[item] === undefined) {
//       holdingObj[item] = 1;
//     } else if (holdingObj[item] !== undefined) {
//       holdingObj[item] += 1;
//     }
//   }
//   //now go through the object and pull out the keys with a value of 3
//   for (const key in holdingObj) {
//     if (holdingObj[key] === 3) {
//       //keys are in strings so we have to turn it back into a number
//       resultArray.push(Number(key));
//     }
//   }
//   return resultArray;
// }

// /* 
// Problem 3: Union

// Construct a function union that takes an input array of arrays, compares each array, and returns a new flat array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array.
// */

// const a1 = [5, 10, 15];
// const a2 = [15, 88, 1, 5, 7];
// const a3 = [100];
// console.log(union([a1, a2, a3])); // should log: [5, 10, 15, 88, 1, 7, 100]

// //make a function named union and have it take an array of arrays
// //look at each array and make one new array out of all of them
// //in the new array have each unique item only once
// //also preserve the given ordering of the items

// function union(arr) {
//   //make a new mega array and object called objHolder
//   let megaArray = [];
//   const objHolder = {};
//   //iterate through each array with for...of
//   for (let item of a1) {
//     //if the key value pair doesn't exist make it and also push the value to the megaArray since this is the first time we see the item
//     //if it sees a duplicate number, the push doesn't happen because the value is 1 and no longer undefined
//     if (objHolder[item] === undefined) {
//       objHolder[item] = 1;
//       megaArray.push(item);
//     }
//   }
//   for (let item of a2) {
//     if (objHolder[item] === undefined) {
//       objHolder[item] = 1;
//       megaArray.push(item);
//     }
//   }
//   for (let item of a3) {
//     if (objHolder[item] === undefined) {
//       objHolder[item] = 1;
//       megaArray.push(item);
//     }
//   }
//   return megaArray;
// }

/*

Problem 4: Count total number of elements in a nested array

totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // should log: 8
totalIntegers([1,2,[3],[[4],5], [[[[6],7],8],9], 10]); // should log: 10
totalIntegers([1,2,[["three"], "four"]]); // should log: 4

*/
//make a function named totalIntegers and count each distinct element
//watch out for nested arrays, the length method won't catch them
//watch out for empty arrays, the lenth method counts them and I don't want to 
//thoughts: iterate through each array. use a switch or if else statements to sort out what type of data the item is
//if it's an array, get the length of the nested array
//if the nested array is empty don't count anything

//step 1: for in to iterate
//step 2: typeof to see what data type 
//arrays are objects
//maybe use for in ot iterate?

// totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // should log: 8
// totalIntegers([1,2,[3],[[4],5], [[[[6],7],8],9], 10]); // should log: 10
// totalIntegers([1,2,[["three"], "four"]]); // should log: 4
// //ideas: for loop, recursion, while loop

// function totalIntegers(arr) {
//   const newArray = arr.flat(Infinity);
//   console.log(newArray);
//   console.log(newArray.length);
//   return newArray.length
// }


/*
Problem 5:  Define a function "checkArray" which takes two arguments, an array and a callback function. The callback function will return either true or false depending on the input. "checkArray" will iterate/loop through the array and pass each array element to the callback as an argument. If the callback called on a certain value returns true, the original value (the input to the callback) is pushed to a new array. "checkArray" will return this new array.

const isOdd = (num) => num % 2 === 0 ? false : true;
const arrayOfNumbers = [3,4,6,2,1,10,11];
checkArray(arrayOfNumbers, isOdd); // should log: [3,1,11];
*/

//write a function named checkArray and it takes 2 arguments an array and a CB function
// const isOdd = (num) => num % 2 === 0 ? false : true;
// const arrayOfNumbers = [3,4,6,2,1,10,11];
// const resultArrayOdd = [];

// function checkArray(arr, callback) {
// //iterate thru the array and pass each item to the callback
// //if the callback finds the number to be odd it gets pushed to a new array
//   for (let i = 0; i < arr.length; i += 1) {
//     let oddChecker = callback(arr[i]);
//     if (oddChecker === true) {
//       resultArrayOdd.push(arr[i]);
//     }
//   } return resultArrayOdd;
// }

// checkArray(arrayOfNumbers, isOdd); // should log: [3,1,11];

/*

Problem 6: Create a function multiplyAll which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array. The returned array should consist of each of the elements from the first array multiplied by the integer.

const mult1 = multiplyAll([1,2,3]);
mult1(2); // should log: [2, 4, 6];
mult1(2); // should log: [4, 8, 12];

*/

//make a function labled multiplyAll
//arguments: array of only integers
// function multiplyAll(...arrayIntegers) {
//     let resultArray = [];
//     let counter = 0;
//     //makeArray takes a single integer: singleInteger and returns a new Array: resultArray
//     function makeArray(singleInteger) {
//       // console.log(arrayIntegers, `arrayIntegers`);
//       if (counter === 0) {
//         // console.log(`am i in counter = 0`)
//       for (let i = 0; i < arrayIntegers[0].length; i += 1) {
//         resultArray[i] = arrayIntegers[0][i] * singleInteger;
//         }
//         console.log(resultArray, `resultArray`)
//         counter += 1;
//         return resultArray;
//       }
//       else if (counter > 0) {
//         for (let j = 0; j < resultArray.length; j += 1) {
//         // console.log(`am i in counter > 0`)
//         resultArray[j] = resultArray[j] * singleInteger;
//       }
//       console.log(resultArray, `resultArray else if`)
//       //resultArray = arrayIntegers.map(function(arrayItem){
//       //return arrayItem * singleInteger)}
//       }
//     }
//     //MUST return another function: makeArray()
//     return makeArray;
//   }
  
//   // make the closure backpack
//   const arrayMultiplier = multiplyAll([1,2,3]);
//   // console.log(arrayMultiplier, `arrayMultiplier`);
//   arrayMultiplier(2); // should log: [2, 4, 6];
//   arrayMultiplier(2); // should log: [4, 8, 12];
//   // const mult1 = multiplyAll([1,2,3]);
//   // console.log(mult1, `mult1`);
//   // mult1(2); // should log: [2, 4, 6];
//   // mult1(2); // should log: [4, 8, 12];
  
//   //resultArray has each of the elements of given array multiplied by the given integer
  
  /*
  
  
  
  Problem 7: Find the greatest common divisor of two positive integers. The inputs x and y are always greater or equal to 1, so the the greatest common divisor will always be an integer that is also greater or equal to 1.
  
  greatestCommonDivisor(8, 12); // should log: 4
  
  */