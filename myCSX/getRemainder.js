// Create a function getRemainder that takes two numbers and returns the remainder (value left over from division) of dividing the larger number by the smaller one.

// Hint- You have no guarantee which number will be the bigger number, how can you determine which is which?

function getRemainder(num1, num2) {
    //your code goes here...
   if (num1 > num2) {
     let rem1 = num1%num2;
     console.log(rem1);
     return rem1;
   } else {
     let rem2 = num2%num1;
     console.log(rem2);
     return rem2;
   }
  }
  
  //Uncomment the lines below to test your code
  
  console.log(getRemainder(17, 5)); //=> 2
  console.log(getRemainder(20, 5)); //=> 0
  console.log(getRemainder(8, 22)); //=> 6
  console.log(getRemainder(7, 42)); //=> 0