
// Challenge 1
function countdown(n) {
	// go from given number n down to 1
  // base case
  if (n === 1) return n;
  // recursive case
  console.log(n);
  return countdown(n-1);
}

// console.log(countdown(3));



// Challenge 2
function sum(array) {
	
  return array.length === 0 ? 0 : array[0] + sum(array.slice(1));
}

// uncomment these to check your work
// console.log(sum([1,2,3,]));	// 6
// console.log(sum([3,3,3,]));	// 9


// Challenge 3
// function palindrome(string) {
// 	// make everything lowercase
//   const lowerCaseStr = string.toLowerCase();
//   // figure out how to strip out the non-letters
//   let noPunct = lowerCaseStr.match(/\w/g)
//   // console.log(noPunct)
//   let newStr = noPunct.join('');
//   // console.log(newStr)

//   // false case
//   if (newStr[0] !== newStr[newStr.length - 1]) {
//       return false; 
//   }

//   // base case
//   if ((newStr.length === 2 && (newStr[0] === newStr[newStr.length - 1])) || newStr.length === 1) {
//       return true;
//   }

//   // recursive case
//   if (newStr.length > 2) {
//     return palindrome(newStr.slice(1, newStr.length - 1));
//   }
  
// }

// console.log(palindrome("ab.ccba")); 	// true
// console.log(palindrome("false"));	// false
// console.log(palindrome('BBC.#$^B'))


// Challenge 4
// function isPrime(num, i = 2) {
//     // if any division equals zero other than 1 and the given, return false
//     // fail case
//     if (i < num && num % i === 0) {
//         console.log(num, i)
//         return false
//     }

//   // base case
//   if (i === num) {
//     console.log(num, i)
//     return true;
//   }
//   // recursive case
//   if (i < num) {
//   return isPrime(num, i + 1);
//   }
// }

// console.log(isPrime(4));	// false
// console.log(isPrime(17));	// true
// console.log(isPrime(21));	// true


//Challenge 5
function pathFinder(obj, arr) {
    // base case
    // if the value in the object is a string return it
    if (typeof obj[arr[0]] === 'string') {
      return obj[arr[0]];
    }
    
    // recursive case
    // iterate through the array recursively with slice 
    // change the object definition to be one layer in the right thread
    if (obj.hasOwnProperty(arr[0])) {
        obj = obj[arr[0]];
    }
    // the recursive call
    return pathFinder(obj, arr.slice(1));
  }
  
  const obj = {
    first:{
      second:{
        third:"finish"
          }
    }, 
    
    second:{
        third:"wrong"
    }
  };
  
const arr = ["first","second","third"];

console.log(pathFinder(obj,arr));   //-> "finish"




//Challenge 6
function flattenRecursively(arr) {
    const newArr = [];
  const flatten = (arr) => {
    return newArr.concat(arr);
  }
  for (let I = 0; I < arr.length; I++) {
    if (Array.isArray(arr[I])) return flattenRecursively(flatten(arr[I]));
    else {
        newArr.push(arr[I]);
    }
    }
  return newArr;
}

const array01 = 
[
  [[1,2,[3]],
  
]];

console.log(flattenRecursively(array01));	// [1,2,3,]


//Challenge 7
function findInOrderedSet(arr, target) {
	// the base case is the number is found and recursion can stop and return true
  if (arr[0] === target) return true;
  else if (arr.length === 0) return false;
  // the recursive case is chopping off the 0 position of the array each go around
  else if (arr[0] !== target) {
    return findInOrderedSet(arr.slice(1), target);
  }
}

const myArr1 = [1,2,3,4,5,];
const myNum1 = 3;
const myNum2 = 9;
// console.log(findInOrderedSet(myArr1, myNum1));	// true
// console.log(findInOrderedSet(myArr1, myNum2));	// false




//Challenge 8
function countWaysToReachNthStair(n) {

}

console.log(countWaysToReachNthStair(1)) //-> 1 (only one way to climb 1 stair)
console.log(countWaysToReachNthStair(2)) //-> 2 ((1, 1), (2))
console.log(countWaysToReachNthStair(4)) //-> 5 ((1, 1, 1, 1), (1, 1, 2), (2, 1, 1), (2, 2))

function getAllPermutations(string) {
    var results = [];
  
    if (string.length === 1) {
      results.push(string);
      return results;
    }
  
    for (var i = 0; i < string.length; i++) {
      var firstChar = string[i];
      var charsLeft = string.substring(0, i) + string.substring(i + 1);
      var innerPermutations = getAllPermutations(charsLeft);
      for (var j = 0; j < innerPermutations.length; j++) {
        results.push(firstChar + innerPermutations[j]);
      }
    }
    return results;
  }



//Challenge 9
function getPermutations(arr) {

}



//Challenge 10
function getRangeBetween(x, y) {

}


