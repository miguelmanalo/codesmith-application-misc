// PersonConstructor
// Create a function PersonConstructor that uses the this keyword to save a single property onto its scope called greet. greet should be a function that logs the string "hello".

function PersonConstructor() {
    // add code here
    this.greet = () => {
        console.log(`hello`);
        return `hello`;
    }
}

// Me not using the this keyword but still adding on greet
// PersonConstructor.prototype.greet = () => {
//     console.log(`hello`);
//     return `hello`;
// }

const simon = new PersonConstructor();

// Uncomment this line to check your work!
console.log(simon.greet()); // -> Logs 'hello'