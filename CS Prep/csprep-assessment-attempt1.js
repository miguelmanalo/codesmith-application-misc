/*
CS Prep Assessment

Challenge 1: Select
Define a function select which takes two arguments, an array and a callback function. The callback function can be considered a test in that it will return either true or false depending on the input. select will iterate/loop through the array and pass each array element to the callback as an argument.

If the callback called on a certain value returns true, the original value (the input to the callback) is pushed to a new array. select will return this new array.
*/

const select = (arr1, cb) => {
    const answerArr = [];
    arr1.forEach(item => {
        if (cb(item) === true) answerArr.push(item);
    });
    return answerArr;
}

// const test1 = num => num > 0;

// console.log(select([1,2,3,0,-10,4,5,6,-1,-2], test1));

// UNCOMMENT THESE LINES TO CHECK YOUR WORK
// const arr = [1, 2, 3, 4, 5];
// const isEven = n => n % 2 === 0;
// console.log(select(arr, isEven)); // should log: [2, 4]

/*
Challenge 2: Russian Roulette
Define a function russianRoulette that accepts a number (let us call it n), and returns a function. The returned function will take no arguments, and will return the string ‘click’ the first n - 1 number of times it is invoked. On the very next invocation (the nth invocation), the returned function will return the string ‘bang’. On every invocation after that, the returned function returns the string ‘reload to play again’.
*/

const russianRoulette = n => {
    let countInvoke = 0;

    const innerFunc = () => {
        countInvoke++;
        if (countInvoke < n) return `click`;
        if (countInvoke === n) return `bang`;
        return "reload to play again";
    }
    return innerFunc;
}

// UNCOMMENT THESE LINES TO CHECK YOUR WORK
// const play = russianRoulette(3);
// console.log(play()); // should log: ‘click’
// console.log(play()); // should log: ‘click’
// console.log(play()); // should log: ‘bang’
// console.log(play()); // should log: ‘reload to play again’
// console.log(play()); // should log: ‘reload to play again’


/*
Challenge 3: Golden Sequence
Define a function goldenSequence that takes a number n and returns n's corresponding Fibonacci number.

Fibonacci sequence: 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
 - Each number is found by adding the previous two
 - The first two values, index 0 and index 1, of the sequence shall be 1 and 1

More Info: https://en.wikipedia.org/wiki/Fibonacci_number
*/

const goldenSequence = num => {
    if (num < 0) return `it's negative`
    if (num === 0) return 0;
    if (num === 1) return 1;
    return goldenSequence(num - 1) + goldenSequence(num - 2);
}


// UNCOMMENT THESE LINES TO CHECK YOUR WORK
console.log(goldenSequence(0)); // should log: 0
console.log(goldenSequence(1)); // should log: 1
console.log(goldenSequence(2)); // should log: 1
console.log(goldenSequence(3)); // should log: 2
console.log(goldenSequence(4)); // should log: 3
console.log(goldenSequence(5)); // should log: 5
console.log(goldenSequence(12)); // should log: 144
console.log(goldenSequence(-5)); // should log: `it's negative`