// DeveloperClass
// Create a class DeveloperClass that creates objects by extending the PersonClass class. In addition to having a name property and greet method, DeveloperClass should have an introduce method. When called, introduce should log the string "Hello World, my name is [name]".

class PersonClass {
	constructor(name) {
    this.name = name;
	}

	greet() {
    console.log('hello');
  }
}

// add code here
class DeveloperClass extends PersonClass {
    introduce () {
        console.log(`Hello World, my name is ${this.name}`);
    }
}

const thai = new DeveloperClass('Thai', 32);

// Uncomment these lines to check your work!
console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); // -> Logs 'Hello World, my name is Thai'