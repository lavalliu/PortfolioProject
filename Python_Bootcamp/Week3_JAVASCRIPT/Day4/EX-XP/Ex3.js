// even or odd

const prompt=require("prompt-sync")({singint:true})

let n=prompt("Please enter a number:");

function isEven(n) { 
    if (n % 2 == 0) {
        console.log(n + " is an even number");
    } else {
        console.log(n + " is an odd number");
    }
}

isEven(n);