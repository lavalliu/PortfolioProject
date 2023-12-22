// Step 1: npm init
// Step 2: npm install prompt-sync

const prompt = require("prompt-sync")();

//words in the stars

let sentence=prompt("Enter a sentence for the exercise :");
let sentArray=sentence.split(" ");
let wordy="";
let wordLength=0;
let num=0;
for (let i=0; i<(sentArray.length); i++) {
    wordy=sentArray[i]; 
    num=wordy.length;
    if (num>wordLength) {
        wordLength=wordy.length;
    }
}
let j=0;
let spaceBlank=0;
topbottom="**";
for (let j = 0; j < wordLength+2; j++) {
    topbottom = topbottom+"*";
}
console.log(topbottom);
let k=0;
for (let k=0; k<(sentArray.length); k++) {
    wordy=sentArray[k]; 
    spaceBlank=" ".repeat(wordLength-wordy.length);
    console.log("* " + wordy + spaceBlank +" *");
}
console.log(topbottom);
