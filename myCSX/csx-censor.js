// Create a function censor that accepts no arguments. censor will return a function that will accept either two strings, or one string. When two strings are given, the returned function will hold onto the two strings as a pair, for future use. When one string is given, the returned function will return the same string, except all instances of a first string (of a saved pair) will be replaced with the second string (of a saved pair).

const censor = () => {
    const saved = [];
    let answer1;
    let replacementWords = [];
    let counter = 0;

    const innerFunction = (str1, str2) => {
        let counter2 = false;

        //if we want to censor the words we saved
        if (str2 === undefined) {
            let k = replacementWords.length - 1;
            //write a function i can call to do the thing that makes the return
            //do a while loop with answer1
            //counter2 needs to rest each time a single argument is passed
            //counter2 cant be in the closure
                    if (counter2 === false) {
                        answer1 = (str1.replace(replacementWords[0], (saved[0][1])));
                        counter2 = true;
                    }
                    do {
                    answer1 = (answer1.replace(replacementWords[k], (saved[k][1])));
                    k--;
                } while (k >= 1);       
        }

        //this adds the words to be censored and the replacement words to the replacementWords array
        else if (str2 !== undefined) {
            saved[counter] = [str1, str2];
            counter++;
            replacementWords.push(new RegExp(saved[saved.length - 1][0], "gi"));
        }
        else {
            return '';
        }
        return answer1;
    }
    return innerFunction;
}

// Uncomment these to check your work!
const changeScene = censor();
changeScene('blue', 'yellow');
console.log(changeScene('blue blue red'));
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
changeScene('over', 'under');
changeScene('brown', 'red');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, red fox jumps under the lazy cats.'
changeScene('want', 'do not want');
console.log(changeScene('I want to grade assessments'))


//Notes
// const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
// const regex = /dog/gi;

// console.log(p.replace(regex, 'ferret'));
// // expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"
// console.log(p.replace('dog', 'monkey'));
// // expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"
//thanks to Lian Nguyen on the CSX Slack for pointing me in the right direction when I was super stuck

//Liam's refactor
const censorLiam = () => {
    const saved = [];
    const innerFunction = (str1, str2) => {
        //if we want to censor the words we saved
        if (str2 === undefined) {
          return saved.reduce((ans, pair) => {
          	 const regex = new RegExp(pair[0], "gi");
             return ans.replace(regex, pair[1]);
          }, str1)
        }
        //this adds the words to be censored and the replacement words to the replacementWords array
        saved[saved.length] = [str1, str2];
    }
    return innerFunction;
}

const changeScene2 = censorLiam();
changeScene2('blue', 'yellow');
console.log(changeScene2('blue blue red'));
changeScene2('dogs', 'cats');
changeScene2('quick', 'slow');
changeScene2('over', 'under');
changeScene2('brown', 'red');
console.log(changeScene2('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, red fox jumps under the lazy cats.'
changeScene2('want', 'do not want');
console.log(changeScene2('I want to grade assessments'));