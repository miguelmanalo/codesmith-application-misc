// Construct a function multiMap that will accept two arrays - an array of values and an array of callbacks. multiMap will return an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.

// ADD CODE HERE
const multiMap = (arrayVal, arrayCB) =>
{
    const obj1 = {};
    
    arrayVal.forEach((item) => 
    {
        obj1[item] = [];
    });
    
    arrayCB.forEach((item) => 
    {
        for (const property in obj1) 
        {
            obj1[property].push(item(property));
        }
    })
    return obj1;
}

// Uncomment these to check your work!
function uppercaser(str) { return str.toUpperCase(); }
function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
function repeater(str) { return str + str; }
const items = ['catfood', 'glue', 'beer'];
const functions = [uppercaser, capitalize, repeater];
console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }