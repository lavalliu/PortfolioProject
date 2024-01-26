// Exercise 4 : Repeat Please !
// Instructions
// Write a JavaScript function to concatenate a given string n times (default is 1).
// Create the repeat function yourself:
// console.log(repeat('Ha!',3));
// "Ha!Ha!Ha!"

const prompt = require("prompt-sync")();

// let x=prompt('Enter number of times to repeat the expression : ');

let displayString="";
function repeat(x) {
    // console.log(displayString);
    console.log(x);
    for (i=0; i<x; i++) {
        displayString ='Ha!';    
        console.log(displayString);
        console.log(x);
    } 
}
// console.log(repeat('Ha!',3));
repeat();

