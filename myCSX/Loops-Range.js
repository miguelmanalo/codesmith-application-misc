// Using a loop, write a function getTheRange which finds the range (difference between high and low) of arr. The value returned should be an array with the low, high, and range.

function getTheRange(arr){
    let watchingLow;
    let watchingHigh;
    const answerArr = [];

    arr.forEach((item, index, array) => {
        if (watchingLow === undefined) {
            watchingLow = item;
        } else if (watchingLow > item) {
            watchingLow = item;
        }
    });
    answerArr.push(watchingLow);

    arr.forEach((item, index, array) => {
        if (watchingHigh === undefined) {
            watchingHigh = item;
        } else if (watchingHigh < item) {
            watchingHigh = item;
        }
    });
    answerArr.push(watchingHigh);
    
    answerArr.push(watchingHigh - watchingLow);
    return answerArr;
  }
  
  // Uncomment these to check your work!
  console.log(getTheRange([3, 2, 5, 4, 7, 9, 10])); // expect log [2, 10, 8]