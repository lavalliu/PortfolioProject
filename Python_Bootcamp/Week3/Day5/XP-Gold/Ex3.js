// Step 1: npm init
// Step 2: npm install prompt-sync

const prompt = require("prompt-sync")();


// playing with numbers

let age = [20,5,12,43,98,55];
var sum=0
for (var key in age) {
    sum = sum+age[key];
}

console.log(sum);

console.log(Math.max(...age));