/* eslint-disable no-console */
/* eslint-disable max-len */
// setTimeout
// https://csx.codesmith.io/units/async/challenge-set-timeout
// Write code that will log to the console, 'I am at the beginning of the code'.
// console.log('I am at the beginning of the code');
// Beneath that console log, set a timer (see setTimeout) that will log to the console 'I am in the setTimeout callback function' after 600 ms.
// const str1 = () => {
//   console.log('I am in the setTimeout callback function');
// };
// setTimeout(str1, 600);
// setTimeout(str1, 0);

// Next, add code to the end of the challenge to log 'I am at the end of the code'. Now re-run the code.
// console.log('I am at the end of the code');
// Make sure the 'console' and 'output' panes are showing (click the tabs above if not) and then run your code with the 'run' button.

// Clear the console. Change the delay time in the time from 600 ms to 0. Think hard about how the order should change and then run the code again.

/// //////////////////////////////////////////////////////////////////////
// forEach
// https://csx.codesmith.io/units/async/challenge-for-each-async
// Recreate the built in array method, forEach - Write a function that takes as parameters an array, arr, and a callback function, cb. The forEach function will iterate through arr passing each element and its index as arguments to cb.
const forEach = (arr, cb) => {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    cb(arr[i], i);
  }
};
// Create a variable named delays and assign to it an array with the numbers 200, 500, 0, and 350 (in that order).
let delays = [200, 500, 0, 350];
// Write a function, delayLog, that takes as input a delayTime and an index, i. When invoked, the function should wait delayTime milliseconds before logging to the console, "printing element i" (with "i" replaced with the actual index passed in).
const delayLog = (delayTime, i) => {
  const printer = () => {
    console.log(`printing element ${i}`);
  };
  setTimeout(printer, delayTime);
}
// Putting it all together, run the delayLog function on each item of the delays array using the forEach function you created.
// forEach(delays, delayLog);

/// //////////////////////////////////////////////////////////////////////
// ajaxSimulate
// https://csx.codesmith.io/units/async/challenge-ajax-simulate
// In this challenge we are going to simulate an AJAX call to get information from a server. This is not a real AJAX call, but the asynchonicity is similar.
let dataReceived;

function ajaxSimulate(id, callback) {
  const database = ['Aaron', 'Barbara', 'Chris'];
  for (let i = 0, len = database.length; i < len; i += 1) {
    // The function ajaxSimulate takes an id and a callback function as input. Modify the function so that after the database array, it will set a timer that will pass the element of database whose index matches id to the callback function after 0 ms.
    if (i === id) {
      setTimeout(callback, 0, database[i]);
    }
  }
}

// Create a second function storeData (outside of ajaxSimulate) that takes data as input and assigns it to the dataReceived variable already defined.
const storeData = (data) => {
  dataReceived = data;
  console.log(dataReceived);
  return dataReceived;
};

// Invoke the ajaxSimulate function with an id of 1 and the storeData function as the callback. Immediately after, log to the console the value of dataReceived. What do you expect it to be?
ajaxSimulate(1, storeData);
console.log(dataReceived);

// Without changing anything else, copy-paste the console.log statement somewhere where it will log with the info we need.
/// //////////////////////////////////////////////////////////////////////
