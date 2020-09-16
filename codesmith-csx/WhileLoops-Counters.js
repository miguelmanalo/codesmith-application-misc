// Using a WHILE loop, write a function imAboutToExplodeWithExcitement which prints a countdown from n. When the countdown gets to 5, print 'Oh wow, I can't handle the anticipation!' When it's at 3, print 'I'm about to explode with excitement!' When the counter is finished, print 'That was kind of a let down'.

function imAboutToExplodeWithExcitement(n){
    while (n >= 0) {
        switch (n) {
            case 5: console.log("Oh wow, I can't handle the anticipation!"); break;
            case 3: console.log("I'm about to explode with excitement!"); break;
            case 0: console.log("That was kind of a let down"); break;
            default: 
                console.log(n)
        }
        n--;    
    }
}
  
  // Uncomment the line below to check your work!
  console.log(imAboutToExplodeWithExcitement(10)); // expected log 10, 9, 8, 7, 6, 'Oh wow, I can't handle the anticipation!', 4, I'm about to explode with excitement!', 2, 1, 'That was kind of a let down'