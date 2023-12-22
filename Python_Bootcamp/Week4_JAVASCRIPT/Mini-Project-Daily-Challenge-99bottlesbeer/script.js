// Step 1: npm init
// Step 2: npm install prompt-sync

const prompt = require("prompt-sync")();

var bottle=prompt("Please enter the number of bottles: ");
var count=1;
console.log(bottle +" bottles of beer on the wall");
console.log(bottle +" bottles of beer");
do {
    if (count===1) {
        console.log("Take " +count+ " down, pass it around");
    } else if (count>1) {
        console.log("Take " +count+ " down, pass them around");
    }
    if ((bottle-count)===1) {
        console.log("1 bottle of beer on the wall");
        console.log("1 bottle of beer on the wall");
        console.log("1 bottle of beer");
    } else if (bottle-count>1) {
        console.log(bottle-count +" bottles of beer on the wall");
        console.log(bottle-count +" bottles of beer on the wall");
        console.log(bottle-count +" bottles of beer");
    }
    if ((bottle-count)===0) {
        console.log("no bottle of beer on the wall");
        console.log("no bottle of beer on the wall");
        console.log("no bottle of beer");
    }
    count++
} while ((bottle-count)>=0);
