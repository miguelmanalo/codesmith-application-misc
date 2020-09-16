// The function reduce takes an array and reduces the elements to a single value.

// The reduce function loops through the array and applies any operation that you can put into a function to each element in the array while keeping track of the outcome of each loop. In this way, we could use reduce to do things like sum all the numbers in an array or multiply them all together.

// const nums = [4, 1, 3];
// const add = function(a, b) { return a + b; }
// reduce(nums, add, 0); //-> 8
// Here's how it works:

// The function has an "accumulator value". Its job is to keep track of the accumulated output of each loop. It starts out equal to the initialValue.
// The array is iterated over, passing the accumulator and the next array element as arguments to the callback.
// The callback's return value becomes the new accumulator value.
// The next loop executes with this new accumulator value.
// In the example above, the accumulator begins at 0. add(0,4) is called. The accumulator's value is now 4. Then add(4, 1) makes it 5. Finally add(5, 3) brings it to 8, which is returned.

// Construct your own reduce function that accepts an array, a callback, and an initial value and returns a single value.

// ADD CODE HERE
//Step 1: make my own function called reduceM
//Step 2: this function accepts an array, a cb, and initialValM
//Step 3: it returns a single value

const reduce = (array, cb, initialValM) => {
    let runningValue = initialValM;
    for (let i = 0; i < array.length; i++) {
        runningValue = cb(runningValue, array[i]);
    }
    return runningValue;
}
  
  // Uncomment these to check your work!
  const nums = [4, 1, 3];
  const add = function(a, b) { return a + b; }
  console.log(reduce(nums, add, 0)); // should log 8