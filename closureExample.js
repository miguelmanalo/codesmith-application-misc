const createCounter = () => 
{
    let counter = 0;
    const myFunction = () => 
    {
        counter = counter + 1;
        return counter;
    }
    return myFunction;
}
    
const increment = createCounter();
const increment2 = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
const c4 = increment2();
console.log('example increment', c1, c2, c3); //example increment 1 2 3
console.log(createCounter());
console.log(c4); // 1