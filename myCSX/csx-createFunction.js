// Create a function createFunction that creates and returns a function. When that newly created function is called, it should return the string 'hello world'.

// const myFunction = createFunction();
//  // Let's call the function we created and log its return value
// console.log(myFunction()); //should log: 'hello world'
// When you think you completed createFunction, un-comment out those lines in the code and run it to see if it works.

// ADD CODE HERE
const createFunction = () =>
{
    const insideFunction = () =>
    {
        return `hello world`;
    }
    return insideFunction;
}

// Uncomment these to check your work!
const myFunction = createFunction();
console.log(myFunction()); //should log: 'hello world'