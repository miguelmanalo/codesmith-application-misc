// Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS - Use reduce!

const intersection = (...arr) => {
    const joinedArray = arr.flat(99);
    const resultArr = [];
    let highestCount = 0;
    let countedNums = joinedArray.reduce((commonNums, num) => {
        if (num in commonNums) {
            commonNums[num]++;
          } else {
            commonNums[num] = 1;
          }
        return commonNums;
    }, {});

    //set highestCount to the number with the greatest number of occurences
    for (const property in countedNums) {
        if (countedNums[property] > highestCount) {
            highestCount = countedNums[property];
        }
    }

    //push number with greatest number of occurences to the resultArr
    for (const property in countedNums) {
        if (countedNums[property] === highestCount) {
            resultArr.push(Number(property));
        }
    }
    return resultArr;
}

// Uncomment these to check your work!
const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]