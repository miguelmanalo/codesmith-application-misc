/*
Problem 1: Running Average
Create a function runningAverage() that returns a callable function object. Update the series with each given value and calculate the current average.

rAvg = runningAverage();
console.log(rAvg(10)); // should log: 10.0;
console.log(rAvg(11)); // should log: 10.5;
console.log(rAvg(12)); // should log: 11;
*/

const runningAverage = () => {
    // both these have to be in the closure so they keep their data between function calls
    let runningSum = 0;
    let timesRun = 0;
    const innerFunction = num => {
        timesRun++;
        return (runningSum += num) / timesRun;
    }
    return innerFunction; 
}

rAvg = runningAverage();
// console.log(rAvg(10)); // should log: 10.0;
// console.log(rAvg(11)); // should log: 10.5;
// console.log(rAvg(12)); // should log: 11;

/* 
Problem 2: Intersection
Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. 

const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]
*/

const intersection = arr => {
    const holdingObj = {};
    const answerArray = [];
    // this  iterates through the first array because if the others don't match anything in here then they won't get added to the new array
    for (let m = 0; m < arr[0].length; m++) {
        // this iterates over the other arrays in the array
        for (let i = 1; i < arr.length; i++) {
            // if a match is found...
            if (arr[i].find(item => item === arr[0][m]) !== undefined) {
                // and it's the first time the match has been found, make a new property and add it to the holding object
                if (holdingObj[arr[i].find((item) => item === arr[0][m])] === undefined) {
                    holdingObj[arr[i].find((item) => item === arr[0][m])] = 1;
                // if it's not the first time its been found, increment the value in the holding object    
                } else {
                    holdingObj[arr[i].find((item) => item === arr[0][m])]++;
                } 
            }
        }
    
    }
    // iterate through the holding object
    for (const property in holdingObj) {
        // this checks to see if the number of times a value has been counted is equal to the number of arrays that need to match
        // if it returns a remainder, the value was not in every array
        if (holdingObj[property] % (arr.length - 1) === 0) {
            // if the property is Not A Number, just push it to the answer array
            if (isNaN(property)) {
                answerArray.push(property);
            // if the property is a number, make it a number again
            } else {
                answerArray.push(Number(property));
            }
        }
    }
    return answerArray;
}

// const arr1 = [5, 10, 15, 20];
// const arr2 = [15, 88, 1, 5, 7];
// const arr3 = [1, 10, 15, 5, 20];
// console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]

/* 
Problem 3: Union
Construct a function union that takes an input array of arrays, compares each array, and returns a new flat array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array.

const a1 = [5, 10, 15];
const a2 = [15, 88, 1, 5, 7];
const a3 = [100];

console.log(union([a1, a2, a3])); // should log: [5, 10, 15, 88, 1, 7, 100]
*/

const union = arr => {
    const answerArray = [];

    // it took me a while to recognize that i needed nested forEach loops
    arr.forEach(innerArray => {
        // if the inner array doesn't include the current element that means that answer array doesn't have it, so push it
        innerArray.forEach(element => {
            if (!answerArray.includes(element)) answerArray.push(element);
        });
    });
    return answerArray;
}

// const a1 = [5, 10, 15];
// const a2 = [15, 88, 1, 5, 7];
// const a3 = [100];

// console.log(union([a1, a2, a3])); // should log: [5, 10, 15, 88, 1, 7, 100]

/*
Problem 4: Counting Nested Arrays
Count total number of elements in a nested array

console.log(totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]])); // should log: 8
console.log(totalIntegers([1,2,[3],[[4],5], [[[[6],7],8],9], 10])); // should log: 10
console.log(totalIntegers([1,2,[["three"], "four"]])); // should log: 4
*/


// const totalIntegers = arr => {
//     // before i can count, I have to flatten
//     // can't keep holderArr in the scope of the recursion
//     const holderArr = [];

//     const flattener = arrNest => {
//         // ForEach with ternary syntax
//         arrNest.forEach((item) => {
//             Array.isArray(item) ? flattener(item) : holderArr.push(item);
//         });
//         return holderArr;
//     }

//     //     // ForEach Method
//     //     arrNest.forEach((item) => {
//     //         // if the thing i run into is an array, recurse
//     //         if (Array.isArray(item)) {  
//     //             // I want to recurse and pass the found array through the if statement, that's the goal here
//     //             flattener(item);
//     //         }
//     //         else {
//     //             holderArr.push(item);
//     //         }
//     //     });
//     //     return holderArr;
//     // }

//         // For-loop Method
//         //  for (let i = 0; i < arrNest.length; i++) {

//         //     // if the thing i run into is an array, recurse
//         //     if (Array.isArray(arrNest[i])) {                
//         //         // I thought I had to return the recursive call but that is not correct
//         //         // I want to recurse and pass the found array through the if statement, that's the goal here
//         //         flattener(arrNest[i]);
//         //     }
//         //     else {
//         //         holderArr.push(arrNest[i]);
//         //     }
//         // };
//         // return holderArr;
    
//     return flattener(arr).length;
// }
// // Notes
// // Flatten nested arrays
// // Recursion
// // Check if it is an array
// // Concatenation with holderArray

// Cleaned up
// const totalIntegers = arr => {
//     const holderArr = [];

//     const flattener = arrNest => {
//         arrNest.forEach((item) => {
//             Array.isArray(item) ? flattener(item) : holderArr.push(item);
//         });
//         return holderArr;
//     }
//     return flattener(arr).length;
// }

// console.log(totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]])); // should log: 8
// console.log(totalIntegers([1,2,[3],[[4],5], [[[[6],7],8],9], 10])); // should log: 10
// console.log(totalIntegers([1,2,[["three"], "four"]])); // should log: 4

/*
Problem 5:  
Define a function "checkArray" which takes two arguments, an array and a callback function. The callback function will return either true or false depending on the input. "checkArray" will iterate/loop through the array and pass each array element to the callback as an argument. If the callback called on a certain value returns true, the original value (the input to the callback) is pushed to a new array. "checkArray" will return this new array.
*/

// const checkArray = (arr, callbackF) => {
//     const answerArr = [];
    
//     arr.forEach((item) => {
//         // using the shorter true false method rather than if (callbackF(item) === true) what is written is the same
//         if (callbackF(item)) answerArr.push(item);
//     });
//     return answerArr;
// }

// const isOdd = num => num % 2 === 0 ? false : true;
// const arrayOfNumbers = [3,4,6,2,1,10,11];
// console.log(checkArray(arrayOfNumbers, isOdd)); // should log: [3,1,11];

/*
Problem 6: 
Create a function multiplyAll which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array. The returned array should consist of each of the elements from the first array multiplied by the integer.
*/

// const multiplyAll = intArr => {
//     let counter = 0;
//     // this has to be in the closure outside the returned function because i need newArray's data on subsequent runs
//     let newArray;

//     const innerFunction = int => {
//         if (counter < 1) {
//             counter++;
//             newArray = intArr.map(item => {
//                 // I know I can omit return here but not having it was tripping me up so it's staying in
//                 return item * int;
//             });
//             return newArray;
//         } else {
//             // I'll omit return here for demonstration
//             newArray = newArray.map(item => item * int);
//         }
//         return newArray;
//     }
//     return innerFunction;
// }

// const mult1 = multiplyAll([1,2,3]);
// console.log(mult1(2)); // should log: [ 2, 4, 6 ]
// console.log(mult1(2)); // should log: [ 4, 8, 12 ]
// console.log(mult1(2)); // should log: [ 8, 16, 24 ]

/*
Problem 7: 
Find the greatest common divisor of two positive integers. The inputs x and y are always greater or equal to 1, so the the greatest common divisor will always be an integer that is also greater or equal to 1.
*/

const greatestCommonDivisor = (num1, num2) => {
    const answerArr = [];
    // if num2 is greater than num1 I want to start dividing by the smallest given value which would be num1
    if (num1 < num2) {
        for (let m = num1; m > 0; m--) {
            if (num2 % m === 0 && num1 % m === 0) {
                answerArr.push(m);
            }
        }
    }
    // if num1 is greater than num2, I omitted the else as it's unnecessary
    for (let n = num2; n > 0; n--) {
        // before I was just checking to see if the moduluses were equal, and of course there'd be some remainder 1 that's equal but not zero.
        // i wasn't checking for if they were explicitly zero at the same value of n
        if (num2 % n === 0 && num1 % n === 0) {
            answerArr.push(n); 
        }
    }
    // answerArr has more than one value in it but I only want the first pushed value, the greatest divisor
    return answerArr[0];
}

console.log(greatestCommonDivisor(8, 12)); // should log: 4
console.log(greatestCommonDivisor(85, 2)); // should log: 1
console.log(greatestCommonDivisor(99, 66)); // should log: 33