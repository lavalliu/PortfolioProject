// Step 1: npm init
// Step 2: npm install prompt-sync

const prompt = require("prompt-sync")();

//dont undertstand the exercise


let sentence=prompt("Enter a sentence with 'not' and 'bad': ");
let wordNot= sentence.indexOf("not");
let wordBad= sentence.indexOf("bad");


if (wordBad>wordNot) {
    result=sentence.replace("not bad","good");
    console.log(result);
} else {
    console.log(sentence);
}