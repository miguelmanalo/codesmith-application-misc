// POD Day 2: Regular - Reverse String 
// Create a function reverseString that accepts a string as a parameter and returns the reverse of that string.

// For example: 
// reverseString("I love testing") // should return "gnitset evol I"
const reverseString = str => {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

console.log(reverseString("I love testing"));

// POD Day 2: Advanced - Draw Stairs
// Write a function that console logs a staircase of any given height where 1 <= N <= 100. The staircase must climb up from left to right. The last line should only consist of asterisks, without any leading/trailing spaces.  

// For example:   
// drawStairs(5) -> 
//     *
//    **
//   ***
//  ****
// *****

const drawStairs = num => {
    for (let i = 1; i <= num; i++) {
        console.log(' '.repeat(num - i), '*'.repeat(i));
    }
}

console.log(drawStairs(5));
// drawStairs(5) -> 
//     *
//    **
//   ***
//  ****
// *****