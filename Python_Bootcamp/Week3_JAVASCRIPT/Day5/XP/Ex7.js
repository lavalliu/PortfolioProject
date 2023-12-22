// Step 1: npm init
// Step 2: npm install prompt-sync

const prompt = require("prompt-sync")();

//secret group
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let resultat=" ";
for (let i = 0; i < names.length; i++)  {
    let name=(names[i]);
    resultat += names[i][0]; 
    console.log(resultat);
}
let secretsociety = resultat.split("").sort().join("");
console.log(secretsociety);