// Create a function countBy that accepts an array and a callback, and returns an object. countBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. The value associated with each key will be the number of times that particular return value was returned.

// ADD CODE HERE
const countBy = (array, callback) =>
{
    const obj1 = {};

    array.forEach((item) => 
    {
        if (obj1[callback(item)] === undefined)
        {
            obj1[callback(item)] = 1;
        } else
        {
            obj1[callback(item)]++;
        }
    });
    return obj1;
}

// Uncomment these to check your work!
function evenOdd(n) {
  if (n % 2 === 0) return 'even';
  else return 'odd';
}
const nums = [1, 2, 3, 4, 5];
console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }