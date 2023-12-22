// Step 1: npm init
// Step 2: npm install prompt-sync

const prompt = require("prompt-sync")();

// Is Palindrome

let sentence=prompt("Please enter your word : ");
let sentenceArray=sentence.split("");
let reverse=sentenceArray.reverse().join("");
if (sentence===reverse) {
    console.log(sentence +" is a Palindrome");
    } else {
        console.log(sentence +" is NOT a Palindrome");
    }
