// Create a function majority that accepts an array and a callback. The callback will return either true or false. majority will iterate through the array and perform the callback on each element until it can be determined if the majority of the return values from the callback are true. If the number of true returns is equal to the number of false returns, majority should return false.

// ADD CODE HERE
const majority = (array, callback) =>
{
    let trueCount = 0;
    let falseCount = 0;

    array.forEach((item) => 
    {
        if (callback(item) === true) 
        {
            trueCount++;
        } 
        else
        {
            falseCount++;
        }
    });
    
    if (trueCount === falseCount)
    {
        return false;
    }
    else 
    {
        return true;
    }

}

// Uncomment these to check your work!
const isOdd = function(num) { return num % 2 === 1; };
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false