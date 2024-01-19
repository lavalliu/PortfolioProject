const prompt = require("prompt-sync")();

let x=prompt("Enter 1st number : ");
let y=prompt("Enter 2nd number : ");

//simple if/else statement

if (x>y) {
    console.log(x +" is the biggest number");
}

if (y>x) {
    console.log(y +" is the biggest number");
}

if (y==x) {
    console.log(x + " and " + y + " are equal");
}
