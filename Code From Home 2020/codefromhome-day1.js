// Problem 1: bakingIngredients - Functions
// Since everyone is making baking at home, you decide to treat yourself! You check if you have certain ingredients to make some cinnamon rolls from the recipe video you saw online. 

// Write a function that takes in an ingredient you're looking for, and an object of key/value 
// pairs where the location is the key and the ingredient (that you actually do have in that location) is the value. 
// If the inputted ingredient is found, the function should return "You found {ingredient} in the the {location}" 
// If the inputted ingredient isn't found, return "oof, you ran out :(" 

// ex: 
// const specificIngredient = { 'closet' : 'flour' } 

// console.log(bakingIngredients(specificIngredient, 'flour')) 
// --> "You found flour in the closet" 

// console.log(bakingIngredients(specificIngredient, 'vanilla extract')) --> 
// "oof, you ran out :("

const yourIngredients = {
    'spice rack': 'cinnamon',
    'closet': 'flour',
    'cabinet': 'brown sugar',
    'fridge door': 'eggs',
    'closet shelf': 'chocolate chips',
    'lower cabinet': 'baking soda',
    'drawer': 'yeast',
    'cupboard': 'vanilla extract',
    'table': 'salt',
    'fridge': 'milk'
}

function bakingIngredients(ingredientYouNeed, locationsOfIngredients) {
    // write code here 
    for (const property in yourIngredients) {
        if (ingredientYouNeed === yourIngredients[property]) {
            return `You found ${ingredientYouNeed} in the ${property}`;
        } 
    }
    // Whoops I kept trying to return in my loop, had to return out of the loop because otherwise it would always print this statement
    return `oof, you ran out :(`;
}

// Uncomment the code below to test:
// console.log(bakingIngredients('flour', yourIngredients)) //--> You found flour in the closet
// console.log(bakingIngredients('brown sugar', yourIngredients)) //--> You found brown sugar in the cabinet
// console.log(bakingIngredients('cream cheese', yourIngredients)) //--> oof, you ran out :( 

////////////////////////////////////////////////////////////////////////

// Problem 2: quarantineSchedule - Functions
// Even while staying home, it's important to keep a balanced routine of fun and healthy activities! Write a function quarantineSchedule that receives as input parameter a string, and produces outputs according to the following table:
// ______________________________________________
// | Day                  | Activity             |
// | "Monday"             | "Read"               |
// | "Wednesday"          | "Puzzles"            |
// | "Friday"             | "Netflix"            |
// | "Sunday"             | "Exercise"           |
// | *anything else*      | "Code"               |
// ----------------------------------------------
// Note: *anything else* is the default case- if the input to the function is not any of the values in the table, then the return value should be "Code"

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, quarantineSchedule("mOnDaY") should still return "Read"

function quarantineSchedule(day) {
    // sanitize the input
    let dayLowerCase = day.toLowerCase();

    // use a switch
    switch (dayLowerCase) {
        case 'monday': 
            return "Read";
        case 'wednesday': 
            return "Puzzles";
        case 'friday': 
            return "Netflix";
        case 'sunday': 
            return "Exercise";
        default: 
            return "Code";
    }
};

// UNCOMMENT THESE TO TEST YOUR CODE
// console.log(quarantineSchedule('mOnDaY')) // should log 'Read'
// console.log(quarantineSchedule('wednesday')) // should log 'Puzzles'
// console.log(quarantineSchedule('FRIDAY')) // should log 'Netflix'
// console.log(quarantineSchedule('SuNDay')) // should log 'Exercise'
// console.log(quarantineSchedule('tuesDAY')) // should log 'Code'

////////////////////////////////////////////////////////////////////////

// Problem 3: trashDuty - Callbacks
// Spending time safely at home means it's more important now more than ever to get some exercise in, whether it's simple jumping jacks in the house or a long Zoom yoga session. You and your roommates have cut a deal: exercise for at least 30 minutes a day for at least half of the week, or take out the trash at the end of the week!

// Write a function trashDuty that determines which roommates won't have to take out the week's trash, depending on how long they've exercised this week.

// This function will accept two arguments:
// An object exerciseMins where the keys are the roommate names and the values are arrays of minutes exercised for that day. Each array will have 7 elements, for the 7 days of the week.
// A callback exerciseChecker that checks if the exercised minutes is enough. Remember the deal: anything 30 minutes and over is enough, while anything below 30 is not.

// The callback will return true for passing minutes and false for not enough minutes exercised.

// Your function should return an array containing the names of the roommates who DON'T have to take out the trash for that week.

// For example, invoking trashDuty on the example object below with your exerciseChecker callback would return ['Mike'], because Mike has exercised 30 minutes or more for more than half the week, 
// and therefore doesn't have to take out the trash for the week.

// const exerciseMinsExample = {
//     'Mike': [60, 80, 25, 45, 10, 60, 30],
//     'Chris': [0, 15, 45, 20, 90, 15, 0]
// };

const trashDuty = (exerciseMins, exerciseChecker) => {
    const noTrashDuty = [];
    for (const property in exerciseMins) {
        exerciseChecker(exerciseMins[property]) ? noTrashDuty.push(property) : null;
    }
    return noTrashDuty;
};

// callback function
const exerciseTimeChecker = arr => {
    let numOfValidDays = 0; 
    
    // count number of valid exercise days
    arr.forEach((item) => {
        if (item >= 30) {
            numOfValidDays++;
        }
    });
    // need at least four days to  not take out the trash
    return numOfValidDays >= 4 ? true : false;
}      


// Example objects
const exerciseMins1 = {
    'David': [25, 35, 15, 60, 10, 0, 60],
    'Ryan': [0, 20, 60, 85, 30, 45, 45],
    'Harry': [15, 25, 40, 60, 60, 90, 0],
    'Mike': [60, 80, 25, 45, 10, 60, 30],
    'Chris': [30, 30, 45, 90, 90, 15, 0]
};

const exerciseMins2 = {
    'David': [50, 35, 15, 60, 10, 35, 60],
    'Ryan': [0, 20, 60, 85, 30, 45, 45],
    'Harry': [15, 25, 40, 0, 60, 90, 0],
    'Mike': [60, 80, 25, 45, 10, 60, 30],
    'Chris': [30, 30, 45, 90, 90, 15, 0]
};

const exerciseMins3 = {
    'David': [50, 35, 15, 60, 10, 35, 60],
    'Ryan': [0, 20, 60, 85, 30, 45, 45],
    'Harry': [40, 25, 40, 80, 60, 90, 0],
    'Mike': [60, 80, 25, 45, 10, 60, 30],
    'Chris': [30, 10, 45, 0, 90, 15, 0]
};

// UNCOMMENT THIS TO TEST YOUR CODE
console.log(trashDuty(exerciseMins1, exerciseTimeChecker)); // should log ['Ryan', 'Harry', 'Mike', 'Chris'];
console.log(trashDuty(exerciseMins2, exerciseTimeChecker)) // should log ['David', 'Ryan', 'Mike', 'Chris'];
console.log(trashDuty(exerciseMins3, exerciseTimeChecker)) // should log ['David', 'Ryan', 'Harry', 'Mike'];