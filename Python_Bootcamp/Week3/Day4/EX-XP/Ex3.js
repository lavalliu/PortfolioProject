
// even or odd

const prompt=require("prompt-sync")({singint:true});

let n=prompt("Please enter a number:")

function isEven(n) { 
    return (n % 2 == 0); 

}

isEven(n) ? console.log("Even") : console.log("Odd");