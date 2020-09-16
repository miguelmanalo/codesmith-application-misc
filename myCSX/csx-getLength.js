// getLength
// Get the length of an array using recursion without accessing its length property.

// Input: {Array} array - array whose length is sought
// Output: {Number}

//Initial Write
// const getLength = (array, i = 0) => {
//     //can't access the length property
//     //base case
//     if (array[i] === undefined) {
//         return i;
//     }
//     //recursive case
//     return getLength(array, i + 1); //call it again except modified in some way
// }

//Refactored to use ternary if statement
const getLength = (array, i = 0) => 
    //base case where we exit the function if we reach an undefined position in the array
    (array[i] === undefined ?
    //if our base case is true, return i which will be the index that was last defined
    i :
    //if our base case is false, increment i and we continue thru the array
    getLength(array, i + 1));

// To check if you've completed the challenge, uncomment these console.logs!
console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0
console.log(getLength([1, 2, 3, 4, 5, 1,1,1,1,1,1,1,1,1,1,1,1,])); // -> 17