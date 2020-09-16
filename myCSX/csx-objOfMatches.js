// Construct a function objOfMatches that accepts two arrays and a callback. objOfMatches will build an object and return it. To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.

// ADD CODE HERE
const objOfMatches = (array1, array2, callback) => 
{
    const obj1 = {};
    let upperArray1 = [];
    upperArray1 = array1.map(item => uppercaser(item));
    console.log(upperArray1);
    array1loop: for (let i = 0; i < upperArray1.length; i++) 
    {
        for (let j = 0; j < array2.length; j++)
        {
            if (upperArray1[i] === array2[j])
            obj1[array1[i]] = array2[j]
        }
    }
    return obj1;
}

// Uncomment these to check your work!
const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
function uppercaser(str) { return str.toUpperCase(); }
console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }