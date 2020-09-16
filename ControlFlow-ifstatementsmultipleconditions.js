// Using an IF/ELSE statement, write a function greetings which returns 'Good Morning!' if the hour is before 12, 'Good Afternoon!' if the hour is before 15, or 'Good Night!' if the hour is 15 or after.

function greetings(hour) {
    // ADD CODE HERE
    if (hour < 12) {
        return 'Good Morning!';
    } else if (hour > 11 && hour < 15) {
        return 'Good Afternoon!'; 
    } 
    return 'Good Night!';
  }
  
  // Uncomment these to check your work!
  console.log(greetings(8)); // expected log 'Good Morning!'
  console.log(greetings(12)); // expected log 'Good Afternoon!'
  console.log(greetings(14)); // expected log 'Good Afternoon!'
  console.log(greetings(15)); // expected log 'Good Night!'
  console.log(greetings(18)); // expected log 'Good Night!'
  