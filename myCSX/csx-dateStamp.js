// Create a function dateStamp that accepts a function and returns a function. The returned function will accept whatever arguments the passed-in function accepts and return an object with a date key whose value is today's date (not including the time) represented as a human-readable string (see the Date object for conversion methods), and an output key that contains the result from invoking the passed-in function.

// ADD CODE HERE
const dateStamp = (callbackF) =>
{
    const obj1 = {};
    let today = new Date();
    let days = ['Sun', 'Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat'];
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(months[today.getMonth()]); //January is 0!
    let yyyy = today.getFullYear();
    var day = days[today.getUTCDay()];
    console.log(day)
    
    today = day + ' ' + mm + ' ' + dd + ' ' + yyyy;
    //Sat Aug 22 2020
    console.log(today);

    const innerFunction = (...input) =>
    {
        obj1.date = today;
        obj1.output = callbackF(...input);
        return obj1;
    }
    return innerFunction;
}

// Uncomment these to check your work!
const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // should log: { date: (today's date), output: 12 }