// Construct a function union that takes an input array of arrays, compares each array, and returns a new flat array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array. BONUS - Use reduce!

// NB: i was dancing around the two loops solution for an hour but found what I needed here: https://stackoverflow.com/questions/3629817/getting-a-union-of-two-arrays-in-javascript
// I didn't know you can labal loops and return to them at your command! That's new.

const union = (array) => {
    const answer = [];
    const flatArray = array.reduce(
        (acc, currVal) => acc.concat(currVal), 
        []);

    flatLoop: for (let i = 0; i < flatArray.length; i++) 
    {
        for (let j = 0; j < answer.length; j++)
        {
            if (answer[j] === flatArray[i]) 
              continue flatLoop;
        }
        answer[answer.length] = flatArray[i];       
    }
    return answer;
}

// Uncomment these to check your work!
const arr1 = [5, 10, 15];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]