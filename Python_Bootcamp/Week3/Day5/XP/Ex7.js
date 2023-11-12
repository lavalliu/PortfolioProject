// Step 1: npm init
// Step 2: npm install prompt-sync

const prompt = require("prompt-sync")();

//secret group

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
const resultat=" ";


 for (var key in names) {
    [firstElem]=(names[key]);
    console.log(firstElem);
    resultat == resultat+firstElem;
    console.log(resultat);
    console.log(key);
}
console.log(resultat);
secretsociety = resultat.split("").sort().join("");

console.log(secretsociety);


// not working