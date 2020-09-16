// Create a function groupBy that accepts an array and a callback, and returns an object. groupBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. The value associated with each key will be an array consisting of all the elements that resulted in that return value when passed into the callback.

// ADD CODE HERE
const groupBy = (array, callback) =>
{
    const obj1 = {};
    array.forEach((item) => 
    {
        obj1[callback(item)] = [];
    });

    for (const property in obj1) 
    {
        for (let i = 0; i < array.length; i++)
        {
            if (callback(array[i]) == property) 
            {
                obj1[property].push(array[i]);
            }
        }
    }
    return obj1;
}

// Uncomment these to check your work!
const decimals = [1.3, 2.1, 2.4];
const floored = function(num) { return Math.floor(num); };
const numbers = [1, 2, 3, 4, 5,];
const oddEven = (num => 
    { 
        if (num % 2 === 0) 
        {
            return `even`;
        } else
        {
            return `odd`;
        }
    })
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }
console.log(groupBy(numbers, oddEven))