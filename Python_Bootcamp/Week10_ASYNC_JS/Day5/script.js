// Step 1: npm init
// Step 2: npm install prompt-sync

const prompt = require("prompt-sync")();

function fizbuz(x,y) {
    if (((x % 3 == 0) && (x % 5 == 0)) && ((y % 3 == 0) && (y % 5 == 0))) {
        return ("FizzBuzz");
    }
    if (x % 3 == 0) {
        return ("Fizz");
    }
    if (y % 5 == 0) {
        return ("Buzz");
    }
}

let x = prompt("Enter the first number :")
let y = prompt("Enter the second number :")
console.log(fizbuz(x,y));