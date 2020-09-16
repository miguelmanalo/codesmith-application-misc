// Write a function addingAllTheWeirdStuff which adds the sum of all the odd numbers in array2 to each element under 10 in array1. Similarly, addingAllTheWeirdStuff should also add the sum of all the even numbers in array2 to those elements over 10 in array1.
// BONUS: If any element in array2 is greater than 20, add 1 to every element in array1.

function addingAllTheWeirdStuff(array1, array2){
    let oddRunningTotal = 0;
    let evenRunningTotal = 0;
    const answerArr = [];
    let newArray1;
    const twentyPlus = item => item > 20;

    if (array2.some(twentyPlus)) {
        newArray1 = array1.map(item => item + 1);
    }

    for (let i = 0; i < array2.length; i++) {
        if (array2[i] % 2 === 1) {
            oddRunningTotal += array2[i];
        } else {
            evenRunningTotal += array2[i];
        } 
    }

    if (newArray1 === undefined) {
        for (let j = 0; j < array1.length; j++) {
            if (array1[j] < 10) {
                answerArr.push(array1[j] + oddRunningTotal);
            } else {
                answerArr.push(array1[j] + evenRunningTotal);
            }
        }
    } else {
        for (let j = 0; j < newArray1.length; j++) {
            if (newArray1[j] < 10) {
                answerArr.push(newArray1[j] + oddRunningTotal);
            } else {
                answerArr.push(newArray1[j] + evenRunningTotal);
            }
        }
    }
    return answerArr;
}
  
  // Uncomment these to check your work!
  console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
  console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]
  