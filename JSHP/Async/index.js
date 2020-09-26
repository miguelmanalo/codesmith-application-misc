// const num = 3;
// function multiplyBy2(inputNumber) {
//   const result = inputNumber * 2;
//   return result;
// }
// const output = multiplyBy2(num);
// const newOutput = multiplyBy2(10);
// console.log(output);
// console.log(newOutput);

// const tweets = getTweets("http://twitter.com/will/1")
// 350ms wait while a request is sent to Twitter HQ
// displayTweets(tweets)
// more code to run
// console.log('I want to runnnn!');

// function printHello() {
//   console.log('Hello');
// }
// setTimeout(printHello, 1000);
// // printHello();
// console.log('Me first!');

// function printHello(){
//   console.log("Hello");
// }
//   setTimeout(printHello,1000);
//   console.log("Me first!");

// function printHello(){
//   console.log("Hello");
// }

// function blockFor1Sec( ){
// //blocks in the JavaScript thread for 1 second
// }

// setTimeout(printHello,0);

// blockFor1Sec()

// console.log("Me first!");

function display(data){
console.log(data)
}

const futureData = fetch('https://twitter.com/will/tweets/1');
futureData.then(display);
// Attaches display functionality to promise object
console.log("Me first!");