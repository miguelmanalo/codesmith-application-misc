// Using an IF/ELSE statement, write a function closestToTheMark that takes two player inputs as number arguments. The function will return 'Player 1 is closest' or 'Player 2 is closest' depending on which player input is closest to the randomly generated number.

function closestToTheMark(player1, player2){
    const theMark = Math.floor(Math.random() * 100);
    console.log(`If theMark is ${theMark}...`);
    let answer1 = (theMark - player1);
    let answer2 = (theMark - player2);
    console.log(answer1, answer2)

    if (answer2 < 0 && answer1 < 0) {
        if (answer2 > answer1) {
            return 'Player 2 is closest';
        } else {
            return 'Player 1 is closest';
        }
    } else if (answer2 > 0 && answer1 > 0) {
        if (answer2 > answer1) {
            return 'Player 2 is closest';
        } else {
            return 'Player 1 is closest';
        }
    } else if (answer1 > 0 && answer2 < 0) {
            return 'Player 1 is closest';
        } else {
            return 'Player 2 is closest';
        }   
}

  // Uncomment the line below to check your work!
  console.log(closestToTheMark(73, 1));
  