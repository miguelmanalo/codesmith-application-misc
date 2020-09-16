/*
Problem 1: Running Average
Create a function runningAverage() that returns a callable function object. Update the series with each given value and calculate the current average.

rAvg = runningAverage();
console.log(rAvg(10)); // should log: 10.0;
console.log(rAvg(11)); // should log: 10.5;
console.log(rAvg(12)); // should log: 11;
*/

/* 
Problem 2: Intersection
Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. 

const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]
*/


/* 
Problem 3: Union
Construct a function union that takes an input array of arrays, compares each array, and returns a new flat array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array.

const a1 = [5, 10, 15];
const a2 = [15, 88, 1, 5, 7];
const a3 = [100];

console.log(union([a1, a2, a3])); // should log: [5, 10, 15, 88, 1, 7, 100]
*/

/*
Problem 4: Counting Nested Arrays
Count total number of elements in a nested array

console.log(totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]])); // should log: 8
console.log(totalIntegers([1,2,[3],[[4],5], [[[[6],7],8],9], 10])); // should log: 10
console.log(totalIntegers([1,2,[["three"], "four"]])); // should log: 4
*/

/*
Problem 5:  
Define a function "checkArray" which takes two arguments, an array and a callback function. The callback function will return either true or false depending on the input. "checkArray" will iterate/loop through the array and pass each array element to the callback as an argument. If the callback called on a certain value returns true, the original value (the input to the callback) is pushed to a new array. "checkArray" will return this new array.

const isOdd = (num) => num % 2 === 0 ? false : true;
const arrayOfNumbers = [3,4,6,2,1,10,11];
console.log(checkArray(arrayOfNumbers, isOdd)); // should log: [3,1,11];
*/

/*
Problem 6: 
Create a function multiplyAll which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array. The returned array should consist of each of the elements from the first array multiplied by the integer.

const mult1 = multiplyAll([1,2,3]);
console.log(mult1(2)); // should log: [2, 4, 6];
console.log(mult1(2)); // should log: [4, 8, 12];
*/

/*
Problem 7: 
Find the greatest common divisor of two positive integers. The inputs x and y are always greater or equal to 1, so the the greatest common divisor will always be an integer that is also greater or equal to 1.
  
console.log(greatestCommonDivisor(8, 12)); // should log: 4
*/