//Problem 1: songList - Callbacks
// Stay safe from COVID-19! The CDC recommends washing your hands for a minimum of 20 seconds
// (though 40 is better!), which is just enough time to hum some songs!

// Create a function overForty, which accepts an object as an argument. It should return true if the
// value for the key named "length-in-seconds" is greater than 40. It should return false otherwise.

// Next, create a function songList that accepts an array of objects representing songs and a callback,
// and returns an array. The callback will return either true or false. Each song object will have
// properties for the title, artist, and a length-in-seconds.
// songList will invoke the callback on every element (song object) of the array. Return an array of
// strings  with the song title and artist separated by a dash ('-') where the callback yielded true.

// Finally, test your function by invoking songList with an array of songs, and the callback overForty.

// TEST YOUR WORK
 const songArray = [
  {
    title: 'Happy Birthday',
    artist: 'unknown',
    'length-in-seconds': 10,
  },
 {
    title: 'Beat It',
    artist: 'Michael Jackson',
    'length-in-seconds': 258,
  },
  {
    title: 'Eye of the Tiger',
    artist: 'Surviver',
    'length-in-seconds': 244,
  },
  {
    title: 'Treasure Chest Theme',
    artist: 'The Legend of Zelda',
    'length-in-seconds': 10,
  },
  {
    title: 'Poker Face',
    artist: 'Lady Gaga',
    'length-in-seconds': 244,
  },
];

const overForty = obj => obj["length-in-seconds"] > 40 ? true : false;

// Next, create a function songList that accepts an array of objects representing songs and a callback,
// and returns an array. The callback will return either true or false. Each song object will have
// properties for the title, artist, and a length-in-seconds.
// songList will invoke the callback on every element (song object) of the array. Return an array of
// strings  with the song title and artist separated by a dash ('-') where the callback yielded true.

const songList = (arraySongs, callback) => {
  const answerArr = [];
  
  arraySongs.forEach((item) => {
    if (callback(item)) answerArr.push(item);
  });
  return answerArr;
}

//UNCOMMENT TO TEST YOUR WORK
// console.log(songList(songArray, overForty)); // should log: ['Beat It - Michael Jackson', 'Eye of the Tiger - Surviver', 'Poker Face - Lady Gaga']

//////////////////////////////////////////////


// Problem 2: mealPreP - Recursion
// You have bookmarked a bunch of your favorite recipes and to keep yourself organized created an array of cooking times. Today, you only have one hour to cook. This is actually more than what you usually have, so you decide to make yourself something ambitious enough for dinner that will also provide leftovers for lunch tomorrow. You give yourself a pat on the back for the forward thinking and decide to also put your coding skills to practice.

// Write a recursive binary search algorithm to find whether any of the cooking times in your array match the time you have today. You may assume you don't have duplicate times in your array. Times are in minutes and sorted.

// For example:
// const cookingTimes = [20, 25, 40, 45, 60];
// const myTime = 60;
// recursiveTimeFind(cookingTimes, myTime) -> true
// recursiveTimeFind(cookingTimes, someOtherTime) -> false

const recursiveTimeFind = (array, minutes) => {
  // base case, if I've sliced off the whole array with no match, it is false
  if (array.length === 0) return false;

  // successful case and recursive case
  // if the first position in the array is false, call the function again taking off that first position I already tested
  // pass in the same minutes argument
  return array[0] === minutes ? true : recursiveTimeFind(array.slice(1), minutes);

}


// UNCOMMENT THE LINES BELOW TO TEST YOUR CODE
// const cookingTimes = [20, 25, 40, 45, 60];
// const myTime = 60;
// console.log(recursiveTimeFind(cookingTimes, myTime)); // should return true
// console.log(recursiveTimeFind(cookingTimes, 50)); // should return false


/////////////////////////////////////////////////////////////

// Problem 3: hobbyTracker - Closure
// Create a function hobbyTracker that takes an array of hobbies as a parameter and creates a cache object with each hobby as a key. hobbyTracker should return a function that takes a string representing the hobby and an integer representing how many hours practiced as parameters.

// When the returned function is invoked, it should update the cache object, adding
// the value of the passed in integer to the cache at the key corresponding with the passed in 'hobby' then should return the updated cache object. If the returned function is invoked with no arguments, it should reset all values in the cache object to zero and return the string 'tracker has been reset!'

// Example: 
// const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano]);

// updateHobbies('yoga', 2) --> { yoga: 2,
//                             baking: 0,
//                             piano: 0  }

// updateHobbies('baking', 3) --> { yoga: 2,
//                             baking: 3,
//                             piano: 0  }
// updateHobbies() --> 'tracker has been reset!'

const hobbyTracker = hobbiesArr => {
  const cacheObj = {};

  // fill the cache object with strings from the given array and set the times to all zeroes
  hobbiesArr.forEach((item) => {
    cacheObj[item] = 0;
  });

  const innerFunction = (hobbyStr, practiceHours) => {
    // add hours to the appropriate label
    cacheObj[hobbyStr] += practiceHours;
    
    // if the function is called with no parameters set then zero everything out and return the string
    if (!hobbyStr && !practiceHours) {
      for (const property in cacheObj) {
        cacheObj[property] = 0;
      }
      return `tracker has been reset!`;
    }
    return cacheObj;
  }
  // this makes the closure for cacheObj
  return innerFunction;
}

const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);
console.log(updateHobbies('yoga', 2));  // --> { yoga: 2, baking: 0, piano: 0 }
console.log(updateHobbies('baking', 3));  // --> { yoga: 2, baking: 3, piano: 0 }
console.log(updateHobbies()); // --> 'tracker has been reset!'