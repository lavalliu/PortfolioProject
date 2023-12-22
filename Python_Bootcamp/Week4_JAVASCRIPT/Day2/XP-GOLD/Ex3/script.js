// Step 1: npm init
// Step 2: npm install prompt-sync

const prompt = require("prompt-sync")();

// SWAP CASE

let input="The Quick Brown Fox";
swapCase();

function swapCase() {
    var values = input.split(" ");
    i=0;
    let result="";
    while (i<=3) {
        var value=values[i];
        value=value.toUpperCase();
        let firstvalue=value.charAt(0);
        let newfirstvalue=firstvalue.toLowerCase();
        result=result+" "+value.replace(firstvalue, newfirstvalue);
        i++;
    }
    console.log(result);
}
