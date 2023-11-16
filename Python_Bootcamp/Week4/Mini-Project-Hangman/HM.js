// Step 1: npm init
// Step 2: npm install prompt-sync

const prompt = require("prompt-sync")();

let secretword=prompt("Player 1, please enter a secret Word (8 Characters minimum): ");
let i=0;
let win=true;
let length=Number(secretword.length);
console.log("* " * 10);
letter=prompt("Player 2, try to guess the word by proposing a letter: ");
while (i<10 && true) {
    console.log("* " * length);
    letter=prompt("Player 2, you have another try: ");
    switch (secretword.indexOf(letter)!==-1) {

    }

    }
h