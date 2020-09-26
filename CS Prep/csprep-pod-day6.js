// POD Day 6: Regular - Reverse Integer
// Given a positive integer, return the number you get when you reverse all the digits. Do this without converting the number to a string!

// Ex: 
// 1234 -> 4321

// const reverseInt = (num) => {
//     const answerArray = [];
//     let answerHolder = 0;

//     do {
//         answerArray.push(Math.floor(num % 10));
//         num /= 10;
//     } while (num > 1);
    
//     for (let i = 0; i < answerArray.length; i++) {
//         answerHolder += answerArray[i] * (Math.pow(10, (answerArray.length - (i + 1)))); 
//     }
//     return answerHolder;
// }

// console.log(reverseInt(221));   // 122
// console.log(reverseInt(1234));   // 4321


// POD Day 6: Advanced - Common Elements 
// Given 2 arrays that may contain both numbers and strings return a new array with the numbers and/or strings that appear in both arrays duplicates are only counted once;

// Ex: 
// var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
// var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
// commonElements(array1, array2) -> [ 12, 'ferret', 'dog']
// if there are no common numbers or strings, return []

// Bonus: Modify commonElements to take in an array of arrays and only return elements that appear in every array

// const commonElements = (arr1, arr2) => {
//     let holdingObject = {};
//     const answerArray = [];

//     arr1.forEach((item) => {
//         if (holdingObject[item] === undefined) {
//             holdingObject[item] = 1;
//         } else {
//         holdingObject[item]++;
//         }
//     });
//     arr2.forEach((item) => {
//         if (holdingObject[item] !== undefined) {
//         // weird way to get the answer but I think I did it?
//         holdingObject[item] = true;
//         }
//     });

//     for (const property in holdingObject) {
//         if (holdingObject[property] === true) answerArray.push(property); 
//     }
//     return answerArray;
// }


// const array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
// const array2 = [15,9,9,'ferret',9,26,12,12,'dog'];
// const arr3 = [1,2,3,4,];
// const arr4 = [`a`, `b`, `c`, `d`,];
// console.log(commonElements(array1, array2)); // [ 12, 'ferret', 'dog']
// console.log(commonElements(arr3, arr4)); // []

// Bonus: Modify commonElements to take in an array of arrays and only return elements that appear in every array

const commonElementsTwo = (arr) => {  
    const answerArray = [];
    const holdingObj = {};
    // this loop only goes through the very first array since if it's in here it has to have a match in every other array
    firstArrayOnlyLoop: for (let i = 0; i < arr[0].length; i++) {
        // this loop goes through every array except the first doing the find() on each array
        navigatingInnerArraysLoop: for (let m = 1; m < arr.length; m++) {
            // undefined means the item from arr.[0] is not a match, so don't do anything
            // if there is a match put it in holdingObj and if yo usee it again in a subsequent array, +1
            if (arr[m].find(element => element === arr[0][i]) !== undefined) {
                if (holdingObj[arr[m].find(element => element === arr[0][i])] === undefined) {
                    holdingObj[arr[m].find(element => element === arr[0][i])] = 1;
                }
                else {
                    holdingObj[arr[m].find(element => element === arr[0][i])]++;
                }
            } 
        }
    }
    for (const property in holdingObj) {
        // since the find array method will also find items that don't appear in every array i only want items that appear in every array
        // if the item appears in every array then it will have a value of arr.length - 1 (not counting the first array)
        // if the item appears multiple times in arr[0] and is found in every subsequent array it will be multipled by the number of times it's in arr[0] so i take the modulus of the property by arr.length - 1 and it filters out the items that don't appear in every array and it catches items that appear multiple times in arr[0]
        // NB: putting the matched items as object property names means they turn into strings
        // so i do a isNaN() check and turn the number strings back into numbers before pushing them to answerArray
        if (holdingObj[property] % (arr.length - 1) === 0) {
            if (isNaN(Number(property))) {
            answerArray.push(property);
            } else {
                answerArray.push(Number(property));
            }
        }
    }
    return answerArray;
}

const arr5 = [
    [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000,], 
    [7,15,9,9,'ferret',9,26,12,12,'dog',], 
    [1,2,3,7,4,'dog',], 
    [`a`, `b`, `c`, `d`, 'dog',7,],
    [7,'dog',]
];

const arr6 = [
    [1,2,3], 
    [`a`, `bat`, `car`,],
];

const arr7 = [
    [1,2,3,'a',], 
    ['a', 1, 9,], 
    [1, 'a',],
];

console.log(commonElementsTwo(arr5)); // [ 7, 'dog' ]
console.log(commonElementsTwo(arr6)); // []
console.log(commonElementsTwo(arr7)); // [ 1, 'a' ]

//// Notes from 
// https://www.youtube.com/watch?v=CXsnNQ51AdQ&list=WL&index=2&t=0s
// let grades = [
//     [12, 13, 32, 43, 42, 23],
//     [12, 43, 21, 12, 43, 12],
//     [43, 12, 43, 12, 45, 12]
// ];

// for (let i = 0; i < grades.length; i++) {
//     for(let k = 0; k < grades[i].length; k++){
//         console.log(grades[i][k]);
//     }
//     // after each K loop set a flag to true or false if that K contained something that matches
//     console.log('~~~~~~~~~~~~~~~')
// }

// grades.forEach((row) => {
//     row.forEach((col) => {
//         console.log(col);
//     });
//     // after each inner forEach set a flag to true or false if that K contained something that matches
//     console.log('~~~~~~~~~~~~~~')
// });