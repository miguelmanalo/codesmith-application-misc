// let counter = 0;

// function recurse () {
// if (counter === 2) return 'done';
//     counter++;
//     console.log(counter)
//     return recurse()
// }

// console.log(recurse());

// function pow(x, n) {
//     let result = 1;
  
//     // multiply result by x n times in the loop
//     for (let i = 0; i < n; i++) {
//       result *= x;
//     }
  
//     return result;
//   }
  
//   console.log( pow(2, 3) ); // 8

// function pow(x, n) {
//     if (n == 1) {
//       return x;
//     } else {
//       return x * pow(x, n - 1);
//     }
//   }
  
//   console.log( pow(2, 3) ); // 8


// https://javascript.info/recursion#tasks
//   const sumTo1 = (n) => {
//     let answer = 0;
//     for (let i = 0; i <= n; i++) {
//         answer += i;
//     }
//     return answer;
//   }

//   console.log(sumTo1(100000));

//   const sumTo2 = (n) => {
//     if (n === 0) return n;
//     else {
//         return n + sumTo2(n -1);
//     }
//   }

//   console.log(sumTo2(100));

// const sumTo3 = (n) => {
//     return (n * (((n - n) + 1) + n)) / 2;
// }

// console.log(sumTo3(100000));

// const calcFactorial = (n) => {
//     if (n === 1) return n;
//     else {
//         return n * calcFactorial(n - 1);
//     }
// }

// console.log(calcFactorial(5));

// const fib = (n) => {
//     if (n <= 1) {
//         console.log(n);
//         return n;
//     }
//     else {
//         return fib(n - 1) + fib(n - 2);
//     }
// }

// console.log(fib(3)); // 2
// console.log(fib(7)); // 13
// console.log(fib(77)); // 5527939700884757

let answer = 0;

const fib2 = (n) => {
    for (let i = 1; i <= n; i++) {
        answer += ((n - i) + (n - (i - 1)));
    }
    return answer;
}

console.log(fib2(3)); // 2
console.log(fib2(7)); // 13
console.log(fib2(77)); // 5527939700884757