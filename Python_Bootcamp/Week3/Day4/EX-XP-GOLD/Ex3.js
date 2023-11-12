// Step 1: npm init
// Step 2: npm install prompt-sync

const prompt = require("prompt-sync")();


// verbing

let verb=prompt("Enter a Verb: ");

if (verb.length>=3) {
    
switch (verb.slice(-3)!=="ing") 
{
    case true:
        console.log(verb+"ing");
        break;
    case false:
        console.log(verb+'ly');
        break;
}
}

