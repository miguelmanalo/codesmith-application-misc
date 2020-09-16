// Problem 1: foodDelivery - Objects & Arrays
// Your friends decide to have a Zoom dinner and drinks video chat tomorrow, and you realize you don't have groceries to make dinner. You open your computer and make the following grocery list.

//  1. Create an object called groceryList using the mapping listed below.
// 'salmon': 20.49, 
// 'asparagus': 4.29, 
// 'pasta': 3.69, 
// 'pesto': 5.99, 
// 'white wine': 21.99, 
// 'ice cream': 5.29, 
// 'hot cheetos': 3.99, 
// 'delivery fee': 3.99, 
// 'service fee': 4.00

const groceryList = {
    'salmon': 20.49, 
    'asparagus': 4.29, 
    'pasta': 3.69, 
    'pesto': 5.99, 
    'white wine': 21.99, 
    'ice cream': 5.29, 
    'hot cheetos': 3.99, 
    'delivery fee': 3.99, 
    'service fee': 4.00,
}

// You wake up at 6am to get a coveted same-day slot for your food delivery. You rush to add the items from your groceryList to your cart, but some items are unavailable, so you add the following to your cart. 

// 2. Create an array called myCart, with salmon, asparagus, white wine, ice cream, delivery fee, and service fee as string elements within the array. 

const myCart = [
    'salmon', 
    'asparagus', 
    'white wine', 
    'ice cream', 
    'delivery fee', 
    'service fee',
]

// Success! You have successfully secured a same-day delivery spot. Now let's calculate the total cost of the items in your myCart array to complete your order!

// 3. Write a function sum that accepts two arguments: 
//   - An object groceryList containing item/fees as keys and the price/cost as the value
//   - An array myCart containing the list of items/fees in your cart. 
//   The function should return the total cost of all the items/fees in your myCart array

// your code goes here
const sum = (groceryList, myCart) => {
    const totalPriceArr = [];

    myCart.forEach((item) => {
        for (const property in groceryList) {
            if (item === property) {
                totalPriceArr.push(groceryList[property]);
            }
        }
    });
    return totalPriceArr.reduce((acc, cv) => acc + cv, 0);
}

// UNCOMMENT BELOW TO TEST YOUR CODE
// console.log(`Total: $${sum(groceryList, myCart)}. Your food delivery is on its way!`); //->  Total: $60.05. Your food delivery is on its way!

///////////////////////////////////////////////////////////////

// Problem 2: SaveLocalRestaurants - Closure
// While we're staying at home, let's do our best to support local restaurants!

// Write a function "giftCard" that takes two arguments: a number which will be the gift card balance, and a "menu" object, which will contain key-value pairs of menu items and their prices.

// "giftCard" should return a function that takes in a "delivery" array, consisting of the menu items a customer would like to order.

// If the gift card balance is high enough to purchase all the "delivery" items that match items on the menu, the function should return the new gift card balance updated to reflect their purchase.

// But if the gift card balance is NOT high enough to purchase all the "delivery" items that match items on the menu, the function should leave the gift card balance unchanged and return the string "Insufficient gift card balance".

function giftCard(balance, menu) {
    // this has to be in the closure in case the same customer makes another order
    let deliveryTotal = 0;

    const customerOrder = deliveryArr => {
        deliveryArr.forEach((item) => {
            for (const property in menu) {
                // look for their ordered item in the menu
                if (item === property) {
                    deliveryTotal += menu[property]
                }
            }
        });
        // compare order total to GC balance
        return balance > deliveryTotal ? balance - deliveryTotal : `Insufficient gift card balance`;
    }
    return customerOrder;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const menu = {
  quesoFundido: 11,
  sopaDeFrijol: 7,
  cochinitaPibil: 15
};

// const elEncantoDeLola = giftCard(25, menu);
// console.log(elEncantoDeLola(['sopaDeFrijol', 'cochinitaPibil'])) // should log 3
// console.log(elEncantoDeLola(['quesoFundido'])) // should log "Insufficient gift card balance"

//////////////////////////////////////////////////////

// Problem 3: movieList - Closure
// With the lockdown, you have all this free time right now so you thought of making a list of movies or shows you want to watch. Then, your brother and sister heard what you were planning and they also wanted to make their own lists.

// Your task is to create a way to save a list of shows/movies for each person in your list of people.

// To do this, make a function named createList. createList will take on argument (an array of people's names), and return a function.
// The returned function will have two arguments.
//   1. a show's name (a String)
//   2. the name of a person who wants to watch that show (a String)
// Every time the returned function is invoked, it should add the show to the person's list, and return a list of all the shows they want to watch.
// If the person is not in your list, you should return “Name is not in List”.

// Example:
// const people = ["Josh", "Jeff", "Joan"];
// const addList = createList(people);

// addList("Breaking Bad", "Josh") -> ["Breaking Bad"]
// addList("Community", “Joan”) -> ["Community"]
// addList("Ex Machina", "Jeff") -> ["Ex Machina"]
// addList("Better Call Saul", "Josh") -> ["Breaking Bad", "Better Call Saul"]
// */

const createWatchList = namesArr => {
    const showsList = {};
    namesArr.forEach((item) => {
        if (!showsList[item]) {
            showsList[item] = [];
        }
    });

    const wantToWatch = (showName, personName) => {
        for (const property in showsList) {
            if (personName === property) {
                showsList[property].push(showName);
            }
        }
        return showsList[personName];
    }
    return wantToWatch;
}

// Uncomment these to test your code!
const people = ["Josh", "Jeff", "Joan"];
const addList = createWatchList(people);
console.log(addList("Breaking Bad", "Josh")); // ["Breaking Bad"]
console.log(addList("Community", "Joan")); // ["Community"]
console.log(addList("Ex Machina", "Jeff")); // ["Ex Machina"]
console.log(addList("Better Call Saul", "Josh")); // ["Breaking Bad", "Better Call Saul"]