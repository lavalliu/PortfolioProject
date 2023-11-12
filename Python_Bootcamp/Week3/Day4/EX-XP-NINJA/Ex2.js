// Step 1: npm init
// Step 2: npm install prompt-sync

const prompt = require("prompt-sync")();

// zIP cODES

let zip=prompt("Please enter your zip code(should be 5 numbers):");

zip2=zip*1

console.log(zip.length);
console.log(typeof(zip2));
if (typeof(zip2) === Number && zip.length === 5) {
        console.log("sucess");
    } else {
    console.log("error");
}
