// Step 1: npm init
// Step 2: npm install prompt-sync

const prompt = require("prompt-sync")();


// The World Translator
let lang=prompt("Please enter your Language:");
let lcase=lang.toLowerCase();


switch(lcase)
{
  case "french":     
    console.log("Bonjour");
    break;
  case "english":     
    console.log("Hello");
    break;
  case "hebrew":      
    console.log("Shalom");
    break;
  default:    //if day doesn't match any of above
    console.log("01110011 01101111 01110010 01110010 01111001");
}