// personFromPersonStore
// Create a function personFromPersonStore that takes as input a name and an age. When called, the function will create person objects using the Object.create method on the personStore object.

const personStore = {
    greet: function() {
      console.log('hello');
      return 'hello';
    }
  }
  
function personFromPersonStore(name, age) {
    // line 13 gave me a lot of trouble. I was overcomplicating it trying to do prototypes.
    const newObj = Object.create(personStore);
    newObj.name = name;
    newObj.age = age;
    return newObj;
}
  
const sandra = personFromPersonStore('Sandra', 26);
console.log(sandra);
  
  // Uncomment these lines to check your work!
  console.log(sandra.name); // -> Logs 'Sandra'
  console.log(sandra.age); // -> Logs 26
  console.log(sandra.greet()); // -> Logs 'hello'

////////////////////
// MDN Notes
///////////////////

  const person = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  
  const me = Object.create(person);
  
  me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // inherited properties can be overwritten
  
  me.printIntroduction();
  // expected output: "My name is Matthew. Am I human? true"
  