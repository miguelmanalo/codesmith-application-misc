// Create a function cycleIterator that accepts an array, and returns a function. The returned function will accept zero arguments. When first invoked, the returned function will return the first element of the array. When invoked a second time, the returned function will return the second element of the array, and so forth. After returning the last element of the array, the next invocation will return the first element of the array again, and continue on with the second after that, and so forth.

const cycleIterator = (array1) =>
{
    let counter = 0;
    const innerFunction = () =>
    {
        for (let i = 0; i <= array1.length; i++)
        {
            if (i === counter && i < array1.length)
            {
                counter++;
                return array1[i];
            }
            else if (i >= array1.length)
            {
                i = 0;
                counter = 0;
                return innerFunction();
            }
        }
    }
    return innerFunction;
}

// Uncomment these to check your work!
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
console.log(getDay()); // should log: 'Fri'