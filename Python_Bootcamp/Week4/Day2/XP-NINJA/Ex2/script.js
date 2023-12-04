// Step 1: npm init
// Step 2: npm install prompt-sync

const prompt = require("prompt-sync")();

// Capitalized Letters

let sentence=prompt("Please enter your string of characters : ");
capitalize(sentence);

function capitalize(capsLetters) {  
let sentenceArray=sentence.split("");
let Num=0;  
let sentenceLength=sentence.length;
for (let i=0; i<sentenceLength; i++) {
    if (i===0 || i%2===0) {
        sentenceArray.splice(i,1, sentenceArray[i].toUpperCase());
    }
    Num=Num+1;
}

console.log(sentenceArray.join(""));
sentenceArray=sentence.split("");
Num=0;
for (let i=0; i<sentenceLength; i++) {
    if (i%2!==0) {
        sentenceArray.splice(i,1, sentenceArray[i].toUpperCase());
    }
    Num=Num+1;
}

console.log(sentenceArray.join(""));
}

