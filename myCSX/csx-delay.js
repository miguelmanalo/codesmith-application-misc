// Write a function delay that accepts two arguments, a callback and the wait time in milliseconds. Delay should return a function that, when invoked waits for the specified amount of time before executing. 
// HINT - research setTimeout();

// ADD CODE HERE
const delay = (callback, time) =>
{
    const innerFunction = () =>
    {
        // when invoked waits for the specified amount of time before executing. 
        // HINT - research setTimeout();
        setTimeout(callback, time);
    }
    return innerFunction;
}

// UNCOMMENT THE CODE BELOW TO TEST DELAY
let count = 0;
const delayedFunc = delay(() => count++, 1000);
delayedFunc();
console.log(count); // should print '0'
setTimeout(() => console.log(count), 1000); // should print '1' after 1 second

//Notes
// https://javascript.info/settimeout-setinterval
// For instance, this code calls sayHi() after one second:
// function sayHi() {
//   alert('Hello');
// }

// console.log(setTimeout(sayHi, 1000));

// With arguments:
// function sayHi(phrase, who) {
//   alert( phrase + ', ' + who );
// }

// setTimeout(sayHi, 1000, "Hello", "John"); 