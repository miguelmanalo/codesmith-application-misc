// POD Day 4: Regular - LargestAndSmallest
// The function largestAndSmallest should take one parameter, an array, and return a new array containing the largest and smallest elements from the original array.

const largestAndSmallest = (arr) => {
    const answerArray = [];
    arr.forEach((item) => {
        if (answerArray[0] === undefined) answerArray[0] = item;
        if (answerArray[1] === undefined) answerArray[1] = item;
        if (answerArray[0] > item) answerArray[0] = item;
        if (answerArray[1] < item) answerArray[1] = item;
    });
    return answerArray;
}

// console.log(largestAndSmallest([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5] --> [1, 5]
// console.log(largestAndSmallest([90, 30, 44, 66, 10])); // [90, 30, 44, 66, 10] --> [10, 90]
// console.log(largestAndSmallest([16, -70, 122])); // [16, -70, 122] --> [-70, 122]

// POD Day 4: Advanced - Reverse Number
// The function reverseNumber should take one parameter, a number, it should reverse the number and return it.

const reverseNumber = (num) => {
    //deal with negative numbers so I can manipulate them as strings
    let polarity = true;
    if (num < 0) polarity = false;
    if (polarity === false) num *= -1

    let reverseStr = '';
    let numStr = num.toString();
    for (let i = numStr.length - 1; i >= 0; i--) {
        reverseStr += numStr[i];
    }
    
    //add back in the negative sign and turn it back into a number
    return (polarity === false ? Number(reverseStr) * -1 : Number(reverseStr));
}

console.log(reverseNumber(-87)); // -87 --> -78
console.log(reverseNumber(923)); // 923 --> 329
console.log(reverseNumber(100)); // 100 --> 1