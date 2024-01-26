// FIND THE SUM

const prompt=require('prompt-sync')();

let a = parseInt(prompt("Enter 1st number : "));
let b = parseInt(prompt("Enter the 2nd number : "));

let sum = (a, b) => {
    console.log(a+b);
}

sum(a,b);