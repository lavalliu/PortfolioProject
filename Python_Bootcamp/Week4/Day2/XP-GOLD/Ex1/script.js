// Step 1: npm init
// Step 2: npm install prompt-sync

const prompt = require("prompt-sync")();

// Is_Blank

let string=prompt("String to test :")

console.log(isBlank(string));

function isBlank() {
    if (string=="") {
        return true;
    }
    if (string!=="") {
        return false;
    }
}