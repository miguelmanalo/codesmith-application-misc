// JavaScript resources:
// Python tutor
// headfirst javascript
// frontend masters

// stuff i dont know
// module patterns

let num = 3;
function multiplyBy2 (inputNumber){ 
    const result = inputNumber * 2;
    return result;
}


const output = multiplyBy2(num);
const newOutput = multiplyBy2(10);
console.log(output);
console.log(newOutput);

const newLabelForMultiplyBy2 = multiplyBy2;
const freshOutput = newLabelForMultiplyBy2(10);
console.log(newLabelForMultiplyBy2);
console.log(freshOutput);


function createFunction() {
    function multiplyBy2 (num) {
        return num * 2;
    }
    return multiplyBy2;
}

const generatedFunc = createFunction();
const result = generatedFunc(3); // 6
console.log(result);

function outer () {
    let counter = 0;
    function incrementCounter () {
        counter++;
        console.log(counter)
    }
    return incrementCounter;
}

const myNewFunction = outer();
console.log(myNewFunction());
console.log(myNewFunction());
const myFuncTwo = outer();
console.log(myFuncTwo());

// build functions like once and memoize
// helpful with fibbonacci
// store the value for 200 again, only have to run it once