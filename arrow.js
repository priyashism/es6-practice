// Function expression
// function doubleIt(number){
//     return number *2
// }

// Function declaration
// const doubleIt = function(num){
//     return num * 2;
// }

// Arrow Function
const doubleIt = num => num *2; // single parameter function
const add = (x,y) => x+y; // more than one parameter arrow function

// Multi statement function
const doMath = (x,y) => {
    const sum = x+y;
    const diff = x-y;
    const result = sum * diff;
    return result;
}

const result = doubleIt(50);
console.log(doMath(7, 5));