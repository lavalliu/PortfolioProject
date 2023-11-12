// Step 1: npm init
// Step 2: npm install prompt-sync

const prompt = require("prompt-sync")();

//repeat the question

var correct= false;

do {
var nimero=prompt("Please enter a number");
    switch (parseFloat(nimero)) {
        case NaN:
            console.log("Not a Number");
            break;
        case nimero<10:
            console.log("Number is less than 10, please re-enter");
            break;
        default:
            console.log("default");
            correct=true;
            break;
    }
} while (!correct);




