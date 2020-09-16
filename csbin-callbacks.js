// Challenge 1
function addTwo(num) {
	return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));


// Challenge 2
function addS(word) {
	return word.concat('s');
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
    // set an empty array to hold the new values
      const newArr = [];
    // iterate through the given array and get the value of the item in the array after its passed to the callback function
    for (let I = 0; I < array.length; I++) {
      newArr.push(callback(array[I]));
    }
    // after the iteration finishes going through the whole given array, return the new filled array
    return newArr;
  }
  
  // console.log(map([1, 2, 3], addTwo));
  
  

// Challenge 4
function forEach(array, callback) {
	for (let j = 0; j < array.length; j++) {
    callback(array[j]);
  }
}

let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];
forEach(letters, function(char) {
  alphabet += char;
});
// console.log(alphabet);  // 'abcd'

// see for yourself if your forEach works!


// Challenge 5
function mapWith(array, callback) {
	// set an empty array to hold nwe mutated values
  const newArr = [];
  // iterate through the given array with forEach
  array.forEach((item) => {
    // pass each array item to the cb
    // push the return value of the cb to newArr
    	newArr.push(callback(item));
  });
//   console.log(newArr)
  return newArr;
}

// console.log(mapWith([1, 2, 3], addTwo));


// Challenge 6
function myReduce(array, callback, initialValue) {
    // set my accumulator to given initial value
    let acc = initialValue;
    // get the current value by iterating with a for loop
      for (let I = 0; I < array.length; I ++) {
      acc += array[I];
    }
    return acc;
  }
  
const nums = [4, 1, 3];
const add = function(a, b) { return a + b; }
// console.log(myReduce(nums, add, 0));   //-> 8


// Challenge 7
function intersection(...arrays) {
    // put all the arrays into one big flattened array with reduce
      const oneArr = arrays.reduce((acc, cv) => {
      return acc.concat(cv)
    }, []);
    // console.log(oneArr)
    // now ennumerate every value and freq in an obj
      const trackObj = {};
    oneArr.forEach((item) => {
        // console.log(item)
      if (!trackObj[item]) trackObj[item] = 1;
      else {
          trackObj[item]++;
      }
        });
      // now iterate thru the obj to see which values are at 3 and return an array with only those properties
    //   console.log(trackObj)
    const answerArr = [];
    for (const property in trackObj) {
      if (trackObj[property] === 3) answerArr.push(Number(property));
    }
    return answerArr;
}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]



// Challenge 8
function union(...arrays) {
	// first combine all the arrays into one array. this preserves the left to right order
  const oneArr = arrays.reduce((acc, cv) => {
    return acc.concat(cv);
  }, []);
  // then start pushing the indidivudal values into a new array
  const newArr = [];
  for (let I = 0; I < oneArr.length; I++) {
    // but do a check to see if the value about to be pushed is already in there, if its in there dont push
    if (!newArr.includes(oneArr[I])) newArr.push(oneArr[I]);
  }
  return newArr;
}
  
//   console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
  // should log: [5, 10, 15, 88, 1, 7, 100]



// Challenge 9
function objOfMatches(array1, array2, callback) {
	// make an empty object to be filled
  const myObj = {};
  // iterate thru the first array1 using the callback uppercase function
  for (let j = 0; j < array1.length; j++) {
    // take the uppercase return value and see if at the same index as array1 if in array2 the exact same output is in the exact same spot
    // if it matches exactly the item from array1 is the property name in the obj and the matching pair from array2 is the value pair
    if (callback(array1[j]) === array2[j]) myObj[array1[j]] = array2[j];
  }
  // return the filled obj
  return myObj;
}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }


// Challenge 10
function multiMap(arrVals, arrCallbacks) {
	// make an empty object to be filled
  const myObj2 = {};
  // make all the keys in the obj the values in arrVals
  // iterate through arrVals with a loop
  for (let j = 0; j < arrCallbacks.length; j++) {
      myObj2[arrVals[j]] = [];
  }
      // make all the matching value-pairs for the keys arrays which are filled with outputs from the array of callback functions who are given the property label as input
      for (let k = 0; k < arrVals.length; k++) {
        for (let m = 0; m < arrCallbacks.length; m++) {
          myObj2[arrVals[k]].push(arrCallbacks[m](arrVals[k]));
            }
          }
  
  // return the filled obj
  return myObj2;
}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


// Challenge 11
function objectFilter(obj, callback) {
	// create an empty object to be filled and returned
  const myObj3 = {};
  // only put into my Obj the key value pairs that match up after the key is put into the callback and is returned
  // iterate through the given obj arg
  for (const property in obj) {
    if (callback(property) === obj[property]) myObj3[property] = callback(property);
  }
  // return the filled obj
  return myObj3;
}

const cities = {
London: 'LONDON',
LA: 'Los Angeles',
Paris: 'PARIS',
};
// console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}

// Challenge 12
function majority(array, callback) {
    // need a way to track how many trues there are
    let numTrue = 0;
      // iterate thru the array and pass each item to the callback function
    for (let j = 0; j < array.length; j++) {
      if (callback(array[j])) numTrue++;
    }
    
    // if the majority of callback returns are true, return true
    // if an equal number or more are false return false
    if (numTrue > Math.floor(array.length / 2)) return true;
    if (numTrue <= Math.floor(array.length / 2)) return false;
  }
  
  // /*** Uncomment these to check your work! ***/
  const isOdd1 = function(num) { return num % 2 === 1; };
  console.log(majority([1, 2, 3, 4, 5], isOdd1)); // should log: true
  console.log(majority([2, 3, 4, 5], isOdd1)); // should log: false
  


// Challenge 13
function prioritize(array, callback) {
	// make a new array
  const newArr1 = [];
  // iterate thru argument array and perform cb on each item
  for (let j = 0; j < array.length; j++) {
    // put elements that are true first, false afterwards
    if (callback(array[j])) newArr1.push((array[j]));
  }
  
  for (let j = 0; j < array.length; j++) {
    // put elements that are true first, false afterwards
    if (!callback(array[j])) newArr1.push((array[j]));
  }
  // return new sorted array by true or false
  return newArr1;
}

// /*** Uncomment these to check your work! ***/
// const startsWithS = function(str) { return str[0] === 's' || str[0] === 'S'; };
// console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS)); // should log:
// // ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']


// Challenge 14
function countBy(array, callback) {
	// make an empty obj
  const myObj4 = {};
  // iterate thru array argument and perform cb on each item
  for (let j = 0; j < array.length; j++) {
    // the return value of each item is the property of the new obj
    if (!myObj4[callback(array[j])]) myObj4[callback(array[j])] = 1;
  	// the value of each property is the number of times this particular value was returned
    else {
      myObj4[callback(array[j])]++;
    }
  }
  // returns an obj
	return myObj4;
}

// /*** Uncomment these to check your work! ***/
// console.log(countBy([1, 2, 3, 4, 5], function(num) {
// if (num % 2 === 0) return 'even';
// else return 'odd';
// })); // should log: { odd: 3, even: 2 }


// Challenge 15
function groupBy(array, callback) {
	// make an empty obj
  const myObj4 = {};
  // iterate thru array arg anf perform cb on each item
  for (let j = 0; j < array.length; j++) {
  // key for obj is the return val of callback
  	myObj4[callback(array[j])] = [];
  // val for key is an array of all the elements that resulted in the same return value from cb
  }
  
  for (let k = 0; k < array.length; k++) {
    if (myObj4[callback(array[k])]) myObj4[callback(array[k])].push(array[k]);
  }
  // return the filled obj
  return myObj4;
}

// /*** Uncomment these to check your work! ***/
// const decimals = [1.3, 2.1, 2.4];
// const floored = function(num) { return Math.floor(num); };
// console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }


// function goodKeys(obj, callback) {
//   // declare an empty array
//   const newArr1 = [];
// 	// iterate through the obj given and perform the callbck on each value in the obj
//   for (const property in obj) {
//      // fill an array only with keys whose vals yielded true
//     if (callback(obj[property])) newArr1.push(property);
//   }
//   // return the filled array with keys
//   return newArr1;
// }

// // /*** Uncomment these to check your work! ***/
// const sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
// const startsWithBird = function(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
// console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']



// Challenge 17
function commutative(func1, func2, value) {
	// first do func1 return value into func2 and store that 2 return val somewhere
  let answer1 = func2(func1(value));
  // console.log(answer1, `answer1`);
  // then do func2 into func1 and store that return val somewhere
  let answer2 = func1(func2(value));
  // console.log(answer2, `answer2`);
  // compare the two outputs
  // return true if the outputs are the same
  return answer1 === answer2 ? true : false;
}

// /*** Uncomment these to check your work! ***/
// const multBy3 = n => n * 3;
// const divBy4 = n => n / 4;
// const subtract5 = n => n - 5;
// console.log(commutative(multBy3, divBy4, 11)); // should log: true
// console.log(commutative(multBy3, subtract5, 10)); // should log: false
// console.log(commutative(divBy4, subtract5, 48)); // should log: false

// Challenge 18
// make a function named objFilter that takes an obj and cb as args
const objFilter = (obj, cb) => {
  // declare a new empty obj
  const myObj1 = {};
  // iterate through the arg obj
  // use each property name as input for cb
  for (const property in obj) {
    // if output from cb is equal to the corresponding val in the arg obj, then the whole propety-val pair is put into my empty obj
    if (cb(Number(property)) === startingObj[property]) myObj1[property] = cb(Number(property));
  }
  // return my obj thats filled
  return myObj1;
}

// /*** Uncomment these to check your work! ***/
const startingObj = {};
startingObj[6] = 3;
startingObj[2] = 1;
startingObj[12] = 4;
const half = n => n / 2;
console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }


// Challenge 19
function rating(arrOfFuncs, value) {

}

// /*** Uncomment these to check your work! ***/
// const isEven = n => n % 2 === 0;
// const greaterThanFour = n => n > 4;
// const isSquare = n => Math.sqrt(n) % 1 === 0;
// const hasSix = n => n.toString().includes('6');
// const checks = [isEven, greaterThanFour, isSquare, hasSix];
// console.log(rating(checks, 64)); // should log: 100
// console.log(rating(checks, 66)); // should log: 75


// Challenge 20
function pipe(arrOfFuncs, value) {

}

// /*** Uncomment these to check your work! ***/
// const capitalize = str => str.toUpperCase();
// const addLowerCase = str => str + str.toLowerCase();
// const repeat = str => str + str;
// const capAddlowRepeat = [capitalize, addLowerCase, repeat];
// console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'


// Challenge 21
function highestFunc(objOfFuncs, subject) {

}

// /*** Uncomment these to check your work! ***/
// const groupOfFuncs = {};
// groupOfFuncs.double = n => n * 2;
// groupOfFuncs.addTen = n => n + 10;
// groupOfFuncs.inverse = n => n * -1;
// console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
// console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
// console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'


// Challenge 22
function combineOperations(startVal, arrOfFuncs) {

}

function add100(num) {
  return num + 100;
}

function divByFive(num) {
  return num / 5;
}

function multiplyByThree(num) {
  return num * 3;
}

// /*** Uncomment these to check your work! ***/
// console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60 -->
// console.log(combineOperations(0, [divByFive, multiplyFive, addTen])); // Should output 10


// Challenge 23
function myFunc(array, callback) {

}

const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

function isOdd2(num) {
  return (num % 2 !== 0);
}

// /*** Uncomment these to check your work! ***/
// console.log(myFunc(numbers, isOdd)); // Output should be 1
// console.log(myFunc(evens, isOdd)); // Output should be -1


// Challenge 24
function myForEach(array, callback) {

}

let sum = 0;

function addToSum(num) {
  sum += num;
}

// /*** Uncomment these to check your work! ***/
// const nums = [1, 2, 3];
// myForEach(nums, addToSum);
// console.log(sum); // Should output 6