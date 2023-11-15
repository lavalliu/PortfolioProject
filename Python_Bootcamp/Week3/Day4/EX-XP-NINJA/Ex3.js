// Step 1: npm init
// Step 2: npm install prompt-sync

const prompt = require("prompt-sync")();

// secret WORD 


// a = 1
// e = 2
// i = 3
// o = 4
// u = 5

let secret=prompt("Enter your secret word: ").toLowerCase();
let vowels=['a','e','i','o','u']
let consonnes=["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
const split=secret.split("");

for (let i=0; i<vowels.length;i++){
        index=split.indexOf(vowels[i]);
        replace=consonnes[i]
        if (index!=-1) {      
            split.splice(index,1,replace);
        }
}
console.log(split);
