// For this challenge, convert the function myJob from ES5 syntax to arrow function syntax.

// function myJob (name, profession) {
//     return `Hi, my name is ${name} and I'm a ${profession}.`
//   }

const myJob = (name, profession) => {
    return `Hi, my name is ${name} and I'm a ${profession}.`
  }
  
  console.log(myJob("Jon", "Knights Watchman"));