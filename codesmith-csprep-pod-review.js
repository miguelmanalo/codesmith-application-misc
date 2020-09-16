// //Xiao's code
// function largestAndSmallest(array) {
//   return [Math.min(...array), Math.max(...array)];
// }




// //Heather's code
// // function largestAndSmallest(array) {
// //   let outputArr = [];
// //   let minNum = array[0];
// //   let maxNum = array[0];
// //   for (let i = 0; i < array.length; i += 1) {
// //     if (array[i] < minNum) {
// //       minNum = array[i];
// //     }
// //     if (array[i] > maxNum) {
// //       maxNum = array[i];
// //     }
// //   }
// //   outputArr.push(minNum);
// //   outputArr.push(maxNum);
// //    return outputArr;
// // }


// function largestAndSmallest(array) {
//   let smallest = array[0];
//   let biggest = array[0];
  
//   array.forEach( (e, i) => {
//     if (smallest > e) smallest = e;
//     if (biggest < e) biggest = e;
//   })
  
//   return [smallest, biggest];
// }

// POD Day 4 - Advanced -  Reverse Number

// The function reverseNumber should take one parameter, a number, it should reverse the number and return it.

// EX: 
// 923 --> 329
// 100 --> 1
// -87 --> -78


// //Heather 
// function reverseNumber(num) {
//   let wholeNum = Math.abs(num);
//   let string = wholeNum.toString();
//   let outputString = '';
//   for (let i = string.length - 1; i >= 0; i -= 1) {
//     outputString += string[i];
//   }
//   let outputNum = Number(outputString);
//   if (num < 0) {
//     return outputNum * -1
//   } else {
//     return outputNum;
//   }
// }


// //Marc
// function reverseNumber(num) {
//   if (num < 0) {
//     return Number(num.toString().split('').reverse().join('').replace('-', ''))*-1
//   } else {
//     return Number(num.toString().split('').reverse().join(''))
//   }
// }

// // Xiao's Code
// function reverseNumber(num) {
//   return Math.sign(num) * Number(String(Math.abs(num)).split('').reverse().join(''))
// }

// //Aika 



// function reverseNumber(num){
//     //can handle negative numbers
//     //number is not iterable, so turn it into a string
//      //strNum is iterable, so putting in a condition where we handle '-'
//     //we iterate backwords from end to 1 for stringified numbers that include 0;
//     //we iterate from end to 0 for positive numbers;
//     let strNum = String(num);
   
 
//     let reverseStr = '';
//     if(strNum[0].includes('-')){
//         for(let i=strNum.length-1; i>=1; i--) {
//           //we collect the value into an empty string
//             reverseStr+= strNum[i];
//             reverseStr[0]='-';
//         }
//             //we turn the string into a number
//                //we return number
//         return Number(reverseStr);
//     }
//     for(let i=strNum.length-1; i>=0; i--) {
//       //we collect the value into an empty string
//         reverseStr+= strNum[i];

//     }
//         //we turn the string into a number
//           //we return number
//     return Number(reverseStr);
// }


//miguel
// var stringMe = '';
// var reverse = '';
// function reverseNumber(num) {
//   stringMe = num.toString();
//   // console.log(stringMe, `stringMe`);
//   for (let i = (stringMe.length - 1); i >= 0; i -= 1) {
//     console.log(stringMe[i], `stringMe[i]`);
//     console.log(i, `i`);
//     reverse += stringMe[i];
//     console.log(reverse, `reverse`);
//   }
 
//   console.log(reverse, `reverse exit`);
//    if (reverse[reverse.length - 1] == '-') {
//       console.log(`am i here`);
//       reverse.slice(0, -1);
//       console.log(reverse, `reverse`);
//     }
//   var stringReverse = Number(reverse);
//   return stringReverse;
// }

// console.log(reverseNumber(456)); // should log 654
// console.log(reverseNumber(1000)); // should log 1
// console.log(reverseNumber(-789)); // should log -987

// POD Day 5 - Regular - 2Sum
// Given an array of numbers and a target number, return true if there are two numbers in the array that sum up to the target value; return false otherwise

// BONUS: Get twoSum to work without using nested loops

//  function twoSum(arr, target) {
//    return arr.some( (e, i) => (arr.slice(i).includes(target - e)))
//     //e + j = target
//     //j = target - e
// }


//Anika'
// function twoSum (arr, target) {
//     let storeArr = [];
//     for(let i=0; i<arr.length; i++) {
//         for(let j=i+1; j<arr.length; j++){
//             let sum = arr[i]+arr[j];
//             storeArr.push(sum);
//         }
//     }
//     return storeArr.includes(target);
// }

// function twoSumTests() {
//   console.log(twoSum([1,2,5,7], 3), ' -> ', true, `test 1`);
//   console.log(twoSum([1,2,5,7], 5), ' -> ', false, `test 2`);
//   console.log(twoSum([1], 5), ' -> ', false, `test 3`);
//   console.log(twoSum([1, -1, 0, -2, 2, 2, 3, 4, 5, 7], -1), ' -> ', true, `test 4`);
// }

// twoSumTests() // uncomment to test

// POD Day 5 - Advanced - Exclusive Sum
// Given an array of numbers, return an array of sums where the value at each index of the output array is the sum of the the values at all other indices of the
// input array

// Ex: 
// [1, 3, 4, 2] -> [9, 7, 6, 8], since 9 = 3 + 4 + 2, 7 = 1 + 4 + 2, 6 = 1 + 3 + 2, and 8 = 1 + 3 + 4

// Bonus 1: Get exclusiveSum to work without nested loops

// Bonus 2: Modify this function to be 'exclusive product'
// Ex: 
// [1, 3, 4, 2] -> [24, 8, 6, 12]

// Make sure your solution can handle zeros!

// //Dylan's code 
// function exclusiveSum(arr) {
// let sum = arr.reduce((acc, el) => acc +el);
//   return arr.map((el) => sum - el);
// }

// //Marc 
// function exclusiveSum(arr) {
  
//   const arrSum = arr.reduce( (acc,curr) => {
//     return acc + curr
//   }, 0);
  
//   return arr.map( (e) => {
//     return arrSum - e
//   })
// }


// // Xiao's code
// function exclusiveSum(arr) {
// let sum = arr.reduce((acc, cur) => acc + cur);
// return arr.map(num => sum - num);
// }

// //anika's
// function exclusiveSum(arr) {
//     let summed = arr.reduce((acc,curr)=>acc+curr,0);
//    return arr.map(el=>summed-el);

// }
// //Heather's code
// function exclusiveSum(arr) {
//   let sum = 0;
//   let outputArr = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     sum += arr[i];
//   }
//   for (let j = 0; j < arr.length; j += 1) {
//     outputArr.push(sum - arr[j]);
//   } 
//   return outputArr;
// }

// function exclusiveSumTests() {
//   console.log(exclusiveSum([1,3,4,2]), ' -> ', [9, 7, 6, 8]);
//   console.log(exclusiveSum([1,2,5]), ' -> ', [7, 6, 3]);
//   console.log(exclusiveSum([1,2,5,0]), ' -> ', [7, 6, 3, 8]);
//   console.log(exclusiveSum([1]), ' -> ', [0]);
// }

// exclusiveSumTests() // uncomment to test


// POD Day 6 - Regular - Reverse Integer
// Given a positive integer, return the number you get when you reverse all the digits. Do this without converting the number to a string!

// Ex: 
// 1234 -> 4321

//Marc
// function reverseInt(int, newInt) {
//   const intArr = [];
//   let result = 0;
  
//   for (let i = 1; int/Math.pow(10,i-1) >= 1; i++){
//     intArr.push(Math.floor(int%Math.pow(10,i)/Math.pow(10,i-1)));
//   }
  
//   intArr.forEach((e, i) => {
//     result += e * Math.pow(10,intArr.length-i-1)
//   })
  
//   return result
// }



//miguel
// function reverseInt(int) {
//     var digit, result = 0

//     while( int ){
//         digit = int % 10                  //  Get last digit. Ex. 123/10 → 12.3 → 3
//         console.log(digit, `digit`)
//         result = (result * 10) + digit  //  Ex. 123 → 1230 + 4 → 1234
//         console.log(result, `result`)
//         console.log(int, `int`)
//         console.log(int/10, `int/10`)
//         int = int/10|0                      //  Remove last digit. Ex. 123 → 12.3 → 12
//         console.log(int, `int/10|0`)
  
//   }
//     return result
// }

//anika'
// function reverseInt(num) {
//   //we set a variable reversed =0;
//   //we build reversed from left to right and we manipulate num
//   //from right to left to do this;
//   //num=4321(work on it from right towards left)=>reversed=1234 (build this from left to right);
//   let reversed=0;
//       while (num > 0) {//we check if our num is <0 so we can stop iteration because all our digits are now taken care of
//         reversed *= 10//in the second iteration onwards this woud effectively increment reverse 10 times so we can add next digit
//         reversed += int % 10//we work on num and extract the first digit on right side by using modulo. num%10 lets us extract a digit which we add to reverse
//         num -= num % 10 //we subtract the modulus and update our num; this assures when we divide and update it's a whole number
//         num /= 10 // we divide and update our num
//     }
//     return reversed
// }

// function reverseIntTests() {
//   console.log(reverseInt(123));
//   console.log(reverseInt(1234), ' -> ', 4321);
//   console.log(reverseInt(1), ' -> ', 1);
//   console.log(reverseInt(87654), ' -> ', 45678);
//   console.log(reverseInt(13542), ' -> ', 24531);
// }


// reverseIntTests() // uncomment to test

// console.log(988/10|0)

// //Heather's
// //honestly I needed to look up this answer but I worked out how it works

// function reverseInt(int) { //int = 1234
//   let reversedNum = 0; //reversedNum = 4321, int = 0
  
//   while(int > 0) { //y/no
//     reversedNum *= 10; // reversedNum = 4320
//     reversedNum += int % 10; //reversedNum = 4321
//     int -= int % 10 // int = 0
//     int /= 10 // int = 0
//   }
//   return reversedNum //4321
// }

// function reverseIntTests() {
//   console.log(reverseInt(1234), ' -> ', 4321);
//   console.log(reverseInt(1), ' -> ', 1);
//   console.log(reverseInt(87654), ' -> ', 45678);
//   console.log(reverseInt(13542), ' -> ', 24531);
// }

// reverseIntTests() // uncomment to test

// POD Day 6 - Regular - Common Elements 
// Given 2 arrays that may contain both numbers and strings return a new array with the numbers and/or strings that appear in both arrays duplicates are only counted once;

// Ex: 

// var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
// var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
// commonElements(array1, array2) -> [ 12, 'ferret', 'dog']
// if there are no common numbers or strings, return []

// Bonus: Modify commonElements to take in an array of arrays and only return elements that appear in every array


//Xiao's code
function commonElements(arrays){ 
    const common = []
    const commonWithDuplicates = arrays.reduce((acc, cur) => acc.filter(e => cur.includes(e)))
    //const commonWithDuplicates = [12, 12, 'ferret', 'ferret', 'dog']
    for (let ele of commonWithDuplicates) {
      if (!common.includes(ele)) {
        common.push(ele)
      }
    }
    
    return common;
  }
  
  // var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
  // var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
  // commonElements(array1, array2) -> [ 12, 'ferret', 'dog']
  
  //Marc
  function commonElements(array1, array2){
    return [...arguments].reduce((accArr, currArr)=>{
      const resultArr = [];
      return accArr.filter((e1) => {
        return currArr.some((e2) => {
          if (e1 === e2 && !resultArr.includes(e1)) {
            resultArr.push(e1);
            return true;
          }
        });
      });
    });
  }
  
  //anika'
   
  //  function commonElements(arr1,arr2) {
  //     find common elements with iteration
  //     let commonArr=[];
  //         //for each element in arr1, if the element is included in arr2,
  // // and if the element is not alredy present in common array, 
  // // we push element into commonArr;
         
  //     for(let i=0; i<arr1.length; i++){
  //       if(arr2.includes(arr1[i])){
  //           if(commonArr.includes(arr1[i])){
  //             continue;
  //           }
  
  //           commonArr.push(arr1[i]);
  //       }
  //     }
  //     return commonArr;
  // }
  
   //we can use reduce to find the common elements in both arrays
  //   return  arr1.reduce((acc,curr)=>{
  //         //only return acc if both conditions are met
  //         if( arr2.includes(curr) && !acc.includes(curr)){
  //             acc.push(curr);
  //         }
  //         return acc
  //     },[])
  // }
  
  // to find common elements in an array of arrays:
  //function commonElement(arr) {
  //    return arr.reduce((acc,curr)=>acc.filter(el=>curr.includes(el)));
  // }
  // }
  
  
  
  function commonElementsTests() {
    var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
    var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
    console.log(commonElements(array1, array2), " -> ", [ 12, 'ferret', 'dog']);
  }
  
  //commonElementsTests() // uncomment to test
  
  
  // POD Day 7 - Self Recording - Check if Sorted 
  // Given an array of integers, check to see if the array is already sorted (return true or false)
  
  // Focus on clearly explaining your solution
  
  // Once you've solved it iteratively, try to solve it recursively or using functional programming
  
  // If you have time, write and walk through some test cases for your code.
  
  // What's the time complexity of your solution?
  
  
  //Xiao's Code for loop
  // function isSorted(array) {//it tkes in an array and returns a bollean
  //   //use a for loop to iterate through the array
  //   for (let i = 0; i < array.length - 2; i++) {
  //     //compare elements in the array, 3 elements as a group, if I can find a bottom or a peak, return false immidiately
  //     if (array[i] < array[i + 1] && array[i + 1] > array[i + 2]) {
  //       return false;
  //     } else if (array[i] > array[i + 1] && array[i + 1] < array[i + 2]) {
  //       return false;
  //     }
  //   }
  //   //after the for loop, return true
  //   return true;
  // }
  
  console.log(isSorted([1,2,3,4])); //true
  console.log(isSorted([4,3,2,1])); //true
  console.log(isSorted([1,1,1,1])); //true
  console.log(isSorted([])); //true
  console.log(isSorted([-1])); //true
  console.log(isSorted([13,2,3,4])); //false
  console.log(isSorted([4,3,-2,1])); //false
  console.log(isSorted([-1,1,-1,1])); //false
  
  
  // Xiao's code recursion
  function isSorted(array) {
    //base case
    if (array[2] === undefined) {
      return true;
    //recursive case
    } else if (array[0] < array[1] && array[1] > array[2]) {
      return false
    } else if (array[0] > array[1] && array[1] < array[2]) {
      return false;
    } else {
      return isSorted(array.slice(1));
    }
  }  
  
  // function sortedChecker(arr){
  // // I want to check if array is in order (either ascending or descending)
  // //If sorted, every element will pass the condition of the next element always
  // //being greater/smaller than the previous one
  // //I want to iterate through array
  // //I want to pass a condition to array method every such that tru or false
  // //I want to do this for both descending and ascending cases
  //     let ascending =[];
  //     for(let i=0; i<arr.length-1; i++){
  //         let first= arr[i] ;
  //         let second= arr[i+1];
  //         if(Math.max(arr[i],arr[i+1])===arr[i+1]){
  //             console.log(first,second);
  //             ascending.push('true');
  //         }
  //         else{
  //         ascending.push('false');
  //         }
  //     }
  //     console.log(ascending);
  //     let descending=[];
  //     for(let i=0; i<arr.length-1; i++){
  //         if(Math.max(arr[i],arr[i+1])===arr[i]){
  //             descending.push('true');
  //         }
  //         else{
  //         descending.push ('false');
  //         }
  //     }
  //     console.log(descending);
  //     return (ascending.every(el=>el==='true') || descending.every(el=>el==='true'))
  // }
  
  // console.log(sortedChecker([1,2,3,4]));//should log true
  //  console.log(sortedChecker([4,3,2,1]));//should log true
  //  console.log(sortedChecker([5,1,2,5,6]));//should log false
  
  
  //Heather's Code
  // function isSorted (array) {
  //   let isTrue = true;
  //   for (let i = 0; i < array.length; i += 1) {
  //     if (array[i] > array[i+1]) {
  //       isTrue = false;
  //     } 
  //   }
  //   return isTrue;
  // }
  
  //Marc
  // SOLVED WITH ITERATIVELY
  // =======================
  // const isSorted = function (arr) {
  //   //declare boolean variable
  //   let isSort = true;
  //   //if we have an empty array of an array with a single value
  //   if (arr.length <= 1) return true;
    
  //   if (arr[0] <= arr[arr.length - 1]) {
  //     //an array with sorted increasing values
  //     for (let i = 0; i < arr.length - 1; i++) {
  //       if (arr[i] > arr[i+1]) return false;
  //     }    
  //   } else {
  //     //an array with sorted decreasing values
  //     for (let i = 0; i < arr.length - 1; i++) {
  //       if (arr[i] < arr[i+1]) return false;
  //     }  
  //   }
    
  //   return isSort;
  // }
  
  
  // SOLVED WITH FUNCTIONAL PROGRAMMING
  // ==================================
  // const isSorted = function (arr) {
  //   //if we have an empty array of an array with a single value
  //   if (arr.length <= 1) return true;
    
  //   if (arr[0] <= arr[arr.length - 1]) {
  //   //an array with sorted increasing values
  //     return arr.every( (e, i) => {
  //       return (i+1 === arr.length || arr[i] <= arr[i+1])
  //     })
  //   } else {
  //     //an array with sorted decreasing values
  //     return arr.every( (e, i) => {
  //       return (i+1 === arr.length || arr[i] >= arr[i+1])
  //     })
  //   }
  // }
  
  // SOLVED WITH RECURSION
  // =====================
  // const isSorted = function (arr, i = 0) {
  //   //base case - reached the end of the array
  //   if (arr[i + 1] === undefined) return true;
  //   if (arr[i] > arr[i + 1] && arr[0] <= arr[arr.length - 1] || arr[i] < arr[i + 1] && arr[0] > arr[arr.length - 1]) return false;
    
  //   return isSorted(arr, i + 1)
  // }