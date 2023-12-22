// Step 1: npm init
// Step 2: npm install prompt-sync

const prompt = require("prompt-sync")();

// Abbrev_name

let name=prompt("Enter the name : ")

abbrevName(name);
console.log(abbrevName());


function abbrevName() {
    let nameParts = name.split(" ");
    if (nameParts.length > 1) {
    return nameParts[0] + " " + nameParts[nameParts.length - 1].charAt(0) + ".";
    }
}